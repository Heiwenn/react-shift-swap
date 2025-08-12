import Box from '@mui/material/Box';
import { TextField, Checkbox, Typography, Button } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function UnclaimedPost() {

    return (
        <Box>
            <Paper>
                <h1>Unclaimed Post</h1>
                <TextField/>
                <Typography>Name</Typography>
                <Typography>Day</Typography>
                <Typography>Time Range</Typography>
                <Button>Claimed</Button>
                <Button>Remove</Button>
            </Paper>
        </Box>
        
        
    )
}