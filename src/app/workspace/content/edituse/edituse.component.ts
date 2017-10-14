import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../../../load-data.service'
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-edituse',
  templateUrl: './edituse.component.html',
  styleUrls: ['./edituse.component.css']
})
export class EdituseComponent implements OnInit {
	private showtype:boolean;
	private datas:any;
	private id:string;
	private username:string;
	private password:string;
	private repassword:string;
	private email:string;
	private profile:string;
	private datestime:string;

	constructor(private router:Router,private route: ActivatedRoute, private location: Location,private data: LoadDataService){
		this.datas=data
	}

  ngOnInit() {
  	let ids=this.route.params['value']['id']
		if(ids=="add"){
			this.showtype=true;
		}else{
			this.showtype=false;
			this.datas.getItems('http://192.168.1.3/data/getNormalUserSingle.php?id='+ids).subscribe(
				res=>{
					console.log(res);
					this.id=res.id
					this.username=res.username;
					this.email=res.email;
					this.password=res.password;
					this.profile=res.profile;
				},error=>{
					console.log(error);
				}	
			);
		}
  }
	ctrlsAdd(){
		this.datas.postUserData('http://192.168.1.3/data/addNormalUser.php',this.username,this.password,this.email,this.profile).subscribe(
			res=>{
				alert('添加成功')
				this.router.navigateByUrl('workspace/content/yonghgl');
			}
		);
	}
	ctrlsEdit(){
		this.datas.postUseData('http://192.168.1.3/data/updateNormalUser.php',this.id,this.username,this.password,this.email,this.profile).subscribe(
			res=>{
				console.log(res)
				alert('修改成功')
				this.router.navigateByUrl('workspace/content/yonghgl');
			}
		);
	}
}
