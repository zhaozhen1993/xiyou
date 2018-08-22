

////类似淘宝--筛选 插件
//  用法：  $(function(){
//      new SelectTag({
//          child : ".sx_child", //所有筛选范围内的子类
//          over : 'on', //选中状态样式名称
//          all : ".all"//每行第一个的全部（不限）选项，没有可不选
//      });
//  })

function SelectTag(t) {
	this.child = t.child || ".sx_child", this.over = t.over || "on", this.all = t.all || ".all", this.init()
}
$.extend(SelectTag.prototype, {
	init: function() {
		var t = this;
		t._bindEvent(), t._select()
	},
	_bindEvent: function() {
		var t = this;
		$(t.child).click(function(e) {
			e.preventDefault();
			var i = window.location.href,
				n = $(this).attr("rel"),
				r = $(this).attr("name");
			$(this).hasClass(t.over) || (window.location.href = t._changeURLPar(i, r, n))
		}), $(t.all).click(function(e) {
			e.preventDefault();
			var i = window.location.href,
				n = $(this).attr("name");
			$("[name=" + n + "]").removeClass(t.over), $(this).addClass(t.over), window.location.href = t._delUrlPar(i, n)
		})
	},
	_delUrlPar: function(t, e) {
		var n = "";
		if(t.indexOf("?") == -1) return t;
		n = t.substr(t.indexOf("?") + 1);
		var r = "",
			a = "";
		if(n.indexOf("&") != -1) {
			r = n.split("&");
			for(i in r) r[i].split("=")[0] != e && (a = a + r[i].split("=")[0] + "=" + r[i].split("=")[1] + "&");
			return t.substr(0, t.indexOf("?")) + "?" + a.substr(0, a.length - 1)
		}
		return r = n.split("="), r[0] == e ? t.substr(0, t.indexOf("?")) : t
	},
	_changeURLPar: function(t, e, i) {
		var n = this,
			r = e + "=([^&]*)",
			a = e + "=" + i,
			s = encodeURI(n._getQueryString(e));
		return t.match(r) ? t = t.replace(s, i) : t.match("[?]") ? t + "&" + a : t + "?" + a
	},
	_getQueryString: function(t) {
		var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
			i = window.location.search.substr(1).match(e);
		return null != i ? decodeURI(i[2]) : null
	},
	_select: function() {
		var t = this,
			e = window.location.href;
		$(t.child).each(function() {
			var i = $(this).attr("name") + "=" + $(this).attr("rel"),
				n = new RegExp(encodeURI(i), "g");
				
			if(n.test(e)) {
				$(this).addClass(t.over);
				console.log($(this))
				var r = $(this).attr("name");
				$("[name=" + r + "]").eq(0).removeClass(t.over)
			} else $(this).removeClass(t.over)
		})
	}
});

//手机端px转rem引入文件 该文件直接复制到手机页面
//(function (doc, win) {
//                 var docEl = doc.documentElement,
//                     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//                     recalc = function () {
//                         var clientWidth = docEl.clientWidth;
//                         if (!clientWidth) return;
//                         if(clientWidth>=750){
//                              docEl.style.fontSize = '100px';
//                          }else{
//                          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
//                     }
//                  };
// 
//                   if (!doc.addEventListener) return;
//                       win.addEventListener(resizeEvt, recalc, false);
//                       doc.addEventListener('DOMContentLoaded', recalc, false);
//                   })(document, window);

//楼层导航
 $(function(){
        //1.楼梯什么时候显示，800px scroll--->scrollTop
        $(window).on('scroll',function(){
            var $scroll=$(this).scrollTop();
            if($scroll>=800){
                $('#loutinav').show();
            }else{
                $('#loutinav').hide();
            }

            //4.拖动滚轮，对应的楼梯样式进行匹配
            $('.louti').each(function(){
                var $loutitop=$('.louti').eq($(this).index()).offset().top+400;
                //console.log($loutitop);
                if($loutitop>$scroll){//楼层的top大于滚动条的距离
                    $('#loutinav li').removeClass('active');
                    $('#loutinav li').eq($(this).index()).addClass('active');
                    return false;//中断循环
                }
            });
        });
        //2.获取每个楼梯的offset().top,点击楼梯让对应的内容模块移动到对应的位置  offset().left
        
        var $loutili=$('#loutinav li').not('.last');
        $loutili.on('click',function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            var $loutitop=$('.louti').eq($(this).index()).offset().top;
            //获取每个楼梯的offsetTop值
            $('html,body').animate({//$('html,body')兼容问题body属于chrome
                scrollTop:$loutitop
            })
        });
        //3.回到顶部
        $('.last').on('click',function(){
            $('html,body').animate({//$('html,body')兼容问题body属于chrome
                scrollTop:0
            })
        });
        
        


    })
 

////////////////////////////////验证手机号  
    function vailPhone(){  
      var phone = jQuery("#phone").val();  
      var flag = false;  
      var message = "";  
      var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;         
      if(phone == ''){  
        message = "手机号码不能为空！";  
      }else if(phone.length !=11){  
        message = "请输入有效的手机号码！";  
      }else if(!myreg.test(phone)){  
        message = "请输入有效的手机号码！";  
      }else if(checkPhoneIsExist()){  
        message = "该手机号码已经被绑定！";  
      }else{  
          flag = true;  
      }  
      if(!flag){  
     //提示错误效果  
        //jQuery("#phoneDiv").removeClass().addClass("ui-form-item has-error");  
        //jQuery("#phoneP").html("");  
        //jQuery("#phoneP").html("<i class=\"icon-error ui-margin-right10\"> <\/i>"+message);  
        //jQuery("#phone").focus();  
      }else{  
           //提示正确效果  
        //jQuery("#phoneDiv").removeClass().addClass("ui-form-item has-success");  
        //jQuery("#phoneP").html("");  
        //jQuery("#phoneP").html("<i class=\"icon-success ui-margin-right10\"> <\/i>该手机号码可用");  
      }  
      return flag;  
    }
    //验证手机号是否存在  
       function checkPhoneIsExist(){  
         var phone = jQuery("#phone").val();  
         var flag = true;  
         jQuery.ajax(  
          { url: "checkPhone?t=" + (new Date()).getTime(),  
            data:{phone:phone},  
            dataType:"json",  
               type:"GET",  
               async:false,  
               success:function(data) {  
               var status = data.status;  
               if(status == "0"){  
                 flag = false;  
               }  
             }  
        });  
        return flag;  
       }  
       ///////////////////////////////////////////////////////////////////////////////
       
function uploadfile(){
    $("#choosefile").click();
    
    //jquery获取input file文件名
    var file = $("#choosefile").val();
    var fileName = getFileName(file);
    function getFileName(o){
        var pos=o.lastIndexOf("\\");
        return o.substring(pos+1);  
    }
    $("#filename").html(fileName);
}

//建立一個可存取到该file的url  
$(document).on('change', '#PictureUrl', function () { //PictureUrl为input file 的id
        //console.log(this.files[0]);
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
        var objURL = getObjectURL(this.files[0]);//这里的objURL就是input file的真实路径
        $('#imgContainer').html("<img src='" + objURL + "' alt='Alternate Text' width='640px' height='350px' id='target' />");
        cutImg();//自定义的裁剪图片函数
    });
