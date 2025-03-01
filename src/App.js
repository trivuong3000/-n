import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { FaUser, FaLock, FaEnvelope, } from "react-icons/fa"; // Import icon
import "../src/Register.css"; // Import CSS
import "../src/Fogetpassword.css"; // Import file CSS
import"../src/Loginform.css"
// LoginForm.js

const LoginForm = () => {
  return (
    <div className="container">
      <div className="login-box">
        <div className="logo">LOGO</div>
        <h2 className="title">Đăng nhập</h2>
        <div className="input-group">
          <label>Tên đăng nhập</label>
          <div className="input-wrapper">
            <input type="text" placeholder="User name" />
            <span className="icon">👤</span>
          </div>
        </div>
        <div className="input-group">
          <label>Mật khẩu</label>
          <div className="input-wrapper">
            <input type="password" placeholder="******" />
            <span className="icon">👁</span>
          </div>
        </div>
        <div className="links">
          <Link to="/register">Đăng ký tài khoản</Link>
          <Link to="/forgot-password">Quên mật khẩu</Link>
        </div>
        <button className="login-btn">ĐĂNG NHẬP</button>
        <div className="divider">
          <hr />
          <span>hoặc</span>
          <hr />
        </div>
        <button className="google-btn">
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

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="logo">LOGO</div>
        <h2 className="title">Đăng ký</h2>
        <div className="input-group">
          <label>Tên đăng nhập</label>
          <div className="input-wrapper">
            <input type="text" placeholder="User name" />
            <span className="icon">👤</span>
          </div>
        </div>
        <div className="input-group">
          <label>Email</label>
          <div className="input-wrapper">
            <input type="email" placeholder="Vui lòng nhập email" />
            <span className="icon">📧</span>
          </div>
        </div>
        <div className="input-group">
          <label>Mật khẩu</label>
          <div className="input-wrapper">
            <input type="password" placeholder="Nhập mật khẩu" />
            <span className="icon">👁</span>
          </div>
        </div>
        <div className="input-group">
          <label>Nhập lại mật khẩu</label>
          <div className="input-wrapper">
            <input type="password" placeholder="Nhập lại mật khẩu" />
            <span className="icon">👁</span>
          </div>
        </div>
        <button className="register-btn">ĐĂNG KÝ</button>
        <button className="secondary-btn" onClick={() => navigate("/")}>
          ĐĂNG NHẬP
        </button>
        <div className="divider">
          <hr />
          <span>hoặc</span>
          <hr />
        </div>
        <button className="google-btn">
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
      </Routes>
    </Router>
  );
};

export default App;