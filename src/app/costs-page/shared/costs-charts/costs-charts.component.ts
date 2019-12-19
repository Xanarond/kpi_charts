import {Component, OnInit} from '@angular/core';
import Chart1 from 'chart.js';

@Component({
  selector: 'app-costs-charts',
  templateUrl: './costs-charts.component.html',
  styleUrls: ['./costs-charts.component.scss']
})
export class CostsChartsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const pal = document.getElementById('pal');
    new Chart1(pal, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset

      data: {

        // tslint:disable-next-line:max-line-length
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [

          {
            label: 'Target 2019',
            fill: false,
            borderColor: 'rgb(240,97,0)',
            backgroundColor: 'rgb(240,97,0)',
            data: [1500000, 1400000, 2540000, 3000000, 2000000, 2470000, 2500000, 2970000, 2980000, 3650000, 3500000, 2300000,],

          },
          {
            label: '2019',
            fill: false,
            borderColor: 'rgb(24,0,255)',
            backgroundColor: 'rgb(24,0,255)',
            data: [1900000, 1800000, 2570000, 700000, 1700000, 2000000, 1900000, 2100000, 2200000,],

          },
        ],
      },

      // Configuration options go here
      options: {
        tooltips: {
          mode: 'x',
        },
        legend: {
          display: true,
          position: 'bottom',
          fontColor: '#fff',
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: '#fff' // this here
              },
              ticks: {
                beginAtZero: true,
                fontColor: '#fff',
              },
              legend: {
                display: true
              },
            }],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: '#fff'
              },
              ticks: {
                fontColor: '#fff',
                beginAtZero: true,
              }
            }]
        }
      }
    });


    const stretch = document.getElementById('stretch');
    new Chart1(stretch, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset

      data: {

        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [

          {
            label: 'DAMAGED STOCK',
            fill: false,
            borderColor: 'rgb(240,97,0)',
            backgroundColor: 'rgb(240,97,0)',
            data: [600000, 600000, 600000, 600000, 600000, 600000, 600000, 600000, 600000, 800000, 700000, 650000,],

          },
          {
            label: 'REPACKED',
            fill: false,
            borderColor: 'rgb(24,0,255)',
            backgroundColor: 'rgb(24,0,255)',
            data: [600000, 0, 570000, 570000, 600000, 1000000, 1200000, 600000, 1200000,],

          },
        ],
      },

      // Configuration options go here
      options: {
        legend: {
          display: true,
          position: 'bottom',
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

    const consum = document.getElementById('consum');
    new Chart1(consum, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset

      data: {

        // tslint:disable-next-line:max-line-length
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [

          {
            label: 'Target 2019',
            fill: false,
            borderColor: 'rgb(240,97,0)',
            backgroundColor: 'rgb(240,97,0)',
            data: [150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000,],

          },
          {
            label: '2019',
            fill: false,
            borderColor: 'rgb(24,0,255)',
            backgroundColor: 'rgb(24,0,255)',
            data: [110000, 120000, 65000, 130000, 120000, 120000, 80000, 72000, 78000,],

          },
        ],
      },

      // Configuration options go here
      options: {
        tooltips: {
          mode: 'x',
        },
        legend: {
          display: true,
          position: 'bottom',
          fontColor: '#fff',
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: '#fff' // this here
              },
              ticks: {
                beginAtZero: true,
                fontColor: '#fff',
              },
              legend: {
                display: true
              },
            }],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: '#fff'
              },
              ticks: {
                fontColor: '#fff',
                beginAtZero: true,
              }
            }]
        }
      }
    });

    const forklift = document.getElementById('forklift');
    new Chart1(forklift, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset

      data: {

        // tslint:disable-next-line:max-line-length
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [

          {
            label: 'Target 2019',
            fill: false,
            borderColor: 'rgb(240,97,0)',
            backgroundColor: 'rgb(240,97,0)',
            data: [350000, 550000, 550000, 550000, 550000, 550000, 550000, 620000, 700000, 790000, 790000, 790000,],

          },
          {
            label: '2019',
            fill: false,
            borderColor: 'rgb(24,0,255)',
            backgroundColor: 'rgb(24,0,255)',
            data: [400000, 400000, 550000, 580000, 550000, 650000, 700000, 720000, 790000,],

          },
        ],
      },

      // Configuration options go here
      options: {
        tooltips: {
          mode: 'x',
        },
        legend: {
          display: true,
          position: 'bottom',
          fontColor: '#fff',
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: '#fff' // this here
              },
              ticks: {
                beginAtZero: true,
                fontColor: '#fff',
              },
              legend: {
                display: true
              },
            }],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: '#fff'
              },
              ticks: {
                fontColor: '#fff',
                beginAtZero: true,
              }
            }]
        }
      }
    });
  }
}
