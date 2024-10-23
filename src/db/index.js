const fastifyPlugin = require("fastify-plugin");

async function db(fastify, options){

    // inmemory db just array
    const dbInMemory =  {
        todos : []
    };

    // db : basic object { todos:[] }
    // key : value
    fastify.decorate('db', dbInMemory)

}

module.exports = fastifyPlugin(db);