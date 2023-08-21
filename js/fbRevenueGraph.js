window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	// animationEnabled: true,
	// title:{
	// 	text: "Simple Line Chart"
	// },
    

    axisX: {
        interval: 10,
    lineThickness: 0,
  	tickLength: 0,
  	labelFormatter: null,
    lineColor: "transparent",  
      },
     
    axisY: {
        interval: 20,
        lineColor: "transparent",
        gridColor: "lightgray", 
        gridThickness: 1,       
        gridDashType: "dash", 
      },
	data: [{        
		type: "line",
       
      	indexLabelFontSize: 16,
          lineThickness: 5,
          color: "#58bf73",
          markerSize: 0,
		dataPoints: [
            { x: 0, y: 0 },
            { x: 8, y: 15},
            { x: 15, y: 50 },
            { x: 30, y: 40 },
            { x: 40, y: 60 },
            { x: 60, y: 45 },
            { x: 72, y: 60 },
            { x: 100, y: 68 },
		]
	},
    {        
		type: "line",
      	indexLabelFontSize: 16,
          lineThickness: 5,
          color: "#FFC907",
          markerSize: 0,
		dataPoints: [
            { x: 0, y: 0 },
            { x: 10, y: 7},
            { x: 18, y: 30 },
            { x: 35, y: 20 },
            { x: 45, y: 35 },
            { x: 60, y: 15 },
            { x: 94, y: 30 },
            { x: 100, y: 20 },
		]
	}
]
});
chart.render();

}
