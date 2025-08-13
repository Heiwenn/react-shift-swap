import Box from '@mui/material/Box';
import { Paper, ThemeProvider } from '@mui/material';
import { DraftPost } from './draft_post';
import { UnclaimedPost } from './unclaimed_post';
import postTheme from './theme/post_theme';
import dayjs, { Dayjs } from 'dayjs';
import { Post } from './Post';


interface UnclaimedBoxProps {
    posts: Post[];
    onPost: () => void;
    onRemove: (id: number) => void;
    onClaim: (id: number) => void;
}

export const UnclaimedBox: React.FC<UnclaimedBoxProps> = ({posts, onPost, onRemove, onClaim}) => {

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
                        code="" 
                        checked={false} 
                        date={dayjs()} 
                        startTime={dayjs()} 
                        endTime={dayjs()}
                        onPost={onPost}
                    />
                </Box>
            </ThemeProvider>
        </Paper>
    )
}