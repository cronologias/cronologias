import React from "react";
import dynamic from 'next/dynamic'

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
ssr: false,
})
const brushRadius = 50;
const imageOpacity = 0.15;
const imgHeight = 450
export default (props) => {
	const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth, imgHeight).parent(canvasParentRef);
        p5.fill(`rgba(0, 0, 0, ${1 - imageOpacity})`);
        p5.rect(0, 0, window.innerWidth, imgHeight);

	};
    const mouseMoved = (p5) => {
        p5.erase();
        p5.strokeWeight(brushRadius);
        p5.line(pmouseX, pmouseY, mouseX, mouseY);
        p5.noErase();
            return false;
    }

	return <Sketch setup={setup} mouseMoved={mouseMoved} />;
};

