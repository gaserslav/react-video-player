# react-video-player
Component for video playing so user cant download your video (that easily)


just put that folder into project and it import it 


```javascript

import VideoPlayer from "./react-video-player/VideoPlayer";

function Index(){ 

    return (
    <VideoPlayer width="50vw" height="50vh" src="http://localhost:8080/Database/video/11" className="video-canvas"></VideoPlayer>
    
    )
    }
    
    export default Index;
```

*width* and *height* are size parametars (its css parametars so it can be 50px/10%/20vh/4vw) and *src* is source parameter

video should look something like this ...
