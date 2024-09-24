import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  @Output() search = new EventEmitter<any>;
  ngOnInit(): void {
      
  }

  onSearch(event:any){
    const input = event.target.value;
    this.search.emit(input);
  }
}
