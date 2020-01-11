import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Divider,
  MenuList,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import useReactRouter from "use-react-router";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false
  });
  const [mainTitle, setMainTitle] = useState("Home");

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <MenuList>
        <MenuItem
          button
          component={Link}
          to="/"
          selected={"/" === pathname}
          onClick={() => setMainTitle("Home")}
        >
          Home
          <Divider />
        </MenuItem>
        <MenuItem
          button
          component={Link}
          to="/about"
          selected={"/about" === pathname}
          onClick={() => setMainTitle("About")}
        >
          About Us
          <Divider />
        </MenuItem>
        <MenuItem
          button
          component={Link}
          to="/products"
          selected={"/products" === pathname}
          onClick={() => setMainTitle("Products")}
        >
          Products
          <Divider />
        </MenuItem>
      </MenuList>
    </div>
  );
  const {
    location: { pathname }
  } = useReactRouter();

  return (
    <>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>

      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={toggleDrawer("left", true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              {mainTitle}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
export default Header;
