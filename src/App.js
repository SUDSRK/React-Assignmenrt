import Share from "./share";
import React, {useState} from 'react'

function App() {
  const [display,seDisplay] = useState(false)
  const toggleDisplay = () => {
      seDisplay(!display);
  }
  
  return (
 <>
       <Share toggleDisplay= {toggleDisplay}  display = {display} />

      </>
  );
}

export default App;
