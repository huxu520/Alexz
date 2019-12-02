
window.onbeforeunload = function(){
    document.documentElement.scrollTop = 0;  
    document.body.scrollTop = 0;  
}

$(document).ready(function() {
	unscroll();
    setInterval(function(){
    	 $(".loading-img").fadeOut(300);
    	 setInterval(function() {
			$(".loading-left").css("width", "0%");
			$(".loading-right").css("width", "0%");
			setInterval(function(){
				$(".phone-main-myPic").css("transition","5s");
				$(".phone-main-myPic").css("transform","rotateY(360deg)");
				setInterval(function(){
					inscroll();
				},1300);
			},800);

			setInterval(function(){
					inscroll();
				},1200);
	     }, 500);
    },2000);
         
    clearInterval();
	
});

$(document).ready(function(){
	var paginDiv = "<div class='paginDiv-s'></div>";
    $(".swiper-pagination-bullet").append(paginDiv);
});


$(document).ready(function(){
	$(".myname").hover(function(){
		$(".name2").css("color","#337AB7");
	},function(){
	    $(".name2").css("color","#000000");
	});
});

//宸︿笅瑙掕瘎璁烘寜閽晥鏋�
$(document).ready(function(){
	$(".comment").hover(function(){
		$(this).css("transition","0.5s");
		$(this).css("background-color","#317BC7");
		$(this).find("span:nth-child(1)").stop(true,true).animate({top:'50px'},200);
		$(this).find("span:nth-child(2)").stop(true,true).animate({bottom:'50px'},250);
		$(this).find("span:nth-child(3)").stop(true,true).animate({top:'50px'},300);
		$(this).find("span:nth-child(4)").stop(true,true).animate({bottom:'50px'},350);
		$(this).find("span:nth-child(5)").stop(true,true).animate({top:'50px'},400);
		
		$(this).find("span:nth-child(1)").animate({top:'0px'},200);
		$(this).find("span:nth-child(2)").animate({bottom:'0px'},250);
		$(this).find("span:nth-child(3)").animate({top:'0px'},300);
		$(this).find("span:nth-child(4)").animate({bottom:'0px'},350);
		$(this).find("span:nth-child(5)").animate({top:'0px'},400);
	},function(){
		$(this).css("transition","0.5s");
		$(this).css("background-color","#7986CB");
		$(this).find("span:nth-child(1)").stop(true,true).animate({top:'50px'},200);
		$(this).find("span:nth-child(2)").stop(true,true).animate({bottom:'50px'},250);
		$(this).find("span:nth-child(3)").stop(true,true).animate({top:'50px'},300);
		$(this).find("span:nth-child(4)").stop(true,true).animate({bottom:'50px'},350);
		$(this).find("span:nth-child(5)").stop(true,true).animate({top:'50px'},400);
		
		$(this).find("span:nth-child(1)").animate({top:'0px'},200);
		$(this).find("span:nth-child(2)").animate({bottom:'0px'},250);
		$(this).find("span:nth-child(3)").animate({top:'0px'},300);
		$(this).find("span:nth-child(4)").animate({bottom:'0px'},350);
		$(this).find("span:nth-child(5)").animate({top:'0px'},400);
	});
	 
});

$(document).ready(function(){
	 $(".myMusic").hover(function(){
	 	 $(this).find("img").css("display","block");
	 },function(){
	 	 $(this).find("img").css("display","none");
	 });
});

