import { Box, ThemeProvider, Paper, Typography } from "@mui/material"
import postTheme from "./theme/post_theme"
import { Post } from "./Post"
import { ApprovalPost } from "./approval_post"

interface ApprovalBoxProps {
    posts: Post[];
}

export const ApprovalBox: React.FC<ApprovalBoxProps> = ({posts}) => {

    return (
        <Paper>
            <ThemeProvider theme={postTheme}>
                <Typography
                    variant='h2'
                >
                    Approvals
                </Typography>
                <Box
                    display={'grid'}
                    gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                    gap={2}
                >
                {posts.map(post => (
                    <ApprovalPost
                        key={post.id}
                        {...post}
                    />
                ))}
                </Box>
            </ThemeProvider>
        </Paper>
        
        
    )
}