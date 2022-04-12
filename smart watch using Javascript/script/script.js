function grey(){
    document.getElementById("myimage").src= "https://www.gadgets4geeks.com.au/WebRoot/Store/Shops/gadgets4geeks/Products/S-AW-2094H/03-rubber-sport-band-with-pin-tuck-closure-for-apple-watch-42mm-grey_ml.jpg"
}

function darkblue(){
    document.getElementById("myimage").src= "https://www.gadgets4geeks.com.au/WebRoot/Store/Shops/gadgets4geeks/Products/S-AW-2094D/03-rubber-sport-band-with-pin-tuck-closure-for-apple-watch-42mm-dark-blue_ml.jpg"
}

function pink(){
    document.getElementById("myimage").src= "https://www.gadgets4geeks.com.au/WebRoot/Store/Shops/gadgets4geeks/Products/S-AW-2094F/02-rubber-sport-band-pin-tuck-closure-for-apple-watch-44mm-42mm-pink_ml.jpg"
}

function red(){
    document.getElementById("myimage").src= "https://www.gadgets4geeks.com.au/WebRoot/Store/Shops/gadgets4geeks/Products/S-AW-2094R/02-rubber-sport-band-with-pin-tuck-closure-for-apple-watch-42mm-red_ml.jpg"
}

function timer(){
    document.getElementById('heart').style.visibility = 'hidden';
    document.getElementById('heart-rate').style.visibility = 'hidden';
    document.getElementById('time').style.visibility = 'visible';

    setInterval(function(){

        function addZero(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
        }
    
        var d = new Date();
        var x = document.getElementById("demo");
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        document.getElementById('time').innerHTML = h + " : " + m + " : " + s;
    },0);
}

function heartbeat() {

    document.getElementById('time').style.visibility = 'hidden';
    document.getElementById('heart').style.visibility = 'visible';
    document.getElementById('heart-rate').style.visibility = 'visible';

}

