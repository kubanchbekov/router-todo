import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo } from "../store/todoSlice/todoSlice";
import styled from "styled-components";

const TabliPageWrapper = styled.div`
  padding: 2rem;
`;

const AddMovieButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const TodoItem = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const TodoTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TodoSelect = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

const EditButton = styled.button`
  background-color: #ffc107;
  color: #212529;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0a800;
  }
`;

const TabliPaga = () => {
  const navigate = useNavigate();
  const { todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleNaviate = () => {
    navigate("/addTodo");
  };

  const handelNavigeteEdit = (id) => {
    navigate(`/editPage/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <TabliPageWrapper>
      <AddMovieButton onClick={handleNaviate}>Add Movie</AddMovieButton>
      {todo.map((item) => (
        <TodoItem key={item.id}>
          <TodoTitle>{item.title}</TodoTitle>
          <TodoSelect>{item.select}</TodoSelect>
          <ActionButtons>
            <DeleteButton onClick={() => handleDelete(item.id)}>
              Delete
            </DeleteButton>
            <EditButton onClick={() => handelNavigeteEdit(item.id)}>
              Edit
            </EditButton>
          </ActionButtons>
        </TodoItem>
      ))}
    </TabliPageWrapper>
  );
};

export default TabliPaga;
