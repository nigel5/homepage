import React, { useEffect } from 'react';
import Leo from './images/leo.jpg';
import TLL from './images/TranCore_Link_Logistics_Logo.jpg';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import {OutboundLink} from "react-ga";
import Resume from "./files/nigelHuangResume.pdf";
import ReactGA from "react-ga";

const styles = {
    root: {
        marginTop: 100
    },
    img: {
        maxWidth: "100%",
        maxHeight: "10vh"
    },
    imgDiv: {
        margin: "1em"
    },
    outboundLink: {
        backgroundColor: "#f0f0f0",
        textDecoration: 'none',
        borderRadius: '5px',
        padding: "5px",
        margin: "5px 0.2em 5px 0.2em",
    }
}

function App() {
    useEffect(() => {
        console.log("ok");
        ReactGA.initialize("UA-148475828-2");
        ReactGA.pageview(window.location.pathname + window.location.search);
    });

  return (
    <div className="App" style={styles.root}>
        <Grid container direction={"column"} alignItems={"center"} spacing={2}>
          <Grid item>
              <header>
                  <Typography align={"center"} component={"h1"} variant={"h6"}>Nigel Huang</Typography>
                  <Typography align={"center"} variant={"caption"}>Computer Engineering 2022</Typography>
              </header>
          </Grid>
            <Grid container item direction="column" alignItems={"center"} justify={"center"}>
                <Grid item>
                    <Typography align={"center"} component={"h2"} variant={"overline"}>Links</Typography>
                </Grid>
                <Grid container item justify={"center"}>
                    <OutboundLink target="_blank" style={styles.outboundLink} eventLabel={"link-to-github"} to={"https://github.com/nigel5"}>
                        <Typography>GitHub</Typography>
                    </OutboundLink>
                    <OutboundLink target="_blank" style={styles.outboundLink} eventLabel={"link-to-resume"} to={Resume}>
                        <Typography>Resume</Typography>
                    </OutboundLink>
                    <OutboundLink target="_blank" style={styles.outboundLink} eventLabel={"link-to-linkedin"} to={"http://linkedin.com/in/nigel-huang/"}>
                        <Typography>LinkedIn</Typography>
                    </OutboundLink>
                </Grid>
                <br></br>
                <br></br>
                <Grid item>
                    <Typography align={"center"} component={"h2"} variant={"overline"}>Experience</Typography>
                </Grid>
                <Grid container item justify={"center"}>
                    <div style={styles.imgDiv}>
                        <img style={styles.img} src={TLL} alt={"TransCore Link Logistics Logo"}/>
                    </div>
                    <div style={styles.imgDiv}>
                        <img style={styles.img} src={Leo} alt={"RBC Logo"}/>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
