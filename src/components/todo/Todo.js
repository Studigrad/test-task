import React from "react";
import useToggleState from "../../hooks/useToggleState";
import EditTodoForm from "../editTodoForm/EditTodoForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import List from '@mui/material/List';
import { useDispatch } from 'react-redux';
function Todo({ id,title,dueDate, description, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggleState(false);
  const dispatch = useDispatch();
  return (
    <ListItem style = {{padding:'10px'}} >
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={description}
          title = {title}
          toggleEditForm={toggle}
          date = {dueDate}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={false}
            onClick={() => dispatch(toggleTodo(id))}
          />
        
        <List >
          <ListItemText >
          {title}
          </ListItemText>

          <ListItemText style={{paddingRight:'20%'}} >
           {description}
          </ListItemText>

          <ListItemText  >
            Due Date: {dueDate}
          </ListItemText>
          </List>

       
          <ListItemSecondaryAction >
          <IconButton aria-label='Delete' onClick={() => dispatch(removeTodo(id))}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label='Edit' onClick={toggle}>
            <EditIcon />
          </IconButton>
          </ListItemSecondaryAction>
        
         
        </>
      )}
    </ListItem>
  );
}

export default Todo;
