document.addEventListener("DOMContentLoaded", function(){
    // 움직이는 헤더
    window.onmousemove = function(e){
        console.log(e.clientY < 60);
        if(e.clientY < 60){
            document.querySelector("header").style.top = "0px";
        }else{
            document.querySelector("header").style.top = "-80px";
        }
    }

    // 패럴렉스
    window.onscroll = function(){
        console.log(window.scrollY);
        // opinion
        if(window.scrollY>1400){
            document.getElementById("opinion1").classList.add("active");
        } else {
            document.getElementById("opinion1").classList.remove("active");
        }
        if(window.scrollY>1500){
            document.getElementById("opinion2").classList.add("active");
        } else {
            document.getElementById("opinion2").classList.remove("active");
        }
        // survey
        if(window.scrollY>2200){
            document.getElementById("survey1").classList.add("active");
        } else {
            document.getElementById("survey1").classList.remove("active");
        }
        if(window.scrollY>2300){
            document.getElementById("survey2").classList.add("active");
        } else {
            document.getElementById("survey2").classList.remove("active");
        }
        // solution
        if(window.scrollY>3600){
            document.getElementById("solution").classList.add("active");
        } else {
            document.getElementById("solution").classList.remove("active");
        }
    }
    // 제이쿼리 사용
    $(document).ready(function(){
        $("#charcter1").click(function(){
            $("#resultname").text("술고래행성");
            $('#charcter_select').removeClass('charcter2 charcter3 charcter4 charcter5 charcter6 charcter7 charcter8');
            $("#charcter_select").addClass('charcter1');
         });
         $("#charcter2").click(function(){
            $("#resultname").text("짜릿짜릿행성");
            $('#charcter_select').removeClass('charcter1 charcter3 charcter4 charcter5 charcter6 charcter7 charcter8');
            $("#charcter_select").addClass('charcter2');
         });
         $("#charcter3").click(function(){
            $("#resultname").text("집돌이행성");
            $('#charcter_select').removeClass('charcter1 charcter2 charcter4 charcter5 charcter6 charcter7 charcter8');
            $("#charcter_select").addClass('charcter3');
         });
         $("#charcter4").click(function(){
            $("#resultname").text("혼술혼술행성");
            $('#charcter_select').removeClass('charcter1 charcter2 charcter3 charcter5 charcter6 charcter7 charcter8');
            $("#charcter_select").addClass('charcter4');
         });
         $("#charcter5").click(function(){
            $("#resultname").text("파티파티행성");
            $('#charcter_select').removeClass('charcter1 charcter2 charcter3 charcter4 charcter6 charcter7 charcter8');
            $("#charcter_select").addClass('charcter5');
         });
         $("#charcter6").click(function(){
            $("#resultname").text("미식가행성");
            $('#charcter_select').removeClass('charcter1 charcter2 charcter3 charcter4 charcter5 charcter7 charcter8');
            $("#charcter_select").addClass('charcter6');
         });
         $("#charcter7").click(function(){
            $("#resultname").text("쿨쿨행성");
            $('#charcter_select').removeClass('charcter1 charcter2 charcter3 charcter4 charcter5 charcter6 charcter8');
            $("#charcter_select").addClass('charcter7');
         });
         $("#charcter8").click(function(){
            $("#resultname").text("수다수다행성");
            $('#charcter_select').removeClass('charcter1 charcter2 charcter3 charcter4 charcter5 charcter6 charcter7');
            $("#charcter_select").addClass('charcter8');
         });
    });

});