import { FormEvent, useState } from "react";
import styled from "styled-components";

interface EditInterface {
  setActiveEdit: React.Dispatch<React.SetStateAction<boolean>>;
  editInputPlaceholder: string;
  editId: number | null;
  datasArr: GlobalTypes[];
  setDatasArr: React.Dispatch<React.SetStateAction<GlobalTypes[]>>;
}

export default function Edit({
  setActiveEdit,
  editInputPlaceholder,
  editId,
  datasArr,
  setDatasArr,
}: EditInterface) {
  const [editTitle, setEditTitpe] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const handleEdit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (editTitle.trim() !== "") {
      setActiveEdit(false);
    }

    let todoIndex = datasArr.findIndex((item) => item.id === editId);
    datasArr[todoIndex].title = editTitle;

    setDatasArr([...datasArr]);

    setError(true);
  };
  return (
    <EditContainer>
      <div className="edit">
        <form onSubmit={handleEdit}>
          {error && <p className="ErrorDiv">input can't be empty</p>}
          <input
            type="text"
            placeholder={editInputPlaceholder}
            maxLength={40}
            value={editTitle}
            onChange={(e) => {
              setEditTitpe(e.target.value);
              setError(false);
            }}
          />
          <button className="editBtn">Edit</button>
        </form>
      </div>
    </EditContainer>
  );
}

const EditContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0a040d;
  display: flex;
  align-items: center;
  justify-content: center;

  .edit {
    display: flex;
    justify-content: center;
    width: 380px;
    padding: 35px;
    background-color: #1e293c;
    border-radius: 10px;

    form {
      display: flex;
      row-gap: 20px;
      flex-direction: column;
      width: 100%;

      .ErrorDiv {
        color: red;
        font-weight: bold;
      }

      input {
        padding: 10px;
        border-radius: 7px;
        border: none;
        outline: none;
        font-size: 18px;
        background-color: #334255;
        color: white;
      }

      button {
        cursor: pointer;
        padding: 10px;
        border: none;
        outline: none;
        border-radius: 7px;
        font-size: 18px;
        background-color: #334255;
        color: white;
        font-weight: bold;
      }
    }
  }
`;
