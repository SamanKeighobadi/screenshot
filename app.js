const video = document.querySelector("video");
const picture = document.querySelector("img");

const streamVideo = async () => {
  try {
    const media = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    });
    video.srcObject = media;

    // add event
    document.addEventListener("keypress",e => {
        if(e.code !== "KeyP") reutrn ;
        // create canvas element
        const canvas = document.createElement('canvas')
        canvas.width  = video.width;
        canvas.height = video.height;
        // Draw new image
        canvas.getContext('2d').drawImage(video,0,0,video.width,video.height);
        
    })

  } catch (ex) {
    console.log(ex);
  }
};

streamVideo();
