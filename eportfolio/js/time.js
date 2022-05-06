$(function () {
$(".time_button div").click(function() {
    var x = this.className;
    $('.time_button div').removeAttr('id');
    $(this).attr('id' , 'checked');
    console.log(x);

    if (this.className =='button_1'){
        $(".time_table_button_1").css("display","block"); 
        $(".time_table_button_2").css("display","none"); 
        $(".time_table_button_3").css("display","none"); 
        $(".time_table_button_4").css("display","none"); 
        console.log('1');
    }
    else if (this.className =='button_2'){
        $(".time_table_button_1").css("display","none"); 
        $(".time_table_button_2").css("display","block"); 
        $(".time_table_button_3").css("display","none"); 
        $(".time_table_button_4").css("display","none"); 
        console.log('2');
    }
    else if (this.className =='button_3'){
        $(".time_table_button_1").css("display","none"); 
        $(".time_table_button_2").css("display","none"); 
        $(".time_table_button_3").css("display","block"); 
        $(".time_table_button_4").css("display","none"); 
        console.log('3');
    }
    else{
        $(".time_table_button_1").css("display","none"); 
        $(".time_table_button_2").css("display","none"); 
        $(".time_table_button_3").css("display","none"); 
        $(".time_table_button_4").css("display","block"); 
        console.log('4');
    }


 });

 
});
