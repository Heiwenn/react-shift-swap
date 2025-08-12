import dayjs, { Dayjs } from 'dayjs';
import { TextField, Checkbox, Grid, Button, FormControlLabel } from '@mui/material';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Paper from '@mui/material/Paper';

interface DraftPostProps {
    date : Dayjs;
    startTime: Dayjs;
    endTime: Dayjs;
    code: string;
    checked: boolean;
}

export const DraftPost: React.FC<DraftPostProps> = ({ date, startTime, endTime, code, checked }) => {

    return (
            <Paper>
                <Grid container spacing={1}>
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
                    <Grid size={12}>
                        <TextField size="small" label="Employee Code"/>
                    </Grid>
                    <Grid size={6}>
                        <FormControlLabel
                            control={<Checkbox/>}
                            label="Open Shift?"
                        />
                    </Grid>
                    <Grid size={6}>
                        <Button>Post</Button>
                    </Grid>
                </Grid>
            </Paper>
    )
}