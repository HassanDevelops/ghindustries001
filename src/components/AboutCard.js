import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  card: { margin: "5vw" },
  media: {
    height: "140px"
  }
});

const AboutCard = ({ id, heading, title, description, source }) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Card key={id} className={classes.card}>
        <CardActionArea>
          <Typography
            style={{
              textTransform: "uppercase",
              textAlign: "center",
              padding: "20px 0px 20px 0px",
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
    </>
  );
};

export default AboutCard;
