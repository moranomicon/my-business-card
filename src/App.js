import Banner from "./image/banner.png";
import "./App.css";
import Detail from "./components/Detail";
import {
  Card,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Divider,
  Link
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactsIcon from "@mui/icons-material/Contacts";
import { GitHub } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="Banner" height="140" image={Banner} />
        <CardContent style={{ padding: 10 }}>
          <Typography variant="h4">Denissa</Typography>
          <Typography variant="subtitle1">Programmer</Typography>
          <Divider light />
          <Grid
            padding={2}
            container
            sx={{ maxWidth: 345 }}
            spacing={3}
            justifyContent="center">
            <Grid item alignContent={"center"}>
              <Link
                href="https://www.linkedin.com/in/denissa-zhang-589a681b7/"
                rel="noopener"
                target="_blank">
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  startIcon={<LinkedInIcon />}>
                  LinkedIn
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="mailto:denissazhang@gmail.com"
                rel="noopener"
                target="_blank">
                <Button
                  size="small"
                  variant="contained"
                  startIcon={<ContactsIcon />}>
                  Contact
                </Button>
              </Link>
            </Grid>
          </Grid>
          <Detail
            title={"About"}
            detail={
              "Junior backend programmer in a manufacturing industry. Django Rest Framework, PostgreSQL, and C# user. Also have experience working with React, Flutter, NodeJS, Firebase, MongoDB, and SQL Server."
            }></Detail>
          <Detail
            title={"Interest"}
            detail={
              "Mystery novels, detective games, and collecting cute (pink) stuffs!"
            }></Detail>
          <Divider light />
          <CardActions style={{ justifyContent: "center", padding: 10 }}>
            <Link
              href="https://github.com/moranomicon"
              rel="noopener"
              target="_blank">
              <GitHub />
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
