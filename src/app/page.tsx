'use client';

import ClaimedBox from "./claimed_box";
import UnclaimedBox from "./unclaimed_box";
import StatBox from "./stat_box";
import Box from '@mui/material/Box';

import { ThemeProvider, createTheme, Typography, Stack } from "@mui/material";

import generalTheme from "./theme/general_theme";

export default function Home() {
  return (
    <ThemeProvider theme={generalTheme}>
      <Stack spacing={2} padding={2}>
        <Typography variant="h1">
        SHIFT-SWAP
        </Typography>
        <UnclaimedBox/>
        <ClaimedBox/>
        <StatBox/>
      </Stack>
      
      
    </ThemeProvider>
  );
}
