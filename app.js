const DiscordRPC = require('discord-rpc');

const clientId = '1190262987299246100';
const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
    rpc.setActivity({
        details: 'in starblast.io',
        state: 'Enjoying it',
        largeImageKey: 'sbbeta',
        startTimestamp: Math.floor(Date.now() / 1000),
        instance: false,
    });
});

rpc.login({ clientId }).catch(console.error);