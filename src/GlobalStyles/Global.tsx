import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        min-height: 100vh;
        font-family: "Josefin Sans", sans-serif;
        text-decoration: none;
    }

`;

export { GlobalStyles };
