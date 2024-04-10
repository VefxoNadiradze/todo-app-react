import { useState } from "react";
import { GlobalStyles } from "./GlobalStyles/Global";
import Header from "./Components/Header";
import Main from "./Components/Main";
import datas from "./datas.json";
function App() {
  const [theme, setTheme] = useState<boolean>(true);
  const [datasArr, setDatasArr] = useState<GlobalTypes[]>(datas);

  return (
    <>
      <GlobalStyles />
      <Header
        theme={theme}
        setTheme={setTheme}
        datasArr={datasArr}
        setDatasArr={setDatasArr}
      />
      <Main datasArr={datasArr} setDatasArr={setDatasArr} />
    </>
  );
}

export default App;
