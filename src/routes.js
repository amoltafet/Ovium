/** 
  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Wiki from "layouts/wiki";
import Timesheet from "layouts/timesheet";
import Reports from "layouts/reports";
import GroupsAndMessages from "layouts/groupsAndMessages";
import Home from "layouts/home";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Organization from "layouts/organization";
import DeleteIcon from '@mui/icons-material/Delete';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PublicIcon from '@mui/icons-material/Public';
import Markets from "layouts/markets";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <DashboardOutlinedIcon />,
    component: <Dashboard />,
    noCollapse: true,
    owner: "employee",
  },
  {
    type: "collapse",
    name: "Timesheet",
    key: "timesheet",
    route: "/timesheet",
    icon: <TimerOutlinedIcon />,
    component: <Timesheet />,
    noCollapse: true,
    owner: "employee",
  },
  {
    type: "collapse",
    name: "Reports",
    key: "reports",
    route: "/reports",
    icon: <AccountBalanceOutlinedIcon />,
    component: <Reports />,
    noCollapse: true,
    owner: "employee",
  },
  {
    type: "non-visible",
    name: "Groups & Messages",
    key: "groups&messages",
    route: "/groups&messages",
    icon: <DonutSmallOutlinedIcon />,
    component: <GroupsAndMessages />,
    noCollapse: true,
    owner: "none",
  },
  {
    type: "non-visible",
    name: "Wiki",
    key: "wiki",
    route: "/wiki",
    icon: <HomeRepairServiceOutlinedIcon />,
    component: <Wiki />,
    noCollapse: true,
    owner: "none",
  },
  {
    type: "non-visible",
    name: "Home",
    key: "home",
    route: "/",
    icon: <DeleteIcon />,
    component: <Home />,
    noCollapse: true,
    owner: "none",
  },
  
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon:<AccountCircleOutlinedIcon />,
    component: <Profile />,
    noCollapse: true,
    owner: "none",
  },
  {
    type: "collapse",
    name: "Organization",
    key: "organization",
    route: "/organization",
    icon:<CorporateFareIcon />,
    component: <Organization />,
    noCollapse: true,
    owner: "none",
  },
  {
    type: "non-visible",
    name: "Sign In",
    key: "sign-in",
    route: "/sign-in",
    icon: <DeleteIcon />,
    component: <SignIn />,
    noCollapse: true,
    owner: "none",
  },
  {
    type: "non-visible",
    name: "Sign Up",
    key: "sign-up",
    route: "/sign-up",
    icon:<DeleteIcon />,
    component: <SignUp />,
    noCollapse: true,
    owner: "none",
  },
  {
    type: "collapse",
    name: "dashboard",
    key: "employer-dashboard",
    route: "/employer-dashboard",
    icon:<DeleteIcon />,
    component: <SignUp />,
    noCollapse: true,
    owner: "employer",
  },
  {
    type: "collapse",
    name: "payroll",
    key: "payroll",
    route: "/payroll",
    icon:<DeleteIcon />,
    component: <SignUp />,
    noCollapse: true,
    owner: "employer",
  },
  {
    type: "collapse",
    name: "people",
    key: "people",
    route: "/people",
    icon:<DeleteIcon />,
    component: <SignUp />,
    noCollapse: true,
    owner: "employer",
  },
  {
    type: "collapse",
    name: "employer-reports",
    key: "reports",
    route: "/reports",
    icon:<DeleteIcon />,
    component: <SignUp />,
    noCollapse: true,
    owner: "employer",
  },
  {
    type: "collapse",
    name: "taxes",
    key: "taxes",
    route: "/taxes",
    icon:<DeleteIcon />,
    component: <SignUp />,
    noCollapse: true,
    owner: "employer",
  },
];

export default routes;
