import TextField from "@mui/material/TextField";
import { ListItem } from "@mui/material";
import "./BtnStyle.css";
import { useState } from "react";

export default function TodoForm({ updateTask }) {
  function passTask(evt) {
    evt.preventDefault();
    if(evt.target[0].value!='')
    {
        updateTask(evt.target[0].value);
    }
    evt.target[0].value = '';
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
        {/* {isValid && <p style={{color:'red'}}>Please Enter a Task !!!</p>}   */}
        <div className="nice">
          <button className="submitbtm">Add Task</button>
        </div>
      </form>
    </ListItem>
  );
}
