import {Component, OnInit} from '@angular/core';
// @ts-ignore
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const options = {
      chart: {
        height: 350,
        type: 'bar',
        stacked: true,
        stackType: '100%'
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },

      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
      }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
      }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
      }, {
        name: 'Reborn Kid',
        data: [25, 12, 19, 32, 25, 24, 10]
      }],
      title: {
        text: '100% Stacked Bar'
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      },

      tooltip: {
        y: {
          formatter(val) {
            return val + 'K';
          }
        }
      },
      fill: {
        opacity: 1

      },

      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    };

    const chart = new ApexCharts(
      document.querySelector('#test'),
      options
    );

    chart.render();
  }

}
