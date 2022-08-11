
// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

function Invoice({ date, id, price, noGutter }) {
  return (
    <SuiBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      pr={1}
      mb={noGutter ? 0 : 1}
    >
      <SuiBox lineHeight={1}>
        <SuiTypography display="block" variant="button" fontWeight="medium">
          {date}
        </SuiTypography>
        <SuiTypography variant="caption" fontWeight="regular" color="text">
          {id}
        </SuiTypography>
      </SuiBox>
      <SuiBox display="flex" alignItems="center">
        <SuiTypography variant="button" fontWeight="regular" color="text">
          {price}
        </SuiTypography>
        <SuiBox display="flex" alignItems="center" lineHeight={0} ml={3} sx={{ cursor: "poiner" }}>
          <Icon fontSize="small">picture_as_pdf</Icon>
          <SuiTypography variant="button" fontWeight="bold">
            &nbsp;PDF
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    </SuiBox>
  );
}


function History() {
  return (
    <Card id="delete-account" sx={{ height: "100%" }}>
      <SuiBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SuiTypography variant="h6" fontWeight="medium">
          Past Activity
        </SuiTypography>
        <SuiButton variant="outlined" color="info" size="small">
          view all
        </SuiButton>
      </SuiBox>
      <SuiBox p={2}>
        <SuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="March, 01, 2020" id="12:35 PM" price="Clocked In" />
          <Invoice date="February, 10, 2021" id="11:35 PM" price="Clocked Out" />
          <Invoice date="April, 05, 2020" id="09:15 PM" price="Clocked In" />
          <Invoice date="June, 25, 2019" id="12:25 PM" price="Clocked Out" />
          <Invoice date="March, 01, 2019" id="05:35 PM" price="Clocked In" noGutter />
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default History;
