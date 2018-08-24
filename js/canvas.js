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

function draw(a,b,c,d){
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

}