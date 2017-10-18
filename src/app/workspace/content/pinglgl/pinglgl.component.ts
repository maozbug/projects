import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../../../load-data.service'
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import {donghua} from '../donghua';
@Component({
  selector: 'app-pinglgl',
  templateUrl: './pinglgl.component.html',
  styleUrls: ['./pinglgl.component.css'],
  animations:[donghua]
})
export class PinglglComponent implements OnInit {
	private datas:any;
	private users:any;
	private id:number;
  constructor(private router:Router,private data: LoadDataService) {
  	this.datas=data
  }
  ngOnInit() {
  	this.datas.getItems('http://127.0.0.1:4200/jsondata/comment-mock.json').subscribe(
				res=>{
					this.users=res.items
//					console.log(this.users)
				},error=>{
					console.log(error);
				}	
		);
  }

}
