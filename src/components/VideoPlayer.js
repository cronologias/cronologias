import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";

const VideoPlayer = () => {
  const videoRef = useRef();
  return (
    <CloudinaryContext cloud_name="cronologias-invisible">
    	<div>
        <Video
          publicId="https://res.cloudinary.com/cronologias-invisible/video/upload/v1635173303/cronologias/video%20360%20museo%20del%20jade/ejemplo_otpdfd.mp4"
          width="100%"
          controls
          innerRef={videoRef}
        />
      </div>
    </CloudinaryContext>
  );
};

//  cloudinary.videoTag('hola_ihbzhs.mp4').toHtml()

export default VideoPlayer;

/* install package: 

npm i cloudinary
npm i cloudinary-video-player

*/
// References: https://cloudinary.com/blog/how_to_serve_videos_in_next_js_applications_with_cloudinary