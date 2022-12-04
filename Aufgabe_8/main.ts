namespace Aufgabe8 {
    var sound0:HTMLAudioElement=new Audio ('./assets/DrumPad/A.mp3')
    var sound1:HTMLAudioElement=new Audio ('./assets/DrumPad/C.mp3')
    var sound2:HTMLAudioElement=new Audio ('./assets/DrumPad/F.mp3')
    var sound3:HTMLAudioElement=new Audio ('./assets/DrumPad/G.mp3')
    var sound4:HTMLAudioElement=new Audio ('./assets/DrumPad/hihat.mp3')
    var sound5:HTMLAudioElement=new Audio ('./assets/DrumPad/kick.mp3')
    var sound6:HTMLAudioElement=new Audio ('./assets/DrumPad/laugh-1.mp3')
    var sound7:HTMLAudioElement=new Audio ('./assets/DrumPad/laugh-2.mp3')
    var sound8:HTMLAudioElement=new Audio ('./assets/DrumPad/snare.mp3')
function PlaySample(s) {
s.play()
}

document.querySelector("#a").addEventListener('click',function(){PlaySample(sound0)})
document.querySelector("#c").addEventListener('click',function(){PlaySample(sound1)})
document.querySelector("#f").addEventListener('click',function(){PlaySample(sound2)})
document.querySelector("#g").addEventListener('click',function(){PlaySample(sound3)})
document.querySelector("#hihat").addEventListener('click',function(){PlaySample(sound4)})
document.querySelector("#kick").addEventListener('click',function(){PlaySample(sound5)})
document.querySelector("#laugh1").addEventListener('click',function(){PlaySample(sound6)})
document.querySelector("#laugh2").addEventListener('click',function(){PlaySample(sound7)})
document.querySelector("#snare").addEventListener('click',function(){PlaySample(sound8)})

let audioliste : HTMLAudioElement[]=[sound5,sound8,sound4];

let counter =0
document.querySelector("#play").addEventListener('click',function(){
    setInterval(function(){
        audioliste[counter].play();
        if(counter==2){
            counter=0
        }else{counter++}
    },500);
})


 
 




}