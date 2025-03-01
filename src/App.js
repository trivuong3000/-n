import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa"; // Import icon
import "../src/Register.css"; // Import CSS


const Login = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#ffffff",
    },
    box: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "360px",
      textAlign: "center",
    },
    logo: {
      width: "80px",
      height: "80px",
      flexshrink: "0"
    },
    heading: {
      color: "#000",


      fontfamily: "Roboto",
      fontsize: "34px",
      fontstyle: "normal",
      fontweight: "700",
      lineheight: "normal",
      letterspacing: "0.085px",
    },
    formGroup: {
      marginBottom: "1rem",
      position: "relative",
      textAlign: "left",
    },
    label: {
      fontSize: "0.9rem",
      fontWeight: "bold",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "0.9rem",
      marginTop: "5px",
    },
    linkContainer: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "0.8rem",
      marginBottom: "1rem",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
    },
    button: {
      backgroundColor: "#2979ff",
      color: "white",
      border: "none",
      padding: "0.75rem",
      width: "100%",
      fontSize: "1rem",
      borderRadius: "4px",
      cursor: "pointer",
      marginBottom: "1rem",
    },
    orText: {
      color: "var(--Element-Content, #626271)",
      fontfamily: "Roboto",
      fontsize: "16px",
      fontstyle: "normal",
      fontweight: "700",
      lineheight: "normal",
      letterspacing: "0.08px",
    },
    googleButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "0.75rem",
      borderRadius: "4px",
      border: "1px solid #ddd",
      cursor: "pointer",
      backgroundColor: "#fff",
    },
    googleIcon: {
      width: "24px",
      height: "24px",
      left: "16px",
      top: "12px",
    },
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted: ", { email, password });
    alert("Login successful!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <img
          src="https://via.placeholder.com/80"
          alt="Logo"
          style={styles.logo}
        />
        <h1 style={styles.heading}>Đăng nhập</h1>
        
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Tên đăng nhập</label>
            <input
              type="text"
              placeholder="User name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Mật khẩu</label>
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.linkContainer}>
            <Link to="/register" style={styles.link}>Đăng ký tài khoản</Link>
            <Link to="/forgot-password" style={styles.link}>Quên mật khẩu</Link>
          </div>
          <button type="submit" style={styles.button}>ĐĂNG NHẬP</button>
        </form>
        <p style={styles.orText}>hoặc</p>
        <button style={styles.googleButton}>
          <img src="https://banner2.cleanpng.com/20180413/rfe/avfci721i.webp" alt="Google" style={styles.googleIcon} />
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
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Tên đăng nhập không được để trống.";
    if (!formData.email) newErrors.email = "Email không được để trống.";
    if (!formData.password) newErrors.password = "Mật khẩu không được để trống.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Mật khẩu không khớp.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Đăng ký thành công!");
      navigate("/");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-heading">Đăng Ký</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="register-input-group">
            <FaUser className="register-icon" />
            <input
              type="text"
              name="username"
              placeholder="Tên đăng nhập"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          {errors.username && <p className="register-error">{errors.username}</p>}

          {/* Email */}
          <div className="register-input-group">
            <FaEnvelope className="register-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="register-error">{errors.email}</p>}

          {/* Password */}
          <div className="register-input-group">
            <FaLock className="register-icon" />
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {errors.password && <p className="register-error">{errors.password}</p>}

          {/* Confirm Password */}
          <div className="register-input-group">
            <FaLock className="register-icon" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Nhập lại mật khẩu"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {errors.confirmPassword && <p className="register-error">{errors.confirmPassword}</p>}

          <button type="submit" className="register-button">Đăng ký</button>
        </form>

        {/* Footer */}
        <div className="register-footer">
          <p>
            Bạn đã có tài khoản? <Link to="/">Đăng Nhập</Link>
          </p>
        </div>

        {/* Google Login Button */}
        <button className="google-login-button">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
          Đăng nhập với Google
        </button>
      </div>
    </div>
  );
};






// fogot password



const ForgotPassword = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f5f5f5",
    },
    box: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
    },
    logo: {
      marginBottom: "1.5rem",
    },
    heading: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    text: {
      fontSize: "1rem",
      color: "#555",
      marginBottom: "1.5rem",
    },
    formGroup: {
      marginBottom: "1rem",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      paddingRight: "2.5rem", // tạo khoảng trống cho icon
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "0.9rem",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      padding: "0.75rem",
      width: "100%",
      fontSize: "1rem",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "1rem",
    },
    footer: {
      marginTop: "1rem",
      fontSize: "0.9rem",
    },
    footerLink: {
      color: "#007bff",
      textDecoration: "none",
    },
    icon: {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      userSelect: "none",
    },
  };

  // State để lưu email và trạng thái form reset mật khẩu
  const [email, setEmail] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);

  // State cho mật khẩu mới
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // State để điều khiển hiển thị/ẩn mật khẩu cho từng trường
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  // Xử lý submit email để reset mật khẩu
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter a valid email address.");
      return;
    }
    // Giả lập gửi yêu cầu reset mật khẩu (thực tế bạn có thể gọi API ở đây)
    console.log("Reset password request for: ", email);
    // Sau khi submit email thành công, hiển thị form nhập mật khẩu mới
    setShowResetForm(true);
  };

  // Xử lý submit form đặt lại mật khẩu và chuyển hướng về trang login
  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert("Passwords do not match.");
      return;
    }
    // Thực hiện logic cập nhật mật khẩu mới (gọi API cập nhật mật khẩu)
    console.log("New password set:", newPassword);
    alert("Password has been reset successfully!");
    // Reset lại state nếu cần
    setEmail("");
    setNewPassword("");
    setConfirmNewPassword("");
    setShowResetForm(false);
    // Chuyển hướng về trang đăng nhập
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <img
          src="https://via.placeholder.com/100"
          alt="Logo"
          style={styles.logo}
        />
        { !showResetForm ? (
          <>
            <h1 style={styles.heading}>Forgot Password</h1>
            <p style={styles.text}>Enter your email address to reset your password</p>
            <form onSubmit={handleEmailSubmit}>
              <div style={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>
              <button type="submit" style={styles.button}>Submit</button>
            </form>
          </>
        ) : (
          <>
            <h1 style={styles.heading}>Reset Password</h1>
            <p style={styles.text}>Enter your new password</p>
            <form onSubmit={handleResetPasswordSubmit}>
              <div style={styles.formGroup}>
                <div style={{ position: "relative" }}>
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={styles.input}
                    required
                  />
                  <span
                    style={styles.icon}
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? "🙈" : "👁️"}
                  </span>
                </div>
              </div>
              <div style={styles.formGroup}>
                <div style={{ position: "relative" }}>
                  <input
                    type={showConfirmNewPassword ? "text" : "password"}
                    placeholder="Confirm New Password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    style={styles.input}
                    required
                  />
                  <span
                    style={styles.icon}
                    onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                  >
                    {showConfirmNewPassword ? "🙈" : "👁️"}
                  </span>
                </div>
              </div>
              <button type="submit" style={styles.button}>Reset Password</button>
            </form>
          </>
        )}
        <div style={styles.footer}>
          <p>
            Remember your password? <Link to="/" style={styles.footerLink}>Login</Link>
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
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;