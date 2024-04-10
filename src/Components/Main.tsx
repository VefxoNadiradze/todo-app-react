import styled from "styled-components";
import checkIcon from "/images/icon-check.svg";
import { useState } from "react";

interface Maininterface {
  datasArr: GlobalTypes[];
  setDatasArr: React.Dispatch<React.SetStateAction<GlobalTypes[]>>;
}

export default function Main({ datasArr, setDatasArr }: Maininterface) {
  const [filterItems, setFilterItems] = useState<string>("");
  const [filterActive, setFilterActive] = useState<number>(0);
  let ActiveCount = datasArr.filter((activeLenght) => {
    return activeLenght.active;
  }).length;
  const filterButtons = ["All", "Active", "Completed"];

  const handleComplete = (id: number) => {
    let todoIndex = datasArr.findIndex((item) => item.id === id);
    datasArr[todoIndex].completed = !datasArr[todoIndex].completed;
    datasArr[todoIndex].active = !datasArr[todoIndex].active;

    setDatasArr([...datasArr]);
  };

  let filteredDatasArr = datasArr.filter((dataItem) => {
    if (filterItems === "Active") {
      return dataItem.active;
    } else if (filterItems === "Completed") {
      return dataItem.completed;
    } else {
      return dataItem;
    }
  });

  return (
    <TodosContainer>
      {filteredDatasArr.map((TodosItems, index) => {
        return (
          <div
            key={index}
            className={TodosItems.completed ? "todo completedTodo" : "todo"}
          >
            <button
              className={TodosItems.completed ? " activeCompletedButton" : ""}
              onClick={() => handleComplete(TodosItems.id)}
            >
              <img src={TodosItems.completed ? checkIcon : ""} alt="" />
            </button>
            {TodosItems.title}
          </div>
        );
      })}

      <div className="filterItems">
        <p className="countActiveTodos">
          <span>{ActiveCount}</span> items left
        </p>
        <div className="filterButtons">
          {filterButtons.map((filterItem, index) => {
            return (
              <button
                className={filterActive === index ? "activedFilterBtn" : ""}
                key={index}
                onClick={() => {
                  setFilterItems(filterItem);
                  setFilterActive(index);
                }}
              >
                {filterItem}
              </button>
            );
          })}
        </div>

        <button
          className="clearCompletedBtn"
          onClick={() => {
            let filterCompleted = datasArr.filter((completeds) => {
              return !completeds.completed;
            });

            setDatasArr(filterCompleted);
          }}
        >
          Clear Completed
        </button>
      </div>
    </TodosContainer>
  );
}

const TodosContainer = styled.div`
  width: 541px;
  border-radius: 5px;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  background: rgb(255, 255, 255);
  margin: -55px auto 50px auto;

  .todo {
    padding: 21px;
    display: flex;
    align-items: center;
    column-gap: 21px;
    border-bottom: 1px solid rgb(227, 228, 241);
    color: rgb(73, 76, 107);
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.25px;

    &.completedTodo {
      text-decoration: line-through;
      color: rgb(209, 210, 218);
    }

    button {
      cursor: pointer;
      width: 24px;
      height: 24px;
      background-color: white;
      border-radius: 50%;
      border: 1px solid #d5d6e3;

      &.activeCompletedButton {
        background: linear-gradient(
          135deg,
          rgb(85, 221, 255),
          rgb(192, 88, 243) 100%
        );
      }
    }
  }

  .filterItems {
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .countActiveTodos {
      color: rgb(148, 149, 165);
      font-size: 14px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: -0.19px;
    }

    .filterButtons {
      display: flex;
      column-gap: 15px;

      button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        outline: none;
        color: rgb(148, 149, 165);
        font-size: 14px;
        font-weight: 700;
        line-height: 14px;
        letter-spacing: -0.19px;

        &.activedFilterBtn {
          color: rgb(58, 124, 253);
        }
      }
    }

    .clearCompletedBtn {
      cursor: pointer;
      background-color: transparent;
      border: none;
      outline: none;
      color: rgb(148, 149, 165);
      font-size: 14px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: -0.19px;
    }
  }
`;
