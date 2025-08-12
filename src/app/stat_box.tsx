import { Paper, Select, MenuItem, Grid } from "@mui/material"
import { BarChart } from "@mui/x-charts"

export default function StatBox() {

    const chartSetting = {
        yAxis: [
            {
                label: 'Shifts',
                width: 60,
            },
        ],
        height: 300,
    }

    return (
        <Paper>
            <Grid container spacing={2}>
                <Grid size={3}>
                    <Select>
                        <MenuItem>Placeholder</MenuItem>
                    </Select>
                </Grid>
                <Grid size={12}>
                    <BarChart
                        series={[{data:[1]}]}
                        {...chartSetting}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}