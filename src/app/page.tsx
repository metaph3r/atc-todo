import { createTodo } from '@/actions/actions';
import prisma from '@/lib/db';

export default async function Page() {
  const todos = await prisma.todo.findMany();

  return (
    <main>
      <h1>Hello World!</h1>
      <form action={createTodo}>
        <input type='text' name='todo' placeholder='ToDo' className='border-2' />
        <button type='submit'>Add ToDo</button>
      </form>
      <ul>{
        todos.map(toDo => <li>{toDo.todo}</li>)}
      </ul>
    </main>
  );
}
