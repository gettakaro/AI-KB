---
id: "faq-005-set-reset-regions"
title: "How do I set reset regions?"
category: "7-days-to-die"
tags: ["7d2d", "cpm", "reset-regions", "mrr", "world-reset"]
sourceThreadIds: []
createdAt: "2025-01-08T10:30:00.000Z"
---

# How do I set reset regions?

## Overview

Reset Regions are a CPM feature that allows administrators to mark 500x500 square areas of the map to be erased (reset) during a special reboot. This restores the area back to its original state from day 1 of the server, removing all player modifications and restoring buildings and resources.

## Understanding Reset Regions

- Each region is **500x500 blocks** in size
- Regions restore everything to **day 1 conditions**
- **Land claim blocks cannot be placed** in reset regions
- Any existing LCBs are **immediately deleted** when a region is marked for reset
- Players in the area during reset may fall to their death if they were on structures

## Viewing Regions on Map

Use Alloc's Live Map to see the region grid:
1. Open your server's web map
2. Enable **"Region File"** checkbox in the upper right corner
3. Enable **"Reset Regions"** checkbox to see marked regions in red

## Command Reference (MRR)

The `mrr` command is used to manage reset regions:

### Basic Commands
```
mrr                     # Show your current region
mrr list               # List all marked reset regions
mrr notificationtext enter:exit  # Edit region entry/exit messages
```

### Adding Reset Regions

**Mark your current region:**
```
mrr add
```

**Mark specific region by name:**
```
mrr add r.0.0.7rg
```

**Mark multiple regions by coordinates:**
```
mrr add <w_boundary> <e_boundary> <n_boundary> <s_boundary>
```

**Example coordinate usage:**
```
mrr add 482 580 3084 3000
mrr add -150 225 50 -300
```

### Removing Reset Regions

**Remove your current region:**
```
mrr remove
```

**Remove specific region by name:**
```
mrr remove r.0.0.7rg
```

**Remove regions by coordinates:**
```
mrr remove <w_boundary> <e_boundary> <n_boundary> <s_boundary>
```

## Coordinate Guidelines

- **West and South coordinates are negative values**
- Use the **furthest** coordinate in each direction:
  - If you have 482E and 580E, use 482 as West boundary (more westward)
  - If you have 3084N and 3000N, use 3084 as North boundary (more northward)

## Executing Resets

### Reset Marked Regions
```
resetregions
```
This resets all regions marked with `mrr add` commands.

### Reset Unclaimed Regions
```
resetunclaimedregions
```
This resets **all regions** that don't contain:
- Land Claim Blocks (including their protection radius)
- Normal Advanced Claims

## Advanced Claims and Reset Regions

You can also create **Reset-type Advanced Claims** for precise chunk-level resets:

```
ccc add <claimid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> reset
```

**Execute reset claims:**
```
rac <claimid>                    # Reset specific claim
rac <claimid> kicklockreboot     # Kick players, lock server, and reboot after reset
```

## Best Practices

### Common Use Cases
1. **City refreshing** - Mark major cities to refresh loot and resources
2. **POI restoration** - Reset heavily damaged Points of Interest
3. **Anti-griefing** - Reset areas with unwanted modifications
4. **Resource renewal** - Refresh mining areas and forests

### Scheduling Resets
Set up automated resets using CSMM scheduled tasks:
- **Daily reboots** for regular maintenance
- **Weekly reset reboots** for marked regions (e.g., Friday mornings)

### Safety Considerations
- **Server should be empty** during resets for best results
- **Kick online players** automatically if reset runs with players online
- **Plan timing** when server has low/no player count
- **Backup your world** before major reset operations

## Important Notes

- Reset regions are **permanent until manually removed**
- **Entire region files** are reset, not partial areas
- Players receive **notification messages** when entering/exiting marked regions
- LCBs and Normal Advanced Claims **protect regions** from unclaimed resets
- Reset operation can be **memory intensive** - use smaller claims for large areas

## Troubleshooting

If you're stuck "in reset zone":
1. Use `debuffplayer <entityId> <buffname>` to remove the buff
2. Check `mrr list` to verify region status
3. Verify regions.txt file in `/Data/Saves/ResetRegions/`
4. Restart server if issues persist