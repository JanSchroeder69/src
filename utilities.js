var counter;



window.addEventListener('keypress', function(){
  
  console.log('amogus');
  
  counter = 1;

  
});



export const drawRect = (detections, ctx) =>{
  // Loop through each prediction
  detections.forEach(prediction => {

    // Extract boxes and classes
    const [x, y, width, height] = prediction['bbox']; 
    var text = prediction['class']; 

    // Set styling
    var color = Math.floor(1500020).toString(16);

    console.log(prediction);
    
    




    if (counter == 1) {

      if (prediction['class']=="person") {

        color = 'red';
        text = 'enemy';
        ctx.lineWidth = 5;
        ctx.font = '30px Arial';
      }
      else {

            ctx.linwWidth = 0;


      }
      
      

    
    }
    else {
      color = 'green';
      ctx.lineWidth = 3;
      ctx.font = '18px Arial';
    }


    


    


    

     
    ctx.strokeStyle =  color



    


  

    // Draw rectangles and text
    
    ctx.beginPath();   
    ctx.fillStyle = color
    ctx.fillText(text, x, y);
    ctx.strokeRect(x, y, width, height); 
    ctx.stroke();
  });
}






