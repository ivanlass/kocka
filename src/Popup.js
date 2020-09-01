import React, {useState} from 'react';
import './App.css';
import wpop from './photos/wpop.jpg'


function Popup(props) {
    const [isVisible, setIsVisible] = useState(false)

    setTimeout(function(){ setIsVisible(true) }, 5000);

  return (
      <>
      {isVisible && 
    <div className="popup" >
      <p className="close" onClick={()=> setIsVisible(false)}>x</p>
        <h4 className="popup-big-txt">Maria</h4>
        <p className="popup-txt">Ny profil være først som skal chatte med henne</p>
        <div className="popup-img" style={{ backgroundImage: `url(${wpop})`, backgroundSize: "cover" }}></div>
        <button onClick={props.click}>Chat</button>
    </div>
    }
    </>
  );
}

export default Popup;
