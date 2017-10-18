import { Injectable } from '@angular/core';
//引入守卫的插件
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class GuardService {
	private username:string;
	private password:string;
  constructor(private router:Router) { }
  //定义守卫的内容
  canActivate():boolean{
//	console.log('路由守卫到这里');
  	this.username=sessionStorage.getItem('username');
		this.password=sessionStorage.getItem('password');
		if(this.username&&this.password){
			return true;
		}else{
			alert('请先登陆');
			this.router.navigateByUrl('login');
			return false;
		}
  }

}
