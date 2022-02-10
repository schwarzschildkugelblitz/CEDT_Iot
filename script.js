var xValues = [50,23098,23897 ,789234,8234,4789];
var yValues = [7843,348094,348753,432089,83247,34209,34789];
new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0.3,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
        }]
    },
    options: {
        legend: {display: false},
    }
});