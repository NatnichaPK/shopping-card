"use client";

import { IconButton, Stack, Typography, Grid2 as Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

export default function ItemCrat({
  itemname,
  itemPrice,
  imageUrl,
  handleIncremental,
  handleDecremental,
}: {
  itemname: string;
  itemPrice: number;
  imageUrl: string;
  handleIncremental: () => void;
  handleDecremental: () => void;
}) {
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const formatNumber = (number: number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  const handleAddItemClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    setTotalPrice(newCount * itemPrice);
    handleIncremental();
  };

  const handleRemoveItemClick = () => {
    if (count < 1) return;
    const newCount = count - 1;
    setCount(newCount);
    setTotalPrice(newCount * itemPrice);
    handleDecremental();
  };

  return (
    <Grid size={{xs:12 ,sm:4 ,md:4 ,lg:4}}>
      <Stack spacing={2} alignItems="center">
        <img 
          src={imageUrl} 
          alt={itemname} 
          style={{
            width: "100%", 
            height: "auto", 
            maxWidth: "150px",   
            maxHeight: "150px",  
            objectFit: "cover"   
          }} 
        />

        <Typography variant="h6">{itemname}</Typography>
        
        <Typography variant="h6">{formatNumber(itemPrice)} THB</Typography>
        
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton onClick={handleRemoveItemClick}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6">{count}</Typography>
          <IconButton onClick={handleAddItemClick}>
            <AddIcon />
          </IconButton>
        </Stack>
        
        <Typography variant="h6">{formatNumber(totalPrice)} THB</Typography>
      </Stack>
    </Grid>
  );
}
