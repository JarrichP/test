function removeLoader(content){
    $(content).on('load', function(){
        console.log("loading done");
        
        $('.ballen').removeClass('active');
        $('.vierkant').removeClass('active');
        $('#overlay').addClass('einde');
        // $('#overlay').fadeOut();
        
    });
}

    $.ajax({ url: 'template/content.php', 
    beforeSend: function(){
        console.log('before send');
        $('.ballen').addClass('active');
        $('.vierkant').addClass('active');
        $('#vierkant-begin').removeClass('active');
        
    },
    success: function(data){  
        $('#wrapper').append(data),
        console.log('succes');
       
            removeLoader(data);
        
        
            
    }}); 
