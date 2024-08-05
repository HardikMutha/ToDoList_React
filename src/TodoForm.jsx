import TextField from "@mui/material/TextField";
import { ListItem } from "@mui/material";
import "./BtnStyle.css";

export default function TodoForm({ updateTask }) {
  function passTask(evt) {
    evt.preventDefault();
    updateTask(evt.target[0].value);
  }
  return (
    <ListItem>
      <form className="textdiv" onSubmit={passTask}>
        <TextField
          id="filled-basic"
          label="Task"
          variant="filled"
          className="textip"
          InputLabelProps={{
            style: {
              color: "black",
              fontWeight: "600",
              paddingLeft: "10px",
            },
          }}
        />
        <div className="nice">
          <button className="submitbtm">Add Task</button>
        </div>
      </form>
    </ListItem>
  );
}
