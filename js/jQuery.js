$(function (){
    $('#top').on('click',function(event){
        event.preventDefault();
        scroll(0,0);
    });
    
    var isOpen = false;
    $('#bars').on('click',function(event){
        event.preventDefault();
        
        if(isOpen == true){
             $('#nav').show(600);
            isOpen = false;
            
        }else{
             $('#nav').hide(500);
            isOpen = true;
            
        }
       
    });
});