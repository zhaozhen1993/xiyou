window.onload=function(){
//	var oc=document.getElementById('bg1')
//	var ogc=oc.getContext('2d');
//	
//	
//	ogc.beginPath();
//	ogc.arc(37.5,37.5,37.5-4,0,Math.PI*2,true);
//	ogc.lineWidth=8;
//	ogc.strokeStyle="#0c152b"
//	ogc.stroke();
//	
//	ogc.beginPath();
//	ogc.arc(37.5,37.5,37.5-4,0,21*2/100*Math.PI,false);
//	ogc.lineWidth=8;
//	ogc.strokeStyle="#29a0dc"
//	ogc.stroke();
var hasload=0;
var i=0;
draw("bg1",21,"#29a0dc")
draw("bg2",33,"#c0863a")
draw("bg3",25,"#18b078")

function draw(a,c,d){
	var oc=document.getElementById(a);
	var ogc=oc.getContext('2d');
//	var n=oc.getElementsByClassName(b);
	
//	n.innerHTML=hasload+"%";
	var load=hasload*2/100*Math.PI;
	var x=37.5;
	var y=37.5;
	var r=37.5;
	ogc.clearRect(0,0,75,75);
	
	ogc.beginPath();
	ogc.arc(x,y,r-4,0,Math.PI*2,true);
	ogc.lineWidth=8;
	ogc.strokeStyle="#0c152b";
	ogc.stroke();
	
	
	ogc.beginPath();
	ogc.arc(x,y,r-4,0,load,false);
	ogc.lineWidth=8;
	ogc.strokeStyle=d;
	ogc.stroke();
	bg(c);
  function bg(c){
	
	
	drawtimer=setInterval(function(){
		if(i<+c){
			draw(a,c,d)
			i++;
			hasload+=1;
			
		}else{
			clearInterval(drawtimer);
		}
	},400)
   }
}








                var lineParameter1 = {
					id: 'containerLine1',
					data: [20, 6.9, 9.5, 14.5, 18.4, 21.5, 8, 17, 23.3, 18.3, 23.9, 9.6,5,9,12,16,26,14,23,32,12,21,13,21],
					categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',"13",'14','15','16','17','18','19','20','21','22','23','24'],
					name:'土壤温度'
				}
				var lineParameter2 = {
					id: 'containerLine2',
					data: [10, 6.9, 9.5, 14.5, 18.4, 21.5, 18, 7, 23.3, 18.3, 13.9, 9.6,15,9.8,12,16,26,14,23,32,12,21,13,21],
					categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',"13",'14','15','16','17','18','19','20','21','22','23','24'],
					name:'土壤湿度'
				}
				var lineParameter3 = {
					id: 'containerLine3',
					data: [15, 6.9, 9.5, 14.5, 18.4, 21.5, 8, 17, 13.3, 18.3, 13.9, 9.6,5,9,12,16,16,14,23,32,12,21,13,21],
					categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',"13",'14','15','16','17','18','19','20','21','22','23','24'],
					name:'土壤PH值'
				}
				var lineParameter4 = {
					id: 'containerLine4',
					data: [8, 6.9, 9.5, 14.5, 18.4, 11.5, 8, 7, 23.3, 18.3, 13.9, 9.6,5,9,12,16,26,14,23,32,12,21,13,21],
					categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',"13",'14','15','16','17','18','19','20','21','22','23','24'],
					name:'病虫害'
				}
					//每天
					var lineParameter5 = {
					id: 'containerLine1',
					data: [12, 6.9, 9.5, 14.5, 18.4, 21.5, 8, 7, 23.3, 18.3, 13.9, 9.6,5,9,12,16,26,14,23,32,12,21,13,21,10,12,23,14,25,20],
					categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',"13",'14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
					name:'土壤温度'
				}
				var lineParameter6 = {
					id: 'containerLine2',
					data: [20, 6.9, 9.5, 14.5, 18.4, 21.5, 8, 7, 23.3, 18.3, 13.9, 9.6,5,9,12,16,26,14,23,32,12,21,13,21,10,12,23,14,25,20],
					categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',"13",'14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
					name:'土壤湿度'
				}
				var lineParameter7 = {
					id: 'containerLine3',
					data: [26, 6.9, 9.5, 14.5, 18.4, 21.5, 8, 7, 23.3, 18.3, 13.9, 9.6,5,9,12,16,26,14,23,32,12,21,13,21,10,12,23,14,25,20],
					categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',"13",'14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
					name:'土壤PH值'
				}
				var lineParameter8 = {
					id: 'containerLine4',
					data: [16, 6.9, 9.5, 14.5, 18.4, 21.5, 8, 7, 23.3, 18.3, 13.9, 9.6,5,9,12,16,26,14,23,32,12,21,13,21,10,12,23,14,25,20],
					categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',"13",'14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
					name:'病虫害'
				}
					//月
					var lineParamete5 = {
					id: 'containerLine1',
					data: [8, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
					categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
					name:'土壤温度'
				}
				var lineParamete6 = {
					id: 'containerLine2',
					data: [18, 6.9, 9.5, 14.5, 18.4, 12, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
					categories: ['二月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
					name:'土壤湿度'
				}
				var lineParamete7 = {
					id: 'containerLine3',
					data: [25, 13, 9.5, 14.5, 18.4, 21, 9, 26.5, 23.3, 18.3, 13.9, 9.6],
					categories: ['三月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
					name:'土壤PH值'
				}
				var lineParamete8 = {
					id: 'containerLine4',
					data: [32, 6.9, 9.5, 14.5, 18.4, 21.5, 8, 7, 23.3, 18.3, 13.9, 9.6],
					categories: ['四月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
					name:'病虫害'
				}


   function line(lineParameter) {
					Highcharts.chart(lineParameter.id, {
						chart: {
							type: 'line',
							backgroundColor: '#111e41'
						},
						title: {
							text: ''
						},
						xAxis: {
							categories: lineParameter.categories
						},
						yAxis: {
							gridLineWidth: 0,
							title: {
								text: ''
							}
						},
						plotOptions: {
							line: {
								dataLabels: {
									// 开启数据标签
									enabled: true
								},
								// 关闭鼠标跟踪，对应的提示框、点击事件会失效
								enableMouseTracking: false
							}
						},
						series: [{
							name: lineParameter.name,
							marker: {
								symbol: 'url(img/table-dian.png)',
								width: 20,
								height: 20
							},
							data: lineParameter.data
						}]
					});
				}


 
                line(lineParameter1)
				line(lineParameter2)
				line(lineParameter3)
				line(lineParameter4)






}