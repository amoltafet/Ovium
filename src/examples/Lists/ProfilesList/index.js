import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiButton from "components/SuiButton";

function ProfilesList({ title, profiles }) {
  const renderProfiles = profiles.map(({ image, name, description, action }) => (
    <SuiBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <SuiBox mr={2}>
        <SuiAvatar src={image} alt="something here" variant="rounded" shadow="md" />
      </SuiBox>
      <SuiBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
        <SuiTypography variant="button" fontWeight="medium">
          {name}
        </SuiTypography>
        <SuiTypography variant="caption" color="text">
          {description}
        </SuiTypography>
      </SuiBox>
      <SuiBox ml="auto">
        {action.type === "internal" ? (
          <SuiButton component={Link} to={action.route} variant="text" color="info">
            {action.label}
          </SuiButton>
        ) : (
          <SuiButton
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={action.color}
          >
            {action.label}
          </SuiButton>
        )}
      </SuiBox>
    </SuiBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <SuiBox pt={2} px={2}>
        <SuiTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SuiTypography>
      </SuiBox>
      <SuiBox p={2}>
        <SuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfilesList;
