import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Component Login
const Login = () => {
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
      position: "relative",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "0.9rem",
    },
    link: {
      position: "absolute",
      right: "0.5rem",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "0.8rem",
      color: "#007bff",
      textDecoration: "none",
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
      marginBottom: "1rem",
    },
    orText: {
      margin: "1rem 0",
      fontSize: "0.9rem",
      color: "#555",
    },
    socialButtons: {
      display: "flex",
      justifyContent: "space-between",
    },
    socialButton: {
      border: "none",
      padding: "0.75rem",
      width: "48%",
      fontSize: "0.9rem",
      borderRadius: "4px",
      cursor: "pointer",
    },
    google: {
      width: "300px",    
      backgroundColor: "#ea4335",
      margin: "0 auto",
      color: "white",
    },
    facebook: {
      backgroundColor: "#3b5998",
      color: "white",
    },
    footer: {
      marginTop: "1rem",
      fontSize: "0.9rem",
    },
    footerLink: {
      color: "#007bff",
      textDecoration: "none",
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
          src="https://via.placeholder.com/100"
          alt="Logo"
          style={styles.logo}
        />
        <h1 style={styles.heading}>Đăng nhập</h1>
        
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Tài khoản"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
           
          </div>
          <div style={styles.formGroup}>
            <input
              type="Mật khẩu"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <Link to="/forgot-password" style={styles.link}>Quên mật khẩu?</Link>
          </div>
          <button type="submit" style={styles.button}>ĐĂNG NHẬP</button>
        </form>
        <p style={styles.orText}>Hoặc đăng nhập với</p>
        <div style={styles.socialButtons}>
          <button style={{ ...styles.socialButton, ...styles.google }}>Google</button>
         
        </div>
        <div style={styles.footer}>
          <p>
            Nếu bạn không có tài khoản? <Link to="/register" style={styles.footerLink}>Đăng ký</Link>
          </p>
          <p>
            Trợ giúp? <Link to="/help-center" style={styles.footerLink}>help center</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// Component Register

const RegisterFormHandler = () => {
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
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "0.9rem",
    },
    checkboxGroup: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1rem",
    },
    checkbox: {
      marginRight: "0.5rem",
    },
    button: {
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      padding: "0.75rem",
      width: "100%",
      fontSize: "1rem",
      borderRadius: "4px",
      cursor: "pointer",
    },
    footer: {
      marginTop: "1rem",
      fontSize: "0.9rem",
    },
    footerLink: {
      color: "#007bff",
      textDecoration: "none",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
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
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully!", formData);
      alert("Registration successful!");
      
      // Chuyển hướng về trang đăng nhập
      navigate("/");
      
      // Reset form sau khi chuyển hướng (nếu cần)
      setFormData({
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <img
          src="https://via.placeholder.com/100"
          alt="Logo"
          style={styles.logo}
        />
        <h1 style={styles.heading}>Đăng Ký</h1>
        <p style={styles.text}>Nhập thông tin đăng ký của ban</p>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Tên"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>
          <div style={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email "
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div style={styles.formGroup}>
            <input
              type="numbers"
              name="mobile"
              placeholder="Số điện thoại"
              value={formData.mobile}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Nhập lại mật khẩu"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword}</p>
            )}
          </div>
          <div style={styles.checkboxGroup}>
            <input
              type="checkbox"
              style={styles.checkbox}
              required
            />
            <span>Bạn có đồng ý với thông tin trên</span>
          </div>
          <button type="submit" style={styles.button}>
            Đăng ký
          </button>
        </form>
        <div style={styles.footer}>
          <p>
            Bạn đã có tài khoản? <Link to="/" style={styles.footerLink}>Đăng Nhập</Link>
          </p>
        </div>
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
        <Route path="/register" element={<RegisterFormHandler />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;