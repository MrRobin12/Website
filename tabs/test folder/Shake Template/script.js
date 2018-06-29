window.addEventListener("deviceorientation", handleOrientation, true);  
var x = null;
var y = null;
var z = null;
    
function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha_z = event.alpha;
    var beta_x = event.beta;
    var gamma_y = event.gamma;
    
    x = beta_x;
    y = gamma_y;
    z = alpha_z;
    
    //document.getElementById("absolute").innerHTML = "Absolute: " + absolute;
    document.getElementById("alpha").innerHTML = "Z: " + alpha_z;
    document.getElementById("beta").innerHTML = "X: " + beta_x;
    document.getElementById("gamma").innerHTML = "Y: " + gamma_y;
}

//listen to shake event
    
    var shake_value = 1;
    document.getElementById("shake-value").innerHML = shake_value;
    
    var shakeEvent = new Shake({threshold: shake_value}); 
    shakeEvent.start();
    
    window.addEventListener('shake', function(){
        if (z > 0 && z < 360 && x < 20 && x > -20 && y > -20 && y < 20) {
            
            if (document.getElementById("body").style.backgroundColor == "red") {
                document.getElementById("body").style.backgroundColor = "white";
            } else {
                document.getElementById("body").style.backgroundColor = "red";
            }
        }
    }, false);

    //stop listening
    function stopShake(){
        shakeEvent.stop();
    }

     //check if shake is supported or not.
    if(!("ondevicemotion" in window)){alert("Not Supported");}    