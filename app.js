const video = document.querySelector("video");
const picture = document.querySelector("img");

const streamVideo = async () => {
  try {
    const media = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    });
    video.srcObject = media;
  } catch (ex) {
    console.log(ex);
  }
};

streamVideo();
