# erela.js custom filters
A plugin for erela.js to support native lavalink filters.

# Requirements
• Lavalink Server
• erela.js client (for lavalink)
• Discord API client (any for JS)

**Note**
To support this custom filters, your lavalink build must be 3.4 or above, either in old versions of lavalink will not support most of filters except equalizer filters.

# Filters

• `bass`
• `bassboost`
• `bassboosthigh`
• `classical`
• `eightd`
• `electronic`
• `errape`
• `gaming`
• `highfull`
• `highvoice`
• `karaoke`
• `nightcore`
• `party`
• `pop`
• `radio`
• `rock`
• `soft`
• `treblebass`
• `tremolo`
• `vaporewave`
• `vibrato`


# Example Usage

```js
const { Manager } = require('erela.js');
const { FilterManager } = require('erela.js-custom-filters');

const manager = new Manager({
    plugins: [
        new FilterManager()
    ]
});

// Your code goes here

// In your filter command

// Enable refers true, disable refers false
<Player>.karaok = true;
<Player>.karaok = false;

```

# License and Support
[MIT](https://github.com/Dacydl/erela.js-custom-filters/blob/main/LICENSE) C'mon
[Server](https://discord.gg/2wr59akJE6)