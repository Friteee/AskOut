import { sum } from '../../utils/chart'

class ChartController {
  constructor() {
    this.lineChart = {
      data: {
        labels: [2015, 2016, 2017, 2018, 2019],
        series: [
          [7684,8356,9108,7508,6988],
          [2961,4500,6302,2433,3594],
        ],
      },
      config: {
        showArea: true,
        fullWidth: true,
        lineSmooth: false
      }
    }

    this.biPolarChart = {
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
          [1, 2, 3, 1, -2, 0, 1, 0],
          [-2, -1, -2, -1, -2.5, -1, -2, -1],
          [0, 0, 0, 1, 2, 2.5, 2, 1]
        ]
      },
      config: {
        high: 3,
        low: -3,
        showArea: true,
        showLine: false,
        showPoint: false,
        fullWidth: true,
        axisX: {
          showLabel: false,
          showGrid: false
        }
      }
    }


    this.barChart = {
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        series: [
          [12, 9, 7, 8, 5],
          [2, 1, 3.5, 7, 3],
          [1, 3, 4, 5, 6]
        ]
      },
      config: {
        fullWidth: true,
        chartPadding: {
          right: 40
        }
      }
    }


    this.stackBarChart = {
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        series: [
          [800000, 1200000, 1400000, 1300000],
          [200000, 400000, 500000, 300000],
          [100000, 200000, 400000, 600000]
        ]
      },
      config: {
        stackBars: true,
        axisY: {
          labelInterpolationFnc: function(value) {
            return (value / 1000) + 'k';
          }
        }
      }
    }

    this.pieChart = {
      data: {
        series: [5, 3, 4]
      },
      config: {
        labelInterpolationFnc: (value) => {
          return Math.round(value / this.pieChart.data.series.reduce(sum) * 100) + '%';
        }
      }
    }

    this.donutChart = {
      data: {
        series: [5, 3, 4]
      },
      config: {
        labelInterpolationFnc: (value) => {
          return Math.round(value / this.donutChart.data.series.reduce(sum) * 100) + '%';
        },
        donut: true,
        donutWidth: 60,
        labelPosition: 'outside'
      }
    }


    this.saleChart = {
      data: {
        labels: ["","MicroSD 64Gb","Flashdrive", "MiniPC i5", "Raspberry Pi2",""],
        series: [
          [103560,103560,81008,69808, 29601,29601],
        ]
      },
      config: {
        axisX: {
          position: 'center'
        },
        axisY: {
          offset: 0,
          showLabel: false,
          labelInterpolationFnc: function(value) {
            return (value / 1000) + 'k';
          }
        },
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        height: 250,
        high: 120000,
        showArea: true,
        stackBars: true,
        fullWidth: true,
        lineSmooth: false,
        plugins: [
          Chartist.plugins.ctPointLabels({
            textAnchor: 'left',
            labelInterpolationFnc: function(value) {
              return '$' + value.toFixed(2)
            }
          })
        ]
      },
      responsive: [
        ['screen and (max-width: 768px)', {
          axisX: {
            offset: 0,
            showLabel: false
          },
          height: 180
        }]
      ]
    }
  }
}

export default ChartController;