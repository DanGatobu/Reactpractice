import ListFilee from './Components/ListFilee';
import Alart from './Components/Alart';
import Btn from './Components/btn';
import React, { useState } from 'react';



function App() {

  const townss=["Lahore","Karachi","Islamabad","Quetta","Peshawar"];
  
  const [selectedIndex,setSelectedIndex]=useState(false);

  const onsltItemm=(indx:string)=>console.log(indx);

  return (
    <>
    <div>
      {/* <ListFilee towns={townss} name='TEN HAG' onsltItem={onsltItemm} /> */}
      {selectedIndex && <Alart onClose={()=>setSelectedIndex(false)}>
      HELLO <span> WORLD</span>
      </Alart>}
      
    </div>
    <div>
      <Btn onClicck={()=>setSelectedIndex(true)}>CLICK ME</Btn>
    </div>

    </>
  );
}

export default App
