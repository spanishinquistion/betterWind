function pdf_plot(pdf_data) {
  var chart_name = 'probability_density'

var color_1 = 'royalblue' 
var font_1 = 12
// Data Above Template Below
var ctx = document.getElementById(chart_name).getContext('2d');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: pdf_data.V_range,
    datasets: [{ 
        data: pdf_data.data,
        label: pdf_data.V_range,
        backgroundColor: color_1,
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
          fontSize:  pdf_data.font_1
        },
        scaleLabel:{
          display: true,
          labelString: 'Probability [%]',
          fontSize: pdf_data.font_1
        }
      }],
      xAxes: [{
        ticks:{
          beginAtZero: true,
          fontSize:  pdf_data.font_1
        },
        scaleLabel: {
          display: true,
          labelString: 'Wind Speed [m/s]',
          fontSize:  pdf_data.font_1

        }
      }]
    }
  }
});
}