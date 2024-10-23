const fastifyPlugin = require("fastify-plugin");

class TodoService{
    
    constructor(todoRepository){
        this.todoRepository = todoRepository ;
    }

    create(todoText){
        return this.todoRepository.create(todoText);
    }

    getAll(){
        return this.todoRepository.getAll();
    }

    getOne(id){
        return this.todoRepository.getOne(id);
    }

    deleteOne(id){
        return this.todoRepository.deleteOne(id);
    }

    deleteAll(){
        return this.todoRepository.deleteAll();
    }

}

async function todoService(fastify, options){

    const {todoRepository} = fastify ; // we registerd this in repository>todoRepository.js

    const service = new TodoService(todoRepository);
    fastify.decorate('todoService', service);   
    

}

module.exports = fastifyPlugin(todoService);