import React from 'react';
import ReactEcharts from 'echarts-for-react';
import data from '../Wine-Data.json';

const ScatterPlot = () => {
  const option = {
    xAxis: {
      name: 'Color Intensity',
      nameTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        align: 'center',
        padding : [15, 0, 0, 0],
        color: 'red'
      },
      type: 'value',
      nameLocation: 'center', 
    },
    yAxis: {
      name: 'Hue',
      nameTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        align: 'centre',
        color: 'red'
      },
      type: 'value'
    },
    series: [{
      type: 'scatter',
      data: data.map(doc => [doc['Color intensity'], doc['Hue']])
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

export default ScatterPlot;
