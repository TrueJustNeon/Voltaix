package com.truejustneon.voltaix;

import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.world.item.BlockItem;
import net.minecraft.world.item.Item;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredHolder;
import net.neoforged.neoforge.registries.DeferredRegister;

public class ModItems {

    public static final DeferredRegister<Item> ITEMS =
            DeferredRegister.create(BuiltInRegistries.ITEM, Voltaix.MODID);

    public static final DeferredHolder<Item, BlockItem> COAL_GENERATOR =
            ITEMS.register(
                    "coal_generator",
                    () -> new BlockItem(
                            ModBlocks.COAL_GENERATOR.get(),
                            new Item.Properties()
                    )
            );

    public static void register(IEventBus eventBus) {
        ITEMS.register(eventBus);
    }
}