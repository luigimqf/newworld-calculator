const commonMaterialConverter = {
  label: 'Common Material Converter',
  image: 'https://i.imgur.com/vylnUDc.png',
  xp:0,
  recipe: null
}

const advancedMaterialConverter = {
  label: 'Advanced Material Converter',
  image: 'https://i.imgur.com/ZCjw9wJ.png',
  xp:0,
  recipe: null
}

const masterworkMaterialConverter = {
  label: 'Masterwork Material Converter',
  image: 'https://i.imgur.com/zXVSkbc.png',
  xp:0,
  recipe: null
}

const crossWeave = {
  label: 'Crossweave',
  image: 'https://i.imgur.com/zyyfLqx.png',
  xp:189,
  recipe: null
}

const weakSolvent = {
  label: 'Weak Solvent',
  image: 'https://i.imgur.com/5QeyEnK.png',
  xp:189,
  recipe:[
    {
      quantity:20,
      ...crossWeave
    },
    {
      quantity:1,
      ...commonMaterialConverter
    }
  ]
}

const sandpaper = {
  label: 'Sandpaper',
  image: 'https://i.imgur.com/7EHAFYS.png',
  xp:189,
  recipe:[
    {
      quantity:20,
      ...crossWeave
    },
    {
      quantity:1,
      ...commonMaterialConverter
    }
  ]
}

const tannin = {
  label: 'Tannin',
  image: 'https://i.imgur.com/tD0ngjH.png',
  xp:189,
  recipe:[
    {
      quantity:20,
      ...crossWeave
    },
    {
      quantity:1,
      ...commonMaterialConverter
    }
  ]
}

const sandflux = {
  label: 'Sand Flux',
  image: 'https://i.imgur.com/CMHN3ph.png',
  xp:189,
  recipe:[
    {
      quantity:20,
      ...crossWeave
    },
    {
      quantity:1,
      ...commonMaterialConverter
    }
  ]
}

const silkWeave = {
  label: 'Silkweave',
  image: 'https://i.imgur.com/BFjBdye.png',
  xp:189,  
  recipe: null
}

const fineSandpaper = {
  label: 'Fine Sandpaper',
  image: 'https://i.imgur.com/JAFQsRO.png',
  xp:189,
  recipe:[
    {
      quantity:20,
      ...silkWeave
    },
    {
      quantity:1,
      ...advancedMaterialConverter
    }
  ]
}

const potentSolvent = {
  label: 'Potent Solvent',
  image: 'https://i.imgur.com/HljZNtn.png',
  xp:189,  
  recipe:[
    {
      quantity:20,
      ...silkWeave
    },
    {
      quantity:1,
      ...advancedMaterialConverter
    }
  ]
}

const restedTannin = {
  label: 'Rested Tannin',
  image: 'https://i.imgur.com/V6bL07y.png',
  xp:189,  
  recipe:[
    {
      quantity:20,
      ...silkWeave
    },
    {
      quantity:1,
      ...advancedMaterialConverter
    }
  ]
}

const shellDustSandflux = {
  label: 'Shelldust Sandflux',
  image: 'https://i.imgur.com/9kd8huw.png',
  xp:189,  
  recipe:[
    {
      quantity:20,
      ...silkWeave
    },
    {
      quantity:1,
      ...advancedMaterialConverter
    }
  ]
}

const wireWeave = {
  label: 'Wireweave',
  image: 'https://i.imgur.com/IIrYhd4.png',
  xp:189,
  recipe: null
}

const obsidianSandpaper = {
  label: 'Obsidian Sandpaper',
  image: 'https://i.imgur.com/7A3dPOL.png',
  xp:189,
  recipe:[
    {
      quantity:20,
      ...wireWeave
    },
    {
      quantity:1,
      ...masterworkMaterialConverter
    }
  ]
}


const pureSolvent = {
  label: 'Pure Solvent',
  image: 'https://i.imgur.com/u4xsNpZ.png',
  xp:189,
  recipe:[
    {
      quantity:20,
      ...wireWeave
    },
    {
      quantity:1,
      ...masterworkMaterialConverter
    }
  ]
}

