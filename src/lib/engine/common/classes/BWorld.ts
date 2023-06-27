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

import IContainer from "../interfaces/IContainer";
import BObject from "./BObject";

// == CLASSE(S)
// ============================================================================

class BWorld extends BObject implements IUpdatable, IDrawable
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR
	protected _container:IContainer|undefined = undefined;

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	draw(): void
	{

	}

	update(): void
	{

	}

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

	get container():IContainer|undefined
	{
		return this._container;
	}
};

// == EXPORTS
// ============================================================================

export default BWorld;