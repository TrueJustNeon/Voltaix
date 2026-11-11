package com.truejustneon.voltaix.items;

import net.minecraft.ChatFormatting;
import com.truejustneon.voltaix.ModComponents;
import java.util.List;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;

public class PotatoBatteryItem extends Item {
    public static final int CAPACITY = 50_000;

    public PotatoBatteryItem(Item.Properties props) { super(props.stacksTo(1)); }

    @Override
    public boolean isBarVisible(ItemStack stack) { return true; }

    @Override
    public int getBarWidth(ItemStack stack) {
        return Math.round(13.0f * stack.getOrDefault(ModComponents.ENERGY.get(), 0) / CAPACITY);
    }

    @Override
    public int getBarColor(ItemStack stack) { return 0xCC2244; }

    @Override
    public void appendHoverText(ItemStack stack, Item.TooltipContext context, List<Component> tooltip, TooltipFlag flag) {
        int stored = stack.getOrDefault(ModComponents.ENERGY.get(), 0);
        tooltip.add(Component.literal(stored + " / " + CAPACITY + " FE").withStyle(ChatFormatting.GRAY));
    }
    
}