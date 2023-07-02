import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { format } from 'date-fns';
import dayjs from 'dayjs';
import useInputState from "../../hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
function EditTodoForm({ id,date,title, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const [titleValue, titleHandleChange, titleReset] = useInputState(title);
  const [dateValue, dateHandleChange, dateReset] = useInputState(date);
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();
  const onHandleSubmit = (e) =>{
    e.preventDefault();
    dispatch(editTodo(id, value,titleValue,dueDate));
    reset();
    titleReset()
    setDueDate('')
    dateReset()
    toggleEditForm();
  }
  return (
    <div style={{ marginLeft: "1rem", width: "50%" }}>
      
      <TextField
        margin='normal'
        value={titleValue}
        onChange={titleHandleChange}
        fullWidth
        autoFocus
      />
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['MobileDatePicker']} >
        <MobileDatePicker 
         
          label="Pick date"  
          value={dueDate}
          onChange={(date) => {
            const dateString = date.toString();
            setDueDate(format(new Date(dateString), 'EEE, dd MMM yyyy'))
          } } 
          defaultValue={dayjs('04-17-2023')}
          />
       
      </DemoContainer>
    </LocalizationProvider>
      <ListItemSecondaryAction>
            
            <IconButton aria-label='Edit' onClick={onHandleSubmit}>
              <AddIcon />
            </IconButton>
          </ListItemSecondaryAction>
    </div>
  );
}
export default EditTodoForm;
