import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { SearchService } from '../../services/search-service/search.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  searchText: string = '';
  
  constructor(private searchService: SearchService) { }
  
  
  ngOnInit():void{
    
  }
  

  searchChanged(searchText: any) {
    
    console.log(searchText)

    this.searchService.search(this.searchText).subscribe(res => {

      let searchResult = res.movies
       console.log(searchResult)
     });
 
  }
  
  
}


