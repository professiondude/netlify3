// A $( document ).ready() block.
$( document ).ready(function() {
    //alert('test');
  
  //(document).on('change blur', '#t-size', chkSize);
   $(document).on('change', '#t-size', chkSize);
  
  function chkSize() {
    
    var t_size = $('#t-size').val();
   
    if(t_size == 'other') {
      //alert('t_size');
      
      $('#other').removeAttr('disabled')
    } //end if
    else{
      $('#other').attr('disabled', true);
      $('#other').val('');
    }
    
  } //end function
  

  
});