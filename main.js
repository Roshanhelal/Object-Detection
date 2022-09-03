var img;
var status1="";
var objects=[];
function preload(){
    img=loadImage("dog_cat.jpg");
}

function setup(){ 
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded)
}

function draw(){
    image (img,0,0,640,420);
    if(status1 != ""){
        document.getElementById("status").innerHTML="status: objects detected"
        for (let i = 0; i < objects.length; i++) {
            
        console.log(objects);
        percent=floor(objects[i].confidence*100);
        fill("red");
        text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
        noFill();
        stroke("red");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
    }
}

function modelLoaded(){
    console.log("model is loaded");
    document.getElementById("status").innerHTML="status: detecting object";
    status1=true;
    objectDetector.detect(img,gotresults);
}

function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
      
        objects=results;
    }
}