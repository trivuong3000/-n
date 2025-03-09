import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaWallet, FaSearch, FaBell, FaUser } from "react-icons/fa";
import "../src/NotificationsPage.css"; // Import CSS

const NotificationsPage = () => {
    return (
        <div className="terms-container">
          <h1 className="terms-header">Điều khoản</h1>
    
          <div className="terms-section">
            <h3>1. Quy định chung</h3>
            <p className="terms-text">
              Ứng dụng này cung cấp dịch vụ lưu trữ và quản lý thông tin cá nhân, bao gồm các loại giấy tờ
              như CCCD, bằng lái xe, thẻ sinh viên,... Người dùng có trách nhiệm bảo mật thông tin tài khoản
              và không chia sẻ dữ liệu cá nhân cho bên thứ ba nếu không cần thiết.
            </p>
          </div>
    
          <div className="terms-section">
            <h3>2. Giải thích thuật ngữ</h3>
            <p className="terms-text">
              - <strong>Người dùng</strong>: Là cá nhân sử dụng ứng dụng này.
              <br />- <strong>Dữ liệu cá nhân</strong>: Bao gồm họ tên, số CCCD, địa chỉ, thông tin liên lạc,...
              <br />- <strong>Tài khoản</strong>: Là tài khoản đăng nhập vào ứng dụng để quản lý dữ liệu cá nhân.
              <br />- <strong>Bên thứ ba</strong>: Là các tổ chức/cá nhân không thuộc quyền quản lý của ứng dụng
              nhưng có thể liên quan đến việc xác thực danh tính (ví dụ: ngân hàng, tổ chức chính phủ).
            </p>
          </div>
    
          <div className="terms-section">
            <h3>3. Điều khoản sử dụng</h3>
            <p className="terms-text">
              Người dùng cam kết sử dụng ứng dụng đúng mục đích, không lợi dụng để thực hiện các hành vi vi phạm pháp luật.
              Ứng dụng có quyền đình chỉ hoặc xóa tài khoản nếu phát hiện hành vi gian lận hoặc lạm dụng.
            </p>
          </div>
    
          <div className="terms-section">
            <h3>4. Điều khoản bảo mật</h3>
            <p className="terms-text">
              Chúng tôi cam kết bảo vệ thông tin cá nhân của người dùng bằng các biện pháp bảo mật phù hợp.
              Tuy nhiên, người dùng cũng cần có trách nhiệm bảo vệ tài khoản của mình, tránh chia sẻ mật khẩu hoặc
              thông tin nhạy cảm với người khác.
            </p>
          </div>
    
          <div className="terms-section">
            <h3>5. Điều khoản sửa đổi</h3>
            <p className="terms-text">
              Điều khoản này có thể thay đổi theo thời gian để phù hợp với chính sách mới. Người dùng sẽ được thông báo
              nếu có cập nhật quan trọng và cần đồng ý với các điều khoản mới trước khi tiếp tục sử dụng dịch vụ.
            </p>
          </div>
    
          <footer className="bottom-nav">
            <Link to="/home" className="nav-item"><FaHome /> Trang chủ</Link>
            <Link to="/wallet" className="nav-item"><FaWallet /> Ví giấy tờ</Link>
            <Link to="/scan" className="nav-item scan"><FaSearch /></Link>
            <Link to="/notifications" className="nav-item active"><FaBell /> Thông báo</Link>
            <Link to="/profile" className="nav-item"><FaUser /> Tài khoản</Link>
          </footer>
        </div>
      );
    };
    


export default NotificationsPage ;
