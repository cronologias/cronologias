import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";

const VideoPlayer = () => {
  const videoRef = useRef();
  return (
    <CloudinaryContext cloud_name="https://res.cloudinary.com/cronologias-invisible/video/upload/v1634869855/cronologias/360/hola_ihbzhs.mp4">
    	<div>
        <Video
          publicId="hola_ihbzhs"
          width="100%"
          controls
          innerRef={videoRef}
        />
      </div>
    </CloudinaryContext>
  );
};

cloudinary.videoTag('hola_ihbzhs.mp4').toHtml()

export default VideoPlayer;

/* install package: 

npm i cloudinary
npm i cloudinary-video-player
npm i claudinary-core

*/
// References: https://cloudinary.com/blog/how_to_serve_videos_in_next_js_applications_with_cloudinary