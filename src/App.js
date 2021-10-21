import "./style.css";
import img from "./imageInSrc.jpg";
import v1 from "./maVidéo.mp4";
function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: 100 }}>
        <h1 className="title red">Votre nom ici</h1>

        <br />

        <br />
        <img src={img} alt="image" />

        <img src="./imageInPublic.jpg" />
      </div>

      <video style={{ width: 320, height: 240 }} controls>
        <source src={v1} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
