/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var $eng, $chi, $Eng, $Chi, $chi1, $chi2, $chi3, counter = 0;
    
    $('.English').flip({
        axis: 'y',
        trigger: 'manual'
    });
    
    $('.English').click(function(){
        $('.Chinese').not($chi1, $chi2, $chi3).css('pointer-events', 'auto');
        $(this).flip(true);
        $(this).children('p').css('color', 'black');
        $('.English').not(this).css('pointer-events', 'none');
        start();
        $eng = $(this).attr("id");
        $Eng = $(this);
    });
    
    $('.Chinese').flip({
        axis: 'y',
        trigger: 'manual'
    });
    
    $('.Chinese').click(function(){
        $(this).flip(true);
        $chi = $(this).attr("id");
        $Chi = $(this);
        
        if ($eng == $chi){
            $(this).children('.back').css("background-color", "green");
            $Eng.children('.back').css("background-color", "green");
            $Eng.css("pointer-events", "none");
            $(this).css("pointer-events", "none");
            if (counter == 0){
                $chi1 = $Chi;
            }
            else if (counter == 1){
                $chi2 = $Chi;
            }
            else{
                $chi3 = $Chi;
            }
            $('.English').not($Eng).css('pointer-events', 'auto');
            $('.Chinese').css('pointer-events', 'none');
            counter++;
            if (counter == 4){
                stop();
            }
        }
        
        else{
            $(this).children('.back').css("background-color", "red");
            $Eng.children('.back').css("background-color", "red").delay(1500).queue(function(next){
                $Eng.children('.back').css("background-color", "lightblue");
                $Eng.flip(false);
                $Chi.children('.back').css("background-color", "grey");
                $Chi.flip(false);
                $('.English').css('pointer-events', 'auto');
                $('.Chinese').css('pointer-events', 'none');
                next();
            });
        }
    });
});
