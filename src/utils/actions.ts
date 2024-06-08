'use server';
import db from '@/utils/db';
import { revalidatePath } from 'next/cache';

export const createTodo = async (formData: FormData) => {
  const newTodo = formData.get('todo')?.toString();

  if (newTodo) {
    await db.todo.create({
      data: {
        title: newTodo,
      },
    });
    revalidatePath('/todos');
  }
};

export const getTodos = async () => {
  const todos = await db.todo.findMany({
    where: {},
    orderBy: {
      createdAt: 'desc',
    },
  });

  return todos;
};

export const toggleTodo = async (id: string) => {
  const todo = await db.todo.findUnique({
    where: {
      id,
    },
  });
  if (!todo) return;
  await db.todo.update({
    where: {
      id,
    },
    data: {
      done: !todo.done,
    },
  });
  revalidatePath('/todos');
};

export const deleteTodo = async (id: string) => {
  await db.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath('/todos');
};
