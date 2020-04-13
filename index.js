const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'Njk4Nzk3MTA4NTY3ODY3NDYy.XpLEcg.djoPAq1lb-MAhoruGhNrTl3YTCc';
const PREFIX = 'dui ';
bot.on('ready', () =>{
    console.log('It Aliveee');
})
bot.on('message', msg=>{
    let args = msg.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'bal':
            msg.reply('Ko lam ma doi an thi chi co an dau buoi an cut');
        break;
        case 'work':
            msg.reply('The moi la chau ngoan bac ho');
        break;
    }  
})
bot.login(token);