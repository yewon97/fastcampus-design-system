import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { vars } from "@fastcampus/themes";

function App() {
  const theme = {
    colors: vars.colors.$static.light,
  };

  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  );
}

function View() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <StyledButton>Click me</StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background-color: ${({ theme }) => {
    console.log(theme);
    //@ts-ignore
    return theme.colors.blue[500];
  }};
`;

export default App;
