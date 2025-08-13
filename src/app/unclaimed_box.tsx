import Box from '@mui/material/Box';
import { Paper, ThemeProvider } from '@mui/material';
import { DraftPost } from './draft_post';
import { UnclaimedPost } from './unclaimed_post';
import postTheme from './theme/post_theme';
import dayjs, { Dayjs } from 'dayjs';
import { Post } from './Post';
import { useState } from 'react';


interface UnclaimedBoxProps {
    posts: Post[];
    onPost: (value: Post) => void;
    onRemove: (id: number) => void;
    onClaim: (id: number) => void;
}

export const UnclaimedBox: React.FC<UnclaimedBoxProps> = ({posts, onPost, onRemove, onClaim}) => {

    const [startTime, setStartTime] = useState<Dayjs | null>(dayjs());
    const [endTime, setEndTime] = useState<Dayjs | null>(dayjs());
    const [date, setDate] = useState<Dayjs | null>(dayjs());
    const [employeeCode, setEmployeeCode] = useState<string>("");
    const [openShift, setOpenShift] = useState<boolean>(false);

    const postClicked = () => {
        const post : Post = 
        {
            id: Date.now(), 
            nameOfPostee: "", 
            nameOfClaimee: "", 
            codeOfPostee: employeeCode, 
            codeOfClaimee: "", 
            date: date.format('DD/MM/YYYY'),
            time: `Time ${startTime.format('HH:mm')} to ${endTime.format('HH:mm')}`,
            openShift: openShift,
        }
        onPost(post);
    }

    return (
        <Paper>
            <ThemeProvider theme={postTheme}>
                <Box
                    display={'grid'}
                    gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                    gap={2}
                >
                    {posts.map(post => (
                        <UnclaimedPost
                            key={post.id}
                            {...post}
                            onRemove={() => onRemove(post.id)}
                            onClaim={() => onClaim(post.id)}
                        />
                    ))}
                    <DraftPost 
                        code={employeeCode}
                        onChangeCode={setEmployeeCode}
                        checked={openShift} 
                        onChangeCheck={setOpenShift}
                        date={date}
                        onChangeDate={setDate}
                        startTime={startTime} 
                        onChangeStartTime={setStartTime}
                        endTime={endTime}
                        onChangeEndTime={setEndTime}
                        onPost={postClicked}
                    />
                </Box>
            </ThemeProvider>
        </Paper>
    )
}