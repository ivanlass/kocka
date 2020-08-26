import React from 'react';
import './App.css';
import picka from './photos/picka.jpg'



function App() {
  return (
    <div className="App">


        <div class="grid-container">
          <div class="asd girl" style={{backgroundImage: `url(${picka})`, backgroundSize:"cover"}}></div>
          <div class="a2 girl" style={{backgroundImage: `url(${picka})`, backgroundSize:"cover"}}></div>
          <div class="a3 girl" style={{backgroundImage: `url(${picka})`, backgroundSize:"cover"}}></div>
          <div class="a4 girl" style={{backgroundImage: `url(${picka})`, backgroundSize:"cover"}}></div>

          <div class="a5 girl" style={{backgroundImage: `url(${picka})`, backgroundSize:"cover"}}></div>
          <div class="a6 girl" style={{backgroundImage: `url(${picka})`, backgroundSize:"cover"}}></div>
          <div class="a7 girl" style={{backgroundImage: `url(${picka})`, backgroundSize:"cover"}}></div>
          <div class="a8 girl" style={{backgroundImage: `url(${picka})`, backgroundSize:"cover"}}></div>

          <div class="a9 girl" style={{backgroundImage: `url(${picka})`, backgroundSize:"cover"}}></div>
          <div class="a10 girl" style={{backgroundImage: `url(${picka})`, backgroundSize:"cover"}}></div>
          <div class="a11 girl" style={{backgroundImage: `url(${picka})`, backgroundSize:"cover"}}></div>
          <div class="a12 girl" style={{backgroundImage: `url(${picka})`, backgroundSize:"cover"}}></div>
        </div>
      </div>
  );
}

export default App;
