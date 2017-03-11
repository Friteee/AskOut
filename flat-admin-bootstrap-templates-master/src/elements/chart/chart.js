
if($('.ct-chart').length) { 
  new Chartist.Line('.ct-chart', {
    labels: [2015, 2016, 2017, 2018, 2019],
    series: [
      [7684,8356,9108,7508,6988],
      [2961,4500,6302,2433,3594],
    ]
  }, {
    showArea: true,
    fullWidth: true,
    lineSmooth: false
  });
}

if($('.ct-chart-bar').length) { 
  new Chartist.Bar('.ct-chart-bar', {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6]
    ]
  }, {
    fullWidth: true,
    chartPadding: {
      right: 40
    }
  });
}

if($('.ct-chart-pie').length) { 
  let data = {
    series: [5, 3, 4]
  };

  let sum = (a, b) => { return a + b };

  new Chartist.Pie('.ct-chart-pie', data, {
    labelInterpolationFnc: (value) => {
      return Math.round(value / data.series.reduce(sum) * 100) + '%';
    }
  });
}

if($('.ct-chart-donut').length) { 
  let data = {
    series: [5, 3, 4]
  };

  let sum = (a, b) => { return a + b };

  new Chartist.Pie('.ct-chart-donut', data, {
    labelInterpolationFnc: (value) => {
      return Math.round(value / data.series.reduce(sum) * 100) + '%';
    },
    donut: true,
    donutWidth: 20,
    labelPosition: 'outside',
    labelOffset: -30
  });
}

if($('.ct-chart-bi-polar').length) { 
  new Chartist.Line('.ct-chart-bi-polar', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [1, 2, 3, 1, -2, 0, 1, 0],
      [-2, -1, -2, -1, -2.5, -1, -2, -1],
      [0, 0, 0, 1, 2, 2.5, 2, 1]
    ]
  }, {
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
  });
}

if($('.ct-chart-stack-bar').length) { 
  new Chartist.Bar('.ct-chart-stack-bar', {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
      [800000, 1200000, 1400000, 1300000],
      [200000, 400000, 500000, 300000],
      [100000, 200000, 400000, 600000]
    ]
  }, {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        return (value / 1000) + 'k';
      }
    }
  }).on('draw', function(data) {
    if(data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 30px'
      });
    }
  });
}