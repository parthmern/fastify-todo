const app = require("./app");
const { PORT } = require("./config/serverConfig");

const fastify = require("fastify")({ logger: false }); // root application instance (prepare whole http server for us)

// ======================================================
// life cycle event trigerring

fastify.addHook("onReady", function listener(done) {
    console.log("server is ready to take req 🔄");
    done(); // to exit from funtion
});

fastify.addHook("onClose", function listener() {
    console.log("server is stopping now 🚫");
});

// ======================================================
// routing

fastify.route({
    url:"/hello",
    method: "GET",
    handler : function (req, res){
        //console.log(this);    // fastify object
        return res.send("world");
    }
})

fastify.get("/", async (req, res) => {
    console.log("/ hitted");
    return res.send({ message: "Fastify server is up 💚" });
});

// ===================================================
// plugin (fastify, options, done)

function samplePlugin(fastify, options, done){
    console.log("Executing my plugin 🔌");
    fastify.decorate('key', 'value');   // attaching key:value pair into fastify object so can be accessible from anywhere in plugin
    console.log(fastify);   // inside this obj there is key:value pair
    done(); // donot forget 
}
fastify.register(samplePlugin); // how to register plugin

fastify.register(app);

// ===================================================

const runServer = async () => {
    try {
        await fastify.listen({ port: PORT });
        console.log(`Server is up at http://localhost:${PORT} 💚`);
        // fastify.close(); // close server connection
    } catch (err) {
        fastify.log.error(err);
        console.log(err);
    }
};

runServer();
