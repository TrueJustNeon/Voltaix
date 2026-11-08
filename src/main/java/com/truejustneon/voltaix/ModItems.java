package com.truejustneon.voltaix;

import net.minecraft.world.item.Item;
import net.neoforged.neoforge.registries.DeferredItem;
import net.neoforged.neoforge.registries.DeferredRegister;

public class ModItems {
    public static final DeferredRegister.Items ITEMS =
    DeferredRegister.createItems(Voltaix.MODID);

    public static final DeferredItem<Item> POTATO_BATTERY = 
    ITEMS.registerSimpleItem("potato_battery", new Item.Properties().stacksTo(1));
}