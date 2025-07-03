# 📝 Todo App

![Node.js CI](https://github.com/AndrewDoan01/todo-nodejs/workflows/Node.js%20CI/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)

Một ứng dụng Todo đơn giản được xây dựng với **Express.js** và **MongoDB**, hỗ trợ đầy đủ CRUD operations và giao diện web responsive.

## ✨ Tính năng

- ➕ **Thêm todo mới** với validation
- ✅ **Đánh dấu hoàn thành/chưa hoàn thành**
- ✏️ **Chỉnh sửa nội dung** todo
- 🗑️ **Xóa todo** với xác nhận
- 🔄 **Làm mới danh sách**
- 📱 **Responsive design** cho mobile và desktop
- 🇻🇳 **Hỗ trợ tiếng Việt** hoàn toàn

## 🚀 Công nghệ sử dụng

### Backend
- **Node.js** (>= 16.0.0)
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM cho MongoDB

### Frontend
- **HTML5/CSS3** - Giao diện
- **JavaScript (ES6+)** - Logic frontend
- **Fetch API** - Gọi REST API

## 📦 Cài đặt

### 1. Clone repository
```bash
git clone https://github.com/AndrewDoan01/todo-nodejs.git
cd todo-nodejs
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Cấu hình MongoDB
- Tạo tài khoản MongoDB Atlas hoặc cài đặt MongoDB local
- Cập nhật connection string trong `index.js`

### 4. Chạy ứng dụng
```bash
# Development mode với nodemon
npm run dev

# Production mode
npm start
```

### 5. Mở trình duyệt
- **Backend API**: http://localhost:5000
- **Frontend**: Mở file `index.html` trong trình duyệt

## 🔧 API Endpoints

| Method   | Endpoint     | Mô tả            |
| -------- | ------------ | ---------------- |
| `GET`    | `/`          | Trang chính      |
| `GET`    | `/todos`     | Lấy tất cả todos |
| `POST`   | `/todos`     | Tạo todo mới     |
| `PUT`    | `/todos/:id` | Cập nhật todo    |
| `DELETE` | `/todos/:id` | Xóa todo         |

### Ví dụ API Usage

#### Lấy tất cả todos
```javascript
GET /todos
Response: [
  {
    "_id": "507f1f77bcf86cd799439011",
    "text": "Học Express.js",
    "completed": false,
    "createdAt": "2025-07-02T10:30:00.000Z",
    "updatedAt": "2025-07-02T10:30:00.000Z"
  }
]
```

#### Tạo todo mới
```javascript
POST /todos
Content-Type: application/json

{
  "text": "Hoàn thành dự án",
  "completed": false
}
```

## 🔄 CI/CD Pipeline

Project sử dụng **GitHub Actions** để tự động hóa testing và deployment:

### Workflow Triggers
- **Push** vào branch `main`
- **Pull Request** vào branch `main`

### Các bước trong Pipeline
1. **Checkout code** từ repository
2. **Setup Node.js** (versions 16, 18, 20)
3. **Install dependencies** với npm ci
4. **Run tests** (npm test)
5. **Run linting** (nếu có)
6. **Build application** (nếu cần)
7. **Security audit** với npm audit

### Status Badges
- ✅ Build status hiển thị trên README
- 🔒 Security audit tự động
- 📊 Multi-version Node.js testing

## 🧪 Testing

```bash
# Chạy tests (hiện tại chưa có test cases)
npm test

# Chạy linting (hiện tại chưa có linter)
npm run lint

# Security audit
npm audit
```

## 📁 Cấu trúc Project

```
todo-nodejs/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions workflow
├── index.js                # Server backend (Express + MongoDB)
├── index.html              # Frontend giao diện
├── test-font.html          # File test font tiếng Việt
├── package.json            # Dependencies và scripts
├── .gitignore              # Git ignore rules
└── README.md              # Documentation
```

## 🌐 Deployment

### Local Development
```bash
npm run dev  # Với nodemon auto-reload
```

### Production
```bash
npm start    # Node.js production mode
```

### Environment Variables
Tạo file `.env` (optional):
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
```

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

### Development Guidelines
- ✅ Code phải pass CI/CD pipeline
- ✅ Tuân thủ coding standards
- ✅ Thêm tests cho features mới
- ✅ Cập nhật documentation

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👤 Author

**AndrewDoan01**
- GitHub: [@AndrewDoan01](https://github.com/AndrewDoan01)

## 🙏 Acknowledgments

- Express.js team
- MongoDB team
- Mongoose ODM
- GitHub Actions

---

⭐ **Star this repo if you find it helpful!**