import { Link } from "react-router-dom";
import TodoList from "../todoList/TodoList";
import Button from '@mui/material/Button';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SendIcon from '@mui/icons-material/Send';
import './TodoApp.css'
function TodoApp() {
 return(
      <div>
        <Paper
              className="paper"
              elevation={0}
            >
                  <Grid container justify='center' style={{ marginTop: "1rem" }}>
                    <Grid item xs={11} md={8} lg={4}>
                    <Button variant="contained" endIcon={<SendIcon />} style={styleBtn} >
                        <Link to="/create" className="link-create" >Create New Task</Link>
                      </Button>
                      <TodoList/>
                    </Grid>
                  </Grid>

              </Paper>
      </div>
  
 )

}
const styleBtn = {
  
    marginBottom:'2%',
    marginRight:'2%'
  
}
export default TodoApp;
