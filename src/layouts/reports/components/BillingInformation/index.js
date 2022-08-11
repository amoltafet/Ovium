import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Bill from "layouts/reports/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <SuiBox pt={3} px={2}>
        <SuiTypography variant="h6" fontWeight="medium">
          Forms and Documents
        </SuiTypography>
      </SuiBox>
      <SuiBox pt={1} pb={2} px={2}>
        <SuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="W2"
            company="ABC Company LLC"
            email="412 Main St., Suite 100, New York, NY 10001"
            vat="2022"
          />
          <SuiTypography variant="h6" color="text" px={2} pt={1}>
            No other forms or documents are required.
          </SuiTypography>
  
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default BillingInformation;
