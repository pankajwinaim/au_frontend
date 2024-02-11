import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart: React.FC = () => {
    const options = {
        dataset: {
          source: [
            ['score', 'amount', 'product'],
            [89.3, 0, 'A'],
            [57.1, 100, 'B'],
            [74.4, 23, 'Cheese'],
            [50.1, 12, 'D'],
            [89.7, 70, 'Matcha'],
            [68.1, 50, 'Tea'],
            [19.6, 77, 'F'],
            [10.6, 100, 'Lemo'],
            [32.7, 14, 'Tueclose']
          ]
        },
        grid: { containLabel: true },
        xAxis: { name: 'amount' },
        yAxis: { type: 'category' },
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 10,
          max: 100,
          text: ['High Score', 'Low Score'],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ['#65B581', '#FFCE34', '#FD665F']
          }
        },
        series: [
          {
            type: 'bar',
            encode: {
              // Map the "amount" column to X axis.
              x: 'amount',
              // Map the "product" column to Y axis
              y: 'product'
            }
          }
        ]
      };

  return <ReactECharts option={options} />;
};

export default BarChart;