const agedTannin = {
  label: 'Aged Tannin',
  image: 'https://i.imgur.com/2JmcCpQ.png',
  xp:189,
  recipe:[
    {
      quantity:20,
      ...wireWeave
    },
    {
      quantity:1,
      ...masterworkMaterialConverter
    }
  ]
}

const obsidianSandflux = {
  label: 'Obsidian Sandflux',
  image: 'https://i.imgur.com/d6C9dXs.png',
  xp:189,
  recipe:[
    {
      quantity:20,
      ...wireWeave
    },
    {
      quantity:1,
      ...masterworkMaterialConverter
    }
  ]
}

const wildWood = {
  label: 'Wild Wood',
  image: 'https://i.imgur.com/lK0habY.png',
  xp:0,
  recipe: null
}

const barbVine = {
  key:'1309hdf89031h08d',
  label: 'Barbvine',
  image: 'https://i.imgur.com/JcmE0ph.png',
  xp:0,
  recipe: null
}

const embossedWrapping = {
  key:'3qjf3j-0rj0109hd9012',
  label: 'Embossed Wrapping',
  image: 'https://i.imgur.com/pG3NpOF.png',
  xp:0,
  recipe: null
}

const brokenHatchet = {
  key:'021he80912h08900',
  label: 'Broken Hatchet',
  image: 'https://i.imgur.com/UUc1HVO.png',
  xp:0,
  recipe: null
}


const etchedHandguard = {
  label: 'Etched Handguard',
  image: 'https://i.imgur.com/ZEck3YU.png',
  xp:0,
  recipe: null
}

const fragmentedMusket = {
  label: 'Fragmented Musket',
  image: 'https://i.imgur.com/kcx5KNb.png',
  xp:0,
  recipe: null
}

const intrigateFirearmLock = {
  label: 'Intrigaate Firearm Lock',
  image: 'https://i.imgur.com/aIIVHI8.png',
  xp:0,
  recipe: null
}

const serpentineHandguard = {
  label: 'Serpentine Handguard',
  image: 'https://i.imgur.com/aKJeb1V.png',
  xp:0,
  recipe: null
}

const smolderHide = {
  label: 'Smolderhide',
  image: 'https://i.imgur.com/QIALu32.png',
  xp:0,
  recipe: null
}

const scarHide = {
  label: 'Scarhide',
  image: 'https://i.imgur.com/ZMdMKtV.png',
  xp:0,
  recipe: null
}

const cinnabar = {
  label: 'Cinnabar',
  image: 'https://i.imgur.com/4bJrHwQ.png',
  xp:0,
  recipe: null
}

const tolvium = {
  label: 'Tolvium',
  image: 'https://i.imgur.com/X9jdO8I.png',
  xp:0,
  recipe: null
}

const voidOre = {
  label: 'Void Ore',
  image: 'https://i.imgur.com/ScSR0f4.png',
  xp:0,
  recipe: null
}

const voidEssence = {
  label: 'Void Essence',
  image: 'https://i.imgur.com/XHwAmrs.png',
  xp:0,
  recipe: null
}

const greenWood = {
  label: 'Green Wood',
  image: 'https://i.imgur.com/WUFpNnv.png',
  source: 'https://nwdb.info/db/item/woodt1',
  xp:0,
  recipe: null
}

const agedWood = {
  label: 'Aged Wood',
  image: 'https://i.imgur.com/keysNq7.png',
  xp:0,
  recipe: null
}

const wyrdWood = {
  label: 'Wyrdwood',
  image: 'https://i.imgur.com/Af2a0EJ.png',
  xp:0,
  recipe: null
}

const ironWood = {
  label: 'Iron Wood',
  image: 'https://i.imgur.com/yML0MY9.png',
  xp:0,
  recipe: null
}

const timber = {
  label: 'Timber',
  image: 'https://i.imgur.com/3QNFPm2.png',
  xp:36,
  recipe:[
    {
      quantity:4,
      ...greenWood
    }
  ]
}

