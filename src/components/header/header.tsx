import React from "react";
import "./header.css";
import { BurgerMenu } from "./header-burger";

function Logo() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img src="./logo.png" width="158" height="32" />
      <p style={{ color: "#9F9F9F", fontSize: "18px" }}>сеть стоматологий</p>
    </div>
  );
}

export function Header() {
  return (
    <header>
      <div
        style={{
          display: "flex",
          gap: "32px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BurgerMenu />
        <Logo />
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <div className="nav-btn">Услуги</div>
        <div className="nav-btn">Врачи</div>
        <div className="nav-btn">Отзывы</div>
        <div className="nav-btn">Блог</div>
        <div className="nav-btn">Цены</div>
        <div className="nav-btn">Клиники</div>
        <div
          className="nav-btn"
          onClick={() => {
            window.location.href = "/documents";
          }}
        >
          Документы
        </div>
      </div>
      <div className="header-btns">
        <div className="header-tg-btn"></div>
        <div className="header-whatsapp-btn"></div>
        <div className="header-chat-btn"></div>
        <div className="header-booking-btn">Записаться на прием</div>
      </div>
    </header>
  );
}
