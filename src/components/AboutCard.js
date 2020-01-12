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
  card: { margin: "5vh auto", maxWidth: 340 },
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
            <Typography
              style={{
                textTransform: "uppercase",
                textDecoration: "underline",
                textAlign: "center",
                padding: "10px 0px 20px 0px",
                fontWeight: "bold"
              }}
              variant="h5"
              component="h2"
            >
              {heading}
            </Typography>
            <CardMedia
              className={classes.media}
              image={source}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  padding: "20px 0px",
                  textAlign: "center"
                }}
                gutterBottom
                variant="body1"
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
