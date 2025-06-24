import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
import { todoAtom, todoLastIdSelector } from '../store/atom';
import '../chap04/StateTodo.css';

export default function RecoilTodo() {
  const [title, setTitle] = useState('');
  const [todo, setTodo] = useRecoilState(todoAtom);
  const maxId = useRecoilValue(todoLastIdSelector);

  const handleChangeTitle = e => setTitle(e.target.value);
  const handleAdd = () => {
    setTodo([
      ...todo,
      {
        id: maxId + 1,
        title,
        isDone: false
      }
    ]);
  };
  const handleDone = e => {
    setTodo(todo.map(item => {
      if (item.id === Number(e.target.dataset.id)) {
        return {
          ...item,
          isDone: true
        };
      } else {
        return item;
      }
    }));
  };
  const handleRemove = e => {
    setTodo(todo.filter(item =>
      item.id !== Number(e.target.dataset.id)
    ));
  };

  return (
    <div>
      <label>
        やること：
        <input type="text" name="todo"
          value={title} onChange={handleChangeTitle} />
      </label>
      <button type="button"
        onClick={handleAdd}>追加</button>
      <hr />
      <ul>
        {todo.map(item => (
          <li key={item.id}
            className={item.isDone ? 'done' : ''}>
            {item.title}
            <button type="button"
              onClick={handleDone} data-id={item.id}>済
            </button>
            <button type="button"
              onClick={handleRemove} data-id={item.id}>削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}