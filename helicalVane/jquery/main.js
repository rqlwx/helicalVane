function checkNumber(val){

   if(isNaN(val.value)){
        alert("只能输入数字，请检查输入!");
        val.focus();
    }  
}

function calculate(){

    // 前台页面传参
    var bigD = $("#bigD").val();
    var smallD = $("#smallD").val();
    var helicalH = $("#helicalH").val();
    var pai = 3.1415926;

    if(bigD == "" || smallD == "" || helicalH == ""){
        alert("参数不能为空,请检查输入！");
    }else{
        // 计算逻辑
        var temp1 = (pai*bigD)*(pai*bigD)+helicalH*helicalH;
        var bL = Math.sqrt(temp1);
        var temp2 = (pai*smallD)*(pai*smallD)+helicalH*helicalH;
        var sL = Math.sqrt(temp2);
        var h = (bigD-smallD)/2;
        var r = (sL*h)/(bL-sL);
        var aErF = 360*(1-bL/(2*pai*(r+h)));
        // 度转换为弧度，因js中的sin()函数中的值为弧度
        var temp3 = (aErF/2)*0.017453293;
        var temp4 = Math.sin(temp3);
        var C = 2*(r+h)*temp3;
        // 计算结果返回前台
        $("#outterSpiralLine").html(bL == null ? "&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+bL.toFixed(3));
        $("#innerSpiralLine").html(sL == null ? "&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+sL.toFixed(3));
        $("#vaneHeight").html(h == null ? "&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+h.toFixed(3));
        $("#vaneSpanRadius").html(r == null ? "&nbsp;" : r.toFixed(3));
        $("#notchAngle").html(aErF == null ? "&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+aErF.toFixed(3));
        $("#incisionLength").html(C == null ? "&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+C.toFixed(3));
    }
    
}