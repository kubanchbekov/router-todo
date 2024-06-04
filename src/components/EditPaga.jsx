import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { editTodo } from "../store/todoSlice/todoSlice";

const EditPage = () => {
  const [isEdit, setIsEdit] = useState(null);
  const [editInput, setEditInput] = useState("");
  const navigate = useNavigate();

  const param = useParams();
  console.log(param.id);

  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.todo);

  const existingObject = todo.find((item) => item.id === +param.id);
  console.log(existingObject, todo);

  console.log(isEdit, editInput);

  useEffect(() => {
    if (existingObject) {
      setEditInput(existingObject.title);
      setIsEdit(existingObject.select);
    }
  }, [param.id, existingObject]);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editTodo({
      id: +param.id,
      title: editInput,
      select: isEdit
    }));
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleEdit}>
        <input
          onChange={(e) => setEditInput(e.target.value)}
          value={editInput}
          placeholder="Что-нибудь напиши"
          type="text"
          id="title"
        />
        <Select
          onChange={(e) => setIsEdit(e.target.value)}
          value={isEdit}
          name="select"
        >
          <option value="ужас">Ужас</option>
          <option value="Мультик">Мультик</option>
          <option value="Аниме">Аниме</option>
          <option value="Боевик">Боевик</option>
          <option value="Дорама">Дорама</option>
        </Select>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditPage;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;
  