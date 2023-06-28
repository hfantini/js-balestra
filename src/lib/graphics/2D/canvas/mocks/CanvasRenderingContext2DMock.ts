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

// == METHOD(S) & EVENT(S)
// ========================================================================

const createRenderingContext2DMock = ():CanvasRenderingContext2D =>
{
    return new CanvasRenderingContext2D();
}

// == EXPORTS
// ============================================================================

export default createRenderingContext2DMock;