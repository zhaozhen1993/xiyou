$(function(){
	listMove();
	function listMove(){
		var $li=$('.diamonds ul').find('li');
	    var $list=$('.list');
	    $list.width($('.list-item').length*$('.list-item img').eq(0).width());
	if($list.length==0){
		return false;
	}
	$li.click(function(){
		$list.stop(true,true)
		$li.attr('class','');
		$(this).attr('class','diamonds_active');
		
		$list.animate({left:-$('.list-item img').eq(0).width()*$(this).index()},1000)
	})
	var now=0
	setInterval(function(){
		
		now++;
		
		if(now>=$('.list-item').length){
			now=0;
			$list.position().left=0;
		}
			
			$li.attr('class','');
		    $li.eq(now).attr('class','diamonds_active');
		    $list.animate({left:-$('.list-item img').eq(0).width()*now},1000);
		
		
		console.log($('.list-item').length)
		
		
	},10000)
	}
	
	var btn=true;
	$('.button_ input').click(function(){
		$('.button_ input').removeAttr('disabled')
		$(this).attr('disabled','disabled')
//		$(this).css('color','#ffffff')
		$('#A4').css('opacity','0');
		console.log($('.bitton_ input'))
		$('.button_ input').attr('class','');
		$(this).attr('class','orange');
		if(btn){
			console.log(1)
			$('#A3').animate({opacity:0},1000);
			$('#A4').animate({opacity:1},2000)
			$('#A3').css('display','none');
//			$('.button_ input').eq(0).css('color','#000000')
			$('#A4').css('display','block')
		}else{
			console.log(2)
//			$('.button_ input').eq(1).css('color','#000000')
			$('#A4').animate({opacity:0},1000)
			$('#A3').animate({opacity:1},2000)
			$('#A4').css('display','none');
			$('#A3').css('display','block')
		}
		btn=!btn;
	})
//	
//	$('.recommend ul').find('li').mouseenter(function(){
//		
//		$(this).find('div').stop(true,true);
//		
//		$(this).find('div').animate({bottom:0},500);
//		
//		
//		
//	})
	$('.recommend ul').delegate('li','mouseenter',function(){
		$(this).find('div').stop(true,true);
		console.log($(this))
		$(this).find('div').animate({bottom:0},500);
	})
	
	$('.recommend ul').delegate('li','mouseleave',function(){
		$(this).find('div').stop(true,true);
		$(this).find('div').animate({bottom:-126},500)
	})
	
//	$('.recommend li').mouseleave(function(){
//		$(this).find('div').stop(true,true);
//		$(this).find('div').animate({bottom:-126},500)
//	})
//  $('.recommend ul').find('li').find('div').hide()
//	$('.recommend ul').find('li').hover(function(){
//		$(this).find('div').slideToggle(1000);
//	})
	$('.down-search').hide();
	$('.search p').click(function () {
		$('.down-search').slideToggle(300);
		console.log(1111111111)
		
	})
	$('.down-search ul').find('li').click(function(){
		$('.down-search').hide();
		
		$('#adress').text($(this).html())
	})

    $('.place-menu-1 li').find('a').each(function(i,ele){
    	$(ele).attr('data-id',i)
    })

    
    	
    	$('.place-menu-one li').find('a').click(function(){
    		
    	$(this).attr('class','slect-active').parent().siblings().find('a').attr('class','');
        if($(this).hasClass('slect-active')){
        	$('#selectA').remove();
        }
    	var $li=$('<li><a href="#"></a></li>');
    	var id=$(this).attr('data-id')
    	
    	$li.attr('id','selectA');
    	$li.find('a').html($(this).text()+'<span></span>')
    	$li.find('a').attr('data-id',id)
    	$('.slect').append($li)
    
    })
    $('.place-menu-two li').find('a').click(function(){
    		
    	$(this).attr('class','slect-active').parent().siblings().find('a').attr('class','');
        if($(this).hasClass('slect-active')){
        	$('#selectB').remove();
        }
        var id=$(this).attr('data-id')
    	var $li=$('<li><a href="#">'+$(this).text()+'<span></span></a></li>');
    	$li.attr('id','selectB')
    	$li.find('a').attr('data-id',id)
    	$('.slect').append($li)
    
    })
    $('.place-menu-three li').find('a').click(function(){
    		
    	$(this).attr('class','slect-active').parent().siblings().find('a').attr('class','');
        if($(this).hasClass('slect-active')){
        	$('#selectC').remove();
        }
    	var $li=$('<li><a href="#">'+$(this).text()+'<span></span></a></li>');
    	var id=$(this).attr('data-id')
    	$li.attr('id','selectC')
    	$li.find('a').attr('data-id',id)
    	$('.slect').append($li)
    
    })
    	
   
    

    $('.slect ').delegate('span','click',function(){
    	console.log(111)
    	$(this).closest('li').remove();
    	
    })
    
    $('.more').click(function(){
    	$('.place-menu-three').toggleClass('xxl')
    })
     
    $('.comprehensive ul').find('li').click(function(){
    	$(this).addClass('active-compr').siblings().removeClass('active-compr');
    	
    	
    })
 var a=0
    $('.comprehensive ul').find('li').eq(3).click(function(){
    	a++;
    	console.log(a)
                     	var arr=new Array();
                     	//便利商品价格
                     	//obj1='.sort'  obj2='.price_ad'
                     	$('#pric').find('.pirce').each(function(index,e){
                     		arr[index]=parseInt($(e).text().substring(0));
                     		
                     	})
                     	if(a%2==0){
                     		for(var i=0;i<arr.length;i++){
                     			for(var j=0;j<arr.length;j++){
                     				var temp=0;
                     			   if(arr[j]>arr[j+1]){
                     				temp=arr[j];
                     				arr[j]=arr[j+1];
                     				arr[j+1]=temp;
                     			   }
                     			}
                     		}
                     	}else{
                     		for(var i=0;i<arr.length;i++){
                     			for(var j=0;j<arr.length;j++){
                     				var temp=0;
                     			   if(arr[j]<arr[j+1]){
                     				temp=arr[j];
                     				arr[j]=arr[j+1];
                     				arr[j+1]=temp;
                     			   }
                     			}
                     		}
                     	}
                     	//商品数量
                     	var len=$('#pric').find('.pirce');
                     	console.log(len)
                     	for(var i=0;i<arr.length;i++){
                     		for(var j=0;j<len.length;j++){
                     			
                     			if(arr[i]==$('#pric').find('.pirce').eq(j).text().substring(0)){
                     				$('#pric').find('.pirce').eq(j).parents('li').remove().appendTo($('#pric ul'));
                     				console.log(12313123123)
                     			}
                     		}
                     	}
    })


//   网页切换
      $('#yuyue').click(function(){
      	
      	
      	window.location.href="order.html";
      })

 
    $('#navtab li').click(function(){
    	console.log($(this).index())
    	if($(this).index()==0){
    		window.location.href="index.html";
    	}else if($(this).index()==1){
    		window.location.href="place.html";
    	}else if($(this).index()==2){
    		window.location.href="order.html";
    	}else if($(this).index()==3){
    		window.location.href="Individual.html";
    	}
    	
    })
    $('#pric ul li').click(function(){
    	window.location.href="placeDetails.html";
    })
 
 
 
 
 
 
 
 
 
 
 
 
 
      var $select1=$('#select1').find('li');
      $select1.click(function(){
      	$select1.attr('class','');
      	$(this).attr('class','menu-content-active');
      })
      
      $('.right-content-aside').find('li').click(function(){
      	   var $top=$('.content-intro').eq($(this).index()).offset().top;
      	  $('html,body').animate({
      	  	scrollTop:$top
      	  },500);
      	
      })
      
      
      
//    order
       var  $orderNumber=$("#order-people-number").find('li');
       var $orderdata=$('#order-data').find('li');
       var $orderproject=$('#order-project').find('a');
      
     $orderNumber.click(function(){
     	
     	$orderNumber.attr('class','');
     	$(this).attr('class','active-number')
     })
      
      $orderdata.click(function(){
     	
     	$orderdata.attr('class','');
     	$(this).attr('class','active3')
     })
      $orderproject.click(function(){
      	
      	
      	 console.log($(this).className)
      	if($(this).hasClass('active4')){
      		$(this).attr('class','')
      	}else{
      		$(this).attr('class','active4');
      	}
      })
    
      $("#btn_ok").click(function(){
      	  var phone = $("#phone").val();
          if(phone && /^1[3|4|5|8]\d{9}$/.test(phone)){
             //对的
             } else{
              //不对
              alert('请输入正确手机号')
           }
      })
      
//    /////////////////////////////////////////////////////farm
       var $farmMenu= $('#farm-menu').find('li');
       var $tab=$('.tab_farm')
       	console.log($farmMenu)
     $farmMenu.click(function(){
     
     	$farmMenu.attr('class','');
     	$(this).attr('class','active-farm-menu');
     	 $tab.hide();
     	 $tab.eq($(this).index()).show();
     	  $(".tab_farm_2").hide();
     	 $('.farm_1').find('a').hide();
     	 $('.farm_1').find('a').eq($(this).index()).show();
     	 return false;
     })
    $('#farm-send').click(function(){
    	 $tab.css('display','none');
    	 $('.farm_1').find('a').css('display','none');
    	 $(".tab_farm_2").show();
    	  $('.farm_1').find('a').eq(5).show();
    	 return false;
    })
    
    
   console.log( 111)
 setInterval(function(){
// 	 console.log( $('#text').find('textarea').val())
// 	 console.log( $('#text').find('textarea').val().substring().length)
 	 
 	  $('#text').find('i').text($('#text').find('textarea').val().substring().length)
 },500)
 
    $('#limit').find('div').hide()
   
   $('#limit').find('input').click(function () {
// 	    $('#limit').find('div').hide()
		$('.limitid').eq($(this).index()-1).slideToggle(300);
		
		
	})
	$('.limitid ul').find('li').click(function(){
		$('#limit').find('div').hide()
		console.log( $('#limit').find('input').eq(0))
		 $('#limit').find('input').eq($(this).parent().parent().index()-5).val($(this).html())
	})
   
   $('.form-group-6 span').click(function(){
   	    if($(this).hasClass('activeE')){
   	    	$(this).attr('class','')
   	    }else{
   	    	$(this).attr('class','activeE')
   	    }
   })
    
    $(document).on('change','#fileA',function(){
    	
    		
    		var fileA=$('#fileA').val();
    	var arr=fileA.split('\\');
    	var filename=arr[arr.length-1];
    	  
    	  function getObjectURL(file) {
            var url = null;
            if (window.createObjcectURL != undefined) {
                url = window.createOjcectURL(file);
            } else if (window.URL != undefined) {
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) {
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        }
    	  
    	
    	  var vurl=getObjectURL(this.files[0])
    	 
    	  
    	  
    	 if(filename.indexOf("jpg")!=-1 || filename.indexOf("png")!=-1|| filename.indexOf("jpeg")!=-1){
    	 	$('#fileAtext').html(filename);
    	 	$('#fileAimg').html("<img src='" + vurl +"'/>");
    	 }else{
    	 	$('#fileAtext').html("您未上传文件，或者您上传文件类型有误！");
    	 }
    	
    	$('#fileAdelete').click(function(){
    			$('#fileAimg').find('img').remove();
    			$('#fileAtext').html("建议尺寸：800*1022像素，小于800kb");
    	})
    	
    	
    	
    })
     $(document).on('change','#fileB',function(){
    	
    		
    		var fileA=$('#fileB').val();
    	var arr2=fileA.split('\\');
    	var filename2=arr2[arr2.length-1];
    	  
    	  function getObjectURL(file) {
            var url = null;
            if (window.createObjcectURL != undefined) {
                url = window.createOjcectURL(file);
            } else if (window.URL != undefined) {
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) {
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        }
    	  
    	
    	  var vurl2=getObjectURL(this.files[0])
    	 
    	  
    	  
    	 if(filename2.indexOf("jpg")!=-1 || filename2.indexOf("png")!=-1|| filename2.indexOf("jpeg")!=-1){
    	 	$('#fileBtext').html(filename2);
    	 	$('#fileBimg').prepend($("<li><img src="+vurl2+" /></li>"))
    	 	
    	 }else{
    	 	$('#fileAtext').html("您未上传文件，或者您上传文件类型有误！");
    	 }
    	var $fileBimg=$('#fileBimg').find('li')
    	console.log($('#fileBimg').find('li').length)
    	var num=$fileBimg.length-5;
    	var iWidth=$fileBimg.eq(0).width()+10;
    	var a=0;
    	var s=0
    	if($fileBimg.length>=5){
    		
    		
    		$('#fileBleft').click(function(){
    			a+=iWidth
    			$('#fileBimg').animate({left:a},300)
    			if($('#fileBimg').offset().left<0){
    				$('#fileBimg').offset().left=0
    			}
    		})
    		$('#fileBright').click(function(){
    			a-=iWidth;
    			$('#fileBimg').animate({left:a},300);
    			
    		})
    	}
    	
    	$('#fileBdelete').click(function(){
    			
    	})
    	
    	
    	
    })	
    	
    	//添加标题
    	
    	$('#addTitle').on('click',function(){
    		var $title=$("<div></div>");
    		var span=$("<span>住宿</span>");
    		var i=$("<i></i>");
    		var inp=$("<input />")
    		inp.attr('type','text')
    		inp.attr('id','dbtitle2')
    		inp.attr('value','住宿')
    		span.attr('id','dbtitle');
    		
    		$title.append(span).append(inp).append(i)
    		$title.attr('class','detail-home');
    		$title.attr('id','detail-home');
    		$('#detail-write').append($title);
    	})
    	
    	var $detail_home;
    	
        $('#detail-write ').on('dblclick','#detail-home',function(){
        	console.log($(this))
        	$(this).find('span').hide();
        	$(this).find('span').next().show().focus();
        	
        	$detail_home=$(this).find('span');
        })
        $(document).click(function(){
        	 $detail_home.show();
        	$detail_home.next().hide();
        	
        	$detail_home.html($detail_home.next().val())
        	
        })
    
//  添加照片
//  
        $('#addimg').on('click',function(){
        	var $div=$("<div></div>")       	
			var $img=$("<img  />")	    	    			
			var $i=$("<i></i>");
			var $input=$("<input />")
			$input.attr('id','addimgimg');
			$input.attr('type','file');
			
			$div.attr('id','addimg-1');
			$img.hide();
			$div.append($input).append($img).append($i);
			
			$('#detail-write').append($div);	    	    		
        })
        
         $(document).on('change','#addimgimg',function(){
    	
    		
    	var filec=$('#addimgimg').val();
    	var arr=filec.split('\\');
    	var filenamec=arr[arr.length-1];
    	  console.log(filec)
    	  $('#addimg-1 img').show();
    	  $('#addimg-1 input').hide()
    	  function getObjectURL(file) {
            var url = null;
            if (window.createObjcectURL != undefined) {
                url = window.createOjcectURL(file);
            } else if (window.URL != undefined) {
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) {
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        }
    	  
    	
    	  var vurl5=getObjectURL(this.files[0])
    	
    	
    	  
    	 if(filenamec.indexOf("jpg")!=-1 || filenamec.indexOf("png")!=-1|| filenamec.indexOf("jpeg")!=-1){
    	 	
 	$('#addimg-1 ').html("<img src='" + vurl5 +"'/>");
            
    	 }else{
//  	 	$('#fileAtext').html("您未上传文件，或者您上传文件类型有误！");
    	 }
    	
    	
    	
    	
    	
    })
         //添加备注
         
         $('#addbei').click(function(){
         	var $div=$("<div></div>");
         	var $p=$("<p>古典大床房，1.8*2M床一张，空调、麻将机、淋浴、独卫  12:00前退房   $299.00/晚</p>");
         	var $i=$("<i></i>");
         	var $input=$("<input />")
         	$input.attr('type','text');
         	$input.attr('id','specialP-text');
         	$div.attr('class','specialP');
         
         	$div.append($p).append($input).append($i);
         	$('#detail-write').append($div);
         	return false;
         })
         
         var $pp;
         var $ii;
         $('#detail-write  ').on('dblclick','.specialP',function(){
         	console.log($(this).find('p'))
        	$(this).find('p').hide();
        	$(this).find('input').show().focus();
        	$pp=$(this).find('p');
        	$ii=$(this).find('input');
        	
        })
        $(document).click(function(){
        	$pp.show();
        	$ii.hide();
        	
        	$pp.html($ii.val())
        	
        })
//       
         $('#detail-write').on('click','i',function(){
         	$(this).parent().remove()
         })
         
         
         
         
         
//       评价管理
         
         
         $('.line-eva-hui').click(function(){
         	$(this).hide();
         $(this).parent().next('.answer').show();
         })
         
         $('.answer a').click(function(){
         	var $div=$("<div></div>");
         	var $span=$("<span>商家回复</span>");
         	var $p=$("<p></p>");
         	var len=$(this).prev().val().substring();
         	if(len.length>300){
         		alert('抱歉，字数超过300了')
         		$(this).prev().val('');
         		$(this).parent().prev().children().hide();
         		
                $(this).parent().show();
         	}else if(len.length==0){
         		alert('抱歉，写点东西吧')
         		$(this).prev().val('');
         		$(this).parent().prev().children().hide();
         		
                $(this).parent().show();
         	}else{
         		$p.html($(this).prev().val())
         	$div.attr('class','answer_user clearfix');
         	$p.attr('class','answer-title');
         	$div.append($span).append($p);
         	$(this).closest('li').append($div);
         		$(this).parent().hide();
         	}
         	
         	
         	
         		
         		
         })
         
         
         
         
         
         
         
         
         
         
})
