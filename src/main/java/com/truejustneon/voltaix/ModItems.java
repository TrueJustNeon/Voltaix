package com.truejustneon.voltaix;

import com.truejustneon.voltaix.ModBlocks;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.BlockItem;
import net.neoforged.neoforge.registries.DeferredItem;
import net.neoforged.neoforge.registries.DeferredRegister;

public class ModItems {
    public static final DeferredRegister.Items ITEMS =
    DeferredRegister.createItems(Voltaix.MODID);

    public static final DeferredItem<Item> POTATO_BATTERY = 
    ITEMS.registerSimpleItem("potato_battery", new Item.Properties().stacksTo(1));

    public static final DeferredItem<BlockItem> BASIC_SOLAR_PANEL_ITEM =
    ITEMS.registerSimpleBlockItem(
        "basic_solar_panel",
        ModBlocks.BASIC_SOLAR_PANEL
    );
}