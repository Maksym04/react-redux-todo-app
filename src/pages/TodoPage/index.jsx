import React from 'react';
import TodoForm from '../../components/TodoForm';
import styles from './TodoPage.module.sass';

function TodoPage () {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.todoContainer}>
        <TodoForm />
      </section>
    </main>
  );
}

export default TodoPage;
