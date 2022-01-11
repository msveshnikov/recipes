import React from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

const PREFIX = "Header";

const classes = {
    toolbar: `${PREFIX}-toolbar`,
    toolbarTitle: `${PREFIX}-toolbarTitle`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled("div")(({ theme }) => ({
    [`& .${classes.toolbar}`]: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },

    [`& .${classes.toolbarTitle}`]: {
        flex: 1,
        marginTop: theme.spacing(1),
    },
}));

const Header = () => {
    return (
        <Root>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" color="inherit" align="center" className={classes.toolbarTitle}>
                    My Cooks Club
                </Typography>
                <IconButton component={RouterLink} to="/search" size="large">
                    <SearchIcon />
                </IconButton>
            </Toolbar>
        </Root>
    );
};

export default Header;
