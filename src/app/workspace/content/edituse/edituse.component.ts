import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../../../load-data.service'
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';
import {donghua} from '../donghua';

@Component({
  selector: 'app-edituse',
  templateUrl: './edituse.component.html',
  styleUrls: ['./edituse.component.css'],
  animations:[donghua]
})
export class EdituseComponent implements OnInit {
	private showtype:boolean;
	private datas:any;
	private id:string;
	private username:string;
	private password:string;
	private repassword:string;
	private pasmsg:string;
	private email:string;
	private profile:string;
	private datestime:string;
	private dis:string="yes";

	constructor(private router:Router,private route: ActivatedRoute, private location: Location,private data: LoadDataService){
		this.datas=data
	}

  ngOnInit() {
  	console.log(this.dis)
  	let ids=this.route.params['value']['id']
		if(ids=="add"){
			this.showtype=true;
		}else{
			this.showtype=false;
			this.datas.getItems('http://192.168.1.7/data/getNormalUserSingle.php?id='+ids).subscribe(
				res=>{
//					console.log(res);
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
		this.datas.postUserData('http://192.168.1.7/data/addNormalUser.php',this.username,this.password,this.email,this.profile).subscribe(
			res=>{
				if(res.result>0){
					alert('添加成功')
					this.router.navigateByUrl('workspace/content/yonghgl');
				}
			}
		);
	}
	ctrlsEdit(){
		this.datas.postUseData('http://192.168.1.7/data/updateNormalUser.php',this.id,this.username,this.password,this.email,this.profile).subscribe(
			res=>{
				console.log(res)
				if(res.result==1){
					alert('修改成功')
					this.router.navigateByUrl('workspace/content/yonghgl');
				}
			}
		);
	}
	repas(){
		console.log(this.password)
		console.log(this.repassword)
		if(this.password!=this.repassword){
			this.pasmsg="两次密码输入不一致"
			this.dis="yes"
		}else{
			this.pasmsg=""
			this.dis="no"
		}
	}
}
