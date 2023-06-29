import { Link } from "react-router-dom";
import TodoList from "./TodoList";
import Button from '@mui/material/Button';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SendIcon from '@mui/icons-material/Send';
function TodoApp() {
 return(
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
                    <Button variant="contained" endIcon={<SendIcon />} style={styleBtn} >
                        <Link to="/create" style={{textDecoration:'none',color:'white'}}>Create New Task</Link>
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
