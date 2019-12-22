function wind_rose_plot(wind_rose_data) {

var chart_name = 'wind_rose' + wind_rose_data.month

var line_color = 'lightGray'

// color, lines and text size
var wind_rose_color = ['DeepSkyBlue','cyan','lightGreen','Gold ','orange','red']

if (wind_rose_data.month == 0) {
   var line_width = 4 
    var plot_center_x = 250 
    var plot_center_y = 250 
    var rose_radius = 200 
    var font_size = 18 
} else if (wind_rose_data.month > 0) {
    var line_width = 2 
    var plot_center_x = 100 
    var plot_center_y = 100 
    var rose_radius = 100 
    var font_size = 12  
}

if (wind_rose_data.month == 0 )  {
  windRosecolor = wind_rose_color[5]
} else if (wind_rose_data.month > 0 && wind_rose_data.month <= 6) {
windRosecolor=wind_rose_color[wind_rose_data.month-1]
} else {
    windRosecolor= wind_rose_color[Math.abs(12-wind_rose_data.month)]
} 


//windRosecolor=wind_rose_color[wind_rose_data.month]
//var rose_radius = plot_center_x *.75
var radial_lines = 5
var font_1 = font_size + 'px arial'
var map_dir = ['E','SE','S','SW','W','NW','N','NE']
//var map_dir_delta_x = [font_size/4,0,-font_size/4,0,-font_size,0,-font_size/4,0]
//var map_dir_delta_y = [font_size/4,0,font_size,0,font_size/4,0,-font_size/2,0]
var f4 = font_size/4
var f2 = font_size/2
var f0 = font_size
var fx1_5 = 1.5*font_size
var map_dir_delta_x = [f4,f2,-f4,-fx1_5,-f0,-f0,-f4,f2]

var map_dir_delta_y = [f4,f0,f0,fx1_5,f4,-f0,-f2,-f4]

var gap = 5;
var arrayLength = wind_rose_data.data.length
var percent_val = Math.ceil(wind_rose_data.max_p/5)*5
var delta_w = 360/arrayLength

// Plot 
var ctx = document.getElementById(chart_name).getContext("2d");

// Circular Lines
ctx.beginPath();
for(i = 0; i < radial_lines+1 ; i++){
ctx.arc(plot_center_x,plot_center_y,rose_radius/(radial_lines+1)*i,0, 2*Math.PI);
}
ctx.lineWidth = line_width;
ctx.strokeStyle = line_color;
ctx.stroke();

//Radial Lines
ctx.font = font_1
ctx.beginPath();
angle = 0
for(i = 0; i < 8 ; i++){
    rl = rose_radius
    if ( i % 2 != 0) {
        rl = rl*radial_lines/(radial_lines+1)
    }
    angle = i*45* Math.PI/180
    x2 = plot_center_x + rl * Math.cos(angle)
    y2 = plot_center_y + rl * Math.sin(angle )
    ctx.moveTo( plot_center_x, plot_center_y)
    ctx.lineTo(x2,y2);
    if ( wind_rose_data.month == 0) {
    ctx.fillText(map_dir[i], x2+map_dir_delta_x[i] , y2+map_dir_delta_y[i])
    }
}
ctx.stroke();

// Wedges   
var i
    for(i = 0; i < arrayLength ; i++){
    var r = wind_rose_data.data[i]/wind_rose_data.max_p*rose_radius*radial_lines/(radial_lines+1)
    var angle_1 = Math.PI/180*( -90 - delta_w/2 + gap/2 + delta_w*i )
    var angle_2 = Math.PI/180*( -90 + delta_w/2 - gap/2 + delta_w*i )
    ctx.beginPath();
    ctx.moveTo(plot_center_x + 0, plot_center_y);
    ctx.arc(plot_center_x, plot_center_y, r, angle_1, angle_2);
    ctx.closePath();
    ctx.fillStyle = windRosecolor;
    ctx.fill();
}
ctx.beginPath();
var i
    for(i = 1; i < radial_lines+1 ; i++){
ctx.fillStyle = "black"
ctx.fillText ( percent_val*i/(radial_lines)+'%' ,plot_center_x-12, plot_center_y - rose_radius * i/(radial_lines+1))
ctx.strokeStyle = line_color;
ctx.stroke();
}
}

