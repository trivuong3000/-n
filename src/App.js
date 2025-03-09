import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/Register.css";
import "../src/Fogetpassword.css";
import "../src/Loginform.css";
import NotificationsPage from "./NotificationsPage";
import HomePage from "./HomePage";
import { validateLoginForm } from "../src/utils/formValidation";
import { loginUser } from '../src/services/authService';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Xử lý thay đổi input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Xử lý đăng nhập
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const newErrors = validateLoginForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    const result = await loginUser(formData);
    setLoading(false);

    if (result.success) {
      alert("Đăng nhập thành công!");
      navigate("/home");
    } else {
      setMessage(result.data.message || "Sai thông tin đăng nhập.");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/signin";
  };

  return (
    <div className="container">
      <div className="login-box">
        <div className="logo">LOGO</div>
        <h2 className="title">Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Tên đăng nhập</label>
            <div className="input-wrapper">
              <input 
                type="text" 
                name="username" 
                value={formData.username} 
                onChange={handleChange} 
                placeholder="User name" 
              />
              <span className="icon"><FaUser /></span>
            </div>
            {errors.username && <p className="error-message">{errors.username}</p>}
          </div>
          <div className="input-group">
            <label>Mật khẩu</label>
            <div className="input-wrapper">
              <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                placeholder="******" 
              />
              <span className="icon"><FaEye /></span>
            </div>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          {message && <p className="error-message">{message}</p>}
          <div className="links">
            <Link to="/register">Đăng ký tài khoản</Link>
            <Link to="/forgot-password">Quên mật khẩu</Link>
          </div>
          <button className="login-btn" type="submit" disabled={loading}>
            {loading ? "Đang xử lý..." : "ĐĂNG NHẬP"}
          </button>
        </form>
        <div className="divider">
          <hr />
          <span>hoặc</span>
          <hr />
        </div>
        <button className="google-btn" onClick={handleGoogleLogin}>
          <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google" />
          ĐĂNG NHẬP VỚI GOOGLE
        </button>
      </div>
    </div>
  );
};





// Component Register

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState(""); // Phản hồi từ API
  const [loading, setLoading] = useState(false); // Trạng thái loading

  // Xử lý thay đổi input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Xử lý submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Kiểm tra mật khẩu nhập lại có khớp không
    if (formData.password !== formData.confirmPassword) {
      setMessage("Mật khẩu không khớp!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://your-api.com/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();
      setMessage(data.message || "Đăng ký thành công!");

      if (response.ok) {
        alert("Đăng ký thành công!");
        navigate("/"); // Chuyển về trang đăng nhập
      }
    } catch (error) {
      setMessage("Lỗi kết nối, vui lòng thử lại.");
    }

    setLoading(false);
  };

  // Xử lý đăng nhập với Google
  const handleGoogleLogin = () => {
    window.location.href = "https://your-api.com/auth/google";
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="logo">LOGO</div>
        <h2 className="title">Đăng ký</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Nhập email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="icon">📧</span>
            </div>
          </div>

          <div className="input-group">
            <label>Tên đăng nhập</label>
            <div className="input-wrapper">
              <input
                type="text"
                name="username"
                placeholder="Nhập tên đăng nhập"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <span className="icon">👤</span>
            </div>
          </div>

          <div className="input-group">
            <label>Mật khẩu</label>
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                placeholder="Nhập mật khẩu"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="icon">🔒</span>
            </div>
          </div>

          <div className="input-group">
            <label>Nhập lại mật khẩu</label>
            <div className="input-wrapper">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span className="icon">🔒</span>
            </div>
          </div>

          <button type="submit" className="register-button" disabled={loading}>
            {loading ? "Đang đăng ký..." : "ĐĂNG KÝ"}
          </button>
          <button className="secondary-button" onClick={() => navigate("/")}>
          ĐĂNG NHẬP
          </button>
        </form>

        {message && <p className="message">{message}</p>} {/* Hiển thị phản hồi từ API */}

        <div className="divider">
          <hr />
          <span>hoặc</span>
          <hr />
        </div>

        <button className="google-login-button" onClick={handleGoogleLogin}>
          <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google" />
          ĐĂNG NHẬP VỚI GOOGLE
        </button>

        
      </div>
    </div>
  );
};



// fogot password

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Điều khiển bước nhập email hoặc mật khẩu mới
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email không được để trống.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePassword = () => {
    const newErrors = {};
    if (!formData.newPassword) newErrors.newPassword = "Mật khẩu không được để trống.";
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu không khớp.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      setStep(2); // Chuyển sang bước nhập mật khẩu mới
    }
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      alert("Mật khẩu đã được cập nhật thành công!");
      navigate("/");
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h1 className="forgot-password-heading">Quên Mật Khẩu</h1>

        {step === 1 ? (
          // 🟢 BƯỚC 1: NHẬP EMAIL
          <form className="forgot-password-form" onSubmit={handleSubmitEmail}>
            <div className="forgot-password-input-group">
              <FaEnvelope className="forgot-password-icon" />
              <input
                type="email"
                name="email"
                placeholder="Nhập email của bạn"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <p className="forgot-password-error">{errors.email}</p>}

            <button type="submit" className="forgot-password-button">Xác nhận</button>
          </form>
        ) : (
          // 🔵 BƯỚC 2: NHẬP MẬT KHẨU MỚI
          <form className="forgot-password-form" onSubmit={handleSubmitPassword}>
            <div className="forgot-password-input-group">
              <FaLock className="forgot-password-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                placeholder="Nhập mật khẩu mới"
                value={formData.newPassword}
                onChange={handleChange}
              />
              <button
                type="button"
                className="icon-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.newPassword && <p className="forgot-password-error">{errors.newPassword}</p>}

            <div className="forgot-password-input-group">
              <FaLock className="forgot-password-icon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button
                type="button"
                className="icon-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && <p className="forgot-password-error">{errors.confirmPassword}</p>}

            <button type="submit" className="forgot-password-button">Đặt lại mật khẩu</button>
          </form>
        )}

        <div className="forgot-password-footer">
          <p>
            Đã nhớ mật khẩu? <a href="/">Đăng nhập</a>
          </p>
        </div>
      </div>
    </div>
  );
};






// App component for routing
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Routes>
    </Router>
  );
};

export default App;