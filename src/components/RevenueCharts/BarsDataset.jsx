import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  height: 300,
  // sx: {
  //   [`.${axisClasses.left} .${axisClasses.label}`]: {
  //     transform: 'translate(-20px, 0)',
  //   },
  // },
};
const dataset = [
  {
    revenue: '$25',
    sales: 38,
    appointments: 24,
    month: 'Jan',
  },
  {
    revenue: '$125',
    sales: 40,
    appointments: 30,
    month: 'Feb',
  },
  {
    revenue: '$25',
    sales: 40,
    appointments: 30,
    month: 'Mar',
  },
  {
    revenue: '$15',
    sales: 20,
    appointments: 20,
    month: 'Apr',
  },
  {
    revenue: '$12',
    sales: 20,
    appointments: 20,
    month: 'May',
  },
  {
    revenue: '$15',
    sales: 20,
    appointments: 20,
    month: 'June',
  },
  {
    revenue: '$65',
    sales: 20,
    appointments: 10,
    month: 'July',
  },
  {
    revenue: '$25',
    sales: 20,
    appointments: 10,
    month: 'Aug',
  },
  {
    revenue: '$65',
    sales: 38,
    appointments: 24,
    month: 'Sept',
  },
  {
    revenue: '$25',
    sales: 38,
    appointments: 24,
    month: 'Oct',
  },
  {
    revenue: '$75',
    sales: 38,
    appointments: 24,
    month: 'Nov',
  },
  {
    revenue: '$25',
    sales: 38,
    appointments: 24,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}`;

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      yAxis={[{ scaleType: 'linear', dataKey: 'revenue' }]}
      series={[
        { dataKey: 'sales', label: 'Sales', valueFormatter, color:'#5679FF' },
        { dataKey: 'appointments', label: 'Appointments', valueFormatter,color:'#101928' },
      ]}
      {...chartSetting}
    />
  );
}
