package com.truejustneon.voltaix;
import net.neoforged.fml.common.Mod;
import net.neoforged.fml.ModContainer;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.fml.event.lifecycle.FMLCommonSetupEvent;

@Mod(Voltaix.MODID)
public class Voltaix {
    // Define mod id in a common place for everything to reference
    public static final String MODID = "voltaix";

    public Voltaix(IEventBus modEventBus, ModContainer, modContainer) {
        modEventBus.addListener(this::commonSetup);
        ModItems.ITEMS.register(modEventBus);
        ModBlocks.BLOCKS.register(modEventBus);
        ModTabs.TABS.register(modEventBus);
    }
    
    private void CommonSetup(FMLCommonSetupEvent event) {
    }
}
