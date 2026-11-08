package com.truejustneon.voltaix;

import net.minecraft.core.registries.Registries;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.CreativeModeTab;
import net.neoforged.neoforge.registries.DeferredHolder;
import net.neoforged.neoforge.registries.DeferredRegister;
import net.minecraft.world.item.ItemStack;

public class ModTabs {
    public static final DeferredRegister<CreativeModeTab> TABS =
        DeferredRegister.create(Registries.CREATIVE_MODE_TAB, Voltaix.MODID);
    
    public static final DeferredHolder<CreativeModeTab, CreativeModeTab> MAIN =
    TABS.register("main", () -> CreativeModeTab.builder()
        .title(Component.translatable("itemGroup.voltaix"))
        .icon(() -> new ItemStack(ModItems.POTATO_BATTERY.get(), 1))
        .displayItems((params, output) -> {
            output.accept(ModItems.POTATO_BATTERY.get());
            output.accept(ModItems.BASIC_SOLAR_PANEL_ITEM.get());
        })
    .build());
}