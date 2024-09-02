"use client";
import { Stack, Typography, Grid2 as Grid } from "@mui/material";
import React from "react";
import ItemCrat from "./itemCrat";

export default function Home() {
  const [totalItems, setTotalItems] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleIncremental = (price: number) => {
    setTotalItems(totalItems + 1);
    setTotalPrice(totalPrice + price);
  };

  const handleDecremental = (price: number) => {
    setTotalItems((prevTotal) => (prevTotal > 0 ? prevTotal - 1 : 0));
    setTotalPrice((prevPrice) => (prevPrice > 0 ? prevPrice - price : 0));
  };

  const formatNumber = (number: number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  const myItems = [
    { itemname: "iPhone 15 Pro", price: 41900, imageUrl: "/iphone15pro.jpg" },
    { itemname: "iPhone 15", price: 32900, imageUrl: "/iphone15.jpg" },
    { itemname: "iPad Pro", price: 39900, imageUrl: "/ipadpro.jpg" },
    { itemname: "iPad Air", price: 23900, imageUrl: "/ipadair.png" },
    { itemname: "iPad mini", price: 19900, imageUrl: "/ipadmini.jpg" },
    { itemname: "MacBook Air", price: 36900, imageUrl: "/macbookair.jpg" },
    { itemname: "MacBook Pro", price: 129900, imageUrl: "/macbookpro.jpg" },
    { itemname: "iMac", price: 45900, imageUrl: "/imac.jpg" },
    { itemname: "Mac mini", price: 20900, imageUrl: "/macmini.jpg" },
    { itemname: "Mac Studio", price: 74900, imageUrl: "/macstudio.jpg" },
  ];

  return (
    <div>
      <Typography variant="h3" align="center" gutterBottom>
        Apple Store
      </Typography>
      
      <Grid container spacing={3}>
        {myItems.map((item) => (
          <ItemCrat
            key={item.itemname}
            itemname={item.itemname}
            itemPrice={item.price}
            imageUrl={item.imageUrl}
            handleIncremental={() => handleIncremental(item.price)}
            handleDecremental={() => handleDecremental(item.price)}
          />
        ))}
      </Grid>
      
      <Stack direction="row" spacing={2} mt={2}>
        <Typography variant="h4">Total Items: {totalItems}</Typography>
      </Stack>

      <Stack direction="row" spacing={2} mt={2}>
        <Typography variant="h4">
          Total Price: {formatNumber(totalPrice)} THB
        </Typography>
      </Stack>
    </div>
  );
}
