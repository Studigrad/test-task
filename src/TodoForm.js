import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTask } from './actions/taskActions';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
const TodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title,
      description,
      dueDate,
    };
    dispatch(addTask(newTask));
    setTitle('');
    setDescription('');
    setDueDate('');
    navigate('/home')
  };

  return (
    <div>
    
      <Paper
              style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
              }}
              elevation={0}
            >
                 <Grid container justify='center' style={{ marginTop: "1rem" }}>
                    <Grid item xs={11} md={8} lg={4}>
                    <h2>Create Task</h2>
                    
        <TextField
        margin='normal'
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        autoFocus
      />
        <TextField
        margin='normal'
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        autoFocus
      />
        <TextField
        margin='normal'
        type="text"
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        fullWidth
        autoFocus
      />
       
       <Button onClick={handleSubmit} style={{display:'block'}}>Add Task</Button>
    
                    </Grid>
                    
                  </Grid>
                 

              </Paper>
    
    </div>
  );
};
export default TodoForm;