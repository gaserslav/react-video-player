import "./VideoPlayer.css"
import { useEffect } from "react";
function randID(){
    const alf="qwertyuiopasdfghjklmnbvcxz123456789"
    let ret=""
    for(let i=0;i<10;i++){
        ret+=alf.charAt(parseInt(Math.random()*alf.length))
    }
    return ret
}

function secondsToMinsAndSeconds(sec){

    const minuts=parseInt(sec/60)

    const s=parseInt(sec-minuts*60)

    return `${minuts}:${s}`
}


 

function VideoPlayer(config){

    let width=config.width
    let height=config.height
    if(!width){
        width="100px"
    }
    if(!height){
        height="100px"
    }
    const videoID=randID()
    const rangeID=randID()
    const durationID=randID()
    const timeID=randID()
    const video=document.createElement('video')
    video.src=config.src

    useEffect(() => {
        try{
            const canvas=document.getElementById(videoID)   
            const range=document.getElementById(rangeID) 
            range.value=0
            canvas.width=1000
            canvas.height=1000 
            console.log(video.currentTime)
            const graf=canvas.getContext('2d') 
            function onEveryFrame(){ 
            graf.drawImage(video,0,0,1000,1000) 
            document.getElementById(timeID).innerHTML=secondsToMinsAndSeconds(video.currentTime)
            document.getElementById(durationID).innerHTML=secondsToMinsAndSeconds(video.duration)
            range.value=video.currentTime/video.duration*100
            
            setTimeout(onEveryFrame,1000/60)
            }
            onEveryFrame()

        }catch(e){console.log(e)}
      
    })
    

    function pauseORplay(){
    video.paused?video.play():video.pause()
    }
    function skeepOnVideo(){
        const range=document.getElementById(rangeID).value
        video.currentTime=range/100*video.duration
    }
    


    const main_css=`width: ${width};height: ${height};position: relative;`
    const main=(
    <div Style={main_css} > 
    <canvas className="canvasJocaVideoPlayer" id={videoID} onClick={pauseORplay}></canvas>
    
    <div className="controlsJocaVideoPlayer">
    <span id={timeID} className="timeJocaVideoPlayer">{video.currentTime}</span>
    <span id={durationID} className="durationJocaVideoPlayer">{video.duration}</span>
        <input type={"range"} id={rangeID} min={0} max={100} className={"JocaVideoTime"} onChange={skeepOnVideo}></input>

    </div>


    </div>
    )



return main
}

export default VideoPlayer