'use client';

import ClaimedBox from "./claimed_box";
import UnclaimedBox from "./unclaimed_box";
import StatBox from "./stat_box";
import Box from '@mui/material/Box';

import { ThemeProvider, createTheme, Typography, Divider } from "@mui/material";

const customTheme = createTheme({
  typography: {
      h1: {
      }
    },
});



export default function Home() {
  return (
    <ThemeProvider theme={customTheme}>
      <Typography variant="h1">
        SHIFT-SWAP
      </Typography>
      <Divider/>
      <UnclaimedBox/>
      <Divider/>
      <ClaimedBox/>
      <StatBox/>
    </ThemeProvider>
  );
}
