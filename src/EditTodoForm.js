import React from "react";
import Button from '@mui/material/Button';
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
function EditTodoForm({ id,date,title, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const [titleValue, titleHandleChange, titleReset] = useInputState(title);
  const [dateValue, dateHandleChange, dateReset] = useInputState(date);
  const dispatch = useDispatch();
  const onHandleSubmit = (e) =>{
    e.preventDefault();
    dispatch(editTodo(id, value,titleValue,dateValue));
    reset();
    titleReset()
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
        <TextField
        margin='normal'
        value={dateValue}
        onChange={dateHandleChange}
        fullWidth
        autoFocus
      />
      <ListItemSecondaryAction>
            
            <IconButton aria-label='Edit' onClick={onHandleSubmit}>
              <AddIcon />
            </IconButton>
          </ListItemSecondaryAction>
    </div>
  );
}
export default EditTodoForm;
