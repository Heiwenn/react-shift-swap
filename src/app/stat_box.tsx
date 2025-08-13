import { Paper, Select, MenuItem, Grid, Typography, Box } from "@mui/material"
import { BarChart } from "@mui/x-charts"
import { Employee } from "./Employee";
import React, { useState, useEffect } from "react";


interface StatBoxProps {
    employees: Employee[];
}

/**
 * Displays statistics about an employees shift trading habits
 */
export const StatBox: React.FC<StatBoxProps> = ({employees}) => {

    const [employee, setEmployee] = useState<Employee>(employees[0]);
    const [dataset, setDataset] = useState(employee.dataset);
    const [employeeName, setEmployeeName] = useState<string>(employees[0].name);
    
    // If changes are made to the employees array or employeeName update the current employee and dataset
    useEffect(() => {
        const employee : Employee = employees.find(emp => emp.name == employeeName)!;
        setEmployee(employee);
        setDataset(employee.dataset);
    }, [employeeName, employees]);

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
                            <MenuItem key={emp.code} value={emp.name}>
                                {emp.name}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid size={12}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <Box sx={{ width: '100%', height: '70vh', justifyContent: 'center' }}>
                            <BarChart
                                dataset={dataset}
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
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}