function music_st(){
  	var aud = document.getElementById("mu_audio");
  	var bool = false; 
  	if(aud.paused == bool){
  	  	aud.pause();
  	  	$(".myMusic").find("img").attr("src","img/yinyue2.png");
  	}else{
  	  	aud.play();
  	  	$(".myMusic").find("img").attr("src","img/yinyue1.png");
  	}
}
$(document).ready(function() {
	$(".menu-icon").hover(function() {
		$(this).css("background-color","#337AB7");
		$(".tsk").stop().fadeIn(300);
	}, function() {
		$(this).css("background","rgba(255,255,255,0)");
		$(".tsk").stop().fadeOut(300);
	});
	$(".menu-icon").click(function(){
		if($(".nar").width() == 0) {  
		 	$(".menu-ico1").css("transform","rotate(45deg)");
		 	$(".menu-ico1").css("top","28px"); 
		 	$(".menu-ico2").css("width","0px");
		 	$(".menu-ico3").css("transform","rotate(-45deg)");
		 	$(".menu-ico3").css("top","28px");
		    $(this).css("background-color","#CCCCCC");
		    $(this).css("box-shadow","0px 0px 0px 0px");
		    $(".nar").stop().css("width","800px");
		 	$(".showbox").css("display","block");
            
            unscroll();    
            
            $(".menu-icon").hover(function(){
            	  $(this).css("background-color","#337AB7");
            	  $(".tsk").stop().fadeIn(300);
            },function(){
            	  $(this).css("background-color","#CCCCCC");
            	  $(".tsk").stop().fadeOut(300);
            });
		}

		if($(".nar").width() == 800){
		 	$(".menu-ico1").css("transform","rotate(0deg)");
		 	$(".menu-ico1").css("top","19px");
		 	$(".menu-ico2").css("width","32.5px");
		 	$(".menu-ico3").css("transform","rotate(0deg)");
		 	$(".menu-ico3").css("top","37px");
		 	$(this).css("background", "rgba(255,255,255,0)");
		 	$(this).css("box-shadow","black 0px 3px 2px 0px");
		 	$(".nar").stop().css("width","0px");
		 	$(".showbox").css("display","none");
	     
		 	inscroll();   
		 	$(".menu-icon").hover(function(){
            	  $(this).css("background-color","#337AB7");
            	  $(".tsk").stop().fadeIn(300);
            },function(){
            	  $(this).css("background","rgba(255,255,255,0)");
            	  $(".tsk").stop().fadeOut(300);
            });
		 }
	});
});

function unscroll(){   
	var top  = $(document).scrollTop();
	$(document).on('scroll.unable',function(e){
		  $(document).scrollTop(top);
	});
}

function inscroll(){   
	$(document).unbind("scroll.unable");
}


$(document).ready(function(){ 
    $(".nar-li ul a").click(function(){
    	$(".nar").stop().css("width","0px");
		$(".showbox").css("display","none");	
    });


    for (var i=1; i<=5; i++) {
			       	
   	 $(".nar-li-d:nth-child("+i+")").hover(function(){
	 	 $(this).find(".span-act").css("width","100%");
	 	 $(this).find(".span-act").css("transition","0.5s");
	 	 $(this).css("color","#337AB7");
	 },function(){
	 	 $(this).find(".span-act").css("width","0");
	 	 $(this).find(".span-act").css("transition","0.2s");
	 	 $(this).css("color","#646464");
	 });
   
    }
    

    $(".swiper-pagination-bullet").click(function(){
	   	var index = $(this).index()+1;
	    $(".nar-li:nth-child("+index+") .nar-li-d").css("color","#337AB7");
	    $(".nar-li:nth-child("+index+") .nar-li-d .span-act").css("width","100%");
	    $(".nar-li:nth-child("+index+")").siblings().find(".nar-li-d").css("color","#646464");
	    $(".nar-li:nth-child("+index+")").siblings().find(".nar-li-d .span-act").css("width","0");
    });


   $(".nar-li").click(function(){    
   	    var indexNar =  $(this).index();
   	    
   	    $(".menu-ico1").css("transform","rotate(0deg)");
	 	$(".menu-ico1").css("top","19px");
	 	$(".menu-ico2").css("width","32.5px");
	 	$(".menu-ico3").css("transform","rotate(0deg)");
	 	$(".menu-ico3").css("top","37px");
	 	$(".menu-icon").css("background", "rgba(255,255,255,0)");
	 	$(".menu-icon").css("box-shadow","black 0px 3px 2px 0px");
	 	$(".nar").stop().css("width","0px");
	 	$(".showbox").css("display","none");
	 	$(".menu-icon").hover(function(){
        	  $(this).css("background-color","#337AB7");
        	  $(".tsk").stop().fadeIn(300);
        },function(){
        	  $(this).css("background","rgba(255,255,255,0)");
        	  $(".tsk").stop().fadeOut(300);
        });
        
   	    myswiper.slideTo(indexNar,500,false);
        inscroll();
    });


});



