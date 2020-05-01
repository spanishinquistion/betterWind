function cp_gage_plot(data,rank) {

var chart_name = 'cp_gage_plot'

// color, lines and text size
var arc_color = ['limeGreen','Red','royalBlue']

var P = Math.PI
var line_width = 20 
var plot_center_x = 100 
var plot_center_y = 100 
var radius = 66 
var font_size = 18 

var font_1 = font_size + 'px arial'
var cp_range = ['0','10','20','30']
var cp = data.c_p


// Plot 
var ctx = document.getElementById(chart_name).getContext("2d");

// Circular arc
for(i = 0; i < cp_range.length-1 ; i++){
ctx.beginPath();
ctx.arc(plot_center_x,plot_center_y,radius,P+i/3*P, P+(i+1)/3*P);
ctx.strokeStyle = arc_color[i];
ctx.lineWidth = line_width;
ctx.stroke();
}

//cp data on radius
var rtext = radius + 30
ctx.font = font_1
ctx.beginPath();
angle = 0
for(i = 0; i < cp_range.length ; i++){

    angle = P + i * 1/(cp_range.length-1)*P
    x2 = plot_center_x + rtext * Math.cos(angle)
    y2 = plot_center_y + rtext * Math.sin(angle )
    ctx.fillText(cp_range[i], x2 , y2)
}
ctx.stroke();
var r = radius + 20
ctx.beginPath();
ctx.moveTo(plot_center_x, plot_center_y);
ctx.lineTo(plot_center_x + r *Math.cos(P+cp/30*P), plot_center_x + r *Math.sin(P+cp/30*P));
ctx.strokeStyle = 'black';
ctx.lineWidth = line_width/2;
ctx.stroke(); 

ctx.beginPath();
ctx.font = 1.5*font_size
ctx.fillText(rank, plot_center_x - 40 , plot_center_y + 30)

}