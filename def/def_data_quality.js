
function data_quality_plot(data_quality) {
  var chart_name = 'data_quality'


//var ymin = 95
// COLORS
var color_1 = 'black' 

// PLOT CONTROLS
var font_1 = 18
var border_width_1 = 4
var border_width_2 = 4
var solid_line = [2]
var dash_line = [4,2]
var line_style_1 = solid_line
var line_style_2 = dash_line
//Template
var ctx = document.getElementById(chart_name).getContext('2d');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data_quality.years,
    datasets: [{ 
        data: data_quality.quality ,
        label: 'average',
        borderColor: color_1,
        backgroundColor: color_1,
        fill: true,
        borderDash: line_style_1,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      }
    ]
  },
  options: {

    title: {
      display: false,
      text: 'Quality [%]',
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
          suggestedMin: data_quality.ymin, 
          suggestedMax: 101, 
          fontSize: font_1
        },
        scaleLabel:{
          display: false,
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
          labelString: 'Year',
          fontSize: font_1
        }
      }]
    },    legend:{
      display: false,
      labels:{
        usePointStyle: true,
        fontSize: font_1
      }
    }
  }
});
}