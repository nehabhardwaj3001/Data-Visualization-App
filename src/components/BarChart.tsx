// BarChart.tsx
import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import data from '../Wine-Data.json';

const BarChart = () => {
  const [averages, setAverages] = useState<{name: string, value: number}[]>([]);

  useEffect(() => {
    const grouped = data.reduce((groups:Record<string, number[]>, row) => {
      if (!groups[row['Alcohol']]) {
        groups[row['Alcohol']] = [];
      }
      groups[row['Alcohol']].push(row['Malic Acid']);
      return groups;
    }, {});
    const avgValues = Object.keys(grouped).map(key => {
      const avg = grouped[key].reduce((sum:number, val:any) => sum + val) / grouped[key].length;
      return { name: key, value: avg };
    });
    setAverages(avgValues);
  }, []);

  const option = {
    xAxis: {
      type: 'category',
      data:  ['Alcohol 1', 'Alcohol 2', 'Alcohol 3'],
      axisLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
      }
    },
    yAxis: {
      name: 'Average Malic Acid',
      nameTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        align: 'left',
        color: 'red'
      },
      type: 'value'
    },
    series: [{
      type: 'bar',
      data: averages.map(avg => avg.value)
    }]
  };

  return (
    <div style={{ width: '100%', height: 500 }}>
      <ReactEcharts
        option={option}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default BarChart;
