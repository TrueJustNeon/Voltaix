package com.truejustneon.voltaix;

import com.truejustneon.voltaix.ModItems;
import com.truejustneon.voltaix.items.PotatoBatteryItem;
import net.neoforged.neoforge.capabilities.Capabilities;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent;
import net.neoforged.neoforge.energy.EnergyStorage;
import net.neoforged.neoforge.energy.IEnergyStorage;

public class ModCapabilities {

@SubscribeEvent
public static void registerCaps(RegisterCapabilitiesEvent event) {
    event.registerItem(Capabilities.EnergyStorage.ITEM,
    (stack, context) -> new StackEnergyStorage(stack, PotatoBatteryItem.CAPACITY, 500),
    ModItems.POTATO_BATTERY.get());
}
/*
@Override
public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand hand) {
    ItemStack stack = player.getItemInHand(hand);
    IEnergyStorage energy = stack.getCapability(Capabilities.EnergyStorage.ITEM);
    if (energy != null && energy.extractEnergy(100, false) >= 100) {
        return InteractionResultHolder.sidedSuccess(stack, level.IsClientSide);
    }
    return InteractionResultHolder.fail(stack);
} */
}