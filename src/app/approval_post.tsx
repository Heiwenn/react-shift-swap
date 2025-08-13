import Box from '@mui/material/Box';
import { TextField, Typography, Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';

interface ApprovalPostProps {
    nameOfPostee: string;
    nameOfClaimee: string;
    date: string;
    time: string;
    approval: string;
}

/**
 * Displays a notice of a posted shifts approval
 */
export const ApprovalPost: React.FC<ApprovalPostProps> = ({nameOfPostee, nameOfClaimee, date, time, approval}) => {

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
                        <Typography>{approval}</Typography>
                    </Grid>
                </Grid>
            </Paper>
    )
}