const lumber = {
  label: 'Lumber',
  image: 'https://i.imgur.com/SsSfF1v.png',
  xp:266,
  recipe:[
    {
      quantity:4,
      ...agedWood
    },
    {
      quantity:2,
      ...timber
    },
    {
      quantity:1,
      ...sandpaper
    }
  ]
}

const wyrdWoodPlanks = {
  label: 'Wyrdwood Planks',
  image: 'https://i.imgur.com/cvNRusW.png',
  xp:1665,
  recipe:[
    {
      quantity:6,
      ...wyrdWood
    },
    {
      quantity:2,
      ...lumber
    },
    {
      quantity:1,
      ...sandpaper
    }
  ]
}

const ironWoodPlanks = {
  label: 'Ironwood Planks',
  image: 'https://i.imgur.com/9uHis2y.png',
  xp:8470,
  recipe:[
    {
      quantity:8,
      ...ironWood
    },
    {
      quantity:2,
      ...wyrdWoodPlanks
    },
    {
      quantity:1,
      ...sandpaper
    }
  ]
}

const glitteringEbony = {
  label: 'Glittering Ebony',
  image: 'https://i.imgur.com/kIVBAbg.png',
  xp:6930,
  recipe:[
    {
      quantity:5,
      ...ironWoodPlanks
    },
    {
      quantity:2,
      ...wildWood
    },
    {
      quantity:1,
      ...barbVine
    },
    {
      quantity:1,
      ...obsidianSandpaper
    }
  ],
}

const rawHide = {
  label: 'Rawhide',
  image: 'https://i.imgur.com/YmnwZOz.png',
  xp:0,
  recipe: null
}

const thickHide = {
  label: 'Thick Hide',
  image: 'https://i.imgur.com/4B9r4DB.png',
  xp:0,
  recipe: null
}

const ironHide = {
  label: 'Iron Hide',
  image: 'https://i.imgur.com/a2hgjjF.png',
  xp:0,
  recipe: null
}

const coarseLeather = {
  label: 'Coarse Leather',
  image: 'https://i.imgur.com/Jkpm51Z.png',
  xp:36,
  recipe:[
    {
      quantity:4,
      ...rawHide
    }
  ]
}

const ruggedLeather = {
  label: 'Rugged Leather',
  image: 'https://i.imgur.com/iCm7ZxB.png',
  xp:190,
  recipe:[
    {
      quantity:4,
      ...coarseLeather
    },
    {
      quantity:1,
      ...tannin
    }
  ]
}

const layeredLeather = {
  label: 'Layered Leather',
  image: 'https://i.imgur.com/tqVa42H.png',
  xp:1665,
  recipe:[
    {
      quantity:6,
      ...thickHide
    },
    {
      quantity:2,
      ...ruggedLeather
    },
    {
      quantity:1,
      ...tannin
    }
  ]
}

const infusedLeather = {
  label: 'Infused Leather',
  image: 'https://i.imgur.com/KXr0iIn.png',
  xp:8470,
  recipe:[
    {
      quantity:8,
      ...ironHide
    },
    {
      quantity:2,
      ...layeredLeather
    },
    {
      quantity:1,
      ...tannin
    }
  ]
}

const runicLeather = {
  label: 'Runic Leather',
  image: 'https://i.imgur.com/y2dTFBF.png',
  xp:6160,
  recipe:[
    {
      quantity:5,
      ...infusedLeather
    },
    {
      quantity:1,
      ...smolderHide
    },
    {
      quantity:1,
      ...agedTannin
    }
  ]
}

const charcoal = {
  label: 'Charcoal',
  image: 'https://i.imgur.com/b3ASUkR.png',
  xp:18,
  recipe:[
    {
      quantity:2,
      ...greenWood
    }
  ]
}

const ironOre = {
  label: 'Iron Ore',
  image: 'https://i.imgur.com/fNoa12l.png',
  xp:0,
  recipe: null
}

const silverOre = {
  label: 'Silver Ore',
  image: 'https://i.imgur.com/Y5riLpV.png',
  xp:0,
  recipe: null
}

const goldOre = {
  label: 'Gold Ore',
  image: 'https://i.imgur.com/kjNdEgl.png',
  xp:0,
  recipe: null
}

const platinumOre = {
  label: 'Platinum Ore',
  image: 'https://i.imgur.com/RFNMdjP.png',
  xp:0,
  recipe: null
}

const starmetalOre = {
  label: 'Starmetal Ore',
  image: 'https://i.imgur.com/su79vsi.png',
  xp:0,
  recipe: null
}

const orichalcumOre = {
  label: 'Orichalcum Ore',
  image: 'https://i.imgur.com/u6q2fxT.png',
  xp:0,
  recipe: null
}

const ironIngot = {
  label: 'Iron Ingot',
  image: 'https://i.imgur.com/dXL7aCP.png',
  xp:36,
  recipe:[
    {
      quantity:4,
      ...ironOre
    }
  ]
}

const silverIngot = {
  label: 'Silver Ingot',
  image: 'https://i.imgur.com/o8CRA01.png',
  xp:36,
  recipe:[
    {
      quantity:4,
      ...silverOre
    }
  ]
}

const goldIngot = {
  label: 'Gold Ingot',
  image: 'https://i.imgur.com/fEkUnwX.png',
  xp:304,
  recipe:[
    {
      quantity:5,
      ...goldOre
    },
    {
      quantity:2,
      ...silverIngot
    },
    {
      quantity:1,
      ...sandflux
    }
  ]
}

const platinumIngot = {
  label: 'Platinum Ingot',
  image: 'https://i.imgur.com/PECTZDd.png',
  xp:1665,
  recipe:[
    {
      quantity:6,
      ...platinumOre
    },
    {
      quantity:2,
      ...goldIngot
    },
    {
      quantity:1,
      ...sandflux
    }
  ]
}

const steelIngot = {
  label: 'Steel Ingot',
  image: 'https://i.imgur.com/sEpLzrO.png',
  xp:228,
  recipe:[
    {
      quantity:3,
      ...ironIngot
    },
    {
      quantity:1,
      ...sandflux
    },
    {
      quantity:2,
      ...charcoal
    }
  ]
}

const starmetalIngot = {
  label: 'Starmetal Ingot',
  image: 'https://i.imgur.com/n0vPfdc.png',
  xp:2035,
  recipe:[
    {
      quantity:6,
      ...starmetalOre
    },
    {
      quantity:2,
      ...steelIngot
    },
    {
      quantity:1,
      ...sandflux
    },
    {
      quantity:2,
      ...charcoal
    }
  ]
}

const orichalcumIngot = {
  label: 'Orichalcum Ingot',
  image: 'https://i.imgur.com/QwdnsA7.png',
  xp:10010,
  recipe:[
    {
      quantity:8,
      ...orichalcumOre
    },
    {
      quantity:2,
      ...starmetalIngot
    },
    {
      quantity:1,
      ...sandflux
    },
    {
      quantity:2,
      ...charcoal
    }
  ]
}

const asmodeum = {
  label: 'Asmodeum',
  image: 'https://i.imgur.com/HJ999NG.png',
  xp:7700,
  recipe:[
    {
      quantity:5,
      ...orichalcumIngot
    },
    {
      quantity:1,
      ...tolvium
    },
    {
      quantity:1,
      ...cinnabar
    },
    {
      quantity:1,
      ...obsidianSandflux
    },
    {
      quantity:2,
      ...charcoal
    }
  ]
}

const airMote = {
  label: 'Air Mote',
  image: 'https://i.imgur.com/CRAQYmZ.png',
  xp:0,
  recipe: null
}

const airWisp = {
  label: 'Air Wisp',
  image: 'https://i.imgur.com/XzyHL2d.png',
  xp:15,
  recipe:[
    {
      quantity:5,
      ...airMote
    }
  ]
}

const airEssence = {
  label: 'Air Essence',
  image: 'https://i.imgur.com/G3LRnLO.png',
  xp:48,
  recipe:[
    {
      quantity:4,
      ...airWisp
    }
  ]
}

const airQuintessence = {
  label: 'Air Quintessence',
  image: 'https://i.imgur.com/oluL9JV.png',
  xp:90,
  recipe:[
    {
      quantity:3,
      ...airEssence
    }
  ]
}

const soulMote = {
  label: 'Soul Mote',
  image: 'https://i.imgur.com/8RAxz7k.png',
  xp:0,
  recipe: null
}

const soulWisp = {
  label: 'Soul Wisp',
  image: 'https://i.imgur.com/zFsxIOh.png',
  xp:15,
  recipe:[
    {
      quantity:5,
      ...soulMote
    }
  ]
}

const soulEssence = {
  label: 'Soul Essence',
  image: 'https://i.imgur.com/lsFD17r.png',
  xp:48,
  recipe:[
    {
      quantity:4,
      ...soulWisp
    }
  ]
}

const soulQuintessence = {
  label: 'Soul Quintessence',
  image: 'https://i.imgur.com/mJc81hb.png',
  xp:90,
  recipe:[
    {
      quantity:3,
      ...soulEssence
    }
  ]
}

const lifeMote = {
  label: 'Life Mote',
  image: 'https://i.imgur.com/0Wdb24z.png',
  xp:0,
  recipe:null
}

const lifeWisp = {
  label: 'Life Wisp',
  image: 'https://i.imgur.com/szh2sz4.png',
  xp:15,
  recipe:[
    {
      quantity:5,
      ...lifeMote
    }
  ]
}

const lifeEssence = {
  label: 'Life Essence',
  image: 'https://i.imgur.com/lsFD17r.png',
  xp:48,
  recipe:[
    {
      quantity:4,
      ...lifeWisp
    }
  ]
}

const lifeQuintessence = {
  label: 'Life Quintessence',
  image: 'https://i.imgur.com/gOPWEvt.png',
  xp:90,
  recipe:[
    {
      quantity:3,
      ...lifeEssence
    }
  ]
}

const fireMote = {
  label: 'Fire Mote',
  image: 'https://i.imgur.com/UtDRRcx.png',
  xp:0,
  recipe: null
}

const fireWisp = {
  label: 'Fire Wisp',
  image: 'https://i.imgur.com/EqoHPNy.png',
  xp:15,
  recipe:[
    {
      quantity:5,
      ...fireMote
    }
  ]
}

const fireEssence = {
  label: 'Fire Essence',
  image: 'https://i.imgur.com/aUl3IC2.png',
  xp:48,
  recipe:[
    {
      quantity:4,
      ...fireWisp
    }
  ]
}

const fireQuintessence = {
  label: 'Fire Quintessence',
  image: 'https://i.imgur.com/7QhJzBL.png',
  xp:90,
  recipe:[
    {
      quantity:3,
      ...fireEssence
    }
  ]
}

const deathMote = {
  label: 'Death Mote',
  image: 'https://i.imgur.com/b9NdbVF.png',
  xp:0,
  recipe: null
}

const deathWisp = {
  label: 'Death Wisp',
  image: 'https://i.imgur.com/dIOj9Uv.png',
  xp:15,
  recipe:[
    {
      quantity:5,
      ...deathMote
    }
  ]
}

const deathEssence = {
  label: 'Death Essence',
  image: 'https://i.imgur.com/KauGtLf.png',
  xp:48,
  recipe:[
    {
      quantity:4,
      ...deathWisp
    }
  ]
}

const deathQuintessence = {
  label: 'Death Quintessence',
  image: 'https://i.imgur.com/SyY8MdK.png',
  xp:90,
  recipe:[
    {
      quantity:3,
      ...deathEssence
    }
  ]
}

const earthMote = {
  label: 'Earth Mote',
  image: 'https://i.imgur.com/4GSL34l.png',
  xp:0,
  recipe: null
}

const earthWisp = {
  label: 'Earth Wisp',
  image: 'https://i.imgur.com/DagQjtI.png',
  xp:15,
  recipe:[
    {
      quantity:5,
      ...earthMote
    }
  ]
}

const earthEssence = {
  label: 'Earth Essence',
  image: 'https://i.imgur.com/2dnGFTb.png',
  xp:48,
  recipe:[
    {
      quantity:4,
      ...earthWisp
    }
  ]
}

const earthQuintessence = {
  label: 'Earth Quintessence',
  image: 'https://i.imgur.com/O4bJon7.png',
  xp:90,
  recipe:[
    {
      quantity:3,
      ...earthEssence
    }
  ]
}

const waterMote = {
  label: 'Water Mote',
  image: 'https://i.imgur.com/z3o7kmy.png',
  xp:0,
  recipe: null
}

const waterWisp = {
  label: 'Water Wisp',
  image: 'https://i.imgur.com/x3HUEXY.png',
  xp:15,
  recipe:[
    {
      quantity:5,
      ...waterMote
    }
  ]
}

const waterEssence = {
  label: 'Water Essence',
  image: 'https://i.imgur.com/cSR9y0C.png',
  xp:48,
  recipe:[
    {
      quantity:4,
      ...waterWisp
    }
  ]
}

const waterQuintessence = {
  label: 'Water Quintessence',
  image: 'https://i.imgur.com/Sj3svLs.png',
  xp:90,
  recipe:[
    {
      quantity:3,
      ...waterEssence
    }
  ]
}

const eternalHearth = {
  label: 'Eternal Hearth',
  image: 'https://i.imgur.com/uit1UuA.png',
  xp:1350,
  recipe:[
    {
      quantity:50,
      ...deathMote
    },
    {
      quantity:50,
      ...lifeMote
    },
    {
      quantity:50,
      ...soulMote
    }
  ]
}

const elementalHearth = {
  label: 'Elemental Hearth',
  image: 'https://i.imgur.com/ifAoUJE.png',
  xp:1800,
  recipe:[
    {
      quantity:50,
      ...waterMote
    },
    {
      quantity:50,
      ...earthMote
    },
    {
      quantity:50,
      ...fireMote
    },
    {
      quantity:50,
      ...airMote
    }
  ]
}

const energyCore = {
  label: 'Energy Core',
  image: 'https://i.imgur.com/jCody0z.png',
  xp:18,
  recipe:[
    {
      quantity:1,
      ...elementalHearth
    },
    {
      quantity:1,
      ...eternalHearth
    }
  ]
}

const voidbentIngot = {
  label: 'Voidbent Ingot',
  image: 'https://i.imgur.com/6w3cMZN.png',
  xp:0,
  recipe:[
    {
      quantity:1,
      ...voidOre
    },
    {
      quantity:1,
      ...voidEssence
    },
    {
      quantity:10,
      ...energyCore
    }
  ]
}

  const items = [
  sandpaper,
  fineSandpaper,
  obsidianSandpaper,
  weakSolvent,
  potentSolvent,
  pureSolvent,
  silkWeave,
  wireWeave,
  sandflux,
  shellDustSandflux,
  tannin,
  restedTannin,
  agedTannin,
  timber,
  lumber,
  wyrdWoodPlanks,
  ironWoodPlanks,
  glitteringEbony,
  coarseLeather,
  ruggedLeather,
  layeredLeather,
  infusedLeather,
  charcoal,
  ironOre,
  ironIngot,
  silverIngot,
  goldIngot,
  platinumIngot,
  starmetalIngot,
  orichalcumIngot,
  voidbentIngot,
  asmodeum,
  airWisp,
  airEssence,
  airQuintessence,
  waterWisp,
  waterEssence,
  waterQuintessence,
  fireWisp,
  fireEssence,
  fireQuintessence,
  earthWisp,
  earthEssence,
  earthQuintessence,
  soulWisp,
  soulEssence,
  soulQuintessence,
  deathWisp,
  deathEssence,
  deathQuintessence,
  lifeWisp,
  lifeEssence,
  lifeQuintessence,
  energyCore,
  elementalHearth,
  eternalHearth,
  runicLeather
]

export default items