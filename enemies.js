const enemies = [
    {
    name: 'General Graardor',
    killsph: 20,
    rolls: 2,
    drops: [
            {
                name: 'Big bones', 
                id: 532,
                dropAmount: [1, 1], 
                rarity: 100
            },
            {
                name: 'Rune 2h sword',
                id: 1319,
                dropAmount: [1, 1], 
                rarity: 2/21
            },
            {
                name: 'Rune pickaxe', 
                id: 1275,
                dropAmount: [1, 1], 
                rarity: 2/21
            },
            {
                name: 'Rune longsword',
                id: 1303,
                dropAmount: [1, 1],
                rarity: 2/21,
            },
            {
                name: 'Rune platebody',
                id: 1127,
                dropAmount: [1, 1],
                rarity:  2/21,
            },
            {
                name: 'Bandos chestplate',
                id: 11832,
                dropAmount: [1, 1],
                rarity: 1/384,
            },
            {
                name: 'Bandos tassets',
                id: 11834,
                dropAmount: [1, 1],
                rarity: 1/384,
            },
            {
                name: 'Bandos boots',
                id: 11836,
                dropAmount: [1, 1],
                rarity: 1/384,
            },
            {
                name: 'Nature rune',
                id: 561,
                dropAmount: [40, 60],
                rarity: 1/25,
            }, 
            {
                name: 'Adamantite ore',
                id: 449,
                dropAmount: [15, 20],
                rarity: 2/21,
            }, 
            {
                name: 'Coal',
                id: 453,
                dropAmount: [115, 120],
                rarity: 1/10,
            }, 
            {
                name: 'Coins',
                dropAmount: [19581, 21000],
                rarity: 1/10,
            }, 
            {
                name: 'Snapdragon seed',
                id: 5300,
                dropAmount: [1, 1],
                rarity: 1/25,
            }, 
            {
                name: 'Magic log',
                id: 1513,
                dropAmount: [15, 20],
                rarity: 1/25,
            }, 
            {
                name: 'Super restore(4)',
                id: 3024,
                dropAmount: [3, 3],
                rarity: 1/25,
            }, 
            {
                name: 'Grimy snapdragon',
                id: 3051,
                dropAmount: [3, 3],
                rarity: 1/25,
            }, 
            {
                name: 'Clue scroll (elite)',
                dropAmount: [1, 1],
                rarity: 1/250,
            }, 
            {
                name: 'Godsword shard 1',
                id: 11818,
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 2',
                id: 11820,
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 3',
                id: 11822,
                dropAmount: [1, 1],
                rarity: 1/256,
            },
            {
                name: 'Long bone',
                dropAmount: [1, 1],
                rarity: 1/400,
            },
            {
                name: 'Bandos hilt',
                id: 11812,
                dropAmount: [1, 1],
                rarity: 1/508,
            },
            {
                name: 'Pet general graardor',
                dropAmount: [1, 1],
                rarity: 1/5000,
            },
            {
                name: 'Rare drop table',
                dropAmount: [1, 1],
                rarity: 1/127,
            },
        ]
    },
    {
    name: `Kree'arra`,
    killsph: 20,
    rolls: 3,
    drops: [
            {
                name: 'Big bones', 
                id: 532,
                dropAmount: [1, 1], 
                rarity: 100
            },
            {
                name: 'Feather', 
                id: 314,
                dropAmount: [1, 15], 
                rarity: 100
            },
            {
                name: 'Rune sword', 
                id: 1289,
                dropAmount: [1, 1], 
                rarity: 1/406
            },
            {
                name: 'Rune crossbow', 
                id: 9185,
                dropAmount: [1, 1], 
                rarity: 2/21
            },
            {
                name: `Black d'hide`,
                id: 2503,
                dropAmount: [1, 1],
                rarity: 2/21,
            },
            {
                name: 'Armadyl helmet',
                id: 11826,
                dropAmount: [1, 1],
                rarity:  1/384,
            },
            {
                name: 'Armadyl chestplate',
                id: 11828,
                dropAmount: [1, 1],
                rarity: 1/384,
            },
            {
                name: 'Armadyl chainskirt',
                id: 11830,
                dropAmount: [1, 1],
                rarity: 1/384,
            },
            {
                name: 'Bandos boots',
                id: 11836,
                dropAmount: [1, 1],
                rarity: 1/384,
            },
            {
                name: 'Runite bolts',
                id: 9144,
                dropAmount: [18, 25],
                rarity: 2/21,
            }, 
            {
                name: 'Mind rune',
                id: 558,
                dropAmount: [500, 601],
                rarity: 1/64, 
            }, 
            {
                name: 'Rune arrow',
                id: 892,
                dropAmount: [100, 105],
                rarity: 1/64, 
            }, 
            {
                name: 'Dragonstone bolts(e)',
                id: 9244,
                dropAmount: [5, 15],
                rarity: 1/64,
            }, 
            {
                name: 'Coins',
                dropAmount: [18000, 21000],
                rarity: 2/21,
            }, 
            {
                name: 'Rare drop table',
                dropAmount: [1, 1],
                rarity: 8/127,
            }, 
            {
                name: 'Dwarf weed',
                id: 267,
                dropAmount: [5, 22],
                rarity: 2/21,
            }, 
            {
                name: 'Dwarf weed seed',
                id: 5303,
                dropAmount: [3, 3],
                rarity: 2/21,
            }, 
            {
                name: 'Ranging potion(3)',
                id: 169,
                dropAmount: [3, 3],
                rarity: 1/64,
            }, 
            {
                name: 'Super defence(3)',
                id: 163,
                dropAmount: [3, 3],
                rarity: 1/64,
            }, 
            {
                name: 'Crystal key',
                id: 989,
                dropAmount: [3, 3],
                rarity: 1/64,
            }, 
            {
                name: 'Yew seed',
                id: 5315,
                dropAmount: [1, 1],
                rarity: 1/128, 
            }, 
            {
                name: 'Clue scroll (elite)',
                dropAmount: [1, 1],
                rarity: 1/250,
            }, 
            {
                name: 'Godsword shard 1',
                id: 11818,
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 2',
                id: 11820,
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 3',
                id: 11822,
                dropAmount: [1, 1],
                rarity: 1/256,
            },
            {
                name: 'Long bone',
                dropAmount: [1, 1],
                rarity: 1/400,
            },
            {
                name: 'Armadyl hilt',
                id: 11810,
                dropAmount: [1, 1],
                rarity: 1/508,
            },
            {
                name: `Pet kree'arra`,
                dropAmount: [1, 1],
                rarity: 1/5000,
            },
            {
                name: `Curved bone`,
                dropAmount: [1, 1],
                rarity: 1/5000,
            },
        ]
    },
    {
    name: `Kril Tsutsaroth`,
    killsph: 20,
    rolls: 2,
    drops: [
            {
                name: 'Ashes', 
                dropAmount: [1, 1], 
                rarity: 100
            },
            {
                name: 'Adamant arrow(p++)',
                id: 5626,
                dropAmount: [295, 300], 
                rarity: 2/21
            },
            {
                name: 'Rune scimitar',
                id: 1333,
                dropAmount: [1, 1], 
                rarity: 1/64
            },
            {
                name: `Dragon dagger(p++)`,
                id: 5698,
                dropAmount: [1, 1],
                rarity: 1/64,
            },
            {
                name: 'Steam battlestaff',
                id: 11787,
                dropAmount: [1, 1],
                rarity:  1/128,
            },
            {
                name: 'Zamorakian spear',
                id: 11824,
                dropAmount: [1, 1],
                rarity: 1/128,
            },
            {
                name: 'Rune sword',
                id: 1289,
                dropAmount: [1, 1],
                rarity: 1/406,
            },
            {
                name: 'Staff of the dead',
                id: 11791,
                dropAmount: [1, 1],
                rarity: 1/508,
            },
            {
                name: 'Rune platelegs',
                id: 1079,
                dropAmount: [1, 1],
                rarity: 2/21,
            }, 
            {
                name: 'Adamant platebody',
                id: 1123,
                dropAmount: [1, 1],
                rarity: 2/21,
            }, 
            {
                name: 'Super attack(3)',
                id: 145,
                dropAmount: [3, 3],
                rarity: 2/21,
            }, 
            {
                name: 'Super strength(3)',
                id: 157,
                dropAmount: [3, 3],
                rarity: 2/21,
            }, 
            {
                name: 'Super restore(3)',
                id: 3026,
                dropAmount: [3, 3],
                rarity: 2/21,
            }, 
            {
                name: 'Zamorak brew(3)',
                id: 189,
                dropAmount: [3, 3],
                rarity: 2/21,
            }, 
            {
                name: 'Death rune',
                id: 560,
                dropAmount: [120, 125],
                rarity: 2/21,
            }, 
            {
                name: 'Coins',
                dropAmount: [19362, 20073],
                rarity: 2/21,
            }, 
            {
                name: 'Rare drop table',
                dropAmount: [1, 1],
                rarity: 8/127,
            }, 
            {
                name: 'Blood rune',
                dropAmount: [80, 90],
                rarity: 1/64,
            }, 
            {
                name: 'Grimy lantadyme',
                dropAmount: [7, 13],
                rarity: 1/64,
            }, 
            {
                name: 'Lantadyme seed',
                dropAmount: [3, 3],
                rarity: 1/64, 
            }, 
            {
                name: 'Clue scroll (elite)',
                dropAmount: [1, 1],
                rarity: 1/250,
            }, 
            {
                name: 'Godsword shard 1',
                id: 11818,
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 2',
                id: 11820,
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 3',
                id: 11822,
                dropAmount: [1, 1],
                rarity: 1/256,
            },
            {
                name: 'Long bone',
                dropAmount: [1, 1],
                rarity: 1/400,
            },
            {
                name: 'Zamorak hilt',
                dropAmount: [1, 1],
                rarity: 1/508,
            },
            {
                name: `Pet k'ril tsutsaroth`,
                dropAmount: [1, 1],
                rarity: 1/5000,
            },
            {
                name: `Curved bone`,
                dropAmount: [1, 1],
                rarity: 1/5000,
            },
        ]
    },
    {
    name: `Commander Zilyana`,
    killsph: 20,
    rolls: 2,
    drops: [
            {
                name: 'Bones',
                id: 526,
                dropAmount: [1, 1], 
                rarity: 100
            },
            {
                name: 'Saradomin sword',
                id: 11838,
                dropAmount: [295, 300], 
                rarity: 1/127
            },
            {
                name: 'Armadyl crossbow', 
                id: 11785,
                dropAmount: [1, 1], 
                rarity: 1/508
            },
            {
                name: `Rune sword`,
                id: 1289,
                dropAmount: [1, 1],
                rarity: 1/406,
            },
            {
                name: 'Rune dart',
                id: 811,
                dropAmount: [35, 40],
                rarity:  2/21,
            },
            {
                name: 'Law rune',
                id: 563,
                dropAmount: [95, 105],
                rarity: 2/21,
            },
            {
                name: 'Rune plateskirt',
                id: 1093,
                dropAmount: [1, 1],
                rarity: 2/21,
            },
            {
                name: 'Adamant platebody',
                id: 1123,
                dropAmount: [1, 1],
                rarity: 1/64,
            },
            {
                name: 'Rune kiteshield',
                id: 1201,
                dropAmount: [1, 1],
                rarity: 1/64,
            }, 
            {
                name: 'Grimy ranarr weed',
                id: 207,
                dropAmount: [5, 5],
                rarity: 2/21,
            }, 
            {
                name: 'Ranarr seed',
                id: 5295,
                dropAmount: [2, 2],
                rarity: 2/21,
            }, 
            {
                name: 'Prayer potion(4)',
                id: 2434,
                dropAmount: [3, 3],
                rarity: 8/127,
            }, 
            {
                name: 'Saradomin brew(3)',
                id: 6687,
                dropAmount: [3, 3],
                rarity: 6/127,
            }, 
            {
                name: 'Super restore(4)',
                id: 3024,
                dropAmount: [3, 3],
                rarity: 6/127,
            },
            {
                name: 'Super defence(4)',
                id: 2442,
                dropAmount: [3, 3],
                rarity: 6/127,
            }, 
            {
                name: 'Magic potion(3)',
                id: 3042,
                dropAmount: [3, 3],
                rarity: 6/127,
            }, 
            {
                name: 'Magic seed',
                id: 5316,
                dropAmount: [1, 1],
                rarity: 1/128,
            }, 
            {
                name: 'Coins',
                dropAmount: [19362, 20073],
                rarity: 2/21,
            }, 
            {
                name: 'Diamond',
                id: 1601,
                dropAmount: [6, 6],
                rarity: 1/64,
            }, 
            {
                name: 'Rare drop table',
                dropAmount: [1, 1],
                rarity: 8/127,
            }, 
            {
                name: `Saradomin's light`,
                id: 13256,
                dropAmount: [1, 1],
                rarity: 1/254,
            }, 
            {
                name: 'Clue scroll (elite)',
                dropAmount: [1, 1],
                rarity: 1/250,
            }, 
            {
                name: 'Godsword shard 1',
                id: 11818,
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 2',
                id: 11820,
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 3',
                id: 11822,
                dropAmount: [1, 1],
                rarity: 1/256,
            },
            {
                name: 'Saradomin hilt',
                dropAmount: [1, 1],
                rarity: 1/508,
            },
            {
                name: `Pet zilyana`,
                dropAmount: [1, 1],
                rarity: 1/5000,
            },
        ]
    },
    {
    name: `Giant Mole`,
    killsph: 20,
    rolls: 4,
    drops: [
            {
                name: 'Big bones', 
                id: 532,
                dropAmount: [1, 1], 
                rarity: 100
            },
            {
                name: 'Mole Claw', 
                id: 7416,
                dropAmount: [1, 1], 
                rarity: 100
            },
            {
                name: 'Mole skin', 
                id: 7418,
                dropAmount: [1, 3], 
                rarity: 100
            },
            {
                name: 'Air rune',
                id: 556,
                dropAmount: [105, 105], 
                rarity: 2/21
            },
            {
                name: `Fire rune`,
                id: 554,
                dropAmount: [105, 105],
                rarity: 2/21,
            },
            {
                name: 'Blood rune',
                id: 565,
                dropAmount: [15, 15],
                rarity:  2/21,
            },
            {
                name: 'Death rune',
                id: 560,
                dropAmount: [7, 7],
                rarity: 1/128,
            },
            {
                name: 'Law rune',
                id: 563,
                dropAmount: [15, 15],
                rarity: 1/64,
            },
            {
                name: 'Iron arrow',
                id: 884,
                dropAmount: [690, 690],
                rarity: 1/64,
            },
            {
                name: 'Adamant longsword',
                id: 1301,
                dropAmount: [1, 1],
                rarity: 2/21,
            }, 
            {
                name: 'Mithril axe',
                id: 1355,
                dropAmount: [1, 1],
                rarity: 2/21,
            }, 
            {
                name: 'Mithril battleaxe',
                id: 1369,
                dropAmount: [1, 1],
                rarity: 2/21,
            }, 
            {
                name: 'Mithril platebody',
                id: 1121,
                dropAmount: [1, 1],
                rarity: 2/21,
            }, 
            {
                name: 'Rune med helm',
                id: 1147,
                dropAmount: [1, 1],
                rarity: 1/64,
            }, 
            {
                name: 'Amulet of strength',
                id: 1725,
                dropAmount: [1, 1],
                rarity: 2/21,
            },
            {
                name: 'Iron ore',
                id: 440,
                dropAmount: [100, 100],
                rarity: 1/64,
            }, 
            {
                name: 'Mithril bar',
                id: 2359,
                dropAmount: [1, 1],
                rarity: 1/128,
            }, 
            {
                name: 'Yew logs',
                id: 1515,
                dropAmount: [100, 100],
                rarity: 5/64,
            }, 
            {
                name: 'Shark',
                id: 385,
                dropAmount: [4, 4],
                rarity: 1/64,
            }, 
            {
                name: 'Oyster pearls',
                id: 411,
                dropAmount: [1, 1],
                rarity: 1/128,
            }, 
            {
                name: 'Long bone',
                dropAmount: [1, 1],
                rarity: 1/400,
            }, 
            {
                name: `Baby mole`,
                dropAmount: [1, 1],
                rarity: 1/3000,
            }, 
            {
                name: 'Clue scroll (elite)',
                dropAmount: [1, 1],
                rarity: 1/500,
            }, 
            {
                name: 'Godsword shard 1',
                id: 11818,
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 2',
                id: 11820,
                dropAmount: [1, 1],
                rarity: 1/256,
            }, 
            {
                name: 'Godsword shard 3',
                id: 11822,
                dropAmount: [1, 1],
                rarity: 1/256,
            },
            {
                name: 'Curved bone',
                dropAmount: [1, 1],
                rarity: 1/5000,
            },
        ]
    },
];