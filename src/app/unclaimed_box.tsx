import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper, ThemeProvider } from '@mui/material';
import DraftPost from './draft_post';
import UnclaimedPost from './unclaimed_post';
import postTheme from './theme/post_theme';

export default function UnclaimedBox() {

    return (
        <Paper>
            <ThemeProvider theme={postTheme}>
                <Box
                    display={'grid'}
                    gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                    gap={2}
                >
                    <UnclaimedPost/>
                    <DraftPost/>
                </Box>
            </ThemeProvider>
        </Paper>
    )
}