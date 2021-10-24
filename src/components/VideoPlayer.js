import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";

const VideoPlayer = () => {
  const videoRef = useRef();
  return (
    <CloudinaryContext cloud_name="hola_ihbzhs">
    	<div>
        <Video
          publicId="https://res.cloudinary.com/cronologias-invisible/video/upload/v1634869855/cronologias/360/hola_ihbzhs.mp4"
          width="100%"
          controls
          innerRef={videoRef}
        />
      </div>
    </CloudinaryContext>
  );
};

export default VideoPlayer;

// install package: npm i cloudinary
// References: https://cloudinary.com/blog/how_to_serve_videos_in_next_js_applications_with_cloudinary