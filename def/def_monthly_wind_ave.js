function monthly_v_ave_plot(monthly_v_ave) {
var chart_name = 'monthly_ave_wind_speed'
var month  = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] 
//var m_vave = [2.95, 2.825, 2.922, 2.807, 2.627, 2.584, 2.469, 2.272, 2.357, 2.534, 2.645, 2.786]
//var m_std_plus = [3.91, 3.77, 3.9, 3.73, 3.5, 3.47, 3.28, 3.02, 3.16, 3.39, 3.49, 3.67]
//var m_std_minus = [1.99, 1.88, 1.94, 1.88, 1.76, 1.69, 1.66, 1.53, 1.55, 1.68, 1.8, 1.91]
//var y_max = 5.0
var labels = month
var xaxis_label = 'Month'

var color_1 = 'darkGray' 
var color_3 = 'Red' 
var color_4 = 'royalBlue' 


var font_1 = 18
var border_width_1 = 4
var border_width_2 = 4
var solid_line = []
var dash_line = [4,2]
var line_style_1 = solid_line
var line_style_2 = dash_line
var legend_5 = ' no legend' 
//Template
var ctx = document.getElementById(chart_name).getContext('2d');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{ 
        data: monthly_v_ave.m_v_ave,
        label: 'average',
        borderColor: color_3,
        fill: false,
        borderDash: line_style_1,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      },
     { 
        data: monthly_v_ave.m_v_std_plus,
        label: '+/-\u{03C3}',
        borderColor: color_1,
        fill: false,
        borderDash: line_style_2,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      },
      { 
        data: monthly_v_ave.m_v_std_minus,
        label: legend_5,
        borderColor: color_1,
        fill: false,
        borderDash: line_style_2,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      }
    ]
  },
  options: {

    title: {
      display: false,
      text: 'Average Wind Speed',
      fontSize: font_1,
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
          max: monthly_v_ave.m_v_max,
          fontSize: font_1
        },
        scaleLabel:{
          display: true,
          labelString: 'Wind Speed [m/s]',
          fontSize: font_1
        }
      }],
      xAxes: [{
        ticks: {
          fontSize: font_1,
          autoSkip:false
        },
        scaleLabel: {
          display: true,
          labelString: xaxis_label,
          fontSize: font_1
        }
      }]
    },    legend:{
      display: true,
      labels:{
        usePointStyle: true,
        fontSize: font_1,
        filter: function(item, chart) {
          // Logic to remove a particular legend item goes here
          // Logic to remove a particular legend item goes here
          return !item.text.includes(legend_5);
        }
      }
    }
  }
});
}