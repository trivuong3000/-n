// services/authService.js

const API_URL = "http://localhost:3000/api"; // Bỏ /login để tránh trùng URL

// Hàm xử lý đăng nhập
export const loginUser = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/login`, {  // Chỉ thêm /login ở đây
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin.");
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, data: { message: error.message || "Lỗi kết nối, vui lòng thử lại." } };
  }
};
