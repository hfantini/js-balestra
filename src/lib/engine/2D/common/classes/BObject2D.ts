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

import BObject from "../../../common/classes/BObject";
import IDrawable from "../../../../graphics/common/interfaces/IDrawable";
import BRectTransform from "./BRectTransform";
import BRenderGear from "../../../../graphics/common/classes/BRenderGear";

// == CLASSE(S)
// ============================================================================

class BObject2D extends BObject implements IDrawable
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

	constructor(id:string, parent?:BObject) 
	{
		super(id, parent);
		this.transform = new BRectTransform(this);
	}

	draw(_renderGear:BRenderGear): void { }

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	// == GETTER(S) AND SETTER(S)
	// ========================================================================
};

// == EXPORTS
// ============================================================================

export default BObject2D;