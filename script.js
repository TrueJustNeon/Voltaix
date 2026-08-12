// database del mod - wiki
const NAMESPACE = "voltaix";

const BLOCKS = [
    {
        id: "coal_generator",
        name: "Coal Generator",
        desc: "Generates energy by burning coal and charcoal, basic power source.",
        tags: ["Energy: 100 RF/t"],
        icon: "assets/blocks/coal_generator.png"
    },
    {
        id: "basic_solar_panel",
        name: "Basic Solar Panel",
        desc: "Generates energy during the day. Place in direct sunlight.",
        tags: ["Energy: 20 RF/t"],
        icon: "assets/blocks/basic_solar_panel.png"
    },
    {
        id: "advanced_solar_panel",
        name: "Advanced Solar Panel",
        desc: "Generates energy during the day. Place in direct sunlight.",
        tags: ["Energy: 150 RF/t"],
        icon: "assets/blocks/advanced_solar_panel.png"
    }
];

const ITEMS = [
    {
        id: "portable_battery",
        name: "Portable Battery",
        desc: "Your all time trust buddy.",
        tags: ["Battery", "Capacity: 5000 Fe"],
        icon: "assets/items/portable_battery.png"
    },
    {
        id: "coal_dust",
        name: "Coal Dust",
        desc: "Dust used to craft alloys.",
        tags: ["Dust"],
        icon: "assets/items/coal_dust.png"
    },
    {
        id: "sulfur_dust",
        name: "Sulfur Dust",
        desc: "Dust used to craft components.",
        tags: ["Dust"],
        icon: "assets/items/sulfur_dust.png"
    },
    {
        id: "sulfur_crystal",
        name: "Sulfur Crystal",
        desc: "Crystal that provides sulfur dust if crushed.",
        tags: ["Component"],
        icon: "assets/items/sulfur_crystal.png"
    },
    {
        id: "rubber",
        name: "Rubber",
        desc: "Material used to craft components.",
        tags: ["Component"],
        icon: "assets/items/rubber.png"
    },
    {
        id: "latex",
        name: "Latex",
        desc: "Cook to obtain rubber.",
        tags: ["Alloy"],
        icon: "assets/items/latex.png"
    },
    {
        id: "sap",
        name: "Sap",
        desc: "Mix with sulfur dust to obtain latex.",
        tags: ["Component"],
        icon: "assets/items/sap.png"
    },
    {
        id: "steel_ingot",
        name: "Steel Ingot",
        desc: "Alloy used to craft tools and machines.",
        tags: ["Alloy"],
        icon: "assets/items/steel_ingot.png"
    },
    {
        id: "steel_plate",
        name: "Steel Plate",
        desc: "Pressed alloy used to craft tools and machines.",
        tags: ["Alloy", "Plate"],
        icon: "assets/items/steel_plate.png"
    },
    {
        id: "copper_plate",
        name: "Copper Plate",
        desc: "Pressed ingot used to craft tools and machines.",
        tags: ["Plate"],
        icon: "assets/items/copper_plate.png"
    },
    {
        id: "iron_plate",
        name: "Iron Plate",
        desc: "Pressed ingot used to craft tools and machines.",
        tags: ["Plate"],
        icon: "assets/items/iron_plate.png"
    },
    {
        id: "gold_plate",
        name: "Gold Plate",
        desc: "Pressed ingot used to craft tools and machines.",
        tags: ["Plate"],
        icon: "assets/items/gold_plate.png"
    },
    {
        id: "hammer",
        name: "Hammer",
        desc: "Crafting: 4 Iron Ingots + 1 Stick. Used to craft basic components.",
        tags: ["Tool"],
        icon: "assets/items/hammer.png"
    },
    {
        id: "solar_panel",
        name: "Solar Panel",
        desc: "Used to craft and upgrade solar panels.",
        tags: ["Component"],
        icon: "assets/items/solar_panel.png"
    },
    {
        id: "basic_chip",
        name: "Basic Chip",
        desc: "Used in simple machines and circuits.",
        tags: ["Component"],
        icon: "assets/items/basic_chip.png"
    },
    {
        id: "advanced_chip",
        name: "Advanced Chip",
        desc: "Used in advanced machines and automation.",
        tags: ["Component"],
        icon: "assets/items/advanced_chip.png"
    },
    {
        id: "speed_upgrade",
        name: "Speed Upgrade",
        desc: "Used to speed up machines.",
        tags: ["Upgrade"],
        icon: "assets/items/speed_upgrade.png"
    },
    {
        id: "capacity_upgrade",
        name: "Capacity Upgrade",
        desc: "Used to add more storage to machines.",
        tags: ["Upgrade"],
        icon: "assets/items/capacity_upgrade.png"
    },
    {
        id: "energy_upgrade",
        name: "Energy Upgrade",
        desc: "Used to add more energy capacity to machines.",
        tags: ["Upgrade"],
        icon: "assets/items/energy_upgrade.png"
    },
    {
        id: "efficiency_upgrade",
        name: "Efficiency Upgrade",
        desc: "Lowers energy usage on machines.",
        tags: ["Upgrade"],
        icon: "assets/items/efficiency_upgrade.png"
    }
];

