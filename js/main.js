$('li.top').click(function(){  // li class="top" 클릭시
    var id_check = $(this).attr("id"); // id_check 에 id 값 저장
    if(typeof id_check =="undefined"){ 
    // id_check 값이 undefined 이면 아무일 x 
    }else{  // id_check 값이 있으면 아래 실행
        if($('#h'+id_check).css("display")=='block'){ // '#h'+id_check css display 가 block 이면
        $('#h'+id_check).css("display", "none"); // none 안보이게 설정
    }
    else{                                       //아니면
        $('#h'+id_check).css("display", "block"); // 보이게 설정
    }
    }
});
