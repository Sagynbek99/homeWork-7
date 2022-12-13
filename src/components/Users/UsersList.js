import Card from "../UI/Card";
import DeleteButton from "./DeleteButton";
import classes from "./UsersList.module.css";
import React, { useState } from "react";

const UsersList = ({ users, setUserList }) => {
  const [deleteModal, setDeleteModal] = useState(false);
const [ modalId , setModalId]=useState(null)
  const deleteHandler = (id) => {
    setModalId(id)
    setDeleteModal(true);
  };
  return (
    <>
      <Card className={classes.users}>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
              <button onClick={()=>deleteHandler(user.id)}>delete</button>
            </li>
          ))}
        </ul>
      </Card>
      <DeleteButton
        modalId={modalId}
        user={users}
        setUserList={setUserList}
        modal={deleteModal}
        setModal={setDeleteModal}
      />
    </>
  );
};

export default UsersList;