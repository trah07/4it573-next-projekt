import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import db from '@/utils/db';

const getTodos = async () => {
  //await new Promise(resolve => setTimeout(() => resolve(''), 2000))
  const todos = await db.todo.findMany({
    where: {},
    orderBy: {
      createdAt: 'desc',
    },
  });

  return todos;
};

const TodosPage = async () => {
  const todos = await getTodos();
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
