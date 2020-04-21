const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () =>{
    console.log('Jhonny Bot Is Now Online')
})


bot.on('message', msg=>{
    if(msg.content == "!Hi"){
        msg.reply('Hello! My Name Is Jhonny.');
    }
})

bot.on('message', msg=>{
    if(msg.content == "!hi"){
        msg.reply('Hello! My Name Is Jhonny.');
    }
})

bot.on('message', msg=>{
    if(msg.content == "!Hlw"){
        msg.reply('Hello! My Name Is Jhonny.');
    }
})

bot.on('message', msg=>{
    if(msg.content == "!hlw"){
        msg.reply('Hello! My Name Is Jhonny.');
    }
})

bot.on('message', msg=>{
    if(msg.content == "!Hello"){
        msg.reply('Hello! My Name Is Jhonny.');
    }
})

bot.on('message', msg=>{
    if(msg.content == "!hello"){
        msg.reply('Hello! My Name Is Jhonny.');
    }
})
bot.login(process.env.token);