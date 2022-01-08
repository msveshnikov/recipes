import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import logo from "./../assets/images/logo.png";
import preval from "preval.macro";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" target="_blank" href="https://extender.tk/">
                MaxSoft
            </Link>{" "}
            <img
                style={{ width: "24px", height: "24px", marginLeft: "3px", marginRight: "3px" }}
                src={logo}
                alt="maxsoft"
            />
            <br />
            <span>Build: {preval`module.exports = new Date().toLocaleString();`} UTC.</span>
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0),
    },
}));

export default function Footer({ description, title }) {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    {description}
                </Typography>
                <Copyright />
            </Container>
        </footer>
    );
}
