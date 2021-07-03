import AppBody from "./AppBody";
import Board from "./Board";
import Draw from "./Draw";
import Palette from "./Palette";
import Tools from "./Tools";

import { useState, useEffect, useRef } from "react";

const App = ({}) => {
  const [size, setSize] = useState({ width: 250, height: 250 });
  const [mode, setMode] = useState(null);
  const [steps, setSteps] = useState([]);
  const [active, setActive] = useState(false);
  const canvas = useRef();
  var draw;

  useEffect(() => {
    draw = new Draw(canvas.current);
    window.onmouseup = () => setActive(false);
  }, []);

  function handleClick(e) {
    console.log(
      e.clientX - e.target.offsetLeft,
      e.clientY - e.target.offsetTop
    );
    return;
  }

  function handleHover(e) {
    return;
  }

  return (
    <AppBody>
      <Tools mode={mode} setMode={setMode} />
      <Board
        height={size.width}
        width={size.height}
        canvas={canvas}
        setActive={setActive}
        handleClick={handleClick}
        handleHover={handleHover}
      />
      <Palette />
    </AppBody>
  );
};

export default App;
