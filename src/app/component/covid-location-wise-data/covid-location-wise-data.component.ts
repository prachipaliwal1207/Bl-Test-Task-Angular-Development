import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';

@Component({
  selector: 'app-covid-location-wise-data',
  templateUrl: './covid-location-wise-data.component.html',
  styleUrls: ['./covid-location-wise-data.component.css'] // Corrected this line
})
export class CovidLocationWiseDataComponent implements OnInit {
  data: any = [];
  filteredData: any = [];
  @Input() searchQuery: string = '';

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.covid19().subscribe((res: any) => {
      this.data = res.data.regional;
      this.filteredData = this.data;
    });
    this.filterData();
  }

  ngOnChanges() {
    this.filterData();
  }


  filterData() {
    if (this.searchQuery) {
      this.filteredData = this.data.filter((item: any) =>
        item.loc.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredData = this.data;
    }
  }
}