$(document).ready(function(){
	$(".swiper-slide:nth-child(1)").hover(function(){
	     $(".My-introduction").css("box-shadow","#262626 0px 0px 50px 5px");	
	},function(){
		 $(".My-introduction").css("box-shadow","#262626 0px 0px 0px 0px");	
	});
	
	$(".My-introduction").hover(function(){
		 $(this).css('background',"rgba(255,255,255,0.4)");
	},function(){
		 $(this).css('background',"");
	});

    
     var slide =  document.querySelector(".swiper-slide");
     var introduction = slide.querySelector(".My-introduction");
     
     introduction.addEventListener('mousemove',function(e){
     	 this.style.transition = '0s';
     	 

     	 var centerX = introduction.offsetLeft + introduction.offsetWidth/2,
     	     centerY = introduction.offsetTop  + introduction.offsetHeight/2;
     	     

     	 var  slideX = e.pageX - centerX,
     	      slideY = e.pageY - centerY;
     	      

     	 var percentageX = slideX / centerX,
     	     percentageY = slideY / centerY;
     	     
     	    

     	 var num =  30;
     	  
     	  this.style.transform = 'rotateX('+percentageX * num+'deg)' + 'rotateY('+percentageY * num+'deg) translateZ(60px)';

     	
     });
    introduction.addEventListener('mouseleave',function(e){
    	   this.style.transform = 'rotateX(0) rotateY(0) rotateZ(0)';
		   this.style.transition = 'all 0.5s linear';
    });




});





$(document).ready(function(){
	$(".aboutMe-pic").hover(function(){
		 $(this).css("box-shadow","#337AB7 0px 0px 25px 3px");
		 $(this).css("transition","0.5s")
	},function(){
		 $(this).css("box-shadow","#337AB7 0px 0px 0px 0px");
	});
	
	$(".aboutMe-pic").click(function(){
		 window.location.href = "index.html"; 
	});
	
});


$(document).ready(function(){
	$(".myskill-left-reduce").hover(function(){
		$(this).addClass("animated rubberBand");
	},function(){
		$(this).removeClass("animated rubberBand");
	});
	
	$(".demo1").hover(function(){           
		$(".skills").attr("y","295");
		$(".skills").css("fill","#97BE0D");
		$(".skillName").text("HTML5+CSS3");
		$(".skillPercent").css("display","block");
		$(".skillPercent").text("90%");
	},function(){
		$(".skills").attr("y","310");
		$(".skills").css("fill","#FFFFFF");
		$(".skillName").text("Skills");
		$(".skillPercent").css("display","none");
	});
	$(".demo2").hover(function(){            //CSS3
		$(".skills").attr("y","295");
		$(".skills").css("fill","#D7D8D8");
		$(".skillName").text("JS+JQ");
		$(".skillPercent").css("display","block");
		$(".skillPercent").text("80%");
	},function(){
		$(".skills").attr("y","310");
		$(".skills").css("fill","#FFFFFF");
		$(".skillName").text("Skills");
		$(".skillPercent").css("display","none");
	});
	$(".demo3").hover(function(){            //JavaScript
		$(".skills").attr("y","295");
		$(".skills").css("fill","#D3D671");
		$(".skillName").text("vue");
		$(".skillPercent").css("display","block");
		$(".skillPercent").text("70%");
	},function(){
		$(".skills").attr("y","310");
		$(".skills").css("fill","#FFFFFF");
		$(".skillName").text("Skills");
		$(".skillPercent").css("display","none");
	});
	$(".demo4").hover(function(){             //jQuery
		$(".skills").attr("y","295");
		$(".skills").css("fill","#BEDBE9");
		$(".skillName").text("小程序");
		$(".skillPercent").css("display","block");
		$(".skillPercent").text("60%");
	},function(){
		$(".skills").attr("y","310");
		$(".skills").css("fill","#FFFFFF");
		$(".skillName").text("Skills");
		$(".skillPercent").css("display","none");
	});
	$(".demo5").hover(function(){            //Bootstrap
		$(".skills").attr("y","295");
		$(".skills").css("fill","#E4A787");
		$(".skillName").text("mui+Bootstrap");
		$(".skillPercent").css("display","block");
		$(".skillPercent").text("50%");
	},function(){
		$(".skills").attr("y","310");
		$(".skills").css("fill","#FFFFFF");
		$(".skillName").text("Skills");
		$(".skillPercent").css("display","none");
	});
});



