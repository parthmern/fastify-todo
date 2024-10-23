const { getAllTodos, createTodo, getTodo } = require("../../../../controllers/todoController");


async function todoRouter(fastify, options) {
    // fastify.get('/allTodos', (req, res)=>{
    //     console.log("/api/v1/todos/allTodos hitted");
    //     res.send("todos");
    // })

    fastify.get('/allTodos', getAllTodos);
    fastify.post('/createTodo', createTodo);
    fastify.get('/getTodo', getTodo);
}

module.exports = todoRouter; // routes donot need to convert to plugin