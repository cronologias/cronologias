const img = document.getElementById('res_js');

cloudinary.imageTag('Edelmira_Losilla_q8a8vz.png', {quality: 70, width: 512, crop: "scale"}).toHtml();

// Se configura la imagen y se trae de cloudinary
cloudinary.url().transformation(new Transformation().quality(70).width(512).crop("scale")).imageTag("Edelmira_Losilla_q8a8vz.png");

// *** Los formatos webp fallan en chrome *** Se soluciona utilizando el parametro "f_auto"

/*

https://cloudinary.com/documentation/image_transformations#quality_parameter

*/