
        var var1 = "";
        var flag = 0;
        $(document).ready(function(){
           $("#but").click(function(){
            var enter = $("#inp1").val();
              if(enter != ""){
               console.log(enter);
               $("#one").append("<li><input type='checkbox' id='myCheck'><span class = 'newer'> "+enter+"</span> <input class = 'inp2'>  <button class='ed'>Edit</button> <button class='sv'>Save</button> <button class ='del1'>Delete</button></li>");
               $('#inp1').val("");

               $(".del1").on('click',function(){
               $(this).parent().remove();
               });

            

            $(".ed").click(function(){
                var c = $(this).parent().find('.newer').text();
                $(this).parent().find('.inp2').val(c);

                $(".sv").off().on('click',function(){
                var s = $(this).siblings(".inp2").val().trim();
                $(this).siblings(".newer").html(s);
                $('.inp2').val("");        
                });
               
            });
             
             

            $("#one").on('click','#myCheck',function(){
                $(this).parent().appendTo('#two');
            });

            $("#two").on('click','#myCheck',function(){
                $(this).parent().appendTo('#one');
            });

              }

           });
            
           
        });


        
           
        

        
        
