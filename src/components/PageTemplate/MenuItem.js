import React, { Fragment } from "react";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  PeopleIcon,
} from "../../includes";
import { Link } from "react-router-dom";
export const mainListItems = (
  <Fragment>
    
    
    <Link to="/users" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
    </Link>
    
  </Fragment>
);
