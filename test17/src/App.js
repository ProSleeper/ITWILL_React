import React from "react";
import ChangeColor from "./components/color/ChangeColor";
import Color from "./components/color/Color";
import Count from "./components/counter/Count";
import Todos from "./components2/Todos";
import ChangeColorProvider from "./contexts/ChangeColorContext";
import ColorProvider from "./contexts/ColorContext";
import CountProvider from "./contexts/CountContext";
import TodosProvider from "./contexts/TodosContext";


function App() {
  return (
    <div>
      {/* <CountProvider>
        <ColorProvider>
          <Color />
          <Count />
        </ColorProvider>
      </CountProvider>
      <hr />
      <ChangeColorProvider>
        <ChangeColor />
      </ChangeColorProvider> */}
      <hr />
      <TodosProvider>
        <Todos />
      </TodosProvider>
    </div>
  );
}

export default App;
