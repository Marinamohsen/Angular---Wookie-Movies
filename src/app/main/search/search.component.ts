import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { SearchService } from 'src/app/services/search-service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

 keyword: string = '';
  searchResult: any = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.keyword = params['keyword'];

      this.searchService.search(this.keyword).subscribe(res => {
        this.searchResult = res?.movies
      })
 
    })
  }

}
