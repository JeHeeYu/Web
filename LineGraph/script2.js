var myChart = new Chart(document.getElementById("script2"), {
  type: 'line',
  data: {
      labels: ['3', '6', '9', '12', '15', '18', '21'],
      datasets: [{
          label: '테스트 데이터셋',
          data: [
              10,
              2,
              3,
          ],
          borderColor: "rgba(255, 201, 14, 1)",
          backgroundColor: "rgba(255, 201, 14, 0.5)",
          fill: true,
          lineTension: 0
      }]
  },
  options: {
      responsive: true,
      title: {
          display: true,
          text: '라인 차트 테스트'
      },
      tooltips: {
          mode: 'index',
          intersect: false,
      },
      hover: {
          mode: 'nearest',
          intersect: true
      },
      scales: {
          xAxes: [{
              display: true,
              scaleLabel: {
                  display: true,
                  labelString: 'Time'
              }
          }],
          yAxes: [{
              display: true,
              ticks: {
                  suggestedMin: 0,
              },
              scaleLabel: {
                  display: true,
                  labelString: 'Temp'
              }
          }]
      }
  }
});
