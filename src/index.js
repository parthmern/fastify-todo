const fastify = require("fastify")({ logger: false }); // root application instance (prepare whole http server for us)

fastify.addHook("onReady", function listener(done) {
    console.log("server is ready to take req 🔄");
    done(); // to exit from funtion
});

fastify.addHook("onClose", function listener() {
    console.log("server is stopping now 🚫");
});

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

const runServer = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log(`Server is up at http://localhost:3000 💚`);
        // fastify.close(); // close server connection
    } catch (err) {
        fastify.log.error(err);
        console.log(err);
    }
};

runServer();
