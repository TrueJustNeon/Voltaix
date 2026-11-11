package com.truejustneon.voltaix;

import com.truejustneon.voltaix.ModComponents;
import net.minecraft.world.item.ItemStack;
import net.neoforged.neoforge.energy.IEnergyStorage;

public class StackEnergyStorage implements IEnergyStorage {
    private final ItemStack stack;
    private final int capacity;
    private final int maxTransfer;

    public StackEnergyStorage(ItemStack stack, int capacity, int maxTransfer) {
        this.stack = stack;
        this.capacity = capacity;
        this.maxTransfer = maxTransfer;

    }

    @Override
    public int getEnergyStored() { return stack.getOrDefault(ModComponents.ENERGY.get(), 0); }

    @Override
    public int getMaxEnergyStored() { return capacity; }

    @Override
    public int receiveEnergy(int maxReceive, boolean simulate) {
    int stored = getEnergyStored();
    int accepted = Math.min(Math.min(maxReceive, maxTransfer), capacity - stored);

    if (!simulate && accepted > 0) {
        stack.set(ModComponents.ENERGY.get(), stored + accepted);
    }

    return accepted;
}

    @Override
    public int extractEnergy(int maxExtract, boolean simulate) {
    int stored = getEnergyStored();
    int extracted = Math.min(Math.min(maxExtract, maxTransfer), stored);

    if (!simulate && extracted > 0) {
        stack.set(ModComponents.ENERGY.get(), stored - extracted);
    }

    return extracted;
}

    @Override public boolean canReceive() { return true; }
    @Override public boolean canExtract() { return true; }
}