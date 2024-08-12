"use client"

import { useState } from 'react';

export default function Page() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState<string[]>([]);

  return (
    <main>
      <h1>Hello World!</h1>
      <input className='border-2' onChange={e => setToDo(e.target.value)} />
      <button onClick={() => { setToDos([...toDos, toDo]) }}>Add ToDo</button>
      <ul>{
        toDos.map(toDo => <li>{toDo}</li>)}</ul>
    </main>
  );
}
