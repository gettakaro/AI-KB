---
id: "faq-001-map-not-visible"
title: "My map is not visible"
category: "7-days-to-die"
tags: ["7d2d", "csmm", "map"]
sourceThreadIds: []
createdAt: "2024-01-15T10:30:00.000Z"
---

# My map is not visible

## Server Configuration

Ensure you have the map enabled in your server config. Add the following to your `serverconfig.xml`:

```xml
<property name="WebMapEnabled" value="true"/>
<property name="WebMapPort" value="8082"/>
<property name="WebMapHostname" value="0.0.0.0"/>
```

## Map Generation

After enabling the map in your server config, you can use the `visitmap full` command to display the map. Note that visitmap can take a while to generate the map, and it may take up significant CPU and memory resources, so it is recommended to run it during off-peak hours.

## Troubleshooting

### Map Still Not Visible
1. **Check port accessibility**: The web map typically runs on your server port +2. For example, if your server runs on port 25000, the map will be on port 25002.
2. **Verify map generation**: Use `visitmap` command to ensure the map tiles are being generated.
3. **Delete corrupted map data**: If the map appears broken, try deleting the `cpmmap` folder and regenerating with `visitmap full`.

### Different Map Types
- **Allocs Map**: Usually accessible at `http://your-server-ip:port+2/legacymap/index.html`
- **CPM Map**: Accessible at `http://your-server-ip:port+3/static/index.html` (if using CPM mod)

### Common Issues
- Map generation incomplete: Run `visitmap full` and wait for completion
- Port conflicts: Ensure the map ports are not blocked by firewall
- Missing map files: Regenerate map data if files are corrupted or missing