function createItemElement(data, type) {
    const div = document.createElement('div');
    div.className = 'item';
    
    // Convert tags array to HTML spans
    const tagsHtml = data.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    div.innerHTML = `
    <div class="item-icon">
        <img src="assets/gui/slot.png" class="item-slot" alt="">
        <img src="${data.icon}" alt="${data.name}" class="item-texture">
    </div>

    <div class="item-content">
        <h4>${data.name}</h4>
        <p>${data.desc}</p>
        <span class="tag">ID: ${NAMESPACE}:${data.id}</span>
        ${tagsHtml}
    </div>
`;
    
    return div;
}

function renderGrids(searchQuery = "") {
    const blocksGrid = document.getElementById('blocks-grid');
    const itemsGrid = document.getElementById('items-grid');

    blocksGrid.innerHTML = '';
    itemsGrid.innerHTML = '';

    const query = searchQuery.toLowerCase().trim();

    BLOCKS.filter(b => 
        b.name.toLowerCase().includes(query) || 
        b.desc.toLowerCase().includes(query) || 
        b.id.toLowerCase().includes(query) ||
        b.tags.some(tag => tag.toLowerCase().includes(query))
    ).forEach(b => blocksGrid.appendChild(createItemElement(b, 'block')));

    ITEMS.filter(i => 
        i.name.toLowerCase().includes(query) || 
        i.desc.toLowerCase().includes(query) || 
        i.id.toLowerCase().includes(query) ||
        i.tags.some(tag => tag.toLowerCase().includes(query))
    ).forEach(i => itemsGrid.appendChild(createItemElement(i, 'item')));
}

function initializeDebugInfo() {
    const idTable = document.getElementById('id-table');
    const giveCommands = document.getElementById('give-commands');
    let giveText = "";

    [...BLOCKS, ...ITEMS].forEach(entry => {
        const isBlock = BLOCKS.includes(entry);

        const row = idTable.insertRow();
        row.innerHTML = `
            <!-- Removed the onerror attribute here as well -->
            <td><img src="${entry.icon}" alt="${entry.name}"></td>
            <td>${entry.name}</td>
            <td>${isBlock ? 'Block' : 'Item'}</td>
            <td><code>${NAMESPACE}:${entry.id}</code></td>
        `;

        giveText += `/give @p ${NAMESPACE}:${entry.id} 64\n`;
    });
    
    giveCommands.textContent = giveText.trim();
}

