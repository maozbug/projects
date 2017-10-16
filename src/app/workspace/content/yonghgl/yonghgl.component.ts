import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../../../load-data.service'
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yonghgl',
  templateUrl: './yonghgl.component.html',
  styleUrls: ['./yonghgl.component.css']
})
export class YonghglComponent implements OnInit {
	private datas:any;
	private users:any;
	private id:number;

	constructor(private router:Router,private data: LoadDataService){
		this.datas=data
	}

  ngOnInit() {
  	this.datas.getItems('http://192.168.1.6/data/getNormalUser.php').subscribe(
				res=>{
					this.users=res
					console.log(this.users)
				},error=>{
					console.log(error);
				}	
		);
  }
	del(id){
  	this.datas.getItems('http://192.168.1.6/data/delNormalUser.php?id='+id).subscribe(
				res=>{
					console.log(res);
					alert('删除成功')
				},error=>{
					console.log(error);
				}	
		);
  	this.datas.getItems('http://192.168.1.6/data/getNormalUser.php').subscribe(
				res=>{
					this.users=res
					console.log(this.users)
				},error=>{
					console.log(error);
				}	
		);		
	}
	edit(id){
		//alert(id)
		//workspace/content/yonghgl
//		this.router.navigateByUrl('workspace/content/yonghgl/uses/'+id);
	}
}
