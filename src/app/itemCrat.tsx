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
    <Grid item xs={12} sm={4} md={4} lg={4}>
      <Stack spacing={2} alignItems="center">
        {/* Image */}
        <img 
          src={imageUrl} 
          alt={itemname} 
          style={{
            width: "100%", 
            height: "auto", 
            maxWidth: "150px",   // กำหนดความกว้างสูงสุด
            maxHeight: "150px",  // กำหนดความสูงสูงสุด
            objectFit: "cover"   // ปรับให้รูปภาพถูกครอบและมีอัตราส่วนที่ถูกต้อง
          }} 
        />

        {/* Item Name */}
        <Typography variant="h6">{itemname}</Typography>
        
        {/* Item Price */}
        <Typography variant="h6">{formatNumber(itemPrice)} THB</Typography>
        
        {/* Quantity Controls */}
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton onClick={handleRemoveItemClick}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6">{count}</Typography>
          <IconButton onClick={handleAddItemClick}>
            <AddIcon />
          </IconButton>
        </Stack>
        
        {/* Total Price */}
        <Typography variant="h6">{formatNumber(totalPrice)} THB</Typography>
      </Stack>
    </Grid>
  );
}
