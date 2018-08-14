const Eris = require('eris');
const auth = require('./auth');
const bot = new Eris(auth.token);
let prefix = "m!";


bot.on('messageCreate', function(message) {
    if (message.content == '!ping') {
        message.channel.createMessage('Pong!');
      }
});

bot.on("ready", () => {
    console.log("Ready!");
    
    const games = [{
     
        game: `over ${bot.users.toLocaleString()} users // m!help // ${bot.guilds.size.toLocaleString()} Guild${bot.guilds.size > 1 ? "s" : ""}`,
        type: 3
      }];
       
   

        bot.editStatus('dnd', {
            name: games,
              
            type: games.type,
            url: games.url ? games.url : null
          });
});
const Base = require('eris-sharder').Base;
class Class extends Base{
    constructor(bot) {
        super(bot);
    }

    launch() {

    }

}

module.exports = Class;

bot.connect();