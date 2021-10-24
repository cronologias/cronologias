
// Install the modules: npm i cloudinary-build-url

import { buildUrl } from 'cloudinary-build-url';

// Call cloudinary 
const url = buildUrl('Edelmira_Losilla_q8a8vz', {
    cloud: {
      cloudName: 'Cronologias invisible',
    }
});

// Img settings
<div className={styles.card}>
  <Image
    src={url}
    alt=""
    width={1000}
    height={750}
  />
  <h3>Edelmira Image</h3>
</div>

/*
	https://www.youtube.com/watch?v=n7VeENVQntY
	https://www.contentful.com/blog/2021/09/08/personalized-image-social-sharing-with-cloudinary-nextjs/
	https://morioh.com/p/b3754ba3cfa1
	https://github.com/mayashavin/cloudinary-api
	https://cloudinary.com/blog/how_to_serve_videos_in_next_js_applications_with_cloudinary
	https://spacejelly.dev/posts/how-to-use-cloudinary-images-in-next-js-with-blurred-placeholders/#step-3-using-cloudinarys-url-builder-for-dynamically-generated-images
*/