import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CountryItem = ({ country }) => {
  return (
    <Card
      sx={{
        maxWidth: 200,
        margin: 2,
        textAlign: "center",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={country.flags.svg}
          alt={country.name.common}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {country.name.official}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {`Population: ${country.population}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CountryItem;
