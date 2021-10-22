/*

cloudinary.imageTag('Edelmira_Losilla_q8a8vz.png', {quality: 70, width: 512, crop: "scale"}).toHtml();

// The image is configured and called from cloudinary
cloudinary.url().transformation(new Transformation().quality(70).width(512).crop("scale")).imageTag("Edelmira_Losilla_q8a8vz.png");

*/

// Using HTML image layer

// Import the plugin
import {responsive, HtmlImageLayer} from "@cloudinary/html";
import {CloudinaryImage} from "@cloudinary/url-gen";

// Create a new HTML image element and inject it to the page
const imgTag = document.createElement('img');
document.body.appendChild(imgTag);

// Create your image
const myImage = new CloudinaryImage('sample', {cloudName: 'Edelmira_Losilla_q8a8vz.png'});

// Wire up Cloudinary to work with that element and use the responsive plugin and setting the image size
new HtmlImageLayer(imgTag, myImage, [responsive(200)]);

/* ------------------------------------ */

// Configure the breakpoint

breakpoint_img = function (width) {
  return 50 * Math.ceil(width / 50);
}
let cl_img = imgCoudinary.Cloudinary.new({cloud_name: "Edelmira_Losilla_q8a8vz.png"});
cl_img.config({breakpoints:breakpoint_img, responsive_use_breakpoints:"resize"})
cl_img.responsive();

/* Cloudinary library install: npm i @cloudinary/url-gen @cloudinary/html --save */

// *** The webp format doesn´t work in chrome *** It is solved using the parameter "f_auto"

/*

check the version of the cloudinary core
https://unpkg.com/cloudinary-core@latest/cloudinary-core-shrinkwrap.js

*/

/* 

  Responsive images with next.js: 
  
  https://spacejelly.dev/posts/how-to-use-cloudinary-images-in-next-js-with-blurred-placeholders/
  https://github.com/vercel/next.js/discussions/18374

*/