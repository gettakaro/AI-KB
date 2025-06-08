---
id: "faq-004-protect-safe-areas"
title: "How do I protect safe area?"
category: "7-days-to-die"
tags: ["7d2d", "cpm", "protection", "safe-area", "advanced-claims", "bubble"]
sourceThreadIds: []
createdAt: "2025-01-08T10:30:00.000Z"
---

# How do I protect safe area?

## Overview

There are several ways to protect safe areas in 7 Days to Die using CPM features. You can use Advanced Claims, Protective Bubbles, or location-based buffs depending on your specific needs.

## Method 1: Advanced Claims

Advanced Claims are the most comprehensive way to protect areas. They create rectangular zones with specific rules.

### Basic Protection Claim
```
ccc add <claimid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel>
```

**Example:**
```
ccc add safezone 100 200 300 200 1
```

### Hostilefree Claims
Creates an area where all hostile entities despawn automatically:
```
ccc add <claimid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> hostilefree
```

**Example:**
```
ccc add spawnarea 50 150 250 150 1 hostilefree
```

### Combined Protection (Base + Hostilefree)
For maximum protection, create both a normal claim and a hostilefree claim:
```
ccc add mybase 100 200 300 200 1
ccc add mybase_hostile 80 220 320 180 1 hostilefree
```

## Method 2: Protective Bubble

The protective bubble automatically kills hostile creatures within a 25-meter radius.

### Using Chat Commands
- `/bubble` - Toggle bubble around yourself
- `/bubble <playername>` - Toggle bubble around another player

### Using Console Commands
```
protectplayer <entityId>
```

## Method 3: Location-Based Buffs

Create custom safe zones using the Advanced Claim notify system with buffs.

### Example: Invulnerability Safe Zone
1. Create a notify claim:
```
ccc add SafeZone 100 200 300 200 1 "notify:You are safe!:Be careful now!"
```

2. Add custom buffs to `/Config/buffs.xml` in CPM folder:
```xml
<buff name="cpm_tooltip_SafeZone_enter" icon="ui_game_symbol_add" icon_color="46,244,41" tooltip_key="[00FF00]You are safe from harm now.[-]">
    <effect_group>
        <passive_effect name="GeneralDamageResist" operation="base_add" value="1"/>
        <passive_effect name="ElementalDamageResist" operation="base_add" value="200" tags="cold,heat,electrical"/>
        <passive_effect name="PhysicalDamageResist" operation="base_add" value="200"/>
    </effect_group>
</buff>
```

## Method 4: Using POI Protection

For existing buildings, you can modify the POI file to make it a trader area:

1. Find the POI's `.xml` file in your prefabs folder
2. Add this line to the `<property>` section:
```xml
<property name="TraderArea" value="True" />
```

This makes the area behave like a trader zone (no zombie spawns, indestructible).

## Custom Commands for Players

Allow players to create their own protected areas:

### Player-Created Advanced Claims
```
ccc radius 20 ${entityId} ${steamId} 1; ccc radius 30 ${steamId}_hostile 1 hostilefree
```

### Simple Heal and Protect Command
```
buffplayer ${entityId} firstAid; debuffplayer ${entityId} bleeding; protectplayer ${entityId}
```

## Important Notes

- **Access Levels**: Use permission levels to control who can enter protected areas
- **Whitelisting**: Players can whitelist friends using claim management commands
- **Overlap Prevention**: Normal advanced claims cannot overlap with each other
- **Hostilefree Zones**: Zombies will disappear without giving XP, so players can't farm in these areas
- **Trader Areas**: POI trader areas provide complete protection but are static

## Related Commands

- `ccc list` - List all advanced claims
- `ccc remove <claimid>` - Remove a claim
- `ccc radius <radius> <claimid> <accessLevel>` - Create circular claim
- `protectplayer <entityId>` - Toggle protective bubble
- `debuffplayer <entityId> <buffname>` - Remove specific buffs