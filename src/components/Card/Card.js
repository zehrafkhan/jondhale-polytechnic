import React from "react";
import Box from "@mui/material/Box";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import arrowRight from "../../assets/img/arrow-right.svg";

import { Link } from 'react-router-dom';
import styles from "./styles";

const Card = ({ title, imgSrc, link }) => {
  const handleButtonClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    
    <MuiCard sx={styles.card}>
      <CardContent sx={{ padding: 0 }}>
        <Box component="img" src={imgSrc} style={{width:'35%'}} />
        <Typography variant="h3">{title}</Typography>
        <List>
          <ListItem sx={styles.listItem}>
            <Box component="img" src={arrowRight} sx={{ margin: "3px" }} />
            EnRoll Now
          </ListItem>
          <ListItem sx={styles.listItem}>
            <Box component="img" src={arrowRight} sx={{ margin: "3px" }} />
            Make your dream come true
          </ListItem>
          <ListItem sx={styles.listItem}>
            <Box component="img" src={arrowRight} sx={{ margin: "3px" }} />
           Limited  seats
          </ListItem>
        </List>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <Button sx={styles.btnItem} component={Link} to={link} onClick={handleButtonClick} >
          Read More
          <Box component="img" src={arrowRight} />
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
