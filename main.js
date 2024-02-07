var sound=""
var pulsoDireitox=0
var pulsoDireitoy=0
var pulsoEsquerdox=0
var pulsoesquerdoy=0
var scoredireito=0
var scoresquerdo=0
function preload(){
    sound=loadSound("music.mp3")
}
function setup(){
    canvas=createCanvas(400, 400)
    video=createCapture(VIDEO)
    canvas.center()
    canvas.position(400,400)
    video.hide()
    posinet=ml5.poseNet(video, modelloade)
    posinet.on("pose",gotposes)
}
function draw(){
    image(video, 0, 0, 400, 400)
    fill("red")
    if(scoredireito>0.2){
        circle(pulsoDireitox,pulsoDireitoy,20)
        if(pulsoDireitoy>0&& pulsoDireitoy<200){
            sound.rate(0.5)
        }
        if(pulsoDireitoy>200&& pulsoDireitoy<330){
            sound.rate(1.0)
        }
        if(pulsoDireitoy>330){
            sound.rate(2.5)
        }
    }
    if(scoresquerdo>0.2){
        circle(pulsoEsquerdox,pulsoesquerdoy,20)
        numero=Number(pulsoesquerdoy)
        numero=floor(numero*2)/1000
        sound.setVolume(numero)
    }
    }
function modelloade(){
    console.log("modelo carregado")
}
 function gotposes(results){
    if(results.length>0){
        scoredireito= results[0].pose.keypoints[10].score
        scoresquerdo= results[0].pose.keypoints[9].score
        pulsoDireitox= results[0].pose.rightWrist.x
        pulsoDireitoy= results[0].pose.rightWrist.y
        pulsoEsquerdox= results[0].pose.leftWrist.x
        pulsoEsquerdoy= results[0].pose.leftWrist.y
    }  
}
function play(){
    sound.play()
    sound.setVolume(1)
    sound.rate(1)
    
} 
        





}

