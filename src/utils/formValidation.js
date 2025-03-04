// utils/formValidation.js

// Kiểm tra định dạng email hợp lệ
export const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  // Kiểm tra form đăng nhập
  export const validateLoginForm = (formData) => {
    let errors = {};
    
    if (!formData.username) {
      errors.username = "Tên đăng nhập không được để trống.";
    }
    
    // Nếu nhập email thay vì username, kiểm tra định dạng email
    if (formData.username.includes("@") && !isValidEmail(formData.username)) {
      errors.username = "Email không hợp lệ.";
    }
  
    if (!formData.password) {
      errors.password = "Mật khẩu không được để trống.";
    }
  
    return errors;
  };
  