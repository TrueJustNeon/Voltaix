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

    public static final DeferredItem<Item> ADVANCED_CHIP = 
    ITEMS.register("advanced_chip", () -> new Item(new Item.Properties()));
    public static final DeferredItem<Item> BASIC_CHIP = 
    ITEMS.register("basic_chip", () -> new Item(new Item.Properties()));

    public static final DeferredItem<Item> COAL_DUST = 
    ITEMS.register("coal_dust", () -> new Item(new Item.Properties()));
    public static final DeferredItem<Item> SULFUR_DUST = 
    ITEMS.register("sulfur_dust", () -> new Item(new Item.Properties()));

    public static final DeferredItem<Item> COPPER_PLATE = 
    ITEMS.register("copper_plate", () -> new Item(new Item.Properties()));
    public static final DeferredItem<Item> IRON_PLATE = 
    ITEMS.register("iron_plate", () -> new Item(new Item.Properties()));
    public static final DeferredItem<Item> GOLD_PLATE = 
    ITEMS.register("gold_plate", () -> new Item(new Item.Properties()));

    public static final DeferredItem<Item> STEEL_INGOT = 
    ITEMS.register("steel_ingot", () -> new Item(new Item.Properties()));

    public static final DeferredItem<Item> RUBBER = 
    ITEMS.register("rubber", () -> new Item(new Item.Properties()));
    public static final DeferredItem<Item> SOLAR_PANEL = 
    ITEMS.register("solar_panel", () -> new Item(new Item.Properties()));

    

    public static final DeferredItem<BlockItem> BASIC_SOLAR_PANEL_ITEM =
    ITEMS.registerSimpleBlockItem("basic_solar_panel", ModBlocks.BASIC_SOLAR_PANEL);
    
    public static final DeferredItem<BlockItem> COPPER_WIRE_ITEM =
    ITEMS.registerSimpleBlockItem("copper_wire", ModBlocks.COPPER_WIRE);
    
}