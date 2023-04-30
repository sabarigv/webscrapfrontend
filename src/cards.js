import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {  CardActionArea } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

export default function ProductCard() {
  var [products, setProducts] = useState([]);
  // var products={}
  useEffect(() => {
    function fetchget() {
      axios
        .get("http://localhost:3001/getproducts")
        .then((res) => {
          setProducts(res.data);
          // console.log({products});
        })
        .catch((er) => {
          console.log(er);
        });
    }
    fetchget();
  }, [products]);
  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {products.map((e) => (
        <Grid item>
        <Card sx={{ minWidth:350  }}>
          <CardActionArea key={e.id}>
            <CardMedia
              component="img"
              height="430"
              image={e.img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name:{e.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Model Name:{e.model}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price:{e.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quantity Available:{e.quantity}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
         
      ))}
      </Grid>
    </div>
  );
}
