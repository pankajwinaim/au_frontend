import React from 'react';
import ReactECharts from 'echarts-for-react';

const PieChart = () => {
   const options = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 40, name: 'Search Engine' },
              { value: 30, name: 'Direct' },
              { value: 58, name: 'Email' }
            ]
          }
        ]
      };

  return <ReactECharts option={options} />;
};

export default PieChart;