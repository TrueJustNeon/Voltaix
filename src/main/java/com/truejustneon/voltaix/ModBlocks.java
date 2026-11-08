package com.truejustneon.voltaix;

import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.neoforged.neoforge.registries.DeferredBlock;
import net.neoforged.neoforge.registries.DeferredRegister;

public class ModBlocks {
    public static final DeferredRegister.Blocks BLOCKS = 
    DeferredRegister.createBlocks(Voltaix.MODID);

    public static final DeferredBlock<Block> BASIC_SOLAR_PANEL =
    BLOCKS.registerSimpleBlock("basic_solar_panel",
    BlockBehaviour.Properties.of()
    .strength(3.0f, 6.0f)
    .requiresCorrectToolForDrops());
}