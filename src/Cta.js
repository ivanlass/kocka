import React from 'react';
import './App.css';


function Cta(props) {


  return (

    <div className="" >
        <h4 className="cta-txt">Hvis du ikke fant noe, kan du prøve her</h4>
        <button onClick={props.click} className="btn">Chat</button>
    </div>

  );
}

export default Cta;
