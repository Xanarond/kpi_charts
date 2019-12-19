import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-rdd-charts',
  templateUrl: './tms-charts.component.html',
  styleUrls: ['./tms-charts.component.scss']
})
export class TmsChartsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    const dedic = document.getElementById('dedic');
    // tslint:disable-next-line:no-unused-expression
    new Chart(dedic, {
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

    const ata = document.getElementById('ata');
    // tslint:disable-next-line:no-unused-expression
    new Chart(ata, {
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
            data: [72.7, 90, 100, 96.5, 80, 87.5, 94.4, 100, 88.1, 96.2, ],

          },
          {
            label: 'REPACKED',
            fill: false,
            borderColor: 'rgb(24,0,255)',
            backgroundColor: 'rgb(24,0,255)',
            data: [69.6, 86.1, 72.7, 72.7, 80, 82.3, 82.3, 82.4, 82.2, 82.1, ],

          },
          {
            label: 'Target',
            fill: false,
            borderColor: '#ffffff',
            backgroundColor: 'rgb(255,255,255)',
            data: [90, 90, 90, 90, 90, 90, 90, 90, 90, ],

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

    const cur = document.getElementById('cur');
    // tslint:disable-next-line:no-unused-expression
    new Chart(cur, {
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
            data: [82.7, 92.2, 62.2, 79.5, 67.5, 72.7, 92.4, 72.7, 71.4, 90.6, ],

          },
          {
            label: 'REPACKED',
            fill: false,
            borderColor: 'rgb(24,0,255)',
            backgroundColor: 'rgb(24,0,255)',
            data: [82.3, 69.7, 90, 80.1, 82, 80, 100, 97.4, 92.5, 97.5, ],

          },
          {
            label: 'Target',
            fill: false,
            borderColor: '#ffffff',
            backgroundColor: 'rgb(255,255,255)',
            data: [90, 90, 90, 90, 90, 90, 90, 90, 90, ],

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
