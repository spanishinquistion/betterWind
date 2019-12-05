function hourly_v_ave_plot(hour_v_ave) {
var chart_name = 'hourly_ave_wind_speed'
var hour  = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23] 

var labels = hour
var xaxis_label = 'Time'

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
        data: hour_v_ave.hour_v_ave,
        label: 'average',
        borderColor: color_3,
        fill: false,
        borderDash: line_style_1,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      },
     { 
        data: hour_v_ave.std_v_plus,
        label: '+/-\u{03C3}',
        borderColor: color_1,
        fill: false,
        borderDash: line_style_2,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      },
      { 
        data: hour_v_ave.std_v_minus,
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
          max: hour_v_ave.hour_max ,
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