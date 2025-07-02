const express = require('express');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Set the port
const PORT = 3000;

app.use(express.json()); // Cho phép đọc JSON từ request body

// Define a route
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1><p>This is a basic Express.js server.</p>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// lists todos
let todos = [];

// GET - Lấy danh sách todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// POST - Thêm một todo mới
app.post('/todos', (req, res) => {
    const todo = req.body;
    if (!todo || !todo.text) {
        return res.status(400).json({ error: 'Todo text is required' });
    }

    // Tạo unique ID cho todo
    let newId;
    do {
        newId = Math.floor(Math.random() * 1000000); // Random ID từ 0-999999
    } while (todos.some(t => t.id === newId)); // Lặp lại nếu ID đã tồn tại

    const newTodo = {
        id: newId,
        text: todo.text,
        completed: todo.completed || false
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT - Cập nhật một todo
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    const updatedTodo = req.body;
    todo.text = updatedTodo.text || todo.text;
    res.json(todo);
});

// DELETE - Xóa một todo
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    todos.splice(index, 1);
    res.status(204).send();
});

// Kết nối MongoDB

mongoose.connect('mongodb+srv://AndrewDoan01:Doanquocan@2005@cluster0.xqxe4o1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✅ Kết nối MongoDB thành công'))
    .catch(err => console.error('❌ Lỗi kết nối MongoDB:', err));
