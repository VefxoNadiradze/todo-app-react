import styled from "styled-components";
import moonIcon from "/images/icon-moon.svg";
import sunIcon from "/images/icon-sun.svg";
import darkBackground from "/images/bg-desktop-dark.jpg";
import lightBackground from "/images/bg-desktop-light.jpg";
import { FormEvent, useState } from "react";

interface Headerinterface {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  datasArr: GlobalTypes[];
  setDatasArr: React.Dispatch<React.SetStateAction<GlobalTypes[]>>;
}

export default function Header({
  theme,
  setTheme,
  datasArr,
  setDatasArr,
}: Headerinterface) {
  const [title, setTodoTitle] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title.trim() !== "") {
      setDatasArr([
        ...datasArr,
        { title, active: true, completed: false, id: Math.random() },
      ]);
      setTodoTitle("");
    }
  };

  return (
    <HeaderComponent themes={theme}>
      <div className="logo_theme">
        <a href="#" className="logo">
          TODO
        </a>

        <button onClick={() => setTheme(!theme)}>
          <img src={theme ? moonIcon : sunIcon} alt="theme icon" />
        </button>
      </div>

      <form onSubmit={handleInput}>
        <input
          type="text"
          className={theme ? "todoInput" : "todoInput darkInput"}
          placeholder="Create a new todo…"
          value={title}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
      </form>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.header<{ themes: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: ${(props) =>
    props.themes ? `url(${lightBackground})` : `url(${darkBackground})`};
  background-repeat: no-repeat;

  .logo_theme {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 81px;
    width: 541px;

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    .logo {
      color: rgb(255, 255, 255);
      font-size: 40px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 15px;
      text-decoration: none;
    }
  }

  .todoInput {
    width: 541px;
    margin-top: 51px;
    margin-bottom: 81px;
    outline: none;
    border: none;
    padding: 23px;
    border-radius: 5px;
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
    background: rgb(255, 255, 255);
    color: rgb(57, 58, 75);
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.25px;

    &.darkInput {
      box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
      background: rgb(37, 39, 61);
      color: rgb(200, 203, 231);
    }
  }
`;
