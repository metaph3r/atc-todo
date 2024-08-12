"use client"

import { useState } from 'react';
import { ToDo } from './todo';

export default function Page() {
  const [toDo, setToDo] = useState<ToDo>(new ToDo());
  const [toDos, setToDos] = useState<ToDo[]>([]);

  return (
    <main>
      <h1>Hello World!</h1>
      <input className='border-2' onChange={e => setToDo({ todo: e.target.value })} />
      <button onClick={() => { setToDos([...toDos, toDo]) }}>Add ToDo</button>
      <ul>{
        toDos.map(toDo => <li>{toDo.todo}</li>)}</ul>
    </main>
  );
}
