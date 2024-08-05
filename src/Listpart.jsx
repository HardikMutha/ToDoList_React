import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
// import TextField from "@mui/material/TextField";
import "./StyleList.css";
import TodoForm from "./TodoForm";

export default function CheckboxList({ listitems, removeElement, updateTask }) {
  const [checked, setChecked] = useState({ ...listitems });
  function handleToggle() {
    console.log(checked);
    if (checked.completed) setChecked({ ...checked, completed: false });
    else setChecked({ ...checked, completed: true });
  }

  return (
    <div className="Nice">
      <List className="Liststyle">
        <h1>To-Do List</h1>
        {listitems.map((value) => {
          const labelId = `checkbox-list-label-${value.id}`;
          return (
            <ListItem
              key={value.id}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <DeleteIcon
                    onClick={() => {
                      removeElement(value.id);
                    }}
                  />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={value.condition}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                    onClick={handleToggle}
                  />
                </ListItemIcon>
                <ListItemText id={value.id} primary={`${value.text}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
        <TodoForm updateTask={updateTask} />
      </List>
    </div>
  );
}
