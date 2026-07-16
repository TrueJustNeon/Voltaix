// EDIT THIS TO ADD/REMOVE ITEMS AND BLOCKS
const BLOCKS = [
    {
        id: "voltaix_ore",
        name: "Voltaix Ore",
        desc: "A new ore found deep underground. Drops Voltaix Dust when mined with an Iron Pickaxe or better.",
        tags: ["Hardness: 3.0", "Y: -64 to 16"],
        icon: "assets/voltaix_ore.png" // put your 48x48 png here
    },
    {
        id: "voltaix_block",
        name: "Voltaix Block",
        desc: "Storage block for Voltaix Dust. Also used for decorative builds.",
        tags: ["Hardness: 5.0"],
        icon: "assets/voltaix_block.png"
    },
    {
        id: "coal_generator",
        name: "Coal Generator",
        desc: "Generates energy by burning coal and charcoal, basic power source.",
        tags: ["Energy: 100 RF/t"],
        icon: "assets/coal_generator.png"
    },
    {
        id: "basic_solar_panel",
        name: "Basic Solar Panel",
        desc: "Generates energy during the day. Place in direct sunlight.",
        tags: ["Energy: 20 RF/t"],
        icon: "assets/basic_solar_panel.png"
    },
    {
        id: "advanced_solar_panel",
        name: "Advanced Solar Panel",
        desc: "Generates energy during the day. Place in direct sunlight.",
        tags: ["Energy: 150 RF/t"],
        icon: "assets/advanced_solar_panel.png"
    }
];

const ITEMS = [
    {
        id: "portable_battery",
        name: "Portable Battery",
        desc: "Your all time trust buddy.",
        tags: ["Battery", "Capacity: 5000 Fe"],
        icon: "assets/portable_battery.png"
    },
    {
        id: "coal_dust",
        name: "Coal Dust",
        desc: "Dust used to craft alloys.",
        tags: ["Dust"],
        icon: "assets/coal_dust.png"
    },
    {
        id: "sulfur_dust",
        name: "Sulfur Dust",
        desc: "Dust used to craft components.",
        tags: ["Dust"],
        icon: "assets/sulfur_dust.png"
    },
    {
        id: "sulfur_crystal",
        name: "Sulfur Crystal",
        desc: "Crystal that provides sulfur dust if crushed.",
        tags: ["Component"],
        icon: "assets/sulfur_crystal.png"
    },
    {
        id: "rubber",
        name: "Rubber",
        desc: "Material used to craft components.",
        tags: ["Component"],
        icon: "assets/rubber.png"
    },
    {
        id: "latex",
        name: "Latex",
        desc: "Cook to obtain rubber.",
        tags: ["Alloy"],
        icon: "assets/latex.png"
    },
    {
        id: "sap",
        name: "Sap",
        desc: "Mix with sulfur dust to obtain latex.",
        tags: ["Component"],
        icon: "assets/sap.png"
    },
    {
        id: "steel_ingot",
        name: "Steel Ingot",
        desc: "Alloy used to craft tools and machines.",
        tags: ["Alloy"],
        icon: "assets/steel_ingot.png"
    },
    {
        id: "steel_plate",
        name: "Steel Plate",
        desc: "Pressed alloy used to craft tools and machines.",
        tags: ["Alloy", "Plate"],
        icon: "assets/steel_plate.png"
    },
    {
        id: "copper_plate",
        name: "Copper Plate",
        desc: "Pressed ingot used to craft tools and machines.",
        tags: ["Plate"],
        icon: "assets/copper_plate.png"
    },
    {
        id: "iron_plate",
        name: "Iron Plate",
        desc: "Pressed ingot used to craft tools and machines.",
        tags: ["Plate"],
        icon: "assets/iron_plate.png"
    },
    {
        id: "gold_plate",
        name: "Gold Plate",
        desc: "Pressed ingot used to craft tools and machines.",
        tags: ["Plate"],
        icon: "assets/gold_plate.png"
    },
    {
        id: "hammer",
        name: "Hammer",
        desc: "Crafting: 4 Iron Ingots + 1 Stick. Used to craft basic components.",
        tags: ["Tool"],
        icon: "assets/hammer.png"
    },
    {
        id: "solar_panel",
        name: "Solar Panel",
        desc: "Used to craft and upgrade solar panels.",
        tags: ["Component"],
        icon: "assets/solar_panel.png"
    },
    {
        id: "basic_chip",
        name: "Basic Chip",
        desc: "Used in simple machines and circuits.",
        tags: ["Component"],
        icon: "assets/basic_chip.png"
    },
    {
        id: "advanced_chip",
        name: "Advanced Chip",
        desc: "Used in advanced machines and automation.",
        tags: ["Component"],
        icon: "assets/advanced_chip.png"
    },
    {
        id: "speed_upgrade",
        name: "Speed Upgrade",
        desc: "Used to speed up machines.",
        tags: ["Upgrade"],
        icon: "assets/speed_upgrade.png"
    },
    {
        id: "capacity_upgrade",
        name: "Capacity Upgrade",
        desc: "Used to add more storage to machines.",
        tags: ["Upgrade"],
        icon: "assets/capacity_upgrade.png"
    },
    {
        id: "energy_upgrade",
        name: "Energy Upgrade",
        desc: "Used to add more energy capacity to machines.",
        tags: ["Upgrade"],
        icon: "assets/energy_upgrade.png"
    }
];
    
// END EDIT

const NAMESPACE = "voltaix";

function createItemElement(data, type) {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
        <img src="${data.icon}" alt="${data.name}" class="item-icon" onerror="this.style.display='none'">
        <div class="item-content">
            <h4>${data.name}</h4>
            <p>${data.desc}</p>
            <span class="tag">ID: ${NAMESPACE}:${data.id}</span>
            ${data.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
    `;
    return div;
}

function loadContent() {
    const blocksGrid = document.getElementById('blocks-grid');
    const itemsGrid = document.getElementById('items-grid');
    const idTable = document.getElementById('id-table');
    const giveCommands = document.getElementById('give-commands');

    BLOCKS.forEach(b => blocksGrid.appendChild(createItemElement(b, 'block')));
    ITEMS.forEach(i => itemsGrid.appendChild(createItemElement(i, 'item')));

    let giveText = "";
    [...BLOCKS, ...ITEMS].forEach(entry => {
        const row = idTable.insertRow();
        row.innerHTML = `
            <td><img src="${entry.icon}" onerror="this.style.display='none'"></td>
            <td>${entry.name}</td>
            <td>${BLOCKS.includes(entry) ? 'Block' : 'Item'}</td>
            <td><code>${NAMESPACE}:${entry.id}</code></td>
        `;
        giveText += `/give @p ${NAMESPACE}:${entry.id} 64\n`;
    });
    giveCommands.textContent = giveText.trim();
}

function setupTabs() {
    document.querySelectorAll('nav a').forEach(a => {
        a.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('nav a').forEach(n => n.classList.remove('active'));
            document.getElementById(a.dataset.tab).classList.add('active');
            a.classList.add('active');
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadContent();
    setupTabs();
});