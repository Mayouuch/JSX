import './App.css';
import I1 from '../src/samar.jpg'
function App() {
  return (

    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">Khiari Samar</h1>
      <br />
      <br />
    </div>
    <img src={I1} />
    <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </div>

  );
}


export default App;
