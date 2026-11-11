package com.truejustneon.voltaix;

import com.truejustneon.voltaix.items.PotatoBatteryItem;
import com.truejustneon.voltaix.ModBlocks;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.BlockItem;
import net.neoforged.neoforge.registries.DeferredItem;
import net.neoforged.neoforge.registries.DeferredRegister;

public class ModItems {
    public static final DeferredRegister.Items ITEMS =
    DeferredRegister.createItems(Voltaix.MODID);

    public static final DeferredItem<PotatoBatteryItem> POTATO_BATTERY = 
    ITEMS.register("potato_battery", () -> new PotatoBatteryItem(new Item.Properties()));

    public static final DeferredItem<BlockItem> BASIC_SOLAR_PANEL_ITEM =
    ITEMS.registerSimpleBlockItem(
        "basic_solar_panel",
        ModBlocks.BASIC_SOLAR_PANEL
    );
}