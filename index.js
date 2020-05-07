const server = require("./api/server.js");

//heroku will add the PORT variable to the environment. then we have || 5000 for local usage
//adding this for a push to make sure heroku is doing automatic deploys
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
