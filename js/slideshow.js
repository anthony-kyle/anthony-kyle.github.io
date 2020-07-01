/**************************************************************************************************/
//	 Slideshow
//	 Author: Anthony McGrath
/**************************************************************************************************/
                                                            // Slideshow Tweaks
                                                            // Variables are measured in seconds
changeDelay = 4; 
onClickChangeSpeed = 0.5;  
automaticChangeSpeed = 1.0; 
                                                            // Automatic Variables
changeDelay = changeDelay * 1000;
repeatDelay =	changeDelay/2;

function autoChange(){
                                                            // Auto Slideshow
                                                            // Find out how many slides there are
    slide1 = document.getElementById("banner");
    divs = slide1.getElementsByTagName("span");
    numberOfSlides = divs.length;
    timer = setTimeout("change('slide_1', 1)", changeDelay);							
} // autoChange()

function repeat(old, num){
    var oldImage = old;
    var number = num;
    timer = setTimeout("change('"+oldImage+"',"+number+")", repeatDelay);
} // repeat(old, num)

function change(old, num){
        var oldImage = old;
        if (oldImage == "stop"){
            functionStop();
        } else {
            var number = num;
            if (number < numberOfSlides){
                number++;
            } else {
                number = 1;
            }
        var id =  "slide_";
        var imageID = id+number;
        if(imageID != oldImage){
            Effect.Appear(imageID, { duration: automaticChangeSpeed });
            Effect.Fade(oldImage, { duration: automaticChangeSpeed });
        }
        oldImage = imageID;
        timer = setTimeout("repeat('"+oldImage+"', "+number+")", repeatDelay);
    } // end if-else
} // change(old, num)

function functionStop(){
                                                            // Stop Show on click
    clearTimeout(timer);
} // functionStop()