'use client';

import React, { useState } from "react";
import { ClaimedBox } from "./claimed_box";
import { UnclaimedBox } from "./unclaimed_box";
import StatBox from "./stat_box";
import Box from '@mui/material/Box';
import { Post } from "./Post";

import { ThemeProvider, createTheme, Typography, Stack } from "@mui/material";

import generalTheme from "./theme/general_theme";

export default function Home() {

  const [unclaimedPosts, setUnclaimedPosts] = useState<Post[]>([
    {id: 1, nameOfPostee: "Name", date: "date", time: "time", code: "", nameOfClaimee: "Claimee"}
  ]);

  const [claimedPosts, setClaimedPosts] = useState<Post[]>([
    {id: 1, nameOfPostee: "Name", date: "date", time: "time", code: "", nameOfClaimee: "Claimee"}
  ]);

  const newPost = () => {
    setUnclaimedPosts(prev => [
      ...prev,
      {
        id: Date.now(),
        nameOfPostee: `Name ${prev.length + 1}`,
        nameOfClaimee: "",
        date: "new date",
        time: "new time",
        code: ""
      }
    ]);
  };

  const postClaimed = (id : number) => {
    const post = unclaimedPosts.find(post => post.id === id);
    setClaimedPosts(prev => [...prev, post]);
    removePost(id);
  };

  const removePost = (id: number) => {
    setUnclaimedPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <ThemeProvider theme={generalTheme}>
      <Stack spacing={2} padding={2}>
        <Typography variant="h1">
        SHIFT-SWAP
        </Typography>
        <UnclaimedBox
          posts={unclaimedPosts}
          onPost={newPost}
          onRemove={removePost}
          onClaim={postClaimed}
        />
        <ClaimedBox
          posts={claimedPosts}
        />
        <StatBox/>
      </Stack>
      
      
    </ThemeProvider>
  );
}
