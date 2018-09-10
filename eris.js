
const prefix = "m!";


const Base = require('eris-sharder').Base;
class Class extends Base{
    constructor(bot) {
        super(bot);
    }

    launch() {
		/*
		 * this occurs after the "ready" event, so you just do whatever you would usually do at the start of launch()
		 * the bot instance is a property of the Base class, so access it with "this.bot"
		 */
		console.log("Ready!");
		const games = [
			{
				game: `over ${bot.users.toLocaleString()} users // m!help // ${bot.guilds.size.toLocaleString()} Guild${bot.guilds.size > 1 ? "s" : ""}`,
				type: 3
			}
		];
		
		this.bot.editStatus('dnd', {
			name: games,
			type: games.type,
			url: games.url ? games.url : null
		});
		
		this.bot.on('messageCreate', function(message) {
			if (message.content == '!ping') {
				message.channel.createMessage('Pong!');
			}
		});
		
    }

}
module.exports = Class;
