

async function getAllTodos(req, res){

    console.log("/api/v1/todos/allTodos hitted");

    const {todoService} = this; // fastify instance
   
    const allTodos = await todoService.getAll();

    return res.send(allTodos);

}

async function createTodo(req,res) {

    console.log("/api/v1/todos/createTodo hitted");

    const {todoText} = req.body;

    const {todoService} = this; // fastify instance

    const ans = await todoService.create(todoText);

    return res.status(201).send({ans});

}

async function getTodo(req,res) {

    console.log("/api/v1/todos/getTodo hitted");

    const { todoId } = req.query || req.body;

    const {todoService} = this; // fastify instance

    const ans = await todoService.getOne(todoId);

    return res.status(201).send({ans});

}


module.exports = {getAllTodos, createTodo, getTodo};