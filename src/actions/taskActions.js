export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const BY_TITLE = 'BY_TITLE';
export const BY_DATE = 'BY_DATE';
export const BY_DESC = 'BY_DESC';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const byTitle = (tasks) => ({
  type: BY_TITLE,
  payload: tasks,
});

export const byDate = (tasks) => ({
  type: BY_DATE,
  payload: tasks,
});

export const byDesc = (tasks) => ({
  type: BY_DESC,
  payload: tasks,
});
export const updateTask = (id,task,title,date) => ({
  type: UPDATE_TASK,
  payload: {id,task,title,date},
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const completeTask = (taskId) => ({
  type: COMPLETE_TASK,
  payload: taskId,
});