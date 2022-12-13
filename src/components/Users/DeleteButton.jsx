import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

function DeleteButton({ user, setUserList, modal, setModal, modalId }) {
  console.log(modal, "falses"); 
  console.log(user, "lds");

  const yesButton = (id) => {
    let newTask = [...user].filter((item) => item.id !== modalId);
    setUserList(newTask);
    setModal(false);
  };

  const noButton = () => {
    setModal((prev) => !prev);
  };

  return (
    <div>
      {modal &&
        ReactDOM.createPortal(
          <MaindDiv>
            <MainTwo className="modal-root">
              <h3>Are you sure you want to delete ?</h3>
              <button onClick={() => yesButton()}>yes</button>
              <button onClick={noButton}>no</button>
            </MainTwo>
          </MaindDiv>,

          document.getElementById("modal_root")
        )}
    </div>
  );
}

export default DeleteButton;

export function Modal() {}

const MaindDiv = styled.div`
  position: fixed;
  top: 30vh;
  left: 25%;
  width: 50%;
  height: 30%;
  z-index: 100;
  overflow: hidden;
  color: red;
`;

const MainTwo = styled.div`
  background: #4f005f;
  padding: 1rem;
`;
