import React from 'react';
//import { Bar, Doughnut } from 'react-chartjs-2';
import { ImStack, ImCreditCard } from 'react-icons/im';
import { FiShoppingCart, FiTruck, FiRefreshCw, FiCheck } from 'react-icons/fi';

import useAsync from '../hooks/useAsync';
import useFilter from '../hooks/useFilter';
import UserServices from '../services/UserServices';
//import ChartCard from '../components/chart/ChartCard';
import CardItem from '../components/dashboard/CardItem';
import PageTitle from '../components/Typography/PageTitle';
import CardItemTwo from '../components/dashboard/CardItemTwo';
import HappyFilter from '../hooks/HappyFilter';
//import { barOptions, doughnutOptions } from '../utils/chartsData';

const Dashboard = () => {
  const { data } = useAsync(UserServices.getDashboard);
  const {
    dashboardData
  } = HappyFilter(data)

  return (
    <>
      <PageTitle>Dashboard Overview</PageTitle>

      <div className="grid gap-4 mb-8 md:grid-cols-3 xl:grid-cols-3">
        <CardItemTwo
          title="Today Order"
          Icon={ImStack}
          price={dashboardData.today_order}
          className="text-white dark:text-green-100 bg-teal-500"
        />
        <CardItemTwo
          title="This Month"
          Icon={FiShoppingCart}
          price={dashboardData.month_order}
          className="text-white dark:text-green-100 bg-blue-500"
        />
        <CardItemTwo
          title="Total Order"
          Icon={ImCreditCard}
          price={dashboardData.total_order}
          className="text-white dark:text-green-100 bg-green-500"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <CardItem
          title="Total Order"
          Icon={FiShoppingCart}
          quantity={dashboardData.today_order}
          className="text-orange-600 dark:text-orange-100 bg-orange-100 dark:bg-orange-500"
        />
        <CardItem
          title="Order Pending"
          Icon={FiRefreshCw}
          quantity={dashboardData.pending_order}
          className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
        />
        <CardItem
          title="Order Processing"
          Icon={FiTruck}
          quantity={dashboardData.processing_order}
          className="text-teal-600 dark:text-teal-100 bg-teal-100 dark:bg-teal-500"
        />
        <CardItem
          title="Order Delivered"
          Icon={FiCheck}
          quantity={dashboardData.delivered_order}
          className="text-green-600 dark:text-green-100 bg-green-100 dark:bg-green-500"
        />
      </div>

      {/* <div className="grid gap-4 md:grid-cols-2 my-8">
        <ChartCard title="Conversions This Year">
          <Bar {...barOptions} />
        </ChartCard>
        <ChartCard title="Top Revenue Product">
          <Doughnut {...doughnutOptions} className="chart" />
        </ChartCard>
      </div> */}

    </>
  );
};

export default Dashboard;
