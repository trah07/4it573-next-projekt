import TodoForm from '@/components/TodoForm';
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>
        <h1>Todos</h1>
      </div>
      <div>
        <TodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
