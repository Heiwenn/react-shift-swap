import { Paper, Select, MenuItem, Grid, Typography } from "@mui/material"
import { BarChart } from "@mui/x-charts"
import { Employee } from "./Employee";
import React, { useState, useEffect } from "react";


interface StatBoxProps {
    employees: Employee[];
}

export const StatBox: React.FC<StatBoxProps> = ({employees}) => {

    const [employee, setEmployee] = useState<Employee>();
    const [dataset, setDataset] = useState();
    const [employeeName, setEmployeeName] = useState<string>(employees[0].name);
    
    useEffect(() => {
        const employee : Employee = employees.find(emp => emp.name == employeeName)!;
        setEmployee(employee);
    }, [employeeName]);

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
            <Typography
                variant='h2'
            >
                Employee Statistics
            </Typography>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Select 
                        label='Select Employee'
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                    >
                        {employees.map((emp) => (
                            <MenuItem key={emp.code} value={emp.code}>
                                {emp.name}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid size={12}>
                    <BarChart
                        dataset={employee.dataset}
                        xAxis={[{ scaleType: "band", dataKey: "month" }]}
                        series={[
                            // Posted stack - shades of blue
                            { dataKey: "postedPending", label: "Posted - Pending", stack: "posted", color: "#90caf9" },
                            { dataKey: "postedApproved", label: "Posted - Approved", stack: "posted", color: "#42a5f5" },
                            { dataKey: "postedDenied", label: "Posted - Denied", stack: "posted", color: "#1565c0" },
                            // Claimed stack - shades of orange
                            { dataKey: "claimedPending", label: "Claimed - Pending", stack: "claimed", color: "#ffcc80" },
                            { dataKey: "claimedApproved", label: "Claimed - Approved", stack: "claimed", color: "#ff9800" },
                            { dataKey: "claimedDenied", label: "Claimed - Denied", stack: "claimed", color: "#ef6c00" },
                        ]}
                        width={900}
                        height={500}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}