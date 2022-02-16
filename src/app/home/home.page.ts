import { Component } from '@angular/core';
import { ApexAxisChartSeries,ApexChart, ApexDataLabels, ApexGrid, ApexMarkers, ApexStroke, ApexTooltip } from 'ng-apexcharts';

export type ChartOptions = {
  chart: ApexChart;
  series: ApexAxisChartSeries | any [];
  stroke: ApexStroke;
  markers: ApexMarkers;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  colors: any [];
  Label: ApexDataLabels;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public barOptions:Partial<ChartOptions>;

  constructor() {
    this.barChart();
  }

  spackChart() {

  }

  slidesOptions = {
    slidesPerView:2.5
  }

  barChart () {
    this.barOptions = {
      chart: {
        type: 'bar',
        height: 180,
        width: '100%',
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: 'Overall Perfomance',
          data: [42, 50, 49, 32, 45, 27]
        },
      ],
    }
  }
  
}