$(document).ready(function(){
	$(".Myexper-ico").hover(function(){
		  $(".Myexper-ico-date").css("color","#FFFFFF");
		  $(".Myexper-ico-date p").css("color","#FFFFFF");
	},function(){
		  $(".Myexper-ico-date").css("color","#6BC30D");
		  $(".Myexper-ico-date p").css("color","#869C71");
	});
	
	
    $(".Myexperience-leftTime-first,.Myworks-one").hover(function(){
    	$(".span-point-one").css("transform","scale(1.5)");
    	$(".Myworks-one #p1").css("color","#6BC30D");
    },function(){
       	$(".span-point-one").css("transform","scale(1)");
    	$(".Myworks-one #p1").css("color","#FFFFFF");
    });
    
    $(".Myexperience-leftTime-second,.Myworks-two").hover(function(){
    	$(".span-point-two").css("transform","scale(1.5)");
    	$(".Myworks-two #p1").css("color","#6BC30D");
    },function(){
       	$(".span-point-two").css("transform","scale(1)");
    	$(".Myworks-two #p1").css("color","#FFFFFF");
    });
    $(".Myexperience-leftTime-second1,.Myworks-Three").hover(function(){
    	$(".span-point-Three").css("transform","scale(1.5)");
    	$(".Myworks-Three #p1").css("color","#6BC30D");
    },function(){
       	$(".span-point-Three").css("transform","scale(1)");
    	$(".Myworks-Three #p1").css("color","#FFFFFF");
    });
});


$(document).ready(function(){
	
    $(".myOpus-number").click(function(){
        $(this).css("background-color","#A2C044");
        $(this).siblings().css("background-color","#D7D8D8");
        
        var i = $(this).index()+1;
        if(i==1){
        	$(".myOpus-up a:nth-child(1)").attr("href","https://juewandeman.github.io/YSJR/");
        	$(".myOpus-up a:nth-child(2)").attr("href","https://juewandeman.github.io/YSJR/");
        	$(".opus-one img:nth-child("+i+")").stop().fadeIn(700);
        	$(".opus-one img:nth-child("+i+")").siblings().stop().fadeOut(700);
        	$(".opus-one h2").text("深圳亿升金融服务有限公司官网");
        	$(".opus-two img:nth-child("+i+")").stop().fadeIn(700);
        	$(".opus-two img:nth-child("+i+")").siblings().stop().fadeOut(700);
        	$(".opus-two h2").text("深圳亿升金融服务有限公司官网");
        }
        if(i==2){
        	$(".myOpus-up a:nth-child(1)").attr("href","http://www.5shiguang.net");
        	$(".myOpus-up a:nth-child(2)").attr("href","http://www.5shiguang.net");
        	$(".opus-one img:nth-child("+i+")").stop().fadeIn(700);
        	$(".opus-one img:nth-child("+i+")").siblings().stop().fadeOut(700);
        	$(".opus-one h2").text("漯河时光网络科技");
        	$(".opus-two img:nth-child("+i+")").stop().fadeIn(700);
        	$(".opus-two img:nth-child("+i+")").siblings().stop().fadeOut(700);
        	$(".opus-two h2").text("漯河时光网络科技");
        }
        if(i==3){
        	$(".myOpus-up a:nth-child(1)").attr("href","http://www.lanshuiad.com/");
        	$(".myOpus-up a:nth-child(2)").attr("href","http://www.lanshuiad.com/");
        	$(".opus-one img:nth-child("+i+")").stop().fadeIn(700);
        	$(".opus-one img:nth-child("+i+")").siblings().stop().fadeOut(700);
        	$(".opus-one h2").text("蓝水广告公司");
        	$(".opus-two img:nth-child("+i+")").stop().fadeIn(700);
        	$(".opus-two img:nth-child("+i+")").siblings().stop().fadeOut(700);
        	$(".opus-two h2").text("蓝水广告公司");
        }
      
    });
    
    
    $(".opus").hover(function(){
    	$(this).css("transform","scale(1.1)");
    	$(this).find("img").css("filter","grayscale(0%)");
    	$(this).find(".opus-title h2").css("opacity","1");
    	$(this).find(".opus-title h2").css("color","#000000");
    },function(){
    	$(this).css("transform","scale(1)");
    	$(this).find("img").css("filter","grayscale(100%)");
    	$(this).find(".opus-title h2").css("opacity","0.5");
    	$(this).find(".opus-title h2").css("color","#FFFFFF");
    });
});

$(document).ready(function(){
	$(".myInfo-text-ur3_Pic").hover(function(){
		 $(this).find(".prompt").stop().fadeIn(400);
	},function(){
		$(this).find(".prompt").stop().fadeOut(400);
	});
	
});