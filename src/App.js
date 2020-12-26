import React from "react";
import { Item, AppContainer} from "./components";
import Carousel from "./Carousel";
import image1 from "./assets/images/1.jpg"

function App() {
  return (
    <div style={{marginLeft: '153px'}}>
    <AppContainer>
      
      <Carousel style={{margin:'0px 150px'}} title="Carousel">
        <Item img={image1} />
        <Item img={image1} />
        <Item img={image1} />
        <Item img={image1} />

        <Item img={image1} />
        <Item img={image1} />
        <Item img={image1} />
        <Item img={image1} />
      </Carousel>
      
    </AppContainer>
    </div>
  );
}




export default App;
