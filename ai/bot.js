import { Client, GatewayIntentBits } from "discord.js";
import {aiCall} from "./test.js"
import "dotenv/config";


const TOKEN = process.env.DISCORD_TOKEN

const client = new Client ({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

function readyCall(ready){
    if(ready){
        console.log(`bot${ready.user.tag} er aktiv`)
    }
}

async function massageFn(message) {
    if (message.author.bot) {
        return;
    }

    if (message.content) {
        message.channel.send(await aiCall(massage.content))
    }
}


client.on("ready", readyCall);
client.on("messageCreate", massageFn);
client.login(TOKEN);