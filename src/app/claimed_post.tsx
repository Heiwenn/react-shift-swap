import Box from '@mui/material/Box';
import { TextField, Typography, Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';

interface ClaimedPostProps {
    nameOfPostee: string;
    nameOfClaimee: string;
    date: string;
    time: string;
}


export const ClaimedPost: React.FC<ClaimedPostProps> = ({nameOfPostee, nameOfClaimee, date, time, code}) => {

    return (
            <Paper>
                <Grid container spacing={1}>
                    <Grid size={6}>
                        <Typography>{nameOfPostee}</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>{nameOfClaimee}</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>{date}</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>{time}</Typography>
                    </Grid>
                    <Grid size={12}>
                        <TextField value={code} size="small" label="Manager Code"/>
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