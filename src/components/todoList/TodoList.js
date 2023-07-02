import React from 'react';
import { useSelector } from 'react-redux';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { deleteTask,updateTask,completeTask,byTitle,byDate,byDesc,unDoTask} from '../../actions/taskActions';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import Todo from '../todo/Todo';
import CompletedTodo from '../completedTodo/CompletedTodo';
const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const completedTasks = useSelector((state) => state.completedTasks);
  const dispatch = useDispatch();

  return (
    <div>
                       <div style={{textAlign:'center'}}>
                        <Button variant="contained"  style={styleBtn} onClick={() => dispatch(byTitle(tasks))}>
                          Sort by title
                        </Button>
                        <Button variant="contained"  style={styleBtn} onClick={() => dispatch(byDate(tasks))}>
                          Sort by date
                        </Button>
                        <Button variant="contained"  style={styleBtn} onClick={() => dispatch(byDesc(tasks))}>
                          Sort by desc
                        </Button>
                      </div>

          <h1 style={{textAlign:'center'}}>TASKS</h1>

        <Paper style={{ backgroundColor: '#3ededb' }}>
        {tasks.length ? null : <p style={{textAlign:'center'}}>NO TASKS</p>}
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
       </Paper>

       <h1 style={{textAlign:'center'}}>COMPLETED TASKS</h1>

       <Paper style={{backgroundColor:'#3ededb'}}>
            {completedTasks.length ? null : <p style={{textAlign:'center'}}>EMPTY</p>}
            <List>
            {completedTasks.map((task,i) => (
          
              <React.Fragment key={i}>
              <CompletedTodo
                {...task}
                key={task.id}
                removeTodo={deleteTask}
                toggleTodo={unDoTask}
                editTodo={updateTask}
              />
              {i < completedTasks.length - 1 && <Divider />}
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