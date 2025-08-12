import ClaimedBox from "./claimed_box";
import UnclaimedBox from "./unclaimed_box";
import StatBox from "./stat_box";

import Box from '@mui/material/Box';



export default function Home() {
  return (
    <Box>
      <UnclaimedBox/>
      <ClaimedBox/>
      <StatBox/>
    </Box>
  );
}
