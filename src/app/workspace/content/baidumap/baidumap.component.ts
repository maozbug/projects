import {Component, OnInit} from '@angular/core';
import {OfflineOptions, ControlAnchor, NavigationControlType} from 'angular2-baidu-map';

@Component({
  selector: 'app-baidumap',
  templateUrl: './baidumap.component.html',
  styleUrls: ['./baidumap.component.css']
})
export class BaidumapComponent implements OnInit {
		constructor(){
 			
 	}
    opts: any;
    offlineOpts: OfflineOptions;

    ngOnInit() {
        this.opts = {
            center: {
                longitude: 121.506191,
                latitude: 31.245554
            },
            zoom: 17,
            markers: [{
                longitude: 121.506191,
                latitude: 31.245554,
                title: 'Where',
                content: 'Put description here',
                autoDisplayInfoWindow: true,
                enableDragging: true
            }],
            geolocationCtrl: {
                anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT
            },
            scaleCtrl: {
                anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
            },
            overviewCtrl: {
                isOpen: true
            },
            navCtrl: {
                type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
            }
        };
   
        this.offlineOpts = {
            retryInterval: 5000,
            txt: 'NO-NETWORK'
        };
    }
   
    loadMap(e: any) {
        console.log(e);//e here is the instance of BMap.Map 
    }
   
    clickMarker(marker: any){
        console.log('The clicked marker is', marker.getPosition());
    }
 
}