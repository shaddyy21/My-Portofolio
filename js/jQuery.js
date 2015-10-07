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
    
    $('#bbj-info').on('click',function(event){
        event.preventDefault();
        
        if(isOpen == true){
            $('.bbj-infos').show(600);
            isOpen = false;
            $('.arrow').removeClass('fa-chevron-circle-down');
            $('.arrow').addClass('fa-chevron-circle-up');
            
            
        }else{
             $('.bbj-infos').hide(500);
            isOpen = true;
            $('.arrow').removeClass('fa-chevron-circle-up');
            $('.arrow').addClass('fa-chevron-circle-down');
        }
       
    });
});