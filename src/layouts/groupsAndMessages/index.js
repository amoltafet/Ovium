import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import Markets from "assets/images/duplex.jpeg";

import RadarChart from "examples/Charts/RadarChart";
import MixedChart from "examples/Charts/MixedChart";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import typography from "assets/theme/base/typography";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import profilesListData from "./profilesListData";
import ProfilesList from "examples/Lists/ProfilesList";



function GroupsAndMessages() {
  const { size } = typography;
  const radarChartData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
    ],
  };

  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  

  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            
            <Grid item xs={12} lg={5}>
            <ProfilesList title="conversations" profiles={profilesListData} />
            </Grid>
          </Grid>
        </SuiBox>
        
        
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default GroupsAndMessages;
