class FormController {
  constructor() {
    this.select2 = {
      list: [
        { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
        { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
        { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
        { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
        { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
        { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
        { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
        { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
        { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
        { name: 'Nicolás',   email: 'nicole@email.com',    age: 43, country: 'Colombia' }
      ],
      years: [1,2,3,4,5]
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
  }
}

export default FormController