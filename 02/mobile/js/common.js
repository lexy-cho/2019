$( document ).ready( function() {
	var userAgent = window.navigator.userAgent;

	/* start Device 대응 사전 정의 ***********************************/
	var isMobile = function () {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	};
	if (isMobile()){
	}
	var isMobile2 = function () {
		//return /iPhone|iPad|iPod/i.test(navigator.userAgent);
		return /Android/i.test(navigator.userAgent);
	};

	if (isMobile2()){
		$('body').addClass('androidCase');
	} else {
		$('body').addClass('iosCase');
	}

	$(".popMNCase .close, .popLGCase .close, .popSMCase .btn button").click(function(){
		$('.popupDim, .popMNCase, .popLGCase, .popSMCase').hide();
	}); //팝업닫기 샘플

	$(document).ready(function (){
		$('.inputLb input').focus(function(){
			$(this).parents('label').addClass("focus");
		});
		$('.inputLb input').blur(function(){
			$(this).parents('label').removeClass("focus");
		});
	});

    // 페이지 제일 위로 이동
    $(".pageTop").hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $(".pageTop").fadeIn();
        }else{
            $(".pageTop").fadeOut();
        }
    });
    $(".pageTop").click(function(){
        $("html, body").animate({
            scrollTop : 0
        }, 300);
    });
});
