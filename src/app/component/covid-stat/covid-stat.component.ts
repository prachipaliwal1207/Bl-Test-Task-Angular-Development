import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';

@Component({
  selector: 'app-covid-stat',
  templateUrl: './covid-stat.component.html',
  styleUrl: './covid-stat.component.css'
})
export class CovidStatComponent implements OnInit{
  data:any = [];

   ngOnInit(): void {
        this.apiService.covid19().subscribe((res:any)=>{
          this.data = res.data.summary;
        })
   }

   constructor(private apiService:ApiServiceService){}
  }
