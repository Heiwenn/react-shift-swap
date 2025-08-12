import Box from '@mui/material/Box';
import { Paper, ThemeProvider } from '@mui/material';
import { DraftPost } from './draft_post';
import { UnclaimedPost } from './unclaimed_post';
import postTheme from './theme/post_theme';
import dayjs, { Dayjs } from 'dayjs';

export default function UnclaimedBox() {

    return (
        <Paper>
            <ThemeProvider theme={postTheme}>
                <Box
                    display={'grid'}
                    gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                    gap={2}
                >
                    <UnclaimedPost nameOfPostee="Name" date="date" time="time" code=""/>
                    <DraftPost code="" checked={false} date={dayjs()} startTime={dayjs()} endTime={dayjs()}/>
                </Box>
            </ThemeProvider>
        </Paper>
    )
}