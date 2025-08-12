import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DraftPost from './draft_post';

export default function UnclaimedBox() {

    return (
        <Box
            display={'grid'}
            gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            gap={2}
        >
            <DraftPost/>
        </Box>
        
    )
}