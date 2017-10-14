import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../../../load-data.service'
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quanxgl',
  templateUrl: './quanxgl.component.html',
  styleUrls: ['./quanxgl.component.css']
})
export class QuanxglComponent implements OnInit {

  private datas:any;
	private users:any;
	private id:number;

	constructor(private router:Router,private data: LoadDataService){
		this.datas=data
	}

  ngOnInit() {
  	this.datas.getItems('http://192.168.1.3/data/getNormalUser.php').subscribe(
				res=>{
					this.users=res
					console.log(this.users)
				},error=>{
					console.log(error);
				}	
		);
  }

}
