import React, { useMemo } from 'react';

import DefaultTheme from '../../constants/DefaultTheme';
import { TodoItemUseCaseResponseDTO } from '../../domains/useCases/dto/todoItem';
import useCssVariable from '../../hooks/useCssVariable';
import ListLayout from '../elements/ListLayout';
import TodoItem from '../elements/TodoItem';

type Props = {
  todoItems: TodoItemUseCaseResponseDTO[];
  onListLayoutClicked: React.MouseEventHandler;
};

const TodoGroupList: React.FC<Props> = ({ todoItems, onListLayoutClicked }) => {
  const { getCssVar } = useCssVariable(DefaultTheme);
  const todoItemColor = useMemo(() => getCssVar('todoItemText'), [getCssVar]);
  const todoItemFinishedColor = useMemo(() => getCssVar('todoItemFinishedText'), [getCssVar]);

  return (
    <ListLayout onListLayoutClicked={onListLayoutClicked}>
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          text={todoItem.title}
          textColor={todoItemColor}
          textFinishedColor={todoItemFinishedColor}
          isFinished={true}
        />
      ))}
    </ListLayout>
  );
};

export default React.memo(TodoGroupList);
