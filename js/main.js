    //스크롤시 화면옆으로 넘김
    $(function(){
        $(window).scroll(function(){
            let scrollTop = $(window).scrollTop();
            const totalWidth = $(".sec3-wrap").width() - 400;
            $("#container13").css("height", totalWidth);


            // 3번째 섹션 스크롤탑 0
            if( scrollTop > $("#container13").offset().top ){
                let offsetTop = (scrollTop - $("#container13").offset().top);
                $("#container13 .sec3").css("left", -offsetTop);
            }

        });




   
        $('.menuTextFlex:nth-child(1)').mouseover(function(){
            $('.menuTextFlex:nth-child(1)>div:nth-child(2)').stop().animate({'width':'20%'},500);
            $('.menuTextFlex:nth-child(1)>div:nth-child(1)').css('color','rgb(192, 158, 9)');
            $('.menuTextFlex:nth-child(1)>div:nth-child(3) a').css('color','rgb(192, 158, 9)');
        }).mouseleave(function(){
            $('.menuTextFlex:nth-child(1)>div:nth-child(2)').stop().animate({'width':'0%'},500);
            $('.menuTextFlex:nth-child(1)>div:nth-child(1)').css('color','white');
            $('.menuTextFlex:nth-child(1)>div:nth-child(3) a').css('color','white');
        });

        $('.menuTextFlex:nth-child(2)').mouseover(function(){
            $('.menuTextFlex:nth-child(2)>div:nth-child(2)').stop().animate({'width':'20%'},500);
            $('.menuTextFlex:nth-child(2)>div:nth-child(1)').css('color','rgb(192, 158, 9)');
            $('.menuTextFlex:nth-child(2)>div:nth-child(3) a').css('color','rgb(192, 158, 9)');
        }).mouseleave(function(){
            $('.menuTextFlex:nth-child(2)>div:nth-child(2)').stop().animate({'width':'0%'},500);
            $('.menuTextFlex:nth-child(2)>div:nth-child(1)').css('color','white');
            $('.menuTextFlex:nth-child(2)>div:nth-child(3) a').css('color','white');
        });

        $('.menuTextFlex:nth-child(3)').mouseover(function(){
            $('.menuTextFlex:nth-child(3)>div:nth-child(2)').stop().animate({'width':'20%'},500);
            $('.menuTextFlex:nth-child(3)>div:nth-child(1)').css('color','rgb(192, 158, 9)');
            $('.menuTextFlex:nth-child(3)>div:nth-child(3) a').css('color','rgb(192, 158, 9)');
        }).mouseleave(function(){
            $('.menuTextFlex:nth-child(3)>div:nth-child(2)').stop().animate({'width':'0%'},500);
            $('.menuTextFlex:nth-child(3)>div:nth-child(1)').css('color','white');
            $('.menuTextFlex:nth-child(3)>div:nth-child(3) a').css('color','white');
        });

        $('.menuTextFlex:nth-child(4)').mouseover(function(){
            $('.menuTextFlex:nth-child(4)>div:nth-child(2)').stop().animate({'width':'20%'},500);
            $('.menuTextFlex:nth-child(4)>div:nth-child(1)').css('color','rgb(192, 158, 9)');
            $('.menuTextFlex:nth-child(4)>div:nth-child(3) a').css('color','rgb(192, 158, 9)');
        }).mouseleave(function(){
            $('.menuTextFlex:nth-child(4)>div:nth-child(2)').stop().animate({'width':'0%'},500);
            $('.menuTextFlex:nth-child(4)>div:nth-child(1)').css('color','white');
            $('.menuTextFlex:nth-child(4)>div:nth-child(3) a').css('color','white');
        });


        $('.menubarFlex:nth-child(1)').click(function(){
            if($('#menu').css('display')=='none' ){
                // $('#menu').css('display','block');
                $('#menu').stop().fadeIn();
                $('.menuTextFlex >div').stop().animate({'margin-left':'0','opacity':'1'},1000);
                $('.menubarFlex1Flex2 div:nth-child(1)').addClass('change1');
                $('.menubarFlex1Flex2 div:nth-child(2)').addClass('change2');
                $('.menubarFlex1Flex2 div:nth-child(2)').css("width","40px");
                $('.menubarFlex1Flex2 div:nth-child(2)').css("margin-top","0px");
                $('.menubarFlex1Flex2 div:nth-child(1)').css("width","40px");
                
            }else{
                // $('#menu').css('display','none');
                $('#menu').stop().fadeOut();
                $('.menuTextFlex >div').stop().animate({'margin-left':'-150px','opacity':'0'},1000);
                $('.menubarFlex1Flex2 div:nth-child(1)').removeClass('change1');
                $('.menubarFlex1Flex2 div:nth-child(2)').removeClass('change2');
                $('.menubarFlex1Flex2 div:nth-child(2)').css("width","30px");
                $('.menubarFlex1Flex2 div:nth-child(1)').css("width","45px");
                $('.menubarFlex1Flex2 div:nth-child(2)').css("margin-top","17px");
                
            }   
            
        });



     
        var delay = 300;
        var timer = null;
        $(window).on('resize', function(){
	        clearTimeout(timer);
	        timer = setTimeout(function(){
		        console.log('resize event!');

                window.onresize = function(){
                    document.location.reload();
                  };
                if (window.innerWidth> 768 ) {
                    
                    $('.container2fleximg img').mouseover(function(){
                    $('.container2flexText').stop().fadeIn();
                    }).mouseleave(function(){
                        $('.container2flexText').stop().fadeOut();
                    });

                    $('.container4fleximg img').mouseover(function(){
                        $('.container4flexText').stop().fadeIn();
                    }).mouseleave(function(){
                        $('.container4flexText').stop().fadeOut();
                    });

                    $('.container5fleximg img').mouseover(function(){
                        $('.container5flexText').stop().fadeIn();
                    }).mouseleave(function(){
                        $('.container5flexText').stop().fadeOut();
                    });

                    $('.container6fleximg img').mouseover(function(){
                        $('.container6flexText').stop().fadeIn();
                    }).mouseleave(function(){
                        $('.container6flexText').stop().fadeOut();
                    });

                    $('.container3fleximg').mouseover(function(){
                        
                        $('.container3fleximg').hide();
                        $('.container3fleximg2').fadeIn();
                    });

                    $('#container3').hover(function(){
                        
                        $('.container3flexText1').stop().fadeIn(200);
                        $('.container3flexText2').stop().fadeIn(200);
                        
                    },function(){

                        $('.container3fleximg').fadeIn();
                        $('.container3fleximg2').hide();
                        $('.container2fleximg').fadeIn();
                        $('.container3flexText1').stop().fadeOut(200);
                        $('.container3flexText2').stop().fadeOut(200);
                    });
                }else if(window.innerWidth<= 768 ){
                    $('.container2fleximg img').mouseover(function(){
                        $('.container2flexText').stop().css('display','none');
                    });
                    $('.container4fleximg img').mouseover(function(){
                        $('.container4flexText').stop().css('display','none');
                    });
                    $('.container5fleximg img').mouseover(function(){
                        $('.container5flexText').stop().css('display','none');
                    });
                    $('.container6fleximg img').mouseover(function(){
                        $('.container6flexText').stop().css('display','none');
                    });



                    
                    
                }
	        }, delay);
        });

        
        
        

        if (window.innerWidth> 768 ) {
            
            $('.btn1').click(function(){
            $('.container12Slide ul').stop().animate({'left':'0px'},1000);
            $('.container12Slide li:nth-child(1)').stop().animate({'margin-top':'0','opacity':'1'},1000);
            $('.container12Slide li:nth-child(2)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(3)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(4)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(1)').css({'top':'0'});
            $('.container12Slide li:nth-child(2)').css({'top':'50%'});
            $('.container12Slide li:nth-child(4)').css({'top':'50%'});
            $('.container12Slide li:nth-child(5)').css({'top':'50%'});
            $('.container12Slide li:nth-child(1) > div').stop().animate({'opacity':'1'},1000);
            $('.container12Slide li:nth-child(2) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(3) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(4) > div').stop().animate({'opacity':'0'},1000);
        });
        $('.btn2').click(function(){
            $('.container12Slide ul').stop().animate({'left':'-33%'},1000);
            $('.container12Slide li:nth-child(1)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(2)').stop().animate({'margin-top':'0','opacity':'1'},1000);
            $('.container12Slide li:nth-child(3)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(4)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(1)').css({'top':'50%'});
            $('.container12Slide li:nth-child(2)').css({'top':'0'});
            $('.container12Slide li:nth-child(4)').css({'top':'50%'});
            $('.container12Slide li:nth-child(3)').css({'top':'50%'});
            $('.container12Slide li:nth-child(2) > div').stop().animate({'opacity':'1'},1000);
            $('.container12Slide li:nth-child(1) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(3) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(4) > div').stop().animate({'opacity':'0'},1000);
        });
        $('.btn3').click(function(){
            $('.container12Slide ul').stop().animate({'left':'-67%'},1000);
            
            $('.container12Slide li:nth-child(1)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(3)').stop().animate({'margin-top':'0','opacity':'1'},1000);
            $('.container12Slide li:nth-child(2)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(4)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(1)').css({'top':'50%'});
            $('.container12Slide li:nth-child(2)').css({'top':'50%'});
            $('.container12Slide li:nth-child(4)').css({'top':'50%'});
            $('.container12Slide li:nth-child(3)').css({'top':'0'});
            $('.container12Slide li:nth-child(3) > div').stop().animate({'opacity':'1'},1000);
            $('.container12Slide li:nth-child(2) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(1) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(4) > div').stop().animate({'opacity':'0'},1000);
        });
        $('.btn4').click(function(){
     
            $('.container12Slide ul').stop().animate({'left':'-98%'},1000);
            $('.container12Slide li:nth-child(1)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(3)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(2)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(4)').stop().animate({'margin-top':'0','opacity':'1'},1000);
            $('.container12Slide li:nth-child(1)').css({'top':'50%'});
            $('.container12Slide li:nth-child(2)').css({'top':'50%'});
            $('.container12Slide li:nth-child(4)').css({'top':'0'});
            $('.container12Slide li:nth-child(3)').css({'top':'5%0'});
            $('.container12Slide li:nth-child(4) > div').stop().animate({'opacity':'1'},1000);
            $('.container12Slide li:nth-child(2) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(3) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(1) > div').stop().animate({'opacity':'0'},1000);
        });
        // 모바일 슬라이드
        }else if(window.innerWidth<=768){
            $('.btn1').click(function(){
            $('.container12Slide ul').stop().animate({'left':'0px'},1000);
            $('.container12Slide li:nth-child(1)').stop().animate({'margin-top':'0','opacity':'1'},1000);
            $('.container12Slide li:nth-child(2)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(3)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(4)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(1)').css({'top':'0'});
            $('.container12Slide li:nth-child(2)').css({'top':'50%'});
            $('.container12Slide li:nth-child(4)').css({'top':'50%'});
            $('.container12Slide li:nth-child(5)').css({'top':'50%'});
            $('.container12Slide li:nth-child(1) > div').stop().animate({'opacity':'1'},1000);
            $('.container12Slide li:nth-child(2) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(3) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(4) > div').stop().animate({'opacity':'0'},1000);
        });
        $('.btn2').click(function(){
            $('.container12Slide ul').stop().animate({'left':'-67%'},1000);
            $('.container12Slide li:nth-child(1)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(2)').stop().animate({'margin-top':'0','opacity':'1'},1000);
            $('.container12Slide li:nth-child(3)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(4)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(1)').css({'top':'50%'});
            $('.container12Slide li:nth-child(2)').css({'top':'0'});
            $('.container12Slide li:nth-child(4)').css({'top':'50%'});
            $('.container12Slide li:nth-child(3)').css({'top':'50%'});
            $('.container12Slide li:nth-child(2) > div').stop().animate({'opacity':'1'},1000);
            $('.container12Slide li:nth-child(1) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(3) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(4) > div').stop().animate({'opacity':'0'},1000);
        });
        $('.btn3').click(function(){
            $('.container12Slide ul').stop().animate({'left':'-131%'},1000);
            
            $('.container12Slide li:nth-child(1)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(3)').stop().animate({'margin-top':'0','opacity':'1'},1000);
            $('.container12Slide li:nth-child(2)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(4)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(1)').css({'top':'50%'});
            $('.container12Slide li:nth-child(2)').css({'top':'50%'});
            $('.container12Slide li:nth-child(4)').css({'top':'50%'});
            $('.container12Slide li:nth-child(3)').css({'top':'0'});
            $('.container12Slide li:nth-child(3) > div').stop().animate({'opacity':'1'},1000);
            $('.container12Slide li:nth-child(2) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(1) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(4) > div').stop().animate({'opacity':'0'},1000);
        });
        $('.btn4').click(function(){
     
            $('.container12Slide ul').stop().animate({'left':'-194%'},1000);
            $('.container12Slide li:nth-child(1)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(3)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(2)').stop().animate({'margin-top':'130px','opacity':'0.5'},1000);
            $('.container12Slide li:nth-child(4)').stop().animate({'margin-top':'0','opacity':'1'},1000);
            $('.container12Slide li:nth-child(1)').css({'top':'50%'});
            $('.container12Slide li:nth-child(2)').css({'top':'50%'});
            $('.container12Slide li:nth-child(4)').css({'top':'0'});
            $('.container12Slide li:nth-child(3)').css({'top':'5%0'});
            $('.container12Slide li:nth-child(4) > div').stop().animate({'opacity':'1'},1000);
            $('.container12Slide li:nth-child(2) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(3) > div').stop().animate({'opacity':'0'},1000);
            $('.container12Slide li:nth-child(1) > div').stop().animate({'opacity':'0'},1000);
        });

        }


        




        
    // 스크롤효과
        $(window).scroll(function(){
            var st = $(this).scrollTop();

            if (window.innerWidth> 768 ) {
                $('.container1flex:nth-child(1)').css('height',st-700);                
                $('.container1flex:nth-child(3)').css('height',st-700);

                $('.container2flex:nth-child(1)').css('height',st-1200);                
                $('.container2flex:nth-child(3)').css('height',st-1200);
            
                $('.container4flex:nth-child(1)').css('height',st-1700);                
                $('.container4flex:nth-child(3)').css('height',st-1700);

                $('.container5flex:nth-child(1)').css('height',st-2500);                
                $('.container5flex:nth-child(3)').css('height',st-2500);

                $('.container6flex:nth-child(1)').css('height',st-3100);                
                $('.container6flex:nth-child(3)').css('height',st-3100);

                $('.container3flex:nth-child(1)').css('height',st-3800);                
                $('.container3flex:nth-child(3)').css('height',st-3800);
                
                $('.container7flex:nth-child(1)').css('height',st-4500);                
                $('.container7flex:nth-child(3)').css('height',st-4500);

                $('.container8flex:nth-child(1)').css('height',st-5500);                
                $('.container8flex:nth-child(3)').css('height',st-5500);

                $('.container9flex:nth-child(1)').css('height',st-6300);                
                $('.container9flex:nth-child(3)').css('height',st-6300);

                $('.container11flex:nth-child(1)').css('height',st-7800);                
                $('.container11flex:nth-child(3)').css('height',st-7800);

                $('.container13Flex:nth-child(1)').css('height',st-9300);                
                $('.container13Flex:nth-child(3)').css('height',st-9300);
            }else{
                $('.container1flex:nth-child(1)').css('height',st-300);                
                $('.container1flex:nth-child(3)').css('height',st-300);

                $('.container2flex:nth-child(1)').css('height',st-500);                
                $('.container2flex:nth-child(3)').css('height',st-500);
            
                $('.container4flex:nth-child(1)').css('height',st-1200);                
                $('.container4flex:nth-child(3)').css('height',st-1200);

                $('.container5flex:nth-child(1)').css('height',st-1900);                
                $('.container5flex:nth-child(3)').css('height',st-1900);

                $('.container6flex:nth-child(1)').css('height',st-2600);                
                $('.container6flex:nth-child(3)').css('height',st-2600);

                $('.container3flex:nth-child(1)').css('height',st-3300);                
                $('.container3flex:nth-child(3)').css('height',st-3300);
                
                $('.container7flex:nth-child(1)').css('height',st-4000);                
                $('.container7flex:nth-child(3)').css('height',st-4000);

                $('.container8flex:nth-child(1)').css('height',st-5000);                
                $('.container8flex:nth-child(3)').css('height',st-5000);

                $('.container9flex:nth-child(1)').css('height',st-5700);                
                $('.container9flex:nth-child(3)').css('height',st-5700);

                $('.container11flex:nth-child(1)').css('height',st-6600);                
                $('.container11flex:nth-child(3)').css('height',st-6600);

                $('.container13Flex:nth-child(1)').css('height',st-8200);                
                $('.container13Flex:nth-child(3)').css('height',st-8200);
            }


        
        });
        
        
    });
    

    // let mainText = document.getElementById("container1")
    window.addEventListener('scroll',function(){
        let value1 = window.scrollY;
        let value2 = window.scrollY;
        console.log("scrollY",value1);
    
        var f = true


        if (window.innerWidth>768){
            document.getElementById("container1").style.background
            if(value1>300){
                document.querySelector("body").style.background="black";
                
                
                document.getElementById("container1").style.background="black";
                document.getElementById("container2").style.background="black";
                document.getElementById("container3").style.background="black";
                document.getElementById("container4").style.background="black";
                document.getElementById("container5").style.background="black";
                document.getElementById("container6").style.background="black";
                document.getElementById("container7").style.background="black";
                document.getElementById("container8").style.background="black";
                document.getElementById("container9").style.background="black";
                document.getElementById("container11").style.background="black";
                document.getElementById("container12").style.background="black";

            }   
            if(value1<300){
                document.querySelector("body").style.background="white";
                document.getElementById("container1").style.background="white";
                document.getElementById("container2").style.background="white";
                document.getElementById("container3").style.background="white";
                document.getElementById("container4").style.background="white";
                document.getElementById("container5").style.background="white";
                document.getElementById("container7").style.background="white";
                document.getElementById("container8").style.background="white";
                document.getElementById("container9").style.background="white";
                document.getElementById("container11").style.background="white";
                document.getElementById("container12").style.background="white";
            }
        }else{
            document.querySelector("body").style.background="black";
                document.getElementById("container1").style.background="black";
                document.getElementById("container2").style.background="black";
                document.getElementById("container3").style.background="black";
                document.getElementById("container4").style.background="black";
                document.getElementById("container5").style.background="black";
                document.getElementById("container6").style.background="black";
                document.getElementById("container7").style.background="black";
                document.getElementById("container8").style.background="black";
                document.getElementById("container9").style.background="black";
                document.getElementById("container11").style.background="black";
                document.getElementById("container12").style.background="black";
        }
       
        if (window.innerWidth>768){
            if(value1>400){
            document.querySelector(".container1flexText1 h1").classList.replace('container1flexANI1','transform3dZero') 
        }
        if(value1>500){
            document.querySelector(".container1flexText2 h1").classList.replace('container1flexANI2','transform3dZero') 
        }
        if(value1>600){
            document.querySelector(".container1flexText3 h1").classList.replace('container1flexANI3','transform3dZero') 
        }

        if(value1>1400 ){
            document.querySelector(".container2fleximg").classList.add("tran")
            document.querySelector(".container2fleximg").classList.remove("tranRemove")
        }
        if(value1>1700 ){
            document.querySelector(".container2fleximg").classList.remove("tran")
            document.querySelector(".container2fleximg").classList.add("tranRemove")
        }

        if(value1>2000 && value1<2200){
            document.querySelector(".container4fleximg").classList.add("tran")
            document.querySelector(".container4fleximg").classList.remove("tranRemove")
        }

        if(value1>2200 ){
            document.querySelector(".container4fleximg").classList.remove("tran")
            document.querySelector(".container4fleximg").classList.add("tranRemove")
        }

        if(value1>2600 && value1<2800){
            document.querySelector(".container5fleximg").classList.add("tran")
            document.querySelector(".container5fleximg").classList.remove("tranRemove")
        }

        if(value1>2800 ){
            document.querySelector(".container5fleximg").classList.remove("tran")
            document.querySelector(".container5fleximg").classList.add("tranRemove")
        }

        if(value1>3300 && value1<3500){
            document.querySelector(".container6fleximg").classList.add("tran")
            document.querySelector(".container6fleximg").classList.remove("tranRemove")
        }
        
        if(value1>3600 ){
            document.querySelector(".container6fleximg").classList.remove("tran")
            document.querySelector(".container6fleximg").classList.add("tranRemove")
        }
        if(value1>5200){
            document.querySelector(".container7mainText h1").classList.add("transform3d1")
        }else{
            document.querySelector(".container7mainText h1").classList.remove("transform3d1")
        }
        if(value1>5300){
            document.querySelector(".container7mainText h1").classList.add("transform3d2")
        }else{
            document.querySelector(".container7mainText h1").classList.remove("transform3d2")
        }
        if(value1>5400){
            document.querySelector(".container7mainText h1").classList.add("transform3d3")
        }else{
            document.querySelector(".container7mainText h1").classList.remove("transform3d3")
        }
        if(value1>5500){
            document.querySelector(".container7mainText h1").classList.remove("transform3d4")      
        }else{
            document.querySelector(".container7mainText h1").classList.remove("transform3d4")      
        }
        if(value1>5600 ){
            document.querySelector(".container7mainText h1").classList.add("transform3d5") 
        }else{
            document.querySelector(".container7mainText h1").classList.remove("transform3d5") 
        }
        if(value1>5700 ){
            document.querySelector(".container7mainText h1").classList.add("transform3d6")
        }else{
            document.querySelector(".container7mainText h1").classList.remove("transform3d6")
            
        }


        if(value1>5900){
            document.querySelector(".container8mainText1 h1").classList.replace('container8mainTextH1','transform3dZero') 
        }

        if(value1>6000){
            document.querySelector(".container8mainText2 h1").classList.replace('container8mainTextH1','transform3dZero') 
        }

        if(value1>6500){
            document.querySelector(".container9mainText1 h1").classList.replace('container9mainTextH1','transform3dSmall1') 
        }

        if(value1>6600){
            document.querySelector(".container9mainText1 h1").classList.replace('transform3dSmall1','transform3dSmall2') 
        }
        if(value1>6700){
            document.querySelector(".container9mainText1 h1").classList.replace('transform3dSmall2','transform3dSmall3') 
        }

    
        if(value1>6900){
            document.querySelector("#container10 div").classList.replace('container10Video','container10Video2') 
        }else{
            document.querySelector("#container10 div").classList.replace('container10Video2','container10Video') 
        }
        if(value1>7000){
            document.querySelector("#container10 div").classList.replace('container10Video2','container10Video3') 
        }else{
            document.querySelector("#container10 div").classList.replace('container10Video3','container10Video2') 
        }
        if(value1>7100){
            document.querySelector("#container10 div").classList.replace('container10Video3','container10Video4') 
        }else{
            document.querySelector("#container10 div").classList.replace('container10Video4','container10Video3') 
        }
        if(value1>7200){
            document.querySelector("#container10 div").classList.replace('container10Video4','container10Video5') 
        }else{
            document.querySelector("#container10 div").classList.replace('container10Video5','container10Video4') 
        }
        if(value1>7300){
            document.querySelector("#container10 div").classList.replace('container10Video5','container10Video6') 
        }else{
            document.querySelector("#container10 div").classList.replace('container10Video6','container10Video5') 
        }
        if(value1>=7400){
            document.querySelector("#container10 div").classList.replace('container10Video6','container10Video7')
        }else{
            document.querySelector("#container10 div").classList.replace('container10Video7','container10Video6')
        }
        if(value1>7900){
            document.querySelector(".container11Text h1").classList.remove('container1flexANI1');
            document.querySelector(".container11Text h1").classList.add('transform3dZero');
        }
        if(value1>8000){
            document.querySelector(".container11Text p").classList.remove('container1flexANI1');
            document.querySelector(".container11Text p").classList.add('transform3dZero');
        }

        if(value1>8200){
            document.querySelector(".container11Text2 h1").classList.remove('container1flexANI2');
            document.querySelector(".container11Text2 h1").classList.add('transform3dZero');
        }

        if(value1>8300){
            document.querySelector(".container11Text2 p").classList.remove('container1flexANI2');
            document.querySelector(".container11Text2 p").classList.add('transform3dZero');
        }
        if(value1>8800){
            document.querySelector(".container12Slide li:nth-child(1)");
        }
        

        
        if(value1<8300){
            document.querySelector(".container13Fleximg").style.opacity="0";
            document.querySelector(".container13FlexText").style.opacity="0";
            document.querySelector(".container13FlexText2").style.opacity="0";
            document.querySelector(".container13FlexText3").style.opacity="0";
            
        }

        if(value1>8400){
            document.querySelector(".container13Fleximg").style.opacity="1";
            document.querySelector(".container13FlexText").style.opacity="1";
            document.querySelector(".container13FlexText2").style.opacity="1";
            document.querySelector(".container13FlexText3").style.opacity="1";
        }
    
        if(value1>9900){
        document.querySelector(".container13Fleximg").style.opacity="0";
        document.querySelector(".container13FlexText").style.opacity="0";
        document.querySelector(".container13FlexText2").style.opacity="0";
        document.querySelector(".container13FlexText3").style.opacity="0";
            
        }
        if(value1>10000){
            document.querySelector(".container13Fleximg").style.opacity="1";
            document.querySelector(".container13FlexText").style.opacity="1";
            document.querySelector(".container13FlexText2").style.opacity="1";
            document.querySelector(".container13FlexText3").style.opacity="1";
        }
        
        
        
        if(value1>13300){
            document.querySelector(".container13Flex3").style.opacity="1";
        }else{
            document.querySelector(".container13Flex3").style.opacity="0";
        }


        if(value1>14900){
            document.querySelector(".container13Flex3").classList.remove('fadein');
            document.querySelector(".container13Flex3").classList.add('fadeout');
            document.querySelector(".container13Flex3").style.opacity="0";
        }else{
            document.querySelector(".container13Flex3").classList.remove('fadeout');
            document.querySelector(".container13Flex3").classList.add('fadein');
            // document.querySelector(".container13Flex3").style.opacity="1";
        }
        
        }
        // 모바일화면
        else{
            if(value1>100){
            document.querySelector(".container1flexText1 h1").classList.replace('container1flexANI1','transform3dZero') 
            }
            if(value1>200){
                document.querySelector(".container1flexText2 h1").classList.replace('container1flexANI2','transform3dZero') 
            }
            if(value1>300){
                document.querySelector(".container1flexText3 h1").classList.replace('container1flexANI3','transform3dZero') 
            }

            if(value1>700 ){
                document.querySelector(".container2fleximg").classList.add("tran")
                document.querySelector(".container2fleximg").classList.remove("tranRemove")
                document.querySelector("#menubar").style.opacity="0.8";
            }
            if(value1>800 ){
                document.querySelector(".container2fleximg").classList.remove("tran")
                document.querySelector(".container2fleximg").classList.add("tranRemove")
            }

            if(value1>1300 && value1<1500){
                document.querySelector(".container4fleximg").classList.add("tran")
                document.querySelector(".container4fleximg").classList.remove("tranRemove")
            }

            if(value1>1500 ){
                document.querySelector(".container4fleximg").classList.remove("tran")
                document.querySelector(".container4fleximg").classList.add("tranRemove")
            }

            if(value1>2000 && value1<2100){
                document.querySelector(".container5fleximg").classList.add("tran")
                document.querySelector(".container5fleximg").classList.remove("tranRemove")
            }

            if(value1>2300 ){
                document.querySelector(".container5fleximg").classList.remove("tran")
                document.querySelector(".container5fleximg").classList.add("tranRemove")
            }

            if(value1>2600 && value1<2700){
                document.querySelector(".container6fleximg").classList.add("tran")
                document.querySelector(".container6fleximg").classList.remove("tranRemove")
            }
            
            if(value1>3100 ){
                document.querySelector(".container6fleximg").classList.remove("tran")
                document.querySelector(".container6fleximg").classList.add("tranRemove")
            }
            if(value1>4600){
                document.querySelector(".container7mainText h1").classList.add("transform3d1")
            }else{
                document.querySelector(".container7mainText h1").classList.remove("transform3d1")
            }
            if(value1>4700){
                document.querySelector(".container7mainText h1").classList.add("transform3d2")
            }else{
                document.querySelector(".container7mainText h1").classList.remove("transform3d2")
            }
            if(value1>4800){
                document.querySelector(".container7mainText h1").classList.add("transform3d3")
            }else{
                document.querySelector(".container7mainText h1").classList.remove("transform3d3")
            }
            if(value1>4900){
                document.querySelector(".container7mainText h1").classList.remove("transform3d4")      
            }else{
                document.querySelector(".container7mainText h1").classList.remove("transform3d4")      
            }
            if(value1>5000 ){
                document.querySelector(".container7mainText h1").classList.add("transform3d5") 
            }else{
                document.querySelector(".container7mainText h1").classList.remove("transform3d5") 
            }
            if(value1>5100 ){
                document.querySelector(".container7mainText h1").classList.add("transform3d6")
            }else{
                document.querySelector(".container7mainText h1").classList.remove("transform3d6")
                
            }

            if(value1>5200){
                document.querySelector(".container8mainText1 h1").classList.replace('container8mainTextH1','transform3dZero') 
            }

            if(value1>5300){
                document.querySelector(".container8mainText2 h1").classList.replace('container8mainTextH1','transform3dZero') 
            }

            if(value1>5900){
                document.querySelector(".container9mainText1 h1").classList.replace('container9mainTextH1','transform3dSmall1') 
            }

            if(value1>6000){
                document.querySelector(".container9mainText1 h1").classList.replace('transform3dSmall1','transform3dSmall2') 
            }
            if(value1>6100){
                document.querySelector(".container9mainText1 h1").classList.replace('transform3dSmall2','transform3dSmall3') 
            }

        
            if(value1>6100){
                document.querySelector("#container10 div").classList.replace('container10Video','container10Video2') 
            }else{
                document.querySelector("#container10 div").classList.replace('container10Video2','container10Video') 
            }
            if(value1>6200){
                document.querySelector("#container10 div").classList.replace('container10Video2','container10Video3') 
            }else{
                document.querySelector("#container10 div").classList.replace('container10Video3','container10Video2') 
            }
            if(value1>6300){
                document.querySelector("#container10 div").classList.replace('container10Video3','container10Video4') 
            }else{
                document.querySelector("#container10 div").classList.replace('container10Video4','container10Video3') 
            }
            if(value1>6400){
                document.querySelector("#container10 div").classList.replace('container10Video4','container10Video5') 
            }else{
                document.querySelector("#container10 div").classList.replace('container10Video5','container10Video4') 
            }
            if(value1>6500){
                document.querySelector("#container10 div").classList.replace('container10Video5','container10Video6') 
            }else{
                document.querySelector("#container10 div").classList.replace('container10Video6','container10Video5') 
            }
            if(value1>=6600){
                document.querySelector("#container10 div").classList.replace('container10Video6','container10Video7')
            }else{
                document.querySelector("#container10 div").classList.replace('container10Video7','container10Video6')
            }
            if(value1>6800){
                document.querySelector(".container11Text h1").classList.remove('container1flexANI1');
                document.querySelector(".container11Text h1").classList.add('transform3dZero');
            }
            if(value1>6900){
                document.querySelector(".container11Text p").classList.remove('container1flexANI1');
                document.querySelector(".container11Text p").classList.add('transform3dZero');
            }

            if(value1>7100){
                document.querySelector(".container11Text2 h1").classList.remove('container1flexANI2');
                document.querySelector(".container11Text2 h1").classList.add('transform3dZero');
            }

            if(value1>7200){
                document.querySelector(".container11Text2 p").classList.remove('container1flexANI2');
                document.querySelector(".container11Text2 p").classList.add('transform3dZero');
            }

        
        
            if(value1<8000){
                document.querySelector(".container13Fleximg").style.opacity="0";
                document.querySelector(".container13FlexText").style.opacity="0";
                document.querySelector(".container13FlexText2").style.opacity="0";
                document.querySelector(".container13FlexText3").style.opacity="0";
                
            }

            if(value1>8100){
                document.querySelector(".container13Fleximg").style.opacity="1";
                document.querySelector(".container13FlexText").style.opacity="1";
                document.querySelector(".container13FlexText2").style.opacity="1";
                document.querySelector(".container13FlexText3").style.opacity="1";
            }
        
            if(value1>9900){
            document.querySelector(".container13Fleximg").style.opacity="0";
            document.querySelector(".container13FlexText").style.opacity="0";
            document.querySelector(".container13FlexText2").style.opacity="0";
            document.querySelector(".container13FlexText3").style.opacity="0";
             
            }
            if(value1>10000){
                document.querySelector(".container13Fleximg").style.opacity="1";
                document.querySelector(".container13FlexText").style.opacity="1";
                document.querySelector(".container13FlexText2").style.opacity="1";
                document.querySelector(".container13FlexText3").style.opacity="1";
            }
        
        
        
            if(value1>13300){
                document.querySelector(".container13Flex3").style.opacity="1";
            }else{
                document.querySelector(".container13Flex3").style.opacity="0";
            }


            if(value1>14900){
                document.querySelector(".container13Flex3").classList.remove('fadein');
                document.querySelector(".container13Flex3").classList.add('fadeout');
                document.querySelector(".container13Flex3").style.opacity="0";
            }else{
                document.querySelector(".container13Flex3").classList.remove('fadeout');
                document.querySelector(".container13Flex3").classList.add('fadein');
                
            }
        
        }
            
    });