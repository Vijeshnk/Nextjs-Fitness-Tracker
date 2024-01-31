import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }[];
  };
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="relative h-64 w-64 md:h-96 md:w-96">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
