import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHome, FaWallet, FaBell, FaUser } from "react-icons/fa";
import "../src/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate(); // Hook điều hướng

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="profile">
          <div className="avatar"></div>
          <h2>LƯƠNG PHƯỚC THÀNH</h2>
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
        <button onClick={() => navigate("/home")} className="nav-item"><FaHome />Trang chủ</button>
        <button onClick={() => navigate("/wallet")} className="nav-item"><FaWallet />Ví giấy tờ</button>
        <button onClick={() => navigate("/scan")} className="nav-item scan"><FaSearch /></button>
        <button onClick={() => navigate("/terms")} className="nav-item active"><FaBell />Thông báo</button>
        <button onClick={() => navigate("/profile")} className="nav-item"><FaUser />Tài khoản</button>
      </footer>
    </div>
  );
};



export default HomePage;
