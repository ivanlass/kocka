import React from 'react';
import './App.css';
import m1 from './photos/m1.jpg'
import m2 from './photos/m2.jpg'
import m3 from './photos/m3.jpg'
import m4 from './photos/m4.jpg'
import m5 from './photos/m5.jpg'
import m6 from './photos/m6.jpg'
import m7 from './photos/m7.jpg'
import m8 from './photos/m8.jpg'
import m9 from './photos/m9.jpg'
import m10 from './photos/m10.jpg'
import w1 from './photos/w1.jpg'
import w2 from './photos/w2.jpg'
import w3 from './photos/w3.jpg'
import w4 from './photos/w4.jpg'
import w5 from './photos/w5.jpg'
import w6 from './photos/w6.jpg'
import w7 from './photos/w7.jpg'
import w8 from './photos/w8.jpg'
import w9 from './photos/w9.jpg'
import w10 from './photos/w10.jpg'
import w11 from './photos/w11.jpg'
import w12 from './photos/w12.jpg'
import w13 from './photos/w13.jpg'
import w14 from './photos/w14.jpg'
import w15 from './photos/w15.jpg'
import w16 from './photos/w16.jpg'
import w17 from './photos/w17.jpg'
import w18 from './photos/w18.jpg'
import w19 from './photos/w19.jpg'
import w20 from './photos/w20.jpg'
import w21 from './photos/w21.jpg'

function App() {
  return (
    <div className="App">
      <h1 className="header big">Hvordan det fungerer?</h1>
      <h3 className="header mid">Velg noen du vil, så får du profilen deres</h3>
      <h3 className="header mid">Gi kontoinfo og begynn med chat</h3>
      <br />
      <h1 className="header">Medlemmer som vil finne noen</h1>

      <div class="grid-layout">
        <div class="grid-item grid-item-1" style={{ backgroundImage: `url(${m1})`, backgroundSize: "cover" }}>Mark</div>
        <div class="grid-item grid-item-2" style={{ backgroundImage: `url(${w1})`, backgroundSize: "cover" }}>Andrea</div>
        <div class="grid-item span-3 grid-item-3" style={{ backgroundImage: `url(${w2})`, backgroundSize: "cover" }}>Anna</div>
        <div class="grid-item grid-item-4" style={{ backgroundImage: `url(${w3})`, backgroundSize: "cover" }}>Ingrid</div>
        <div class="grid-item span-2 grid-item-5" style={{ backgroundImage: `url(${w4})`, backgroundSize: "cover" }}>Anna</div>
        <div class="grid-item grid-item-6" style={{ backgroundImage: `url(${w5})`, backgroundSize: "cover" }}>Birgit</div>
        <div class="grid-item grid-item-7" style={{ backgroundImage: `url(${w6})`, backgroundSize: "cover" }}>Helga</div>
        <div class="grid-item grid-item-8" style={{ backgroundImage: `url(${w7})`, backgroundSize: "cover" }}>Selma</div>
        <div class="grid-item grid-item-9" style={{ backgroundImage: `url(${w8})`, backgroundSize: "cover" }}>Ingeborg</div>
        <div class="grid-item span-2 grid-item-10" style={{ backgroundImage: `url(${w9})`, backgroundSize: "cover" }}>Johanna</div>
        <div class="grid-item grid-item-11" style={{ backgroundImage: `url(${w10})`, backgroundSize: "cover" }}>Karina</div>
        <div class="grid-item grid-item-12" style={{ backgroundImage: `url(${m2})`, backgroundSize: "cover" }}>Mark</div>
        <div class="grid-item span-2 grid-item-13" style={{ backgroundImage: `url(${w11})`, backgroundSize: "cover" }}>Kristin</div>
        <div class="grid-item grid-item-14" style={{ backgroundImage: `url(${m9})`, backgroundSize: "cover" }}>Ander</div>
        <div class="grid-item grid-item-15" style={{ backgroundImage: `url(${w12})`, backgroundSize: "cover" }}>Carolina</div>
        <div class="grid-item grid-item-16" style={{ backgroundImage: `url(${w13})`, backgroundSize: "cover" }}>Trude</div>
        <div class="grid-item span-3 grid-item-17" style={{ backgroundImage: `url(${w14})`, backgroundSize: "cover" }}>Maria</div>
        <div class="grid-item grid-item-18" style={{ backgroundImage: `url(${m3})`, backgroundSize: "cover" }}>Axel</div>
        <div class="grid-item grid-item-19" style={{ backgroundImage: `url(${w15})`, backgroundSize: "cover" }}>Astrid</div>
        <div class="grid-item grid-item-20" style={{ backgroundImage: `url(${w16})`, backgroundSize: "cover" }}>Katja</div>
        <div class="grid-item span-2 grid-item-21" style={{ backgroundImage: `url(${w17})`, backgroundSize: "cover" }}>Vanja</div>
        <div class="grid-item grid-item-22" style={{ backgroundImage: `url(${m4})`, backgroundSize: "cover" }}>Bernie</div>
        <div class="grid-item grid-item-23" style={{ backgroundImage: `url(${w18})`, backgroundSize: "cover" }}>Bo</div>
        <div class="grid-item grid-item-24" style={{ backgroundImage: `url(${w19})`, backgroundSize: "cover" }}>Anitra</div>
        <div class="grid-item grid-item-25" style={{ backgroundImage: `url(${m5})`, backgroundSize: "cover" }}>Bernie</div>
        <div class="grid-item span-3 grid-item-26" style={{ backgroundImage: `url(${w19})`, backgroundSize: "cover" }}>Anneke</div>
        <div class="grid-item grid-item-27" style={{ backgroundImage: `url(${w20})`, backgroundSize: "cover" }}>Lena</div>
        <div class="grid-item grid-item-28" style={{ backgroundImage: `url(${w21})`, backgroundSize: "cover" }}>Ebba</div>
        <div class="grid-item grid-item-29" style={{ backgroundImage: `url(${m6})`, backgroundSize: "cover" }}>Dag</div>
        <div class="grid-item grid-item-30" style={{ backgroundImage: `url(${m7})`, backgroundSize: "cover" }}>Ericson</div>
        <div class="grid-item grid-item-31" style={{ backgroundImage: `url(${m8})`, backgroundSize: "cover" }}>Eric</div>

        {/* <div class="grid-item grid-item-32" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 32</div>
        <div class="grid-item grid-item-33" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 33</div>
        <div class="grid-item grid-item-34" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 34</div>
        <div class="grid-item grid-item-35" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 35</div>
        <div class="grid-item grid-item-36" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 36</div>
        <div class="grid-item grid-item-37" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 37</div>
        <div class="grid-item grid-item-38" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 38</div>
        <div class="grid-item grid-item-39" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 39</div>
        <div class="grid-item span-3 grid-item-40" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 40</div>
        <div class="grid-item grid-item-41" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 41</div>
        <div class="grid-item grid-item-42" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 42</div>
        <div class="grid-item grid-item-43" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 43</div>
        <div class="grid-item grid-item-44" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 44</div>
        <div class="grid-item span-3 grid-item-45" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 45</div>
        <div class="grid-item grid-item-46" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 46</div>
        <div class="grid-item grid-item-47" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 47</div>
        <div class="grid-item grid-item-48" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 48</div>
        <div class="grid-item grid-item-49" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 49</div>
        <div class="grid-item grid-item-50" style={{ backgroundImage: `url(${picka})`, backgroundSize: "cover" }}>item 50</div > */}
      </div>
    </div>
  );
}

export default App;
