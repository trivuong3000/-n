// services/authService.js

const API_URL = "http://project-decoding-application.local";

// Hàm xử lý đăng nhập
export const loginUser = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return { success: response.ok, data };
  } catch (error) {
    return { success: false, data: { message: "Lỗi kết nối, vui lòng thử lại." } };
  }
};
