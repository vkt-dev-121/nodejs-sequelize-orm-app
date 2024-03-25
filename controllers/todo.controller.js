const Todo = require('../models/todo.model')

exports.createTodo = async(req,res) => {
    try {
        const {title, description} = req.body
        const todo = await Todo.create({
            title,description
        });
        
        res.status(201).json(todo)

    } catch (error) {
       res.status(500).json({message : error.message}) 
    }
}

exports.listTodos = async (req,res) => {
    try {
        const todos = await Todo.findAll();

        res.status(200).json(todos)
    } catch (error) {
        res.status(500).json({message : error.message}) 
    }
}