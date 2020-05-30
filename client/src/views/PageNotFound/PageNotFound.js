import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import P404Image from "images/404.jpg";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <Grid container justify="center" className="grid">
        <Grid sm={8} md={5} lg={4} className="grid-in">
          <Card className="inBox">
            <CardContent>
              <img src={P404Image} alt="page not found" />
              <Typography variant="h5" gutterBottom align="center">
                Looks like you've got lost...
              </Typography>
              <Link to="/">
                <Button variant="contained" color="primary">
                  Back to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default PageNotFound;
