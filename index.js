const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTg0NjkxODg0MDAyMzc3NzU3.XSYWxA.x5ONxUgXArMayQgM-ZW-NK7qtsY';

const PREFIX = 'a!';

var version = '1.0.0';

bot.on('ready', () =>{
    console.log('I am ready!');
    bot.user.setActivity('AtPeps playing...', {type: "WATCHING"}).catch(console.error);

})

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(channel => channel.name === '👋🏻-welcome');
    if (!channel) return;
    channel.send(`Hey ${member}, welcome in ATLAS :globe_with_meridians:!

Enjoy your permanence with the other members!`);
  });
  

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!');
            break;
        case 'website':
            message.channel.sendMessage('https://www.instagram.com/archiekayne');
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version - ' + version);
            }else{
                message.channel.sendMessage('Invalid argument');
            }
            break;
        case 'clear':
            if(!args[1]) return message.reply('Please define a second argument')
            message.channel.bulkDelete(args[1]);
            break;

    }

})

bot.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('a!kick')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.kick('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`I've successfully kicked ${user.tag}. I'm wondering what happened.`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('That user isn\'t in this guild!');
        }
      // Otherwise, if no user was mentioned
      } else {
        message.reply('You didn\'t mention the user to kick!');
      }
    }
  });

  bot.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('a!ban')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
           */
          member.ban({
            reason: 'They were bad!',
          }).then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`I've successfully banned ${user.tag}. Thor has striked with his hammer!`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('That user isn\'t in this guild!');
        }
      } else {
      // Otherwise, if no user was mentioned
        message.reply('You didn\'t mention the user to ban!');
      }
    }
  });

  // Create an event listener for messages
bot.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'avatar') {
      // Send the user's avatar URL
      message.reply(message.author.avatarURL);
    }
  });
bot.login(token);