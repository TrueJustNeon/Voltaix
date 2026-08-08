package com.truejustneon.voltaix;

import com.truejustneon.voltaix.blockclass.CoalGeneratorBlock;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.SoundType;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredHolder;
import net.neoforged.neoforge.registries.DeferredRegister;

public class ModBlocks {

    public static final DeferredRegister<Block> BLOCKS =
            DeferredRegister.create(BuiltInRegistries.BLOCK, Voltaix.MODID);

    public static final DeferredHolder<Block, Block> COAL_GENERATOR =
            BLOCKS.register(
                    "coal_generator",
                    () -> new CoalGeneratorBlock(
                            BlockBehaviour.Properties.of()
                                    .strength(3.5F)
                                    .requiresCorrectToolForDrops()
                                    .sound(SoundType.METAL)
                    )
            );

    public static void register(IEventBus eventBus) {
        BLOCKS.register(eventBus);
    }
}