---
id: "faq-010-setup-cpm-protected-lobbies"
title: "How do I set up CPM protected lobbies?"
category: "7-days-to-die"
tags: ["7d2d", "cpm", "protected-lobby", "advanced-claims", "location-based-buffs", "buffs", "safe-zone"]
sourceThreadIds: []
createdAt: "2025-01-08T10:30:00.000Z"
---

# How do I set up CPM protected lobbies?

## Overview

CPM protected lobbies are special safe areas where players cannot damage blocks, use weapons, or harm each other. These lobbies are typically used as spawn areas, trading posts, or neutral zones where players can interact safely. The system combines Advanced Claims with location-based buffs to create fully protected environments.

## Method 1: Basic Protected Lobby (Recommended)

### Step 1: Create Advanced Claim
First, establish the physical boundary of your lobby using Advanced Claims:

```
ccc add <claimid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> notify
```

**Example for a 50x50 lobby:**
```
ccc add ProtectedLobby -25 25 25 -25 1000 notify:Welcome to the lobby:Leaving lobby
```

### Step 2: Configure Location-Based Buffs
Edit `/Config/buffs.xml` in your CPM mod folder and add the following buff configuration:

```xml
<!--Cant do damage to blocks-->
<buff name="cpm_tooltip_ProtectedLobby_enter" name_key="cpm_tooltip_ProtectedLobby_enter" icon="ui_game_symbol_destruction2" icon_color="46,244,41" tooltip_key="[00FF00]Welcome to the lobby[-]">
    <display_value_key value="Lobby"/> <display_value value="xxx"/> <stack_type value="ignore"/>
    <effect_group>
        <passive_effect name="BlockDamage" operation="perc_set" value="0"/>
        <passive_effect name="BlockDamage" operation="perc_add" value="-1"/>
        <passive_effect name="DisableItem" operation="base_set" value="1" tags="melee" />
        <passive_effect name="DisableItem" operation="base_set" value="1" tags="ranged" />
        <passive_effect name="DisableItem" operation="base_set" value="1" tags="perkDemolitionsExpert" />
        <passive_effect name="DisableItem" operation="base_set" value="1" tags="perkTurrets" />
    </effect_group>
</buff>

<!--Remove buff for exiting the ProtectedLobby notify claim-->
<buff name="cpm_tooltip_ProtectedLobby_exit" name_key="cpm_tooltip_ProtectedLobby_exit" icon="ui_game_symbol_add" tooltip_key="">
    <display_value_key value="Lobby"/> <display_value value="xxx"/> <stack_type value="ignore"/><duration value="1"/>
    <effect_group>
        <triggered_effect trigger="onSelfBuffStart" action="RemoveBuff" buff="cpm_tooltip_ProtectedLobby_enter"/>
        <triggered_effect trigger="onSelfBuffStart" action="RemoveBuff" buff="cpm_tooltip_ProtectedLobby_exit"/>
    </effect_group>
</buff>
```

## Method 2: Enhanced Protected Lobby with Player Protection

### Complete Protection Setup
For lobbies where you want both block protection and player invulnerability:

```xml
<!--Complete lobby protection-->
<buff name="cpm_tooltip_ProtectedLobby_enter" name_key="cpm_tooltip_ProtectedLobby_enter" icon="ui_game_symbol_destruction2" icon_color="46,244,41" tooltip_key="[00FF00]Welcome to the protected lobby[-]">
    <display_value_key value="Lobby"/> <display_value value="xxx"/> <stack_type value="ignore"/>
    <effect_group>
        <!-- Block protection -->
        <passive_effect name="BlockDamage" operation="perc_set" value="0"/>
        <passive_effect name="BlockDamage" operation="perc_add" value="-1"/>
        
        <!-- Weapon disabling -->
        <passive_effect name="DisableItem" operation="base_set" value="1" tags="melee" />
        <passive_effect name="DisableItem" operation="base_set" value="1" tags="ranged" />
        <passive_effect name="DisableItem" operation="base_set" value="1" tags="perkDemolitionsExpert" />
        <passive_effect name="DisableItem" operation="base_set" value="1" tags="perkTurrets" />
        
        <!-- Player protection -->
        <passive_effect name="GeneralDamageResist" operation="base_add" value="1"/>
        <passive_effect name="ElementalDamageResist" operation="base_add" value="200" tags="cold,heat,electrical"/>
        <passive_effect name="PhysicalDamageResist" operation="base_add" value="200"/>
        <passive_effect name="PhysicalDamageResist" operation="base_add" value="200" tags="coredamageresist"/>
    </effect_group>
</buff>
```

## Method 3: Multi-Zone Lobby System

### Creating Different Protection Levels
You can create multiple lobby zones with different protection levels:

#### Safe Trading Zone
```
ccc add TradingPost -50 50 50 -50 1000 notify:Trading post - weapons disabled:Leaving trading area
```

#### Admin Area
```
ccc add AdminLobby -10 10 10 -10 0 notify:Admin zone:Leaving admin area
```

#### Public Lobby
```
ccc add PublicLobby -100 100 100 -100 1000 notify:Public lobby - full protection:Leaving public area
```

## Alternative: Using Hostilefree Claims

### Zombie-Free Lobby
Combine with hostilefree claims to prevent zombie spawns:

```
ccc add LobbyZombieProtection -30 30 30 -30 1000 hostilefree
```

This creates a 60x60 area where:
- No zombies will spawn
- Existing zombies will despawn
- Sleepers will not activate

## Advanced Configuration

### Portal Integration
Create teleport points within your lobby:

```
ccc add LobbyPortal1 5 7 7 5 1000 portal:3:100,50,200
ccc add LobbyPortal2 -7 -5 7 5 1000 portal:3:300,50,400
```

### Speed Boost Areas
Add speed boost zones within the lobby:

```xml
<!--Run 100% faster in speed zones-->
<buff name="cpm_tooltip_SpeedRun_enter" name_key="cpm_tooltip_SpeedRun_enter" icon_color="128,0,255" icon="ui_game_symbol_run" tooltip_key="[00FF00]You are 100% faster while running![-]">
    <display_value_key value="Speedrun"/> <display_value value="xxx"/> <stack_type value="ignore"/><duration value="0"/>
    <effect_group>
        <passive_effect name="RunSpeed" operation="perc_add" value="1"/>    
    </effect_group>    
</buff>
```

## Configuration Steps

### Step-by-Step Setup

1. **Plan your lobby layout:**
   - Determine coordinates and size
   - Choose appropriate claim names
   - Plan access levels and permissions

2. **Create the base claims:**
   ```
   ccc add ProtectedLobby <coordinates> 1000 notify
   ```

3. **Edit buffs.xml:**
   - Located in `/Config/buffs.xml` in CPM mod folder
   - Add appropriate buff configurations
   - Ensure claim names match exactly

4. **Test the setup:**
   - Enter the lobby area
   - Verify buffs activate correctly
   - Test block damage prevention
   - Check weapon disabling

5. **Optional enhancements:**
   - Add hostilefree zones
   - Create portal connections
   - Configure speed boost areas

## Claim Name Requirements

### Important Naming Rules
- **Claim names must match exactly** between Advanced Claims and buff configurations
- **Case sensitive** - "ProtectedLobby" ≠ "protectedlobby"
- **No spaces** in claim names
- Use descriptive names like "MainLobby", "TradingPost", "SafeZone"

### Buff Naming Convention
Buffs follow this pattern:
- **Enter buff:** `cpm_tooltip_[ClaimName]_enter`
- **Exit buff:** `cpm_tooltip_[ClaimName]_exit`

## Testing Your Lobby

### Verification Checklist
- [ ] Players receive welcome message when entering
- [ ] Cannot damage blocks with tools
- [ ] Cannot use weapons (melee/ranged)
- [ ] Cannot place explosives or turrets
- [ ] Buffs display correctly in player UI
- [ ] Exit message appears when leaving
- [ ] Buffs are properly removed when exiting

### Common Test Commands
```
tp <coordinates>              # Teleport to lobby
ccc list                     # View all claims
ccc info <claimname>         # Check specific claim details
```

## Permissions and Access

### Access Level Configuration
- **0** = Admin only access
- **1000** = All players can enter
- **Custom levels** = Specific permission groups

### Player Whitelisting
```
ccc wl add <claimname> <playername>    # Add specific player
ccc wl add <claimname> public          # Make publicly accessible
ccc wl remove <claimname> <playername> # Remove player access
```

## Troubleshooting

### Buffs Not Working
1. **Check claim names** - must match exactly in both claim and buff
2. **Verify buffs.xml syntax** - ensure proper XML formatting
3. **Restart server** - required after buffs.xml changes
4. **Check file location** - buffs.xml must be in CPM `/Config/` folder

### Claims Not Protecting
1. **Verify coordinates** - use `ccc list` to check boundaries
2. **Check access levels** - ensure players have appropriate permissions
3. **Test proximity** - ensure you're within the claim boundaries
4. **Review notifications** - should trigger when entering/exiting

### Permission Issues
1. **Check player permission levels** - use `admin add/remove`
2. **Verify access level settings** - match claim requirements
3. **Review whitelist** - ensure players are properly whitelisted

## Performance Considerations

### Optimization Tips
- **Limit claim overlap** - avoid unnecessary claim stacking
- **Use appropriate sizes** - larger areas use more resources
- **Monitor server performance** - watch for lag with complex setups
- **Regular cleanup** - remove unused claims and buffs

### Server Impact
- Advanced Claims are processed continuously
- Location-based buffs check player positions frequently
- Multiple overlapping claims can impact performance
- Consider server capacity when planning large lobby systems

## Best Practices

### Design Guidelines
- **Keep lobbies reasonably sized** - avoid massive protected areas
- **Use clear boundaries** - players should understand lobby limits
- **Provide clear messaging** - use descriptive notification text
- **Test thoroughly** - verify all features work as expected

### Maintenance
- **Regular backups** - save claim and buff configurations
- **Update documentation** - keep track of claim locations and purposes
- **Monitor logs** - check for errors or issues
- **Player feedback** - gather input on lobby functionality

## Common Use Cases

### Spawn Protection
Create a protected spawn area where new players can orient themselves:
```
ccc add SpawnLobby -25 25 25 -25 1000 notify:Safe spawn area:Leaving spawn protection
```

### Trading Posts
Establish neutral trading zones:
```
ccc add TradingHub -40 40 40 -40 1000 notify:Trading post - no weapons:Leaving trading area
```

### Event Areas
Set up protected spaces for server events:
```
ccc add EventArea -60 60 60 -60 1000 notify:Event zone - weapons disabled:Leaving event area
```

### Admin Meeting Rooms
Create protected spaces for admin activities:
```
ccc add AdminHall -15 15 15 -15 0 notify:Admin area:Leaving admin zone
```

## Related Features

**Other protective measures to combine with lobbies:**
- `/bubble` - Personal player protection
- `protectplayer` - Admin protection commands
- `hostilefree` claims - Zombie-free zones
- PvP/PvE zone configuration
- Custom chat group colors for lobby areas

**Integration possibilities:**
- CSMM custom commands for lobby management
- Discord notifications for lobby events
- Automated cleanup and maintenance scripts