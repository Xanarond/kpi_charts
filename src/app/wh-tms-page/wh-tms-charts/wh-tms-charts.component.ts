import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
@Component({
  selector: 'app-wh-tms-charts',
  templateUrl: './wh-tms-charts.component.html',
  styleUrls: ['./wh-tms-charts.component.scss']
})
export class WhTmsChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const gr = document.getElementById('gr');
    // tslint:disable-next-line:no-unused-expression
    new Chart(gr, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset

      data: {

        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', ],
        datasets: [

          {
            label: 'DAMAGED STOCK',
            fill: false,
            borderColor: 'rgb(240,97,0)',
            backgroundColor: 'rgb(240,97,0)',
            data: [0.7, 1.2, 1.1, 1.4, 1.3, 1.2, 1.2, 1.3, 1.0, 1.0, ],

          },
          {
            label: 'REPACKED',
            fill: false,
            borderColor: 'rgb(24,0,255)',
            backgroundColor: 'rgb(24,0,255)',
            data: [0.9, 1.1, 1.3, 1.7, 1.6, 1.5, 1.3, 1.4, 1.1, 1.1, ],

          },
          {
            label: 'Target',
            fill: false,
            borderColor: '#ffffff',
            backgroundColor: 'rgb(255,255,255)',
            data: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, ],

          }
        ],
      },

      // Configuration options go here
      options: {
        legend: {
          display: true,
          // position: 'bottom',
          fontColor: '#fff'
        },
        tooltips: {
          mode: 'x',
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              color: '#fff' // this here
            },
            ticks: {
              fontColor: '#fff',
              beginAtZero: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: true,
              color: '#fff' // this here
            },
            ticks: {
              fontColor: '#fff',
              beginAtZero: true
            },
          }]
        }
      }
    });

    const gi = document.getElementById('gi');
    // tslint:disable-next-line:no-unused-expression
    new Chart(gi, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset

      data: {

        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', ],
        datasets: [

          {
            label: 'DAMAGED STOCK',
            fill: false,
            borderColor: 'rgb(240,97,0)',
            backgroundColor: 'rgb(240,97,0)',
            data: [0.7, 1.2, 1.1, 1.4, 1.3, 1.2, 1.2, 1.3, 1.0, 1.0, ],

          },
          {
            label: 'REPACKED',
            fill: false,
            borderColor: 'rgb(24,0,255)',
            backgroundColor: 'rgb(24,0,255)',
            data: [0.9, 1.1, 1.3, 1.7, 1.6, 1.5, 1.3, 1.4, 1.1, 1.1, ],

          },
          {
            label: 'Target',
            fill: false,
            borderColor: '#ffffff',
            backgroundColor: 'rgb(255,255,255)',
            data: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, ],

          }
        ],
      },

      // Configuration options go here
      options: {
        legend: {
          display: true,
          // position: 'bottom',
          fontColor: '#fff'
        },
        tooltips: {
          mode: 'x',
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              color: '#fff' // this here
            },
            ticks: {
              fontColor: '#fff',
              beginAtZero: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: true,
              color: '#fff' // this here
            },
            ticks: {
              fontColor: '#fff',
              beginAtZero: true
            },
          }]
        }
      }
    });

    const rdt = document.getElementById('rdt');
    // tslint:disable-next-line:no-unused-expression
    new Chart(rdt, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset

      data: {

        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', ],
        datasets: [

          {
            label: 'DAMAGED STOCK',
            fill: false,
            borderColor: 'rgb(240,97,0)',
            backgroundColor: 'rgb(240,97,0)',
            data: [0.7, 1.2, 1.1, 1.4, 1.3, 1.2, 1.2, 1.3, 1.0, 1.0, ],

          },
          {
            label: 'REPACKED',
            fill: false,
            borderColor: 'rgb(24,0,255)',
            backgroundColor: 'rgb(24,0,255)',
            data: [0.9, 1.1, 1.3, 1.7, 1.6, 1.5, 1.3, 1.4, 1.1, 1.1, ],

          },
          {
            label: 'Target',
            fill: false,
            borderColor: '#ffffff',
            backgroundColor: 'rgb(255,255,255)',
            data: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, ],

          }
        ],
      },

      // Configuration options go here
      options: {
        legend: {
          display: true,
          // position: 'bottom',
          fontColor: '#fff'
        },
        tooltips: {
          mode: 'x',
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              color: '#fff' // this here
            },
            ticks: {
              fontColor: '#fff',
              beginAtZero: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: true,
              color: '#fff' // this here
            },
            ticks: {
              fontColor: '#fff',
              beginAtZero: true
            },
          }]
        }
      }
    });

    const lsp = document.getElementById('lsp');
    // tslint:disable-next-line:no-unused-expression
    new Chart(lsp, {
      // The type of chart we want to create
      type: 'bar',
      // The data for our dataset

      data: {

        labels: ['CRAFTER', 'GLT', 'ITECO', 'ITELLA', 'GLT DDK', 'MMTRANS', 'PONYEXPRESS', 'RUSGLOBAL', 'TRANSCORD', 'VESTA', 'SWIFT', 'UNION' ],
        datasets: [

          {
            label: 'REPACKED',
            fill: false,
            borderColor: '#1800ff',
            backgroundColor: '#1800ff',
            data: [0.9, 1.1, 1.3, 1.7, 1.6, 1.5, 1.3, 1.4, 1.1, 1.1, 1.3, 1.4, ],

          },
        ],
      },

      // Configuration options go here
      options: {
        legend: {
          display: true,
          // position: 'bottom',
          fontColor: '#fff'
        },
        tooltips: {
          mode: 'x',
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              color: '#fff' // this here
            },
            ticks: {
              fontColor: '#fff',
              beginAtZero: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: true,
              color: '#fff' // this here
            },
            ticks: {
              fontColor: '#fff',
              beginAtZero: true
            },
          }]
        }
      }
    });

    const rdd = document.getElementById('rdd');
    // tslint:disable-next-line:no-unused-expression
    new Chart(rdd, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset

      data: {

        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', ],
        datasets: [

          {
            label: 'DAMAGED STOCK',
            fill: false,
            borderColor: 'rgb(240,97,0)',
            backgroundColor: 'rgb(240,97,0)',
            data: [0.7, 1.2, 1.1, 1.4, 1.3, 1.2, 1.2, 1.3, 1.0, 1.0, ],

          },
          {
            label: 'REPACKED',
            fill: false,
            borderColor: 'rgb(24,0,255)',
            backgroundColor: 'rgb(24,0,255)',
            data: [0.9, 1.1, 1.3, 1.7, 1.6, 1.5, 1.3, 1.4, 1.1, 1.1, ],

          },
          {
            label: 'Target',
            fill: false,
            borderColor: '#ffffff',
            backgroundColor: 'rgb(255,255,255)',
            data: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, ],

          }
        ],
      },

      // Configuration options go here
      options: {
        legend: {
          display: true,
          // position: 'bottom',
          fontColor: '#fff'
        },
        tooltips: {
          mode: 'x',
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              color: '#fff' // this here
            },
            ticks: {
              fontColor: '#fff',
              beginAtZero: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: true,
              color: '#fff' // this here
            },
            ticks: {
              fontColor: '#fff',
              beginAtZero: true
            },
          }]
        }
      }
    });

    const iod = document.getElementById('iod');
    // tslint:disable-next-line:no-unused-expression
    new Chart(iod, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset

      data: {

        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', ],
        datasets: [

          {
            label: 'DAMAGED STOCK',
            fill: false,
            borderColor: 'rgb(240,97,0)',
            backgroundColor: 'rgb(240,97,0)',
            data: [0.7, 1.2, 1.1, 1.4, 1.3, 1.2, 1.2, 1.3, 1.0, 1.0, ],

          },
          {
            label: 'REPACKED',
            fill: false,
            borderColor: 'rgb(24,0,255)',
            backgroundColor: 'rgb(24,0,255)',
            data: [0.9, 1.1, 1.3, 1.7, 1.6, 1.5, 1.3, 1.4, 1.1, 1.1, ],

          },
          {
            label: 'Target',
            fill: false,
            borderColor: '#ffffff',
            backgroundColor: 'rgb(255,255,255)',
            data: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, ],

          }
        ],
      },

      // Configuration options go here
      options: {
        legend: {
          display: true,
          // position: 'bottom',
          fontColor: '#fff'
        },
        tooltips: {
          mode: 'x',
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              color: '#fff' // this here
            },
            ticks: {
              fontColor: '#fff',
              beginAtZero: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: true,
              color: '#fff' // this here
            },
            ticks: {
              fontColor: '#fff',
              beginAtZero: true
            },
          }]
        }
      }
    });
  }
}
