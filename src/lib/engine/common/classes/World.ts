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

import BOject from "./BObject";

// == CLASSE(S)
// ============================================================================

abstract class World extends BOject implements IUpdatable, IDrawable
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

	// == METHOD(S) & EVENT(S)
	// ========================================================================

    update(): void 
    {

    }

    draw(): void
    {

    }

	// == GETTER(S) AND SETTER(S)
	// ========================================================================
};

// == EXPORTS
// ============================================================================