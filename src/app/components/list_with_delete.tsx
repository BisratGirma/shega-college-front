import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { DeleteOutline, Folder } from "@mui/icons-material";

function ListWithDelete() {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteOutline />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <Folder />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary="Single-line item"
        secondary={"secondary" ? "Secondary text" : null}
      />
    </ListItem>
  );
}

export default ListWithDelete;
