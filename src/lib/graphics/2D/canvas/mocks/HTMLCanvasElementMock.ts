/*
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

	BALESTRA ENGINE
	---------------
	Simple graphical engine designed for web.
	
	  Author: Henrique Fantini
	 Contact: henrique.fantini@hotmail.com
    LinkedIn: https://www.linkedin.com/in/henrique-fantini/
	
	-- X --
	
	Published over MIT License @ 2023

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
*/

// == IMPORT(S)
// ============================================================================

import createRenderingContext2DMock from "./CanvasRenderingContext2DMock";

// == METHOD(S) & EVENT(S)
// ========================================================================

const createHTMLCanvasElementMock = ():HTMLCanvasElement =>
{
    return {
		getContext: (_contextId:string, _options?: any) => {
			return createRenderingContext2DMock();
		}
	} as HTMLCanvasElement;
}

const createHTMLCanvasElementUnsupportedMock = ():HTMLCanvasElement =>
{
    return {
		getContext: (_contextId: string, _options?: any) => undefined
	} as unknown as HTMLCanvasElement;
}

// == EXPORTS
// ============================================================================

export default createHTMLCanvasElementMock;
export {
	createHTMLCanvasElementUnsupportedMock
}