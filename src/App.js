
import image from "./imagePublic.jpg";


function App() {
  return (

    <div className="App">

      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

        <h1 className="title red">Your name here</h1>

        <br />

        <img src="./imageInSrc.jpg" />

        <br />

        <img src={image} />

        </div>

        <video width="320" height="240" controls>

        <source src="./video.mp4" type="video/mp4" /> 

        </video>

      
    </div>
  );
}

export default App;