function setupTabs() {
    const tabs = document.querySelectorAll('.tab');
    const navLinks = document.querySelectorAll('.top-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            navLinks.forEach(n => n.classList.remove('active'));

            const activeTab = link.dataset.tab;
            document.getElementById(activeTab).classList.add('active');
            link.classList.add('active');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function setupSearch() {
    const searchBars = document.querySelectorAll('.search-bar');
    
    searchBars.forEach(bar => {
        bar.addEventListener('input', (e) => {
            const query = e.target.value;
            
            // Keep all search bars in sync
            searchBars.forEach(b => {
                if (b !== e.target) b.value = query; 
            });
            
            renderGrids(query);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeDebugInfo();
    renderGrids();
    setupTabs();
    setupSearch();
});

// Complete list of all block textures found in assets/blocksbgassets/
const ALL_BLOCK_TEXTURES = [

    // Stripped Logs & Stems
    "assets/blocksbgassets/log/stripped_acacia_log.png",
    "assets/blocksbgassets/log/stripped_birch_log.png",
    "assets/blocksbgassets/log/stripped_cherry_log.png",
    "assets/blocksbgassets/log/stripped_crimson_stem.png",
    "assets/blocksbgassets/log/stripped_dark_oak_log.png",
    "assets/blocksbgassets/log/stripped_jungle_log.png",
    "assets/blocksbgassets/log/stripped_mangrove_log.png",
    "assets/blocksbgassets/log/stripped_oak_log.png",
    "assets/blocksbgassets/log/stripped_pale_oak_log.png",
    "assets/blocksbgassets/log/stripped_spruce_log.png",
    "assets/blocksbgassets/log/stripped_warped_stem.png",
    
    // Planks
    "assets/blocksbgassets/planks/acacia_planks.png",
    "assets/blocksbgassets/planks/bamboo_planks.png",
    "assets/blocksbgassets/planks/birch_planks.png",
    "assets/blocksbgassets/planks/cherry_planks.png",
    "assets/blocksbgassets/planks/crimson_planks.png",
    "assets/blocksbgassets/planks/dark_oak_planks.png",
    "assets/blocksbgassets/planks/jungle_planks.png",
    "assets/blocksbgassets/planks/mangrove_planks.png",
    "assets/blocksbgassets/planks/oak_planks.png",
    "assets/blocksbgassets/planks/pale_oak_planks.png",
    "assets/blocksbgassets/planks/spruce_planks.png",
    "assets/blocksbgassets/planks/warped_planks.png",
    
    // Wool
    "assets/blocksbgassets/wool/black_wool.png",
    "assets/blocksbgassets/wool/blue_wool.png",
    "assets/blocksbgassets/wool/brown_wool.png",
    "assets/blocksbgassets/wool/cyan_wool.png",
    "assets/blocksbgassets/wool/gray_wool.png",
    "assets/blocksbgassets/wool/green_wool.png",
    "assets/blocksbgassets/wool/light_blue_wool.png",
    "assets/blocksbgassets/wool/light_gray_wool.png",
    "assets/blocksbgassets/wool/lime_wool.png",
    "assets/blocksbgassets/wool/magenta_wool.png",
    "assets/blocksbgassets/wool/orange_wool.png",
    "assets/blocksbgassets/wool/pink_wool.png",
    "assets/blocksbgassets/wool/purple_wool.png",
    "assets/blocksbgassets/wool/red_wool.png",
    "assets/blocksbgassets/wool/white_wool.png",
    "assets/blocksbgassets/wool/yellow_wool.png"
];

// Helper to check if an image path actually exists/loads
function verifyTexture(path) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = path;
    });
}

async function setupBackground() {
    // Clone the array so we don't modify the original constant
    const texturePool = [...ALL_BLOCK_TEXTURES];

    // Shuffle the array randomly (Fisher-Yates shuffle)
    for (let i = texturePool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [texturePool[i], texturePool[j]] = [texturePool[j], texturePool[i]];
    }

    // Now it checks them in a random order
    for (const texture of texturePool) {
        const isLoaded = await verifyTexture(texture);
        if (isLoaded) {
            document.body.style.setProperty('--bg-tex', `url('${texture}')`);
            return; // Stops at the first randomly selected texture that successfully loads
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    initializeDebugInfo();
    renderGrids();
    setupTabs();
    setupSearch();
    setupBackground();
});
