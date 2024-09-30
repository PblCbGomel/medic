import React from "react";
import "./main.css";

const places = [
  {
    place: "МО, г. Серпухов \n 1-Московская, 5/27",
    time: "Ежедневно с 9:00 до 19:00",
    tel: ["+7 (903) 619-81-94", "+7 (903) 619-81-94", "+7 (903) 619-81-94"],
  },
  {
    place: "МО, г. Серпухов \nВорошилова, 13",
    time: "Ежедневно с 9:00 до 19:00",
    tel: ["+7 (903) 619-81-94", "+7 (903) 619-81-94", "+7 (903) 619-81-94"],
  },
  {
    place: "МО, г. Серпухов \nМосковское шоссе, 51",
    time: "Ежедневно с 9:00 до 19:00",
    tel: ["+7 (903) 619-81-94", "+7 (903) 619-81-94", "+7 (903) 619-81-94"],
  },
];

export function MainPage() {
  return (
    <div className="main-page">
      <div className="main-container">
        <div className="main-line"></div>
        <div className="main-container-info">
          <h2>Лечение зубов в глубокой седации</h2>
          <p>
            Дексдор вводится внутривенно — вы засыпаете, без тревог и волнений.
            Вы хорошо выспались — а лечение уже закончено.
          </p>
          <button className="main-booking">Записаться</button>
        </div>
      </div>
      <div className="places-container">
        {places.map((place) => {
          return (
            <div className="place-card">
              <div className="place-card-icon"></div>
              <div className="place-card-info">
                <h4>{place.place}</h4>
                <p>{place.time}</p>
                <div className="tel-container">
                  {place.tel.map((tel) => {
                    return <p>{tel}</p>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
