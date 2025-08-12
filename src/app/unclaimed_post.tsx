import { TextField, Typography, Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import { DSAKeyPairKeyObjectOptions } from 'node:crypto';

interface UnclaimedPostProps {
    nameOfPostee: string;
    date: string;
    time: string;
    code: string;
}


export const UnclaimedPost: React.FC<UnclaimedPostProps> = ({ nameOfPostee, date, time, code }) => {

    return (
            <Paper>
                <Grid container spacing={1}>
                    <Grid size={12}>
                        <Typography>{nameOfPostee}</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>{date}</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>{time}</Typography>
                    </Grid>
                    <Grid size={12}>
                        <TextField value={code} size="small" label="Employee Code"/>
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