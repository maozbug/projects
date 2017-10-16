import { Component, OnInit } from '@angular/core';
import { LoaduseService } from './loaduse.service'
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
	viewProviders:[LoaduseService]
})
export class LoginComponent implements OnInit {
	private users:any;
	private username:string='';
	private password:string='';
	constructor(private use: LoaduseService,private router:Router) {
		this.users=use
	}

  ngOnInit() {
		
	}
  submit(){
		//以post方式获取登录是否成功的信息
  	this.users.postUserData('http://192.168.1.6/data/getUser.php',this.username,this.password).subscribe(
  		res=>{
  			console.log(res);
  			if(res == null){
  				alert('用户名或密码错误,请重新输入!');
  			}else{
  				if(res.username == this.username &&res.password == this.password){
						alert('登录成功');
						//将登录信息保存在sessionStorage中
						sessionStorage.setItem('username',res.username);
						sessionStorage.setItem('password',res.password);
						//将路由跳转到  workspace页
						this.router.navigateByUrl('workspace');
					}
  				
  			}
  		}
  	);
  }

}
