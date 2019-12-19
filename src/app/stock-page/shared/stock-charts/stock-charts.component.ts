import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-stock-charts',
  templateUrl: './stock-charts.component.html',
  styleUrls: ['./stock-charts.component.scss']
})
export class StockChartsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    const aging = document.getElementById('aging');
    // tslint:disable-next-line: no-unused-expression
    new Chart(aging, {
      type: 'bar',
      data: {
        labels: ['AC', 'AV', 'HHP', 'MWO', 'REF', 'TV/Mon', 'VC', 'WM'],
        datasets: [
          {
            label: 'Aging>6',
            fill: false,
            borderColor: 'rgb(35,165,255)',
            backgroundColor: 'rgb(35,165,255)',
            data: [101, 0, 0, 1, 2, 41, 0, 27],

          },
          {
            label: 'Aging>9',
            fill: false,
            borderColor: 'rgb(240,208,0)',
            backgroundColor: 'rgb(240,208,0)',
            data: [34, 1, 0, 0, 0, 17, 0, 5],
          },
          {
            label: 'Aging>12',
            fill: false,
            borderColor: 'rgb(255,109,0)',
            backgroundColor: 'rgb(255,109,0)',
            data: [74, 0, 1, 0, 8, 0, 0],

          }]
      },
      options: {
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              color: '#fff' // this here
            },
            ticks: {
              beginAtZero: true,
              fontColor: '#fff',
            },
            legend: {
              display: true,
              fontColor: '#fff',
            },
          }],
          yAxes: [{
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
          }]
        }
      }
    });

    const ttl = document.getElementById('ttl_st');
    // tslint:disable-next-line:no-unused-expression
    new Chart(ttl, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset

      data: {

        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [

          {
            label: 'DAMAGED STOCK',
            fill: false,
            borderColor: 'rgb(240,97,0)',
            backgroundColor: 'rgb(240,97,0)',
            data: [0.00, 0.05, 0.20, 0.03, 0.21, 0.15, 0.05, 0.08, 0.04, 0.27, 0.41, 0.43, 0.13, 0.08, 0.10, 0.16, 0.34],

          },
          {
            label: 'REPACKED',
            fill: false,
            borderColor: 'rgb(24,0,255)',
            backgroundColor: 'rgb(24,0,255)',
            data: [0.17, 0.19, 0.10, 0.02, 0.16, 0.09, 0.05, 0.15, 0.11, 0.09, 0.03, 0.13, 0.10, 0.04, 0.10, 0.04, 0.10],

          },
          {
            label: 'Target',
            fill: false,
            borderColor: 'rgb(6,255,0)',
            backgroundColor: 'rgb(6,255,0)',
            data: [0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13],

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

    const last = document.getElementById('last');
    // tslint:disable-next-line:no-unused-expression
    new Chart(last, {
      // The type of chart we want to create
      type: 'pie',
      // The data for our dataset

      data: {
        labels: ['>6 months', '>9 months', '>12 months', 'Normal'],
        datasets: [{
          label: 'Population (millions)',
          backgroundColor: ['#3e95cd', '#00ff11', '#fff50a', '#46bbe8', '#c45850'],
          borderColor: ['#000', '#000', '#000', '#000', ],
          data: [0.34, 0.12, 0.16, 99.38]
        }]
      },

      // Configuration options go here
      options: {
        legend: {
          display: true,
          position: 'bottom',
          fontColor: '#fff'
        },
      }
    });

    const cur = document.getElementById('cur');
    // tslint:disable-next-line:no-unused-expression
    new Chart(cur, {
      // The type of chart we want to create
      type: 'pie',
      // The data for our dataset

      data: {
        labels: ['>6 months', '>9 months', '>12 months', 'Normal'],
        datasets: [{
          label: 'Population (millions)',
          backgroundColor: ['#3e95cd', '#00ff11', '#fff50a', '#46bbe8', '#c45850'],
          borderColor: ['#000', '#000', '#000', '#000', ],
          data: [0.31, 0.14, 0.43, 99.13]
        }]
      },

      // Configuration options go here
      options: {
        legend: {
          display: 'true',
          position: 'bottom',
          fontColor: '#fff'
        },
      }
    });


  }
}

