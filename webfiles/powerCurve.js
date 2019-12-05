var chart_name = 'powerCurve'
var v  = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24] 
var c1 = 'Black' 
var c2 = 'Red' 
var c3 = 'royalblue' 
var c4 = 'Cyan' 
var pc = [0.0, 0.0, 0.0, 2.262406473988439, 4.4187626445086705, 7.635621849710983, 12.125084696531793, 18.099251791907513, 25.77022374277457, 35.350101156069364, 47.05098463872832, 61.08497479768786, 77.6641722398844, 97.00067757225435, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
var font_1 = 18
// Data Above Template Below
var ctx = document.getElementById(chart_name).getContext('2d');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: v,
    datasets: [{ 
        data: pc,
        label: v,
        borderColor: c3,
        borderWidth: 8,
        fill: false
      },
      
    ]
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: ' '
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontSize: font_1
        },
        scaleLabel:{
          display: true,
          labelString: 'Power Production [%/rated]',
          fontSize: font_1
        }
      }],
      xAxes: [{
        ticks:{
          beginAtZero: true,
          fontSize: font_1
        },
        scaleLabel: {
          display: true,
          labelString: 'Wind Speed [m/s]',
          fontSize: font_1
        }
      }]
    }
  }
});