'use client';

import React, { useState } from "react";
import { ClaimedBox } from "./claimed_box";
import { UnclaimedBox } from "./unclaimed_box";
import StatBox from "./stat_box";
import { Post } from "./Post";
import { ThemeProvider, createTheme, Typography, Stack } from "@mui/material";
import generalTheme from "./theme/general_theme";

interface Employee {
  name: string;
  code: string;
  manager: boolean;
}

export default function Home() {

  const employees: Employee[] = [{name:"Sara", code:"1234", manager:false}, {name:"George", code:"4321", manager:true}]; 

  const [unclaimedPosts, setUnclaimedPosts] = useState<Post[]>([]);

  const [claimedPosts, setClaimedPosts] = useState<Post[]>([]);

  const newPost = (post: Post) => {
    const maybeEmployee = employees.find(employee => employee.code === post.codeOfPostee)

    if (maybeEmployee === null) {
      alert('Invalid Code');
      return;
    }

    const employee : Employee = maybeEmployee as Employee;

    if (post.openShift && !employee.manager) {
      alert('Only managers can post open shifts');
      return;
    } else if (post.openShift && employee.manager) {
      post.nameOfPostee = "Open Shift";
    } else {
      post.nameOfPostee = employee.name;
    }
    
    setUnclaimedPosts(prev => [...prev, post]);
  };

  const postClaimed = (id : number) => {
    const post : Post = unclaimedPosts.find(post => post.id === id)!;
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
