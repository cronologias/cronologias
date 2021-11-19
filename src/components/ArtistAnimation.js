import React from "react";
import dynamic from 'next/dynamic'

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
ssr: false,
})
const brushRadius = 120;
const imageOpacity = 0.15;
export default () => {
	const setup = (p5, canvasParentRef) => {
        let height = window.innerWidth >= 960 ? 600 : window.innerWidth >= 768 ? 450 : 348;
        let Descktop = window.innerWidth >= 960 ? 15 : 0;
        p5.createCanvas(window.innerWidth-Descktop, height).parent(canvasParentRef);
        p5.fill(`rgba(244, 120, 67, ${1 - imageOpacity})`);
        p5.rect(0, 0, window.innerWidth, height);
        console.log(window.innerWidth-Descktop)

	};
    const mouseMoved = (p5) => {
        p5.erase();
        p5.strokeWeight(brushRadius);
        p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
        p5.noErase();
            return false;
    }

	return <Sketch setup={setup} mouseMoved={mouseMoved} style={{position:'absolute',top:'0',height:'100%'}}/>;
};