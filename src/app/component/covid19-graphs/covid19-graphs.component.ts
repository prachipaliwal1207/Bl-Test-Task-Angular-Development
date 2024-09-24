import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
declare const CanvasJS: any;

@Component({
  selector: 'app-covid19-graphs',
  templateUrl: './covid19-graphs.component.html',
  styleUrls: ['./covid19-graphs.component.css']
})
export class Covid19GraphsComponent implements OnInit {
  chartOptions1: any;
  chartOptions2: any;
  chartOptions3: any;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.loadCovidData();
    this.loadTestingData();
  }

  private loadCovidData() {
    this.apiService.covid19().subscribe(
      (res: any) => {
        if (res.success && res.data?.summary && res.data["unofficial-summary"]) {
          const unofficialSummary = res.data["unofficial-summary"][0];
          console.log('Unofficial Summary:', unofficialSummary);

          // Pie chart
          this.chartOptions1 = this.getPieChartOptions(res.data.summary);

          // Bar chart
          this.chartOptions2 = this.getBarChartOptions(unofficialSummary);

          this.renderChart("chartContainer1", this.chartOptions1);
          this.renderChart("chartContainer2", this.chartOptions2);
        }
      },
      (error) => {
        console.error('Error fetching COVID-19 data:', error);
      }
    );
  }

  loadTestingData() {
    this.apiService.covid19_Stat_Testing().subscribe(
      (res: any) => {
        if (res.success && res.data) {
          this.chartOptions3 = this.getAreaChartOptions(res.data);
          this.renderChart("chartContainer3", this.chartOptions3);
        }
      },
      (error) => {
        console.error('Error fetching COVID-19 testing data:', error);
      }
    );
  }

  getPieChartOptions(summary: any) {
    return {
      animationEnabled: true,
      theme: "dark2",
      exportEnabled: true,
      title: { text: "COVID-19 Summary Data" },
      subtitles: [{ text: "Total Cases Overview" }],
      data: [{
        type: "pie",
        indexLabel: "{name}: {y}",
        dataPoints: [
          { name: "Confirmed Cases (Indian)", y: summary.confirmedCasesIndian },
          { name: "Confirmed Cases (Foreign)", y: summary.confirmedCasesForeign },
          { name: "Discharged", y: summary.discharged },
          { name: "Deaths", y: summary.deaths },
          { name: "Confirmed But Location Unidentified", y: summary.confirmedButLocationUnidentified }
        ]
      }]
    };
  }

  getBarChartOptions(unofficialSummary: any) {
    return {
      animationEnabled: true,
      theme: "dark2",
      exportEnabled: true,
      title: { text: "COVID-19 Case Summary" },
      subtitles: [{ text: "Cases In India" }],
      data: [{
        type: "bar",
        indexLabel: "{name}: {y}",
        dataPoints: [
          { name: "Active", y: unofficialSummary.active },
          { name: "Deaths", y: unofficialSummary.deaths },
          { name: "Recovered", y: unofficialSummary.recovered },
          { name: "Total", y: unofficialSummary.total },
        ]
      }]
    };
  }

  private getAreaChartOptions(data: any) {
    data = data.slice(0, 23);
    const dataPoints = data.map((item: { day: string; totalSamplesTested: number; totalPositiveCases: number }) => ({
      label: item.day, 
      totalSamplesTested: item.totalSamplesTested,
      totalPositiveCases: item.totalPositiveCases
    })).filter((point: { totalSamplesTested: null; totalPositiveCases: null; }) => point.totalSamplesTested !== null && point.totalPositiveCases !== null);
  
    return {
      animationEnabled: true,
      title: { text: "COVID-19 Testing Overview" },
      axisX: { title: "Date", interval: 1 },
      axisY: { title: "Count", includeZero: true },
      data: [
        {
          name: 'Total Samples Tested',
          type: "area",
          dataPoints: dataPoints.map((point: { label: any; totalSamplesTested: any; }) => ({
            label: point.label,
            y: point.totalSamplesTested
          }))
        },
        {
          name: 'Total Positive Cases',
          type: "area",
          dataPoints: dataPoints.map((point: { label: any; totalPositiveCases: any; }) => ({
            label: point.label,
            y: point.totalPositiveCases
          }))
        }
      ]
    };
  }  

  private renderChart(containerId: string, options: any) {
    const chart = new CanvasJS.Chart(containerId, options);
    chart.render();
  }
}
