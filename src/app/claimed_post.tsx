import Box from '@mui/material/Box';
import { TextField, Typography, Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function ClaimedPost() {

    return (
            <Paper>
                <Grid container spacing={1}>
                    <Grid size={6}>
                        <Typography>Postee</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>Claimee</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>Day</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>Time Range</Typography>
                    </Grid>
                    <Grid size={12}>
                        <TextField size="small"/>
                    </Grid>
                    <Grid size={6}>
                        <Button>Approve</Button>
                    </Grid>
                    <Grid size={6}>
                        <Button>Deny</Button>
                    </Grid>
                </Grid>
            </Paper>
    )
}