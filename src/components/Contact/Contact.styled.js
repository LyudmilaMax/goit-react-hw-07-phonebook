import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 6px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid teal;
  border-radius: 4px;
`;

export const Button = styled.button`
  display: flex;
  text-align: center;
  height: 24px;
  padding: 6px 12px;
  margin-left: auto;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: rgb(83, 193, 201);
  box-shadow: rgba(44, 88, 90, 0.95) 1px 1px 3px 1px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background-color: rgba(246, 249, 249, 0.95);
    transform: scale(1.1);
    color: black;
  }
`;
