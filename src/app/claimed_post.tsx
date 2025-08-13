import Box from '@mui/material/Box';
import { TextField, Typography, Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';

interface ClaimedPostProps {
    nameOfPostee: string;
    nameOfClaimee: string;
    date: string;
    time: string;
    onApprove: (value: string) => void;
    onDeny: (value: string) => void;
}


export const ClaimedPost: React.FC<ClaimedPostProps> = ({nameOfPostee, nameOfClaimee, date, time, onApprove, onDeny}) => {

    const [employeeCode, setEmployeeCode] = useState<string>("");
    
        const approveClicked = () => {
            onApprove(employeeCode);
        }
    
        const denyClicked = () => {
            onDeny(employeeCode);
        }

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
                        <TextField 
                            value={employeeCode}
                            size="small" 
                            label="Manager Code"
                            onChange={(e) => setEmployeeCode(e.target.value)}
                        />
                    </Grid>
                    <Grid size={6}>
                        <Button onClick={approveClicked}>Approve</Button>
                    </Grid>
                    <Grid size={6}>
                        <Button onClick={denyClicked}>Deny</Button>
                    </Grid>
                </Grid>
            </Paper>
    )
}