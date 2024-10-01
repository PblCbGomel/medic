import React from "react";

export function BurgerMenu() {
  return (
    <div className="burger">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
      <div className="menu__box">
        <div className="menu__wrapper">
          <div className="menu__item">Услуги</div>
          <div className="menu__item">Врачи</div>
          <div className="menu__item">Отзывы</div>
          <div className="menu__item">Блог</div>
          <div className="menu__item">Цены</div>
          <div className="menu__item">Клиники</div>
          <div
            className="menu__item"
            onClick={() => {
              window.location.href = "/documents";
            }}
          >
            Документы
          </div>
        </div>
      </div>
    </div>
  );
}
