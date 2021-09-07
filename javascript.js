let originalHeight = 150;
let originalWidth = 150;
let originalBgColor = "orange";
let originalBorder = "0px";
let originalBorderRadius = "0px";
let originalMargin = 25;
let opacityIterator = 0.1;
var redVal, greenVal, blueVal, theRadius, theMargin;

document.getElementById("unHideBtn").addEventListener("click", function(){
    document.getElementById("myAdditions").style.display = "";
});

document.getElementById("resetBtn").addEventListener("click", function(){
    document.getElementById("myAdditions").style.display = "none";
    document.getElementById("box").style.height = originalHeight + "px";
    document.getElementById("box").style.width = originalWidth + "px";
    document.getElementById("box").style.backgroundColor = originalBgColor;
    document.getElementById("box").style.margin = originalMargin + "px";
    document.getElementById("box").style.opacity = 1;
    document.getElementById("box").style.border = originalBorder;
    document.getElementById("box").style.borderRadius = originalBorderRadius;
});

document.getElementById("growBtn").addEventListener("click", function(){
    document.getElementById("box").style.height = (parseInt(document.getElementById("box").style.height)+50) + "px";
    document.getElementById("box").style.width = (parseInt(document.getElementById("box").style.width)+50) + "px";
});

document.getElementById("growHeightBtn").addEventListener("click", function(){
    document.getElementById("box").style.height = (parseInt(document.getElementById("box").style.height)+50) + "px";
});

document.getElementById("growWidthBtn").addEventListener("click", function(){
    document.getElementById("box").style.width = (parseInt(document.getElementById("box").style.width)+50) + "px";
});

document.getElementById("shrinkHeightBtn").addEventListener("click", function(){
    document.getElementById("box").style.height = (parseInt(document.getElementById("box").style.height)-50) + "px";
});

document.getElementById("shrinkWidthBtn").addEventListener("click", function(){
    document.getElementById("box").style.width = (parseInt(document.getElementById("box").style.width)-50) + "px";
});

document.getElementById("blueBtn").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("randomColorBtn").addEventListener("click", function(){
    redVal = Math.random() * 255;
    greenVal= Math.random() * 255;
    blueVal = Math.random() * 255;
    document.getElementById("box").style.backgroundColor = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
});

document.getElementById("fadeBtn").addEventListener("click", function(){
    if (document.getElementById("box").style.opacity >0 ) {
        document.getElementById("box").style.opacity = Number(document.getElementById("box").style.opacity)-Number(opacityIterator);
    }
});

document.getElementById("brightenBtn").addEventListener("click", function(){
    if (document.getElementById("box").style.opacity < 1 ) {
        document.getElementById("box").style.opacity = Number(document.getElementById("box").style.opacity)+Number(opacityIterator);
    }
});

document.getElementById("makeCircleBtn").addEventListener("click", function(){
    if (parseInt(document.getElementById("box").style.height) > parseInt(document.getElementById("box").style.width)) {
        theRadius = parseInt(document.getElementById("box").style.height);
    } else {
        theRadius = parseInt(document.getElementById("box").style.width);
    }
    document.getElementById("box").style.height = theRadius + "px";
    document.getElementById("box").style.width = theRadius + "px";
    //document.getElementById("box").style.border = "1px solid " + document.getElementById("box").style.backgroundColor;
    document.getElementById("box").style.borderRadius = "1000px";
});

document.getElementById("moveRightBtn").addEventListener("click", function() {
    theMargin = parseInt(document.getElementById("box").style.marginLeft) + originalMargin;
    document.getElementById("box").style.marginLeft = theMargin + "px";
});
document.getElementById("moveLeftBtn").addEventListener("click", function() {
    alert(parseInt(document.getElementById("box").style.marginLeft));
    if (parseInt(document.getElementById("box").style.marginLeft) > 25) {
        theMargin = parseInt(document.getElementById("box").style.marginLeft) - originalMargin;
        document.getElementById("box").style.marginLeft = theMargin + "px";
    }
});