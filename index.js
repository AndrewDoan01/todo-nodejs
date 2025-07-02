const express = require('express');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Set the port
const PORT = 3000;

app.use(express.json()); // Cho phép đọc JSON từ request body

// MongoDB Schema
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true // Tự động thêm createdAt và updatedAt
});

const Todo = mongoose.model('Todo', todoSchema);

// Kết nối MongoDB
mongoose.connect('mongodb+srv://AndrewDoan01:Doanquocan@2005@cluster0.xqxe4o1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✅ Kết nối MongoDB thành công'))
    .catch(err => console.error('❌ Lỗi kết nối MongoDB:', err));

// Define a route
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1><p>This is a basic Express.js server.</p>');
});

// GET - Lấy danh sách todos từ MongoDB
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi lấy danh sách todos' });
    }
});

// POST - Thêm một todo mới vào MongoDB
app.post('/todos', async (req, res) => {
    try {
        const { text, completed } = req.body;
        if (!text) {
            return res.status(400).json({ error: 'Todo text is required' });
        }

        const newTodo = new Todo({
            text,
            completed: completed || false
        });

        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi tạo todo mới' });
    }
});

// PUT - Cập nhật một todo trong MongoDB
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { text, completed } = req.body;

        // Kiểm tra ID có đúng format ObjectId không
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid todo ID format' });
        }

        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { text, completed },
            { new: true, runValidators: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi cập nhật todo' });
    }
});

// DELETE - Xóa một todo từ MongoDB
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Kiểm tra ID có đúng format ObjectId không
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid todo ID format' });
        }

        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi xóa todo' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
