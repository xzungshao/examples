define(function(require,exports,module){

    var $ = require('jquery');

    var aone=$('#one').text();
    var atwo=$('#two').text();

   exports.showme = function(str)
   {
      alert(str+'  hehe, no modules');

      console.info(aone);

    }


   exports.showher = function(her)
   {
       alert(her+' hehe , modules');
       console.info(atwo);
   }

    //module.exports =los;
    
    
    exports.los = function(){
       var aa='i am aa';
       var bb='i am bb';

            
	     console.info('dddd');

	    $("#one").bind('click',function(){
	    
	         alert('you are clicking  one link');
	    
	    
	    });

	    $("#two").bind('click',function(){
	    
	        alert('you are clicking two link');
	    })
    
    };

})
