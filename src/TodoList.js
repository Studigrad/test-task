import React from 'react';
import { useSelector } from 'react-redux';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { deleteTask,updateTask,completeTask,byTitle,byDate,byDesc} from './actions/taskActions';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import Todo from './Todo';
import CompletedTodo from './CompletedTodo';
const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const completedTasks = useSelector((state) => state.completedTasks);
  const dispatch = useDispatch();

  return (
    <div>
                      <Button variant="contained"  style={styleBtn} onClick={() => dispatch(byTitle(tasks))}>
                        Sort by title
                      </Button>
                      <Button variant="contained"  style={styleBtn} onClick={() => dispatch(byDate(tasks))}>
                        Sort by date
                      </Button>
                      <Button variant="contained"  style={styleBtn} onClick={() => dispatch(byDesc(tasks))}>
                        Sort by desc
                      </Button>
        <Paper>
        <List>
      {tasks.map((task,i) => (
    
        <React.Fragment key={i}>
        <Todo
          {...task}
          key={task.id}
          removeTodo={deleteTask}
          toggleTodo={completeTask}
          editTodo={updateTask}
         
        />
        {i < tasks.length - 1 && <Divider />}
      </React.Fragment>
      ))}
       </List>
       <List>
      {completedTasks.map((task,i) => (
    
        <React.Fragment key={i}>
        <CompletedTodo
          {...task}
          key={task.id}
          removeTodo={deleteTask}
          toggleTodo={completeTask}
          editTodo={updateTask}
         
        />
        {i < tasks.length - 1 && <Divider />}
      </React.Fragment>
      ))}
       </List>
        </Paper>
     
    </div>
  );
};
const styleBtn = {
  
  marginBottom:'2%',
  marginRight:'2%'

}
export default TodoList;