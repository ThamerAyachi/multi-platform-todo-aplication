import { Todo } from './Models';
import { newDateInSeconds, setTime } from './DataMethods';

export const setDefaultData = (): void => {
  const todoList: Todo[] = JSON.parse(
    localStorage.getItem('Todo-list') as string
  );

  if (!todoList) {
    localStorage.setItem(
      'Todo-list',
      JSON.stringify([
        { id: '1', content: 'Click to remove', date: newDateInSeconds() },
      ])
    );
  }
};

export const getData = (): Todo[] => {
  const todoList: Todo[] = JSON.parse(
    localStorage.getItem('Todo-list') as string
  );
  todoList.forEach((task) => (task.date = setTime(task.date)));

  return todoList;
};

export const setData = (todo: Todo): Todo => {
  const todoList: Todo[] = JSON.parse(
    localStorage.getItem('Todo-list') as string
  );

  todoList.unshift(todo);

  localStorage.setItem('Todo-list', JSON.stringify(todoList));

  return todo;
};

export const removeTask = (_task: Todo): void => {
  let todoList: Todo[] = JSON.parse(
    localStorage.getItem('Todo-list') as string
  );

  todoList = todoList.filter((task) => task.id != _task.id);

  localStorage.setItem('Todo-list', JSON.stringify(todoList));

  return;
};
