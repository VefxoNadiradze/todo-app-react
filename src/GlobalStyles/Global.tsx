import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<{ themes: boolean }>`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        min-height: 100vh;
        font-family: "Josefin Sans", sans-serif;
        background: ${(props) => (props.themes ? "white" : " rgb(23, 24, 35)")};
    }

`;

export { GlobalStyles };
