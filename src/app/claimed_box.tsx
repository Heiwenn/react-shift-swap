import ClaimedPost from "./claimed_post"
import { Box, ThemeProvider, Paper } from "@mui/material"
import postTheme from "./theme/post_theme"


export default function ClaimedBox() {

    return (
        <Paper>
            <ThemeProvider theme={postTheme}>
                <Box
                    display={'grid'}
                    gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                    gap={2}
                >
                    <ClaimedPost/>
                </Box>
            </ThemeProvider>
        </Paper>
        
        
    )
}