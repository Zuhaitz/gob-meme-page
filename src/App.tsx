import "./App.scss";
import stopImg from "./assets/images/Prohibido4.png";
import gobImg from "./assets/images/logoministerioMOD.png";

function App() {
  return (
    <main>
      <div className="container">
        <div className="stop-img">
          <img src={stopImg} alt="Stop icon" />
        </div>
        <div className="text-section">
          <h1 className="warning">
            Está usted intentando acceder a un sitio web ilegal
          </h1>
          <p>
            El acceso a esta página ha sido bloqueado mediante Resolución de la
            Sección Segunda de la Comisión de Propiedad Intelectual1 por
            facilitar ilegalmente el acceso a contenidos protegidos por derechos
            de propiedad intelectual.
          </p>
          <p>
            Al acceder a contenidos protegidos por derechos de propiedad
            intelectual que se han hecho públicos sin autorización, está
            contribuyendo a una actividad ilegal y delictiva, y poniendo en
            riesgo su seguridad, la de sus datos y dispositivos.
          </p>
          <p>
            Por el contrario, si opta por acceder a contenidos de fuentes
            legales, contribuye a la creación artística, a la mejora del
            producto cultural y al desarrollo de la economía.
          </p>
        </div>
      </div>
      <p className="legal-info">
        1: (Artículo 195 del texto Refundido de la Ley de Propiedad Intelectual,
        aprobado por el Real Decreto legislativo 1/1996, de 12 de abril.)
      </p>

      <div className="gob-img">
        <img src={gobImg} alt="gob icon" />
      </div>
    </main>
  );
}

export default App;
