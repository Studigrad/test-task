import {
    ADD_TASK,
    UPDATE_TASK,
    DELETE_TASK,
    COMPLETE_TASK,
    BY_TITLE,
    BY_DATE,
    BY_DESC,
    UNDO_TASK
  } from '../actions/taskActions';
  
  const initialState = {
    tasks: [{ id: 1,title:'Title', description: "Walk The Goldfish", completed: false ,dueDate:'Thu, 13 Jul 2023' }],
    completedTasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case UPDATE_TASK:
        const updatedTasks = state.tasks.map(task => {
            if (task.id === action.payload.id) {
              return { ...task, description:action.payload.task,title:action.payload.title,dueDate:action.payload.date};
            }
            return task; 
          });
        return {
          ...state,
          tasks: updatedTasks
        };
        case DELETE_TASK:
   
          return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload),
            completedTasks: state.completedTasks.filter((task) => task.id !== action.payload),
          };

        case BY_TITLE:
          
          const sortedTasks = [...state.tasks].sort((a, b) => {
            return a.title.localeCompare(b.title);
          });
          return {
            ...state,
            tasks: sortedTasks,
          };
          case BY_DATE:
          
            const sortedTasks2 = [...state.tasks].sort((a, b) => {
              return new Date(a.dueDate) - new Date(b.dueDate);
            });
            return {
              ...state,
              tasks: sortedTasks2,
            };
            case BY_DESC:
          
              const sortedTasks3 = [...state.tasks].sort((a, b) => {
                return a.description.localeCompare(b.description);
              });
              return {
                ...state,
                tasks: sortedTasks3,
              };
      case COMPLETE_TASK:
        const completedTask = state.tasks.find(
          (task) => task.id === action.payload
        );
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
          completedTasks: [...state.completedTasks, completedTask],
        };
        case UNDO_TASK:
          const undoTask = state.completedTasks.find(
            (task) => task.id === action.payload
          );
          return {
            ...state,
            tasks: [...state.tasks, undoTask],
            completedTasks:  state.completedTasks.filter((task) => task.id !== action.payload),
          };
      default:
        return state;
    }
  };
  
  export default taskReducer;