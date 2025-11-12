import React, { useState } from "react";

function ResultsDownload() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const accept = () => {
    const url =
      "https://desatneiva.rednacional.com.co/erp/snt/websys_resultados.snt";
    window.open(url, "_blank", "noopener,noreferrer");
    close();
  };

  return (
    <>
      <button
        type="button"
        className="download-btn"
        onClick={(e) => {
          e.stopPropagation();
          open();
        }}
      >
        <span className="top-text">Descarga</span>
        <span className="bottom-text">tus resultados</span>
      </button>
      {isOpen && (
        <div
          className="results-modal-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div className="results-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="results-modal-title">
              Aviso de entrega de resultados y cumplimiento normativo
            </h2>
            <div className="results-modal-body">
              <p>
                En cumplimiento del <b>artículo 4 literal d)</b> de la{" "}
                <b>Resolución 1843 de 2025</b>, DESAT pone a disposición del
                usuario la información clara, oportuna y veraz relacionada con
                su evaluación ocupacional.
              </p>
              <p>
                Al ingresar y/o descargar los documentos disponibles en la
                plataforma SOFIA, el <b>usuario deja constancia</b> de haber
                recibido copia de la atención, los resultados y las pruebas
                complementarias realizadas, entendiéndose cumplido el deber de
                entrega por parte de DESAT.
              </p>
              <p>
                El acceso a esta información estará disponible dentro de los{" "}
                <b>siete (7) días hábiles</b> siguientes a la atención,
                garantizando la confidencialidad de los datos.
              </p>
            </div>
            <div className="results-modal-actions">
              <button
                type="button"
                className="results-modal-btn results-modal-accept"
                onClick={accept}
              >
                Aceptar y continuar
              </button>
              <button
                type="button"
                className="results-modal-btn results-modal-cancel"
                onClick={close}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ResultsDownload;
