import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [
    {
      id: Date.now(),
      body: 'example of filling',
      isDone: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case ACTION_TYPES.CREATE_TASK: {
      const { taskData } = action;
      const { tasks } = state;

      const newTask = {
        ...taskData,
        id: Date.now(),
        isDone: false,
      };
      const newTasks = [...tasks, newTask];
      return { tasks: newTasks };
    }
    case ACTION_TYPES.DELETE_TASK: {
      const { tasks } = state;
      const { id } = action;

      const newTasks = [...tasks];
      newTasks.splice(
        newTasks.findIndex(task => id === task.id),
        1
      );
      return { tasks: newTasks };
    }
    case ACTION_TYPES.UPDATE_TASK: {
      const { tasks } = state;
      const { newInfo: newTaskInfo } = action;

      const newTasks = [...tasks];
      const index = newTasks.findIndex(task => newTaskInfo.id === task.id);
      newTasks[index] = {
        ...newTasks[index],
        ...newTaskInfo,
      };
      return { tasks: newTasks };
    }
    default:
      return state;
  }
};

export default todoReducer;
