import dayjs, { Dayjs } from 'dayjs';
import { TextField, Checkbox, Grid, Button, FormControlLabel } from '@mui/material';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Paper from '@mui/material/Paper';

interface DraftPostProps {
    date : Dayjs;
    onChangeDate: (value : Dayjs | null) => void;
    startTime: Dayjs;
    onChangeStartTime: (value: Dayjs | null) => void;
    endTime: Dayjs;
    onChangeEndTime: (value: Dayjs | null) => void;
    code: string;
    onChangeCode : (value: string) => void;
    checked: boolean;
    onChangeCheck : (value: boolean) => void;
    onPost: () => void;
}

export const DraftPost: React.FC<DraftPostProps> = ({ date, startTime, endTime, code, checked, onPost, onChangeDate, onChangeCheck, onChangeCode, onChangeStartTime, onChangeEndTime }) => {

    return (
            <Paper>
                <Grid container spacing={1}>
                    <Grid size={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker 
                                value={date}
                                onChange={(newValue) => onChangeDate(newValue)}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid size={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker value={startTime}
                                onChange={(newValue) => onChangeStartTime(newValue)}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid size={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker value={endTime}
                                onChange={(newValue) => onChangeEndTime(newValue)}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid size={12}>
                        <TextField size="small" label="Employee Code" value={code}
                            onChange={(e) => onChangeCode(e.target.value)}
                        />
                    </Grid>
                    <Grid size={6}>
                        <FormControlLabel
                            control={<Checkbox value={checked} 
                                onChange={(e) => onChangeCheck(e.target.checked)}
                            />}
                            label="Open Shift?"
                        />
                    </Grid>
                    <Grid size={6}>
                        <Button
                            onClick={onPost}
                        >
                            Post
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
    )
}