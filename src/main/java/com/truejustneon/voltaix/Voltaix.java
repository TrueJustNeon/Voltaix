package com.truejustneon.voltaix;

import net.neoforged.fml.common.Mod;
import com.truejustneon.voltaix.ModItems;
import com.truejustneon.voltaix.ModBlocks;
import net.neoforged.fml.ModContainer;
import net.neoforged.bus.api.IEventBus;

@Mod(Voltaix.MODID)
public class Voltaix {
    public static final String MODID = "voltaix";

    //This is our mod constructor
    public Voltaix(IEventBus modEventBus, ModContainer modContainer) {
        ModBlocks.register(modEventBus);
        ModItems.register(modEventBus);
    }
}
