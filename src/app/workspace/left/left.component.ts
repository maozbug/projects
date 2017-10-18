import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { LoadDataService } from '../../load-data.service'
@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
	private datas:any;
	private navs:any;
  constructor(private router:Router,private data: LoadDataService) { 
  	this.datas=data
  }

  ngOnInit() {
		this.datas.getItems('http://127.0.0.1:4200/jsondata/left-nav-mock.json').subscribe(
				res=>{
					this.navs=res
//					console.log(res)
				},error=>{
					console.log(error);
				}	
		);
  }

}
