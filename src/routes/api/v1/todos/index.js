

async function todoRouter(fastify, options) {
    fastify.get('/allTodos', (req, res)=>{
        console.log("/api/v1/todos/allTodos hitted");
        res.send("todos");
    })
}

module.exports = todoRouter; // routes donot need to convert to plugin