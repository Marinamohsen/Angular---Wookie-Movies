import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { SearchService } from '../../services/search-service/search.service'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  searchText: string = '';
  
  constructor(private searchService: SearchService, private route: ActivatedRoute,
    private router: Router) { }
    
    
    ngOnInit(): void {
      
    }
    
    
    searchChanged(searchText: any) {      
      this.router.navigate(['/search/' + searchText]);
    }
    
  }
  