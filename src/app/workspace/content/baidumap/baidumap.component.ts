import {Component, OnInit} from '@angular/core';
import {donghua} from '../donghua';
declare var BMap:any;
@Component({
  selector: 'app-baidumap',
  templateUrl: './baidumap.component.html',
  styleUrls: ['./baidumap.component.css'],
  animations:[donghua]
})
export class BaidumapComponent implements OnInit {
	constructor(){
 			
 	}
	ngOnInit(){
		var map = new BMap.Map("allmap");
		var baidumaps=function(){
			// 百度地图API功能
			var point = new BMap.Point(113.874951, 22.571198);
			map.centerAndZoom(point, 15);
			map.enableScrollWheelZoom();
			map.enableInertialDragging();
			map.enableContinuousZoom(); 
			map.addControl(new BMap.NavigationControl());
  
			map.addControl(new BMap.MapTypeControl());
			map.addControl(new BMap.ScaleControl()); 
			map.addControl(new BMap.OverviewMapControl());

			var stCtrl = new BMap.PanoramaControl(); //构造全景控件
			stCtrl.setOffset(new BMap.Size(20, 50));
			map.addControl(stCtrl);
			
			var size = new BMap.Size(60, 10);
			map.addControl(new BMap.CityListControl({
//			    anchor: BMAP_ANCHOR_TOP_LEFT,
			    offset: size,
			}));
			
			//创建小狐狸
			var pt = new BMap.Point(113.874951, 22.571198);
			map.centerAndZoom(point, 15);
			var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(300,157));
			var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
			map.addOverlay(marker2);
			

		  // 添加定位控件
		  var geolocationControl = new BMap.GeolocationControl();
		  geolocationControl.addEventListener("locationSuccess", function(e){
		    // 定位成功事件
		    var address = '';
		    address += e.addressComponent.province;
		    address += e.addressComponent.city;
		    address += e.addressComponent.district;
		    address += e.addressComponent.street;
		    address += e.addressComponent.streetNumber;
		    alert("当前定位地址为：" + address);
		  });
		  geolocationControl.addEventListener("locationError",function(e){
		    // 定位失败事件
		    alert(e.message);
		  });
		  map.addControl(geolocationControl);
		}
		baidumaps();
		
	}

}