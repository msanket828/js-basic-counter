//access all the elements first

var counter=document.querySelector(".counter-text");
var	btns=document.querySelectorAll(".btn");

//access no inside the couter-text span
var count=counter.innerText;
//convert string to no using parseInt()
count=parseInt(count);
var d, stopInterval;
btns.forEach(function(btn){
	btn.addEventListener('click',function(e) {		
		var b=e.currentTarget;		
		if(b.classList.contains('start')){
			stopInterval=setInterval(function() {
				d=getCount();//this function is called every 500ml second			
			},200);							
		} else {
				if(b.classList.contains('stop') && counter.innerText!=0){																			
					clearInterval(stopInterval);
					counter.innerText=d;								
				}	else {	
						if(b.classList.contains('reset')){							
							clearInterval(stopInterval);
							counter.innerText=0;	
							count=0;
						}						
					}
			}

			//function defined 
			function getCount() {												
				count+=1;
				return counter.innerText=+count;											
			}		
	});	
})


