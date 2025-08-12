import Box from '@mui/material/Box';
import { TextField, Typography, Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function UnclaimedPost() {

    return (
            <Paper>
                <Grid container spacing={1}>
                    <Grid size={12}>
                        <Typography>Name</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography variant='body1'>Day</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>Time Range</Typography>
                    </Grid>
                    <Grid size={12}>
                        <TextField size="small"/>
                    </Grid>
                    <Grid size={6}>
                        <Button>Claim</Button>
                    </Grid>
                    <Grid size={6}>
                        <Button>Remove</Button>
                    </Grid>
                </Grid>
            </Paper>
    )
}