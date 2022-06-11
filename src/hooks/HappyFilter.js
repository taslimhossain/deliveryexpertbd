import { useMemo, useState } from "react";

const HappyFilter = (data) => {

  const [dashboardData, setDashboardData] = useState({
    'today_order'      : 0,
    'month_order'      : 0,
    'total_order'      : 0,
    'pending_order'    : 0,
    'processing_order' : 0,
    'delivered_order'  : 0
  });

  const serviceData = useMemo(() => { 
    setDashboardData(data);
    }, [
    data
  ]);


  return {
    dashboardData,
    serviceData
  };
};

export default HappyFilter;
