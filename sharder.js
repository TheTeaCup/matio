const Sharder = require('eris-sharder').Master;
const auth = require('./auth');
const sharder = new Sharder(auth.token, "/eris.js", {
    stats: true,
    debug: true,
    guildsPerShard: "1500",
    name: "ExampleBot",
    webhooks: {
      shard: {
        id: "478737432594874369",
        token: "a8kD0Sr0QoauL2MnvKe7HwfTPxVwRwufIbHBz0j5TwiHKJ50Hq6UB452dea89uxzkOZe"
      },
       cluster: {
        id: "478737432594874369",
        token: "a8kD0Sr0QoauL2MnvKe7HwfTPxVwRwufIbHBz0j5TwiHKJ50Hq6UB452dea89uxzkOZe"
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