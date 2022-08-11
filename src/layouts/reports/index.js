// @mui material components
import Grid from "@mui/material/Grid";
import SuiTypography from "components/SuiTypography";
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";

import MixedChart from "examples/Charts/MixedChart";
import PieChart from "examples/Charts/PieChart";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import PaymentMethod from "layouts/reports/components/PaymentMethod";
import History from "layouts/reports/components/History";
import BillingInformation from "layouts/reports/components/BillingInformation";
import Transactions from "layouts/reports/components/Transactions";
import typography from "assets/theme/base/typography";
import Icon from "@mui/material/Icon";

const radarChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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

function Reports() {
  const { size } = typography;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mt={4}>
        <SuiBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                <MixedChart title="Weekly Hours" description={
                  <SuiBox display="flex" alignItems="center">
                    <SuiBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SuiBox>
                    <SuiTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <SuiTypography variant="button" color="text" fontWeight="regular">
                        from last week
                      </SuiTypography>
                    </SuiTypography>
                    
                  </SuiBox>
                }
                height="24.00rem"
                chart={radarChartData}/>
                </Grid>
                
                <Grid item xs={12} md={6} xl={3} >
                  <DefaultInfoCard
                    icon="attach_money"
                    title="Total Clocked Hours"
                    description="Billable Hours & Non-Billable Hours"
                    value="124.21 hours"
                  />
                  <SuiBox mt={4}/>
                  <DefaultInfoCard
                    icon="attach_money"
                    title="Total Gross Income"
                    description="Encome from Clocked Hours"
                    value="$124.21"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3} >
                  <DefaultInfoCard
                    icon="attach_money"
                    title="Hourly Rate"
                    description="Billable Hours & Non-Billable Rate"
                    value="$16.75/hour"
                  />
                  <SuiBox mt={4}/>
                  <DefaultInfoCard
                    icon="attach_money"
                    title="Taxes and Deductions"
                    description="Tax withholding & other deductions"
                    value="-$14.21"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <History />
            </Grid>
          </Grid>
        </SuiBox>
        <SuiBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
            <PieChart
              title="Pie Chart"
              chart={{
                labels: ["Facebook", "Direct", "Organic", "Referral"],
                datasets: {
                  label: "Projects",
                  backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
                  data: [15, 20, 12, 60],
                },
              }}
            />
            </Grid>
          </Grid>
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Reports;
