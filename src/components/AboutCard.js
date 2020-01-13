import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
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
  },
  fullScreenClassGrid: {
    // display: "grid",
    // girdTempleteColumn: "1fr auto",
    display: "flex",
    flexDirection: "row"
  },
  mobileClassGrid: {}
});

const AboutCard = ({ id, heading, title, description, source }) => {
  const classes = useStyles();
  return (
    <>
      <Card key={id} className={classes.card}>
        <div>
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
          <CardMedia className={classes.media} image={source} title={heading} />
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
        </div>
      </Card>
    </>
  );
};

export default AboutCard;
