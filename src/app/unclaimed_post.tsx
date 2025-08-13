import { TextField, Typography, Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import { DSAKeyPairKeyObjectOptions } from 'node:crypto';

interface UnclaimedPostProps {
    nameOfPostee: string;
    date: string;
    time: string;
    onRemove: (value: string) => void;
    onClaim: (value: string) => void;
}

/**
 * Displays information for a unclaimed post of a shift
 */
export const UnclaimedPost: React.FC<UnclaimedPostProps> = ({nameOfPostee, date, time, onRemove, onClaim }) => {

    // User inputs
    const [employeeCode, setEmployeeCode] = useState<string>("");

    const claimClicked = () => {
        onClaim(employeeCode);
    }

    const removeClicked = () => {
        onRemove(employeeCode);
    }


    return (
            <Paper>
                <Grid 
                    container 
                    spacing={1}
                    sx={{ height: "100%" }}
                >
                    <Grid size={12}>
                        <Typography>{nameOfPostee}</Typography>
                    </Grid>
                    <Grid size={12}>
                        <Typography>{date}</Typography>
                    </Grid>
                    <Grid size={12}>
                        <Typography>{time}</Typography>
                    </Grid>
                    <Grid size={12} sx={{ marginTop: "auto" }}>
                        <TextField 
                            value={employeeCode} 
                            size="small" 
                            label="Employee Code"
                            onChange={(e) => setEmployeeCode(e.target.value)}
                            fullWidth 
                        />
                    </Grid>
                    <Grid size={6}>
                        <Button fullWidth onClick={claimClicked}>Claim</Button>
                    </Grid>
                    <Grid size={6}>
                        <Button fullWidth onClick={removeClicked}>Remove</Button>
                    </Grid>
                </Grid>
            </Paper>
    )
}