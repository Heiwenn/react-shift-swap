import ClaimedPost from "./claimed_post"
import { Box } from "@mui/material"

export default function ClaimedBox() {

    return (
        <Box
            display={'grid'}
            gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            gap={2}
        >
            <ClaimedPost/>
        </Box>
    )
}