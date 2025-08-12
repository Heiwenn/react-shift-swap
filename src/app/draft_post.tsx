import Box from '@mui/material/Box';
import { TextField, Checkbox } from '@mui/material';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Paper from '@mui/material/Paper';

export default function DraftPost() {

    return (
        <Box>
            <Paper>
                <h1>DraftPost</h1>
                <TextField/>
                <Checkbox/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker/>
                    <TimePicker/>
                    <TimePicker/>
                </LocalizationProvider>
            </Paper>
        </Box>
        
        
    )
}