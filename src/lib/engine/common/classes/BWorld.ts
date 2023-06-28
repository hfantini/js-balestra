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

import IDrawable from "../interfaces/IDrawable";
import BObject from "./BObject";

// == CLASSE(S)
// ============================================================================

class BWorld extends BObject implements IDrawable
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	draw(): void
	{

	}

	// == GETTER(S) AND SETTER(S)
	// ========================================================================
};

// == EXPORTS
// ============================================================================

export default BWorld;