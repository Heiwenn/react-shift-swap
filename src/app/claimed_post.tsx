import Box from '@mui/material/Box';
import { TextField, Checkbox, Typography, Button } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function ClaimedPost() {

    return (
        <Box>
            <Paper>
                <h1>Claimed Post</h1>
                <TextField/>
                <Typography>Name</Typography>
                <Typography>Claimee</Typography>
                <Typography>Day</Typography>
                <Typography>Time Range</Typography>
                <Button>Approve</Button>
                <Button>Deny</Button>
            </Paper>
        </Box>
        
        
    )
}