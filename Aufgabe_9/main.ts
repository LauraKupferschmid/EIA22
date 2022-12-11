namespace Aufgabe9 {
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

let audioliste : HTMLAudioElement[]=[sound0,sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8];
let audiomix : HTMLAudioElement[]=[sound0,sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8];

let counter =0
let play = document.querySelector ("#play")
let stop = document.querySelector ("#stop")
let myinterval

document.querySelector("#play").addEventListener('click',function(){
    play.classList.add('hidden');
    stop.classList.remove('hidden')
    myinterval= setInterval(() =>{
        PlaySample(audioliste[counter]);
        if(counter==2){
            counter=0
        }else{counter++}},500);
})

document.querySelector("#stop").addEventListener('click',function(){
    stop.classList.add('hidden');
    play.classList.remove('hidden')
    clearInterval(myinterval)
})

document.querySelector("#mix").addEventListener('click',function(){
        audioliste = [];
    while(audioliste.length < 3) {
        let i = Math.floor(Math.random()*8)+1;
        audioliste.push(audiomix[i]);
    }

})



 
 




}