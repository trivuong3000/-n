import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaHome, FaWallet, FaBell, FaUser } from "react-icons/fa";
import { MdQrCodeScanner } from "react-icons/md";

import "../src/HomePage.css";
const userName = localStorage.getItem("userName") || "Người dùng";
const HomePage = () => {
  const navigate = useNavigate(); // Hook điều hướng

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="profile">
          <div className="avatar"></div>
          <h2>{userName}</h2>
          <FaSearch className="search-icon" />
        </div>
        <div className="card-options">
          <button className="card-button">Thẻ CCCD</button>
          <button className="card-button">Thẻ Sinh Viên</button>
        </div>
      </header>

      <main className="content">
        <div className="placeholder"></div>
      </main>

      <footer className="bottom-nav">
        <button onClick={() => navigate("/home")} className="nav-item">
          <FaHome />
          <span>Trang chủ</span>
        </button>
        <button onClick={() => navigate("/wallet")} className="nav-item">
          <FaWallet />
          <span>Ví giấy tờ</span>
        </button>
        
        {/* Nút scan nằm cùng hàng */}
        <button onClick={() => navigate("/scan")} className="scan">
            <MdQrCodeScanner /> {/* Icon giống ảnh bạn gửi */}
        </button>

        <button onClick={() => navigate("/notifications")} className="nav-item">
          <FaBell />
          <span>Thông báo</span>
        </button>
        <button onClick={() => navigate("/profile")} className="nav-item">
          <FaUser />
          <span>Tài khoản</span>
        </button>


</footer>

    </div>
  );
};



export default HomePage;
