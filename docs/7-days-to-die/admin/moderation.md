# Server Moderation

Comprehensive guide to moderating your 7 Days to Die server and maintaining a positive community environment.

## Moderation Tools Overview

### Built-in Commands
- Player management (kick, ban, mute)
- Chat monitoring and control
- World modification prevention
- Administrative messaging

### External Tools
- Log analysis utilities
- Discord integration bots
- Automated moderation scripts

## Player Management

### Dealing with Disruptive Players

#### Immediate Actions
```bash
# Warn player publicly
say "PlayerName, please follow server rules"

# Private message to player
pm "PlayerName" "This is a warning about your behavior"

# Temporary kick
kick "PlayerName"
```

#### Progressive Discipline
1. **Verbal Warning**: Use `pm` or `say` command
2. **Temporary Kick**: Remove player briefly
3. **Short Ban**: 1-24 hour ban
4. **Extended Ban**: Days to weeks
5. **Permanent Ban**: Complete removal

### Ban Management

#### Adding Bans
```bash
# Permanent ban
ban add "PlayerName" "Reason for ban"

# Ban by Steam ID (recommended)
ban add 76561198123456789 "Griefing and rule violations"

# Temporary ban (if supported by mods)
tempban "PlayerName" 24h "Toxic behavior"
```

#### Managing Ban List
```bash
# List all bans
ban list

# Remove ban
ban remove "PlayerName"

# Check specific ban
ban info "PlayerName"
```

## Chat Moderation

### Monitoring Chat
- Watch for inappropriate language
- Identify spam or advertising
- Detect coordinated griefing
- Monitor for real-money trading

### Chat Commands
```bash
# Server-wide message
say "Server rules reminder: No griefing allowed"

# Private message
pm "PlayerName" "Please use appropriate language"

# Mute player (if available via mods)
mute "PlayerName" 30m
```

## Anti-Griefing Measures

### Protection Strategies

#### Land Claim Blocks (LCB)
- Educate players about proper LCB placement
- Monitor for LCB abuse or blocking
- Set appropriate LCB protection values

#### Building Regulations
```xml
<!-- In serverconfig.xml -->
<property name="LandClaimSize" value="41"/>
<property name="LandClaimDeadZone" value="30"/>
<property name="LandClaimExpiryTime" value="7"/>
<property name="LandClaimDecayMode" value="0"/>
```

### Handling Griefing Reports

#### Investigation Process
1. **Gather Evidence**: Screenshots, player reports, logs
2. **Check Logs**: Review server logs for suspicious activity
3. **Assess Damage**: Evaluate extent of griefing
4. **Take Action**: Apply appropriate punishment
5. **Restore Damage**: Help victims rebuild if necessary

#### Evidence Collection
```bash
# Check player activity
lpi "SuspectedPlayer"

# Review recent connections
listplayersextended

# Check world modifications (requires mods/tools)
# Review backup differences
```

## Rule Enforcement

### Establishing Clear Rules

#### Essential Server Rules
1. **No Griefing**: Destruction of other players' property
2. **No Cheating**: Hacking, exploiting, or duping
3. **Respectful Communication**: No hate speech or harassment
4. **No Spam**: Chat or structure spam
5. **Land Claim Etiquette**: Proper placement and sizing

#### Communicating Rules
- Display rules in server description
- Create welcome messages for new players
- Post rules on Discord/website
- Regular rule reminders

### Documentation

#### Incident Reports
Create standardized reports for violations:
```
Date: 2024-01-15
Player: ExamplePlayer (Steam ID: 76561198123456789)
Violation: Griefing - Destroyed NewPlayer's base
Evidence: Screenshots, witness reports
Action Taken: 3-day ban
Notes: Second offense, escalated punishment
```

## Automated Moderation

### Log Monitoring Scripts

#### Bash Script Example
```bash
#!/bin/bash
# Monitor for common grief patterns
tail -f output_log.txt | grep -E "(destroyed|placed)" | while read line; do
    # Process destruction events
    echo "$(date): $line" >> grief_monitor.log
done
```

### Third-Party Tools
- **CSMM**: Comprehensive server management
- **Discord Bots**: Automated notifications
- **Log Analyzers**: Pattern detection

## Player Appeal Process

### Handling Ban Appeals

#### Appeal Requirements
- Steam ID and in-game name
- Date of ban and reason
- Player's explanation
- Request for review

#### Review Process
1. **Verify Identity**: Confirm Steam ID matches
2. **Review Evidence**: Check original ban documentation
3. **Consider Circumstances**: Evaluate player explanation
4. **Make Decision**: Maintain, reduce, or remove ban
5. **Communicate Result**: Inform player of decision

## Community Building

### Positive Reinforcement
- Recognize helpful players
- Reward good behavior
- Create community events
- Establish veteran player mentorship

### Conflict Resolution
- Mediate player disputes
- Facilitate communication
- Find win-win solutions
- Prevent escalation

## Emergency Procedures

### Server Under Attack
```bash
# Quick server save
saveworld

# Emergency shutdown if needed
shutdown

# Mass kick if necessary
# (requires scripting or manual execution)
```

### Coordinated Griefing Response
1. **Document Everything**: Screenshots and logs
2. **Immediate Bans**: Remove all involved players
3. **Assess Damage**: Evaluate world corruption
4. **Restore from Backup**: If damage is severe
5. **Strengthen Defenses**: Update rules and monitoring

## Staff Training

### New Moderator Checklist
- [ ] Admin permissions configured
- [ ] Rules and procedures understood
- [ ] Communication tools access
- [ ] Escalation procedures known
- [ ] Documentation requirements clear

### Regular Training Topics
- De-escalation techniques
- Evidence collection
- Fair punishment guidelines
- Community engagement

## Next Steps

- Review [troubleshooting guides](../troubleshooting/common-issues)
- Learn about [CSMM integration](../../csmm/features/discord-integration)
- Explore [automated solutions](../../takaro/config/modules)