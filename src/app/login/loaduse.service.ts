import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class LoaduseService {

    constructor(private http:Http) { }
  	public getItems(dataURL:string){
        return this.http.get(dataURL).map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error || 'Server error'));
   	}
		//获取后台数据的登录成功信息  post
		public postUserData(dataUrl:string,myusername:string,mypassword:string){
			let data = new URLSearchParams();//post提交的参数对象
			data.append('username',myusername);
			data.append('password',mypassword);
			return this.http.post(dataUrl,data).
			map(res=>res.json()).
			catch(error=>Observable.throw(error||'server error!'));
		}
}
