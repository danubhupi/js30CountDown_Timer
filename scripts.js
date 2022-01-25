let timeLeft=document.querySelector('.display__time-left');
let endTime=document.querySelector('.display__end-time');

document.querySelectorAll('[data-time]')
.forEach(button=>button.addEventListener('click',(event)=>{
    timer(event.target.dataset.time);
}))

let countdown;

timer=(seconds)=>{
    clearInterval(countdown);
    let now=Date.now();
    const then=now + seconds*1000;
    display(seconds);
    displayEndTime(then);

    countdown=setInterval(()=>{
        let secondsleft=Math.round((then-Date.now())/1000);
       
        if(secondsleft<0)
        {
            clearInterval(countdown);
            return;
        }
        

        display(secondsleft);

        
    },1000);
}


display=(seconds)=>{
    // console.log(seconds);
    let min=Math.floor(seconds/60);
    let second=seconds%60;
    let secondsDisp;
    let minDisp;

    if(second<10){
         secondsDisp=`0${second}`;
    }
    else{
        secondsDisp=`${second}`;
    }
    if(min<10){
         minDisp=`0${min}`;
    }
    else{
        minDisp=`${min}`;
    }
    // console.log(Math.floor(min),secondsDisp);
    timeLeft.textContent=`${minDisp}:${secondsDisp}`;
}


displayEndTime=(then)=>{
    let endTimeDate=new Date(then);
    console.log(endTimeDate);

              endTime.textContent=`Till ${endTimeDate.getHours()<10?'0':''}${endTimeDate.getHours()}:${endTimeDate.getMinutes()<10?'0':''}${endTimeDate.getMinutes()}:${endTimeDate.getSeconds()<10?'0':''}${endTimeDate.getSeconds()}`;
}

document.customForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    timer(event.target.minutes.value*60);
})