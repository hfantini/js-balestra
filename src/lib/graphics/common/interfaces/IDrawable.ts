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

import BRenderGear from "../classes/BRenderGear";

// == IMPORT(S)
// ============================================================================

// == INTERFACE(S)
// ============================================================================

interface IDrawable
{
	// == METHOD(S) & EVENT(S)
	// ========================================================================

	draw(renderGear:BRenderGear):void;
};

// == EXPORTS
// ============================================================================

export default IDrawable;