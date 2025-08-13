import { ClaimedPost } from "./claimed_post"
import { Box, ThemeProvider, Paper } from "@mui/material"
import postTheme from "./theme/post_theme"
import { Post } from "./Post"

interface ClaimedBoxProps {
    posts: Post[];
}

export const ClaimedBox: React.FC<ClaimedBoxProps> = ({posts}) => {

    return (
        <Paper>
            <ThemeProvider theme={postTheme}>
                <Box
                    display={'grid'}
                    gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                    gap={2}
                >
                    {posts.map(post => (
                        <ClaimedPost
                            key={post.id}
                            {...post}
                        />
                    ))}
                    <ClaimedPost nameOfPostee="Postee" nameOfClaimee="Claimee" code="" date="date" time="time"/>
                </Box>
            </ThemeProvider>
        </Paper>
        
        
    )
}