
// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Billing page components
import Transaction from "layouts/reports/components/Transaction";

function Transactions() {
  return (
    <Card sx={{ height: "100%" }}>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <SuiTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Your Transaction&apos;s
        </SuiTypography>
        <SuiBox display="flex" alignItems="flex-start">
          <SuiBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </SuiBox>
          <SuiTypography variant="button" color="text" fontWeight="regular">
            23 - 30 March 2020
          </SuiTypography>
        </SuiBox>
      </SuiBox>
      <SuiBox pt={3} pb={2} px={2}>
        <SuiBox mb={2}>
          <SuiTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            newest
          </SuiTypography>
        </SuiBox>
        <SuiBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="error"
            icon="arrow_downward"
            name="Netflix"
            description="27 March 2020, at 12:30 PM"
            value="- $ 2,500"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Apple"
            description="27 March 2020, at 04:30 AM"
            value="+ $ 2,000"
          />
        </SuiBox>
        <SuiBox mt={1} mb={2}>
          <SuiTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            yesterday
          </SuiTypography>
        </SuiBox>
        <SuiBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Stripe"
            description="26 March 2020, at 13:45 PM"
            value="+ $ 750"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="HubSpot"
            description="26 March 2020, at 12:30 PM"
            value="+ $ 1,000"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Creative Tim"
            description="26 March 2020, at 08:30 AM"
            value="+ $ 2,500"
          />
          <Transaction
            color="dark"
            icon="priority_high"
            name="Webflow"
            description="26 March 2020, at 05:00 AM"
            value="Pending"
          />
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default Transactions;
