const Sharder = require('eris-sharder').Master;
const auth = require('./auth');
const sharder = new Sharder(auth.token, "/eris.js", {
    stats: true,
    debug: true,
    guildsPerShard: "1500",
    name: "Matio",
    webhooks: {
      shard: {
        id: "",
        token: ""
      },
       cluster: {
        id: "",
        token: ""
      }
    },
    clientOptions: {
        messageLimit: 150,
        defaultImageFormat: "png"
    }
  });
sharder.on("stats", stats => {
    console.log(stats);
  });
