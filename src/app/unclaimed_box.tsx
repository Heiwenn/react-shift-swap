import Box from '@mui/material/Box';
import { Paper, ThemeProvider, Typography } from '@mui/material';
import { DraftPost } from './draft_post';
import { UnclaimedPost } from './unclaimed_post';
import postTheme from './theme/post_theme';
import dayjs, { Dayjs } from 'dayjs';
import { Post } from './Post';
import { useState } from 'react';


interface UnclaimedBoxProps {
    posts: Post[];
    onPost: (value: Post) => void;
    onRemove: (id: number, employeeCode: string) => void;
    onClaim: (id: number, employeeCode: string) => void;
}

/**
 * Displays and organizes posts for unclaimed shifts and the draft post
 */
export const UnclaimedBox: React.FC<UnclaimedBoxProps> = ({posts, onPost, onRemove, onClaim}) => {

    // draft post user inputs
    const [startTime, setStartTime] = useState<Dayjs>(dayjs());
    const [endTime, setEndTime] = useState<Dayjs>(dayjs());
    const [date, setDate] = useState<Dayjs>(dayjs());
    const [employeeCode, setEmployeeCode] = useState<string>("");
    const [openShift, setOpenShift] = useState<boolean>(false);

    // Create a post when clicked
    const postClicked = () => {
        const post : Post = 
        {
            id: Date.now(), 
            nameOfPostee: "", 
            nameOfClaimee: "", 
            codeOfPostee: employeeCode, 
            codeOfClaimee: "", 
            date: date.format('DD/MM/YYYY'),
            time: `${startTime.format('h:mm A')} to ${endTime.format('h:mm A')}`,
            openShift: openShift,
            approval: "",
        }
        onPost(post);
    }

    const dateChanged = (newValue : Dayjs | null) => {
        if (newValue == null) {
            return;
        }
        setDate(newValue);
    }

    const startTimeChanged = (newValue : Dayjs | null) => {
        if (newValue == null) {
            return;
        }
        setStartTime(newValue);
    }

    const endTimeChanged = (newValue : Dayjs | null) => {
        if (newValue == null) {
            return;
        }
        setEndTime(newValue);
    }

    return (
        <Paper>
            <ThemeProvider theme={postTheme}>
                <Typography
                variant='h2'
                >
                    Unclaimed Shifts
                </Typography>
                <Box
                    display={'grid'}
                    gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                    gap={2}
                >
                    {posts.map(post => (
                        <UnclaimedPost
                            key={post.id}
                            {...post}
                            onRemove={(employeeCode) => onRemove(post.id, employeeCode)}
                            onClaim={(employeeCode) => onClaim(post.id, employeeCode)}
                        />
                    ))}
                    <DraftPost 
                        code={employeeCode}
                        onChangeCode={setEmployeeCode}
                        checked={openShift} 
                        onChangeCheck={setOpenShift}
                        date={date}
                        onChangeDate={dateChanged}
                        startTime={startTime} 
                        onChangeStartTime={startTimeChanged}
                        endTime={endTime}
                        onChangeEndTime={endTimeChanged}
                        onPost={postClicked}
                    />
                </Box>
            </ThemeProvider>
        </Paper>
    )
}