import { Component, OnInit } from '@angular/core';
import {donghua} from '../donghua';
@Component({
  selector: 'app-zhuzjg',
  templateUrl: './zhuzjg.component.html',
  styleUrls: ['./zhuzjg.component.css'],
  animations:[donghua]
})
export class ZhuzjgComponent implements OnInit {
	private names:string;
	private codes:string; 
	private selectedNode:any;
	private selectedName:any;
	//写服务获取数据
	private trees = [
        {
            "label": "研发部",
            "data": "001",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": [{
                    "label": "移动事业部",
                    "data": "1-1",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        {"label": "江苏", "icon": "fa-file-word-o", "data": "1-1-1"}, 
                        {"label": "浙江", "icon": "fa-file-word-o", "data": "1-1-2"}
                    ]
                },
                {
                    "label": "联通事业部",
                    "data": "1-2",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        {"label": "江苏", "icon": "fa-file-word-o", "data": "1-2-1"},
                        {"label": "浙江", "icon": "fa-file-word-o", "data": "1-2-2"}
                    ]
                }]
        },
        {
            "label": "市场部",
            "data": "002",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder"
        },
        {
            "label": "行政部",
            "data": "003",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder"
        },
        {
            "label": "财务部",
            "data": "004",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder"
        }
	]
  constructor() { }

  ngOnInit() {
  }
	//选中的树的节点数据传递到右侧表单
  nodeSelect(e){
  	console.log(e);
  	//将数据赋值给表单元素
  	this.names = e.node.label;
  	this.codes = e.node.data;
  	this.selectedName=e;
  }
  edit(){
  	for(var item of this.trees){
			this.selectedNode=item;
			if(this.selectedName.node.label==item.label){
				item.label=this.names
			}else if(this.selectedNode.children!=undefined){
				for(var item1 of this.selectedNode.children){
					this.selectedNode=item1;
					if(this.selectedNode.label==this.selectedName.node.label){
						this.selectedNode.label=this.names
					}else if(this.selectedNode.children!=undefined){
						for(var item2 of this.selectedNode.children){
							if(this.selectedName.node.label==item2.label){
								item2.label=this.names;
							}
						}
					}
				}
			}
		}
  }
//var removeByValue=function (arr, val) {
//	  for(var i=0; i<arr.length; i++) {
//	    if(arr[i] == val) {
//	      arr.splice(i, 1);
//	      break;
//	    }
//	  }
//	}
  del(){
		var removeByValue=function (arr, val) {
		  for(var i=0; i<arr.length; i++) {
		    if(arr[i] == val) {
		      arr.splice(i, 1);
		      break;
		    }
		  }
		}
		for(var item of this.trees){
			this.selectedNode=item
			if(this.selectedName.node.label==this.selectedNode.label){
				removeByValue(this.trees, this.selectedNode)
			}else if(this.selectedNode.children!=undefined){
				for(var item1 of this.selectedNode.children){
					var children1=this.selectedNode.children
					console.log(children1)
					this.selectedNode=item1
					if(this.selectedName.node.label==this.selectedNode.label){
						console.log(this.selectedNode);
						
					}
				}
			}
		}
  }
  add(){
  	var newNode:any={
                label:this.names,
                data:this.codes,
                expandedIcon: "fa-folder-open",
                collapsedIcon: "fa-folder"
           };
    var newNode1:any={
                label:this.names,
                data:this.codes,
                icon: "fa-file-word-o",
           };
    for(var additem of this.trees){
			this.selectedNode=additem;
			if(!this.selectedNode.children){
				this.selectedNode.children=[];
			}
			if(this.selectedName.node.label==this.selectedNode.label){
				this.selectedNode.children.push(newNode);
			}
			for(var additem1 of this.selectedNode.children){
					this.selectedNode=additem1;
					if(!this.selectedNode.children){
						this.selectedNode.children=[];
					}
					if(this.selectedName.node.label==this.selectedNode.label){
						this.selectedNode.children.push(newNode1);
					}
			}
		}
  }
}
