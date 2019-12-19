import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import chart from 'chart.js';

@Component({
  selector: 'app-damret',
  templateUrl: './damret.component.html',
  styleUrls: ['./damret.component.scss']
})
export class DamretComponent implements OnInit {
  // @ts-ignore
  @ViewChild('line') line: ElementRef;

  constructor() {
  }

  ngOnInit() {
    const rvsd = document.getElementById('rvsd');
    new chart(rvsd, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset

      data: {

        // tslint:disable-next-line:max-line-length
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [

          {
            label: 'DAMAGED STOCK',
            fill: false,
            borderColor: 'rgb(240,97,0)',
            backgroundColor: 'rgb(240,97,0)',
            data: [3780, 3245, 3406, 3842, 3436, 3562, 3294, 2540, 2100, 2438, 2325, 1926, 1842, 1780, 2300, 2776, 3338],

          },
          {
            label: 'REPACKED',
            fill: false,
            borderColor: 'rgb(24,0,255)',
            backgroundColor: 'rgb(24,0,255)',
            data: [2964, 2684, 2588, 1491, 1888, 1747, 2363, 2208, 2054, 800, 1986, 1869, 2200, 1719, 1018, 2173, 3572],

          },
          {
            label: 'Stock target',
            fill: false,
            borderColor: 'rgb(6,255,0)',
            backgroundColor: 'rgb(6,255,0)',
            data: [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500],

          }
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


    const ret_rate = document.getElementById('ret_rate');
    new chart(ret_rate, {
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
  }
}
