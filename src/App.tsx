import React from 'react';
import ScatterPlot from './components/ScatterPlot';
import BarChart from './components/BarChart';
import './App.css';

const App = () => {
  return (
    <div className="wine-visualization">
      <header>
        <h1>Wine Data Visualization</h1>
      </header>
      <main>
        <div className="scatter-plot-container">
          <h2>Color Intensity vs Hue</h2>
          <ScatterPlot />
        </div>
        <div className="bar-chart-container">
          <h2>Average Malic Acid by Alcohol Category</h2>
          <BarChart />
        </div>
      </main>
      <footer>
        <p>Created by Neha Sharma, 2023</p>
        <a href="mailto: bhardwajneha3010@gmail.com">bhardwajneha3010@gmail.com</a>
      </footer>
    </div>
  );
};

export default App;
