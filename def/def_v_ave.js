function v_ave_plot(v_ave) {
var chart_name = 'wind_speed_annual_history'
// DATA imported from dashboard
// LEGENDS
var legend_1 = 'Measurement Height' 
var legend_2 = v_ave.h_h[0] + 'm'
var legend_3 = v_ave.h_h[1] + 'm'
var legend_4 = v_ave.h_h[2] + 'm'
var legend_5 = ' no legend' 

// COLORS
var color_1 = 'darkGray' 
var color_2 = 'limeGreen' 
var color_3 = 'Red' 
var color_4 = 'royalBlue' 

// PLOT CONTROLS
var font_1 = 18
var border_width_1 = 4
var border_width_2 = 4
var solid_line = []
var dash_line = [4,2]
var line_style_1 = solid_line
var line_style_2 = dash_line
// LEGENDS
/* Data Above Template Below
This section is the change between Mark's area (above)
and webmeister will's below)
*/
var y2dis = 10
var n_y= v_ave.year.length
if ( v_ave.type = "base_" && n_y > y2dis) {
    v_ave.year = v_ave.year.slice(n_y-y2dis,n_y)
    v_ave.h_m = v_ave.h_m.slice(n_y-y2dis,n_y)
    v_ave.S = v_ave.S.slice(n_y-y2dis,n_y)
    v_ave.M = v_ave.M.slice(n_y-y2dis,n_y)
    v_ave.L = v_ave.L.slice(n_y-y2dis,n_y)
}

var ctx = document.getElementById(chart_name).getContext('2d');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: v_ave.year,
    datasets: [{ 
        data: v_ave.h_m,
        label: legend_1,
        borderColor: color_1,
        fill: false,
        borderDash: line_style_2,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      }, 
      { 
       data: v_ave.S,
        label: legend_2,
        borderColor: color_2,
        backgroundColor: color_2,
        fill: false,
        borderDash: line_style_1,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      },
      { 
       data: v_ave.M,
        label: legend_3,
        borderColor: color_3,
        borderDash: line_style_1,
        backgroundColor: color_3,
        fill: false,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      },
      { 
       data: v_ave.L,
        label: legend_4,
        borderColor: color_4,
        backgroundColor: color_4,
        fill: false,
        borderDash: line_style_1,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      },
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
          suggestedMin: 0,
          beginAtZero: true,
          fontSize: font_1
        },
        scaleLabel:{
          display: true,
          labelString: 'Average Wind Speed [m/s]',
          fontSize: font_1
        }
      }],
      xAxes: [{
        display: true,
        ticks: {
          suggestedMin: 0,
          beginAtZero: true,
          fontSize: font_1
        },
        scaleLabel: {
          display: true,
          labelString: 'Year',
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
          return !item.text.includes(legend_5);
        }
      }
    }
  }
});
}