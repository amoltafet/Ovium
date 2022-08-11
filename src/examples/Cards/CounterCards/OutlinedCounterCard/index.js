import CountUp from "react-countup";
import PropTypes from "prop-types";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

function OutlinedCounterCard({ color, count, title, prefix, suffix }) {
  const { secondary } = colors;
  const { borderWidth } = borders;

  return (
    <SuiBox
      borderRadius="md"
      border={`${borderWidth[1]} dashed ${secondary.main}`}
      textAlign="center"
      py={2}
    >
      <SuiTypography variant="h6" color={color} fontWeight="medium" textTransform="capitalize">
        {title}
      </SuiTypography>
      <SuiTypography variant="h4" fontWeight="bold">
        {prefix && (
          <SuiTypography component="span" variant="h5" fontWeight="bold">
            {prefix}
          </SuiTypography>
        )}
        <SuiBox display="inline-block" mx={0.5}>
          <CountUp end={count} duration={1} separator="," />
        </SuiBox>
        {suffix && (
          <SuiTypography component="span" variant="h5" fontWeight="bold">
            {suffix}
          </SuiTypography>
        )}
      </SuiTypography>
    </SuiBox>
  );
}

// Setting default values for the props of OutlinedCounterCard
OutlinedCounterCard.defaultProps = {
  color: "info",
  prefix: "",
  suffix: "",
};

// Typechecking props for the BlogCard
OutlinedCounterCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default OutlinedCounterCard;
