import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class LoadDataService {

    constructor(private http:Http) { }
  	public getItems(dataURL:string){
        return this.http.get(dataURL).map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error || 'Server error'));
   	}
	//获取后台数据的添加用户信息  post
	public postUserData(dataUrl:string,myusername:string,mypassword:string,myemail:string,myprofile:string){
		let data = new URLSearchParams();//post提交的参数对象
		data.append('username',myusername);
		data.append('password',mypassword);
		data.append('email',myemail);
		data.append('profile',myprofile);
		return this.http.post(dataUrl,data).
		map(res=>res.json()).
		catch(error=>Observable.throw(error||'server error!'));
	}
	//修改后台的用户信息
	public postUseData(dataUrl:string,userid:string,myusername:string,mypassword:string,myemail:string,myprofile:string){
		let data = new URLSearchParams();//post提交的参数对象
		data.append('id',userid);
		data.append('username',myusername);
		data.append('password',mypassword);
		data.append('email',myemail);
		data.append('profile',myprofile);
		return this.http.post(dataUrl,data).
		map(res=>res.json()).
		catch(error=>Observable.throw(error||'server error!'));
	}
}
