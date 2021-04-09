import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
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
    return (
        <>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" color="inherit" align="center" className={classes.toolbarTitle}>
                    My Cooks Club
                </Typography>
                <IconButton component={RouterLink} to="/search">
                    <SearchIcon />
                </IconButton>
            </Toolbar>
        </>
    );
};

export default Header;
