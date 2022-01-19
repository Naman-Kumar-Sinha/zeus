import styled from 'styled-components';
import { Todo } from '@zeus/data';

/* eslint-disable-next-line */
export interface TodosProps {
  todos: Todo[];
}

const StyledTodo = styled.li`
  color: pink;
`;

export function Todos(props: TodosProps) {
  return (
    <ul>
      {props.todos.map((t) => (
        <StyledTodo>{t.title}</StyledTodo>
      ))}
    </ul>
  );
}

export default Todos;
