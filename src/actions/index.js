import ACTION_TYPES from './actionTypes';

export const createTask = taskData => ({
  type: ACTION_TYPES.CREATE_TASK,
  taskData,
});

export const deleteTask = id => ({
  type: ACTION_TYPES.DELETE_TASK,
  id,
});

export const updateTask = newInfo => ({
  type: ACTION_TYPES.UPDATE_TASK,
  newInfo,
});
