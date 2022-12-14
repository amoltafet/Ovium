/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/rocket-white.png";
import SuiButton from "components/SuiButton";

function BuildByDevelopers() {
  return (
    <Card>
      <SuiBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiBox pt={1} mb={0.5}>
                <SuiTypography variant="body2" color="text" fontWeight="medium">
                  Clocked Out   12h : 30m 
                </SuiTypography>
              </SuiBox>
              <SuiTypography variant="h5" fontWeight="bold" gutterBottom>
                Punch
              </SuiTypography>
              <SuiBox mb={3}>
                <SuiTypography variant="body2" color="text">
                  <strong>Last Punch:</strong> Clocked Out at 12:42 PM on May 15, 2020 <br />
                  <strong>Cost Center:</strong> Cost Center 1
                </SuiTypography>
              </SuiBox>
              <SuiBox mb={6}>
                <SuiTypography variant="h2" color="text" mb={2}>
                      1:40:00 PM, PST
                </SuiTypography>
                <SuiButton variant="contained" color="info" fullWidth>
                  Clock In <SuiBox mr={2}/> <Icon ml={2}>play_circle_outline</Icon>
                </SuiButton>
                <SuiBox mt={2}/>
                <SuiButton component="a" variant="outlined" color="secondary" fullWidth>
                <Icon ml={2}>sell</Icon><SuiBox mr={2}/> No Tag Selected
                </SuiButton>
              </SuiBox>
            </SuiBox>
          </Grid>
          <Grid item xs={12} lg={5} sx={{ position: "relative", ml: "auto" }}>
            <SuiBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              bgColor="info"
              borderRadius="lg"
              variant="gradient"
            >
              <SuiBox
                component="img"
                src={wavesWhite}
                alt="waves"
                display="block"
                position="absolute"
                left={0}
                width="100%"
                height="100%"
              />
              <SuiBox component="img" src={rocketWhite} alt="rocket" width="100%" pt={3} />
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </Card>
  );
}

export default BuildByDevelopers;
