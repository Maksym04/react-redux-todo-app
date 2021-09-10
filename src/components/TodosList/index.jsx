import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, updateTask } from '../../actions';
import { DeleteForever } from '@material-ui/icons';
import styles from './TodosList.module.sass';

function TodosList (props) {
  const { tasks, deleteTaskAction, updateTaskAction } = props;

  const mapTasks = ({ id, body, isDone }, index) => {
    const doneStatus = () => {
      updateTaskAction({
        id: id,
        isDone: !isDone,
      });
    };

    const deleteTask = () => {
      deleteTaskAction(id);
    };

    return (
      <li key={id} className={styles.tasksListBlock}>
        <input type='checkbox' checked={isDone} onChange={doneStatus} />
        <p className={styles.tasksListText}>{body}</p>
        <button className={styles.deleteButton} onClick={deleteTask}>
          <DeleteForever className={styles.logoButton} />
        </button>
      </li>
    );
  };

  return <ul className={styles.tasksListContainer}>{tasks.map(mapTasks)}</ul>;
}

const mapStateToProps = state => state.todo;

const mapDispatchToProps = dispatch => {
  return {
    deleteTaskAction: id => {
      dispatch(deleteTask(id));
    },
    updateTaskAction: newTaskInfo => {
      dispatch(updateTask(newTaskInfo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
