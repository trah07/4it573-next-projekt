import { createTodo } from '@/utils/actions';

const TodoForm = () => {
  return (
    <div>
      <form className="flex flex-row text-xl my-4" action={createTodo}>
        <input
          type="text"
          name="todo"
          className="border border-gray-800 rounded-md p-2 mr-2 block"
        />
        <button
          type="submit"
          className="p-2 border border-gray-800 rounded-md hover:bg-slate-400"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
