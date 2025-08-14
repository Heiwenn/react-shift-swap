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

  // Dummy data for Demoing
  const dataSara = [
    { month: "Jan", postedPending: 0, postedApproved: 8, postedDenied: 2, claimedPending: 0, claimedApproved: 6, claimedDenied: 1 },
    { month: "Feb", postedPending: 0, postedApproved: 9, postedDenied: 3, claimedPending: 0, claimedApproved: 7, claimedDenied: 2 },
    { month: "Mar", postedPending: 0, postedApproved: 7, postedDenied: 1, claimedPending: 0, claimedApproved: 5, claimedDenied: 3 },
    { month: "Apr", postedPending: 0, postedApproved: 10, postedDenied: 2, claimedPending: 0, claimedApproved: 6, claimedDenied: 1 },
    { month: "May", postedPending: 0, postedApproved: 8, postedDenied: 2, claimedPending: 0, claimedApproved: 9, claimedDenied: 0 },
    { month: "Jun", postedPending: 0, postedApproved: 6, postedDenied: 4, claimedPending: 0, claimedApproved: 7, claimedDenied: 3 },
    { month: "Jul", postedPending: 0, postedApproved: 5, postedDenied: 3, claimedPending: 0, claimedApproved: 6, claimedDenied: 2 },
    { month: "Aug", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
    { month: "Sep", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
    { month: "Oct", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
    { month: "Nov", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
    { month: "Dec", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
  ];
  // Dummy data for Demoing
  const dataGeorge = [
    { month: "Jan", postedPending: 0, postedApproved: 4, postedDenied: 1, claimedPending: 0, claimedApproved: 1, claimedDenied: 0 },
    { month: "Feb", postedPending: 0, postedApproved: 4, postedDenied: 3, claimedPending: 0, claimedApproved: 4, claimedDenied: 4 },
    { month: "Mar", postedPending: 0, postedApproved: 0, postedDenied: 3, claimedPending: 0, claimedApproved: 3, claimedDenied: 2 },
    { month: "Apr", postedPending: 0, postedApproved: 4, postedDenied: 0, claimedPending: 0, claimedApproved: 2, claimedDenied: 2 },
    { month: "May", postedPending: 0, postedApproved: 3, postedDenied: 3, claimedPending: 0, claimedApproved: 3, claimedDenied: 1 },
    { month: "Jun", postedPending: 0, postedApproved: 4, postedDenied: 4, claimedPending: 0, claimedApproved: 3, claimedDenied: 2 },
    { month: "Jul", postedPending: 0, postedApproved: 3, postedDenied: 0, claimedPending: 0, claimedApproved: 3, claimedDenied: 0 },
    { month: "Aug", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
    { month: "Sep", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
    { month: "Oct", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
    { month: "Nov", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
    { month: "Dec", postedPending: 0, postedApproved: 0, postedDenied: 0, claimedPending: 0, claimedApproved: 0, claimedDenied: 0 },
  ];

  // Updating State Values
  const [employees, setEmployees] = useState<Employee[]>([{name:"Sara", code:"1234", manager:false, dataset: dataSara}, {name:"George", code:"4321", manager:true, dataset: dataGeorge}]);
  const [unclaimedPosts, setUnclaimedPosts] = useState<Post[]>([]);
  const [claimedPosts, setClaimedPosts] = useState<Post[]>([]);
  const [approvalPosts, setApprovalPosts] = useState<Post[]>([]);

  // Try and create a new post
  const newPost = (post: Post) => {
    //Look for employee based on employee code
    const maybeEmployee = employees.find(employee => employee.code === post.codeOfPostee);
    if (maybeEmployee == null) {
      //Employee does not exist in our list
      alert('Invalid Code');
      return;
    }

    const employee : Employee = maybeEmployee as Employee;

    //Check if post is an open shift
    if (post.openShift && !employee.manager) {
      //Employee does not have permission
      alert('Only managers can post open shifts');
      return;
    } else if (post.openShift && employee.manager) {
      post.nameOfPostee = "Open Shift";
    } else {
      post.nameOfPostee = employee.name;
    }
    
    // Add post to unclaimed posts
    setUnclaimedPosts(prev => [...prev, post]);

    // Change employee stats to reflect post
    setEmployees(prevEmployees =>
      prevEmployees.map(emp => {
        if (emp.name === post.nameOfPostee) {
          return {
            ...emp,
            dataset: emp.dataset.map(monthData => {
              if (monthData.month === "Aug") {
                return { ...monthData, postedPending: monthData.postedPending + 1};
              }
              return monthData;
            })
          };
        }
        return emp;
      })
    );
  };

  // Try and claim a post
  const postClaimed = (id : number, employeeCode: string) => {
    // Check if employee exists
    const maybeEmployee = employees.find(employee => employee.code === employeeCode)
    if (maybeEmployee == null) {
      alert('Invalid Code');
      return;
    } 
    const employee : Employee = maybeEmployee as Employee;
    const post : Post = unclaimedPosts.find(post => post.id === id)!;

    // Add claimee to post info
    post.nameOfClaimee = employee.name;
    post.codeOfClaimee = employee.code;

    // Add post to claimed remove from unclaimed
    setClaimedPosts(prev => [...prev, post]);
    removeUnclaimedPost(id);

    // Change employee stats to reflect post
    setEmployees(prevEmployees =>
      prevEmployees.map(emp => {
        if (emp.name === employee.name) {
          return {
            ...emp,
            dataset: emp.dataset.map(monthData => {
              if (monthData.month === "Aug") {
                return { ...monthData, claimedPending: monthData.claimedPending + 1};
              }
              return monthData;
            })
          };
        }
        return emp;
      })
    );
  };

  // Try and remove post from unclaimed posts
  const postRemoved = (id : number, employeeCode: string) => {
    // Check if employee exists
    const maybeEmployee = employees.find(employee => employee.code === employeeCode)
    if (maybeEmployee == null) {
      alert('Invalid Code');
      return;
    } 
    const employee : Employee = maybeEmployee as Employee;
    const post : Post = unclaimedPosts.find(post => post.id === id)!;

    // Check if employee has permission to remove post
    if (post.codeOfPostee == employeeCode || employee.manager) {
      removeUnclaimedPost(id);
      // Change employee stats to reflect post
      setEmployees(prevEmployees =>
        prevEmployees.map(emp => {
          if (emp.name === employee.name) {
            return {
              ...emp,
              dataset: emp.dataset.map(monthData => {
                if (monthData.month === "Aug") {
                  return { ...monthData, postedPending: monthData.postedPending - 1};
                }
                return monthData;
              })
            };
          }
          return emp;
        })
      );
    } else {
      // Employee does not have permission
      alert('You do not have the rights to remove this post');
    }

  }

  // Remove post from unclaimed posts based on id
  const removeUnclaimedPost = (id : number) => {
    setUnclaimedPosts(prev => prev.filter(post => post.id !== id));
  };

  // Remove post from claimed posts based on id
  const removeClaimedPost = (id : number) => {
    setClaimedPosts(prev => prev.filter(post => post.id !== id));
  };

  // Try and approve post
  const postApproved = (id : number, employeeCode : string) => {
    // Check if employee exists
    const maybeEmployee = employees.find(employee => employee.code === employeeCode)
    if (maybeEmployee == null) {
      alert('Invalid Code');
      return;
    } 
    const employee : Employee = maybeEmployee as Employee;
    //Check if employee has permission
    if (!employee.manager) {
      alert("You do not have permission to perform this action");
      return;
    }

    const post : Post = claimedPosts.find(post => post.id === id)!;
    // Change post info to reflect approval
    post.approval = "Approved";
    //Remove post from claimed, add poste to approvals
    setApprovalPosts(prev => [...prev, post]);
    removeClaimedPost(id);
    
    // Update employee stats to reflect change
    setEmployees(prevEmployees =>
      prevEmployees.map(emp => {
        if (emp.name === post.nameOfClaimee) {
          return {
            ...emp,
            dataset: emp.dataset.map(monthData => {
              if (monthData.month === "Aug") {
                return { 
                  ...monthData, 
                  claimedApproved: monthData.claimedApproved + 1,
                  claimedPending: monthData.claimedPending -1,
                };
              }
              return monthData;
            })
          };
        }
        return emp;
      })
    );

    setEmployees(prevEmployees =>
      prevEmployees.map(emp => {
        if (emp.name === post.nameOfPostee) {
          return {
            ...emp,
            dataset: emp.dataset.map(monthData => {
              if (monthData.month === "Aug") {
                return { 
                  ...monthData, 
                  postedApproved: monthData.postedApproved + 1, 
                  postedPending: monthData.postedPending - 1
                };
              }
              return monthData;
            })
          };
        }
        return emp;
      })
    );
  }

  const postDenied = (id : number, employeeCode : string) => {
    // Check if employee exists
    const maybeEmployee = employees.find(employee => employee.code === employeeCode)
    if (maybeEmployee == null) {
      alert('Invalid Code');
      return;
    } 
    const employee : Employee = maybeEmployee as Employee;

    // Check if employee has permission
    if (!employee.manager) {
      alert("You do not have permission to perform this action");
      return;
    }

    const post : Post = claimedPosts.find(post => post.id === id)!;

    // Update post info
    post.approval = "Denied";
    // Remove post from claimed add to approvals
    setApprovalPosts(prev => [...prev, post]);
    removeClaimedPost(id);

    // Update employee stats to reflect change
    setEmployees(prevEmployees =>
      prevEmployees.map(emp => {
        if (emp.name === post.nameOfClaimee) {
          return {
            ...emp,
            dataset: emp.dataset.map(monthData => {
              if (monthData.month === "Aug") {
                return { 
                  ...monthData, 
                  claimedDenied: monthData.claimedDenied + 1,
                  claimedPending: monthData.claimedPending - 1,
                };
              }
              return monthData;
            })
          };
        }
        return emp;
      })
    );

    setEmployees(prevEmployees =>
      prevEmployees.map(emp => {
        if (emp.name === post.nameOfPostee) {
          return {
            ...emp,
            dataset: emp.dataset.map(monthData => {
              if (monthData.month === "Aug") {
                return { 
                  ...monthData, 
                  postedDenied: monthData.postedDenied + 1, 
                  postedPending: monthData.postedPending - 1
                };
              }
              return monthData;
            })
          };
        }
        return emp;
      })
    );
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
