let format_time = document.querySelector('.timeer_display span');

// hard code the val.
let minutes = 00;
let seconds = 00;
let milisec = 00;

let watch;

//start watch
function start_watch(e){
    
    //change the icon
    e.name=='play'?e.name='pause':e.name='play';

    if(e.name =='pause'){

         watch = setInterval(()=>{

            //updated the milisec
            milisec<=90 ? milisec = milisec+1 : milisec = 1;

            //updated the sec
            milisec == 90 ?  seconds++  :  seconds;

            //updated the mins
            seconds == 60  ? ((minutes = minutes+=1),seconds = 1)  : ((minutes),seconds);

            //display the timing
            format_time.innerHTML =`${minutes} : ${seconds} : ${milisec}`;

        },10);
    }
    else{

        //stop watch
        clearInterval(watch);
    }
}

//restart watch
function restart_watch(){

    clearInterval(watch);
    document.querySelector('.start_btn').name='play';
    
    minutes=00;
    seconds=00;
    milisec=00;

    format_time.innerHTML =`${minutes} : ${seconds} : ${milisec}`;
}