import React from "react";
import "./documents.css";

const documentsInfo = [
  "Лицензия на осуществление медицинской деятельности",
  "Ведомости специальной оценки условий труда",
  "Положение об организации видеонаблюдения",
  "Лицензия на осуществление медицинской деятельности",
  "Ведомости специальной оценки условий труда",
];

export function DocumentsPage() {
  return (
    <div className="documents-wrapper">
      <h2>Документы</h2>
      <div className="documents-list">
        {documentsInfo.map((doc) => {
          return (
            <div className="document">
              <div className="first-doc-content">
                <div className="document-icon"></div>
                <p>{doc}</p>
              </div>
              <div className="doc-arrow"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
