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

import BRenderGearCanvas from "../classes/BRenderGearCanvas";
import createRenderingContext2DMock from "./CanvasRenderingContext2DMock";
import createHTMLCanvasElementMock from "./HTMLCanvasElementMock";

// == IMPORT(S)
// ============================================================================

// == METHOD(S) & EVENT(S)
// ========================================================================

const createBRenderGearCanvasMock = ():BRenderGearCanvas =>
{
    return new BRenderGearCanvas(createHTMLCanvasElementMock(), createRenderingContext2DMock());
}

// == EXPORTS
// ============================================================================

export default createBRenderGearCanvasMock;