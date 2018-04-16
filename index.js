import scalesColorbrewer from './scales/colorbrewer';
import scalesMpl from './scales/mpl';
import scalesPerceptualRainbow from './scales/perceptualRainbow';
import scalesMaterial from './scales/perceptualRainbow';

import schemesColorbrewer from './schemes/colorbrewer';

let scales = Object.assign(
	{}, 
	scalesColorbrewer,
	scalesMpl,
	scalesPerceptualRainbow,
	scalesMaterial
);

let schemes = Object.assign(
	{},
	schemesColorbrewer
);

let api = {
	scales, 
	themes
};

export {
	api as default,
	scales,
	schemes
};