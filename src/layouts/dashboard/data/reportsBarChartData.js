const reportsBarChartData = {
  chart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "Income", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
  },
  items: [
    {
      icon: { color: "success", component: "watch_later" },
      label: "Total Clocked Hours",
      progress: { content: "87.50", percentage: 100 },
    },
    {
      icon: { color: "info", component: "paid" },
      label: "Total Earned Income",
      progress: { content: "$1241.23", percentage: 100 },
    },
    {
      icon: { color: "error", component: "payment" },
      label: "Total Deductions",
      progress: { content: "-$435", percentage: 100 },
    },
    {
      icon: { color: "warning", component: "extension" },
      label: "Hourly Rate",
      progress: { content: "$15.32", percentage: 100 },
    },
  ],
};

export default reportsBarChartData;
