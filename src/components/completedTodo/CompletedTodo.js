import React from "react";
import useToggleState from "../../hooks/useToggleState";
import EditTodoForm from "../editTodoForm/EditTodoForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import List from '@mui/material/List';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { useDispatch } from 'react-redux';
import "./CompletedTodo.css"
function CompletedTodo({ id,title,dueDate, description, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggleState(false);
  const dispatch = useDispatch();
  return (
    <ListItem className="completedTodo">
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
            checked={true}
            onClick={() => dispatch(toggleTodo(id))}
          />
        <List >

          <ListItemText  className="listItem">
          {title}
          </ListItemText>

          <ListItemText style={{paddingRight:'20%'}} className="listItem" >
           {description}
          </ListItemText>

          <ListItemText  className="listItem" >
            Due Date: {dueDate}
          </ListItemText>
          </List>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={() => dispatch(removeTodo(id))}>
              <DeleteIcon />
            </IconButton>
           
          </ListItemSecondaryAction>
          
        
        </>
      )}
    </ListItem>
  );
}

export default CompletedTodo;
