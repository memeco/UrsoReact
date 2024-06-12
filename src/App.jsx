import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>Urso</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Brown_bear.jpg"
          alt="Urso"
          width="300"
        />
        <p>
          O urso-pardo (Ursus arctos) é um mamífero omnívoro da família dos
          ursídeos. É o urso de mais ampla distribuição geográfica dentre todos
          os membros vivos de sua família.
        </p>
        <button onClick={() => alert("Saiba mais sobre os ursos-pardos!")}>
          Saiba Mais
        </button>
      </div>
    </>
  );
}

export default App;
