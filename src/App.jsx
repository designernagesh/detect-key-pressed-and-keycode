import { useEffect, useState } from "react";

function App() {

  const [key, setKey] = useState("");
  const [keyCode, setKeyCode] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      setShow(true);
      setKey(e.key);
      setKeyCode(e.keyCode);
      if(e.key === " ") {
        setKey("Space");
        setKeyCode(32);
      }
    })
  }, [])
  return (
    <>
      <div className="container">
        <h2 className="title">Detect Key Presses & Key Code</h2>
        <p className="sub-title">Press any Key and know the Key and it's Key-Code! 😊 </p>
        {
          show && 
          <p className="result">
              The key pressed is
              <span>{key}</span>
              <span>Key Code: {keyCode}</span>          
          </p>
        }
      </div>
    </>
  )
}

export default App;
