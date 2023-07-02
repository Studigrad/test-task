import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTask } from '../../actions/taskActions';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from "@material-ui/core/Paper";
import { format } from 'date-fns';
import Grid from "@material-ui/core/Grid";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Textarea from '@mui/joy/Textarea';
import Input from '@mui/joy/Input';
import { Link } from 'react-router-dom';
import './TodoForm.css'
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
    navigate('/')
  };
const home = '<'
  return (
    <div >
    
      <Paper
              className='paper'
              elevation={0}
            >
                 <Grid container justify='center' style={{ marginTop: "1rem" }}>
                    <Grid item xs={11} md={8} lg={4}>
                      <div className='header'>
                      <Link className='link' to={'/'}><h2> {home} </h2></Link>
                     <h2 style={{display:'inline', marginLeft: 'auto'}}>CREATE TASK</h2>
                      </div>
                   
                    <form onSubmit={handleSubmit}>
    
      <Input
      style={inpMargin}
      type="text"
      required
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      fullWidth
      autoFocus
      />
        <Textarea
        style={inpMargin}
        color="neutral"
        placeholder="Description"
        required
        disabled={false}
        minRows={2}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        size="md"
        variant="outlined"
      />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['MobileDatePicker']}>
        <MobileDatePicker 
          label="Pick date"  
          required
          value={dueDate}
          views={['year', 'month', 'day']}
          onChange={(date) => {
            const dateString = date.toString();
            setDueDate(format(new Date(dateString), 'EEE, dd MMM yyyy'))
          }
          
          } 
          />

      </DemoContainer>
    </LocalizationProvider>
       <Button style={btn} variant="outlined" type='submit'>Add Task</Button>
       
       </form>
                    </Grid>
                    
                  </Grid>
                 

              </Paper>
    
    </div>
  );
};

const inpMargin = {
  marginTop:'2%'
}
const btn = {
  display:'block',marginTop:'2%'
}

export default TodoForm;