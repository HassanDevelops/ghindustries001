import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid
} from "@material-ui/core";

import ShareSocialMedia from "./ShareSocialMedia";

const useStyles = makeStyles({
  card: { margin: "5vh auto", maxWidth: 345 },
  media: {
    height: 140
  }
});
const ProductCard = ({
  id,
  catagory,
  name,
  size,
  price,
  source,
  description
}) => {
  const classes = useStyles();

  const handProductDetailPage = id => {};

  return (
    <>
      <Grid item key={id}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={name}
              height="140"
              image={source}
              title={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {name}
              </Typography>
              <Typography gutterBottom variant="body1" component="h3">
                {size} , {price} Rps
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ShareSocialMedia />
            <Button
              size="small"
              color="primary"
              onClick={() => handProductDetailPage(id)}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
export default ProductCard;
