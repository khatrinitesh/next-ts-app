import { google } from 'google-charts';

// Assuming you have a div with the id 'chart_div' in your HTML
const drawChart = () => {
  const data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540]
  ]);

  const options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' },
  };

  const chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
};

google.charts.load('current', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(drawChart);