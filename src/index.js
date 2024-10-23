const fastify = require("fastify")({ logger: true });

const runServer = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log(`Server is running at http://localhost:3000 💚`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

runServer();
