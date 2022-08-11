import React, { useState } from 'react';
import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SuiAvatar from "components/SuiAvatar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import Icon from "@mui/material/Icon";
import authorsTableData from "layouts/timesheet/data/authorsTableData";
import SuiInput from "components/SuiInput";

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import Demo from './components/WeeklyCalendar';

function Timesheet() {
  const { columns, rows } = authorsTableData;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
     
      <SuiBox mb={2}>
        <Card>
        <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          <SuiBox display="flex" alignItems="center">
            
            <SuiButton variant="contained" color="info" >
                  Clock In <SuiBox mr={1}/> <Icon ml={2}>play_circle_outline</Icon>
                </SuiButton>
            
            <SuiBox display="flex" alignItems="center" ml={1}>
                <SuiButton component="a" variant="outlined" color="secondary" fullWidth>
                No Tag Selected<SuiBox mr={1}/>  <Icon>sell</Icon>
                </SuiButton>
            </SuiBox>
        
            </SuiBox>
            <SuiBox display="flex" alignItems="center" mr={1}>
            <SuiButton variant="text" color="info" size="large">
              <Icon>schedule</Icon><SuiBox mr={1}/> 10h-36m-12s
            </SuiButton>
            <SuiBox mr={2}/>
            <SuiButton variant="text" fontWeight="300" color="info" size="large" >
              <Icon >today</Icon><SuiBox mr={1}/>  12 May, 2022
            </SuiButton>
            </SuiBox>
            <SuiBox display="flex" alignItems="center">
            <SuiButton variant="outlined" fontWeight="300" color="info" >
              <Icon>coffee</Icon><SuiBox mr={1}/>  Missed Punch
            </SuiButton>
            <SuiBox mr={1}/>
            <SuiButton variant="gradient" fontWeight="300" color="dark" >
              <Icon>history</Icon><SuiBox mr={1}/>  View Clock in/out History
            </SuiButton>
            </SuiBox>
        </SuiBox>
       <SuiButton variant="gradient" fontWeight="300" color="info">
              <Icon >date_range</Icon><SuiBox mr={1}/>  Week Total: 42.00 hours
            </SuiButton>
        </Card>
        </SuiBox>
         
      </SuiBox>
       <Demo />
     
      
      <Footer />
    </DashboardLayout>
   
  );
}

export default Timesheet;
