import Box from '@mui/material/Box';
import { TextField, Checkbox, Grid, Button } from '@mui/material';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Paper from '@mui/material/Paper';

export default function DraftPost() {

    return (
            <Paper>
                <Grid container spacing={1}>
                    <Grid size={12}>
                        <h1>DraftPost</h1>
                    </Grid>
                    <Grid size={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker/>
                        </LocalizationProvider>
                    </Grid>
                    <Grid size={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker/>
                        </LocalizationProvider>
                    </Grid>
                    <Grid size={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker/>
                        </LocalizationProvider>
                    </Grid>
                    <Grid size={8}>
                        <TextField/>
                    </Grid>
                    <Grid size={4}>
                        <Checkbox/>
                        <Button>Post</Button>
                    </Grid>
                </Grid>
            </Paper>
    )
}