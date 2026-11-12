package com.truejustneon.voltaix.blocks;

import net.minecraft.core.Direction;
import net.minecraft.world.level.block.FenceBlock;
import net.minecraft.world.level.block.state.BlockState;

public class CopperWireBlockType extends FenceBlock {

    public CopperWireBlockType(Properties properties) {
        super(properties);
    }

    @Override
    public boolean connectsTo(BlockState state, boolean isSideSolid, Direction direction) {
        return state.is(this);
    }
}