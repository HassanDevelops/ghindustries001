import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles({
  card: { margin: "5vh auto", maxWidth: 345 },
  media: {
    height: 140
  }
});

const AboutCard = ({ id, heading, title, description, source }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item>
        <Card key={id} className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={source}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                style={{
                  textTransform: "uppercase",
                  textDecoration: "underline",
                  textAlign: "center"
                }}
                gutterBottom
                variant="h5"
                component="h2"
              >
                {heading}
              </Typography>
              <Typography
                style={{ textTransform: "uppercase" }}
                gutterBottom
                variant="body2"
                component="h3"
              >
                {title}
              </Typography>
              <Typography
                style={{ textAlign: "justify" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default AboutCard;
