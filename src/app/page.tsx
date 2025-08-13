'use client';

import React, { useState } from "react";
import { ClaimedBox } from "./claimed_box";
import { UnclaimedBox } from "./unclaimed_box";
import { StatBox } from "./stat_box";
import { ApprovalBox } from "./approval_box";
import { Post } from "./Post";
import { ThemeProvider, createTheme, Typography, Stack } from "@mui/material";
import generalTheme from "./theme/general_theme";
import { Employee } from "./Employee";

export default function Home() {


  const dataSara = [
    { month: "Jan", postedPending: 0, postedApproved: 8, postedDenied: 2, claimedPending: 0, claimedApproved: 6, claimedDenied: 1 },
    { month: "Feb", postedPending: 0, postedApproved: 9, postedDenied: 3, claimedPending: 0, claimedApproved: 7, claimedDenied: 2 },
    { month: "Mar", postedPending: 0, postedApproved: 7, postedDenied: 1, claimedPending: 0, claimedApproved: 5, claimedDenied: 3 },
    { month: "Apr", postedPending: 0, postedApproved: 10, postedDenied: 2, claimedPending: 0, claimedApproved: 6, claimedDenied: 1 },
    { month: "May", postedPending: 0, postedApproved: 8, postedDenied: 2, claimedPending: 0, claimedApproved: 9, claimedDenied: 0 },
    { month: "Jun", postedPending: 0, postedApproved: 6, postedDenied: 4, claimedPending: 0, claimedApproved: 7, claimedDenied: 3 },
    { month: "Jul", postedPending: 0, postedApproved: 5, postedDenied: 3, claimedPending: 0, claimedApproved: 6, claimedDenied: 2 },
    { month: "Aug", postedPending: 0, postedApproved: 2, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
    { month: "Sep", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
    { month: "Oct", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
    { month: "Nov", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
    { month: "Dec", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
  ];

  const dataGeorge = [
    { month: "Jan", postedPending: 0, postedApproved: 4, postedDenied: 1, claimedPending: 0, claimedApproved: 1, claimedDenied: 0 },
    { month: "Feb", postedPending: 0, postedApproved: 4, postedDenied: 3, claimedPending: 0, claimedApproved: 4, claimedDenied: 4 },
    { month: "Mar", postedPending: 0, postedApproved: 0, postedDenied: 3, claimedPending: 0, claimedApproved: 3, claimedDenied: 2 },
    { month: "Apr", postedPending: 0, postedApproved: 4, postedDenied: 0, claimedPending: 0, claimedApproved: 2, claimedDenied: 2 },
    { month: "May", postedPending: 0, postedApproved: 3, postedDenied: 3, claimedPending: 0, claimedApproved: 3, claimedDenied: 1 },
    { month: "Jun", postedPending: 0, postedApproved: 4, postedDenied: 4, claimedPending: 0, claimedApproved: 3, claimedDenied: 2 },
    { month: "Jul", postedPending: 0, postedApproved: 3, postedDenied: 0, claimedPending: 0, claimedApproved: 3, claimedDenied: 0 },
    { month: "Aug", postedPending: 0, postedApproved: 2, postedDenied: 2, claimedPending: 0, claimedApproved: 0, claimedDenied: 1 },
    { month: "Sep", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
    { month: "Oct", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
    { month: "Nov", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
    { month: "Dec", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
  ];

  const [employees, setEmployees] = useState<Employee[]>([{name:"Sara", code:"1234", manager:false, dataset: dataSara}, {name:"George", code:"4321", manager:true, dataset: dataGeorge}]);
  const [unclaimedPosts, setUnclaimedPosts] = useState<Post[]>([]);
  const [claimedPosts, setClaimedPosts] = useState<Post[]>([]);
  const [approvalPosts, setApprovalPosts] = useState<Post[]>([]);

  const newPost = (post: Post) => {
    const maybeEmployee = employees.find(employee => employee.code === post.codeOfPostee)

    if (maybeEmployee == null) {
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

  const postClaimed = (id : number, employeeCode: string) => {
    const maybeEmployee = employees.find(employee => employee.code === employeeCode)

    if (maybeEmployee == null) {
      alert('Invalid Code');
      return;
    } 
    const employee : Employee = maybeEmployee as Employee;
    const post : Post = unclaimedPosts.find(post => post.id === id)!;

    post.nameOfClaimee = employee.name;
    post.codeOfClaimee = employee.code;

    setClaimedPosts(prev => [...prev, post]);
    removeUnclaimedPost(id);
  };

  const postRemoved = (id : number, employeeCode: string) => {
    const maybeEmployee = employees.find(employee => employee.code === employeeCode)

    if (maybeEmployee == null) {
      alert('Invalid Code');
      return;
    } 
    const employee : Employee = maybeEmployee as Employee;
    const post : Post = unclaimedPosts.find(post => post.id === id)!;

    if (post.codeOfPostee == employeeCode || employee.manager) {
      removeUnclaimedPost(id);
    } else {
      alert('You do not have the rights to remove this post');
    }

  }

  const removeUnclaimedPost = (id : number) => {
    setUnclaimedPosts(prev => prev.filter(post => post.id !== id));
  };

  const removeClaimedPost = (id : number) => {
    setClaimedPosts(prev => prev.filter(post => post.id !== id));
  };

  const postApproved = (id : number, employeeCode : string) => {
    const maybeEmployee = employees.find(employee => employee.code === employeeCode)

    if (maybeEmployee == null) {
      alert('Invalid Code');
      return;
    } 
    const employee : Employee = maybeEmployee as Employee;

    if (!employee.manager) {
      alert("You do not have permission to perform this action");
      return;
    }

    const post : Post = claimedPosts.find(post => post.id === id)!;

    post.approval = "Approved";
    setApprovalPosts(prev => [...prev, post]);
    removeClaimedPost(id);
  }

  const postDenied = (id : number, employeeCode : string) => {
    const maybeEmployee = employees.find(employee => employee.code === employeeCode)

    if (maybeEmployee == null) {
      alert('Invalid Code');
      return;
    } 
    const employee : Employee = maybeEmployee as Employee;

    if (!employee.manager) {
      alert("You do not have permission to perform this action");
      return;
    }

    const post : Post = claimedPosts.find(post => post.id === id)!;

    post.approval = "Denied";
    setApprovalPosts(prev => [...prev, post]);
    removeClaimedPost(id);
  }

  return (
    <ThemeProvider theme={generalTheme}>
      <Stack spacing={2} padding={2}>
        <Typography variant="h1">
        SHIFT-SWAP
        </Typography>
        <UnclaimedBox
          posts={unclaimedPosts}
          onPost={newPost}
          onRemove={postRemoved}
          onClaim={postClaimed}
        />
        <ClaimedBox
          posts={claimedPosts}
          onApprove={postApproved}
          onDeny={postDenied}
        />
        <ApprovalBox
          posts={approvalPosts}
        />
        <StatBox
          employees={employees}
        />
      </Stack>
      
      
    </ThemeProvider>
  );
}
