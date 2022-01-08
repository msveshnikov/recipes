import React from "react";
import { makeStyles } from "@mui/styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
        marginTop: theme.spacing(1),
    },
}));

const Header = () => {
    const classes = useStyles();
    return <>
        <Toolbar className={classes.toolbar}>
            <Typography variant="h5" color="inherit" align="center" className={classes.toolbarTitle}>
                My Cooks Club
            </Typography>
            <IconButton component={RouterLink} to="/search" size="large">
                <SearchIcon />
            </IconButton>
        </Toolbar>
    </>;
};

export default Header;
