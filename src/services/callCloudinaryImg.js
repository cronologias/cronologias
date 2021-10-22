
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
*/