const fastifyPlugin = require("fastify-plugin");
const apiRouter = require("./routes/api/apiRouter");

async function app(fastify, options) {
    
    fastify.register(apiRouter, {prefix: "/api"})
    
}

module.exports = fastifyPlugin(app); // making plugin only for based APP