import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice/todoSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AddPageForm = styled.form`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [select, setSelect] = useState("ужас");

  const handlerInput = (e) => {
    setInput(e.target.value);
  };

  const hndlerSelect = (e) => {
    setSelect(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: Math.random(),
      title: input,
      select,
    };
    dispatch(addTodo(newData));
    setSelect("ужас");
    setInput("");
    navigate("/");
  };

  return (
    <AddPageWrapper>
      <AddPageForm onSubmit={onSubmit}>
        <InputWrapper>
          <Input type="text" value={input} onChange={handlerInput} />
        </InputWrapper>
        <InputWrapper>
          <Select onChange={hndlerSelect} value={select} name="select">
            <option value="ужас">Ужас</option>
            <option value="Мультик">Мультик</option>
            <option value="Аниме">Аниме</option>
            <option value="Боевик">Боевик</option>
            <option value="Дорама">Дорама</option>
          </Select>
        </InputWrapper>
        <SubmitButton>Add</SubmitButton>
      </AddPageForm>
    </AddPageWrapper>
  );
};

export default AddPage;