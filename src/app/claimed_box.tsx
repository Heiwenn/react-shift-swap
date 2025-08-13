import { ClaimedPost } from "./claimed_post"
import { Box, ThemeProvider, Paper, Typography } from "@mui/material"
import postTheme from "./theme/post_theme"
import { Post } from "./Post"
import { useState } from "react"

interface ClaimedBoxProps {
    posts: Post[];
    onApprove: (id: number, employeeCode: string) => void;
    onDeny: (id: number, employeeCode: string) => void;
}

export const ClaimedBox: React.FC<ClaimedBoxProps> = ({posts, onApprove, onDeny}) => {


    return (
        <Paper>
            <ThemeProvider theme={postTheme}>
                <Typography
                variant='h2'
                >
                    Claimed Shifts
                </Typography>
                <Box
                    display={'grid'}
                    gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                    gap={2}
                >
                    {posts.map(post => (
                        <ClaimedPost
                            key={post.id}
                            {...post}
                            onApprove={(employeeCode) => onApprove(post.id, employeeCode)}
                            onDeny={(employeeCode) => onDeny(post.id, employeeCode)}
                        />
                    ))}
                </Box>
            </ThemeProvider>
        </Paper>
        
        
    )
}