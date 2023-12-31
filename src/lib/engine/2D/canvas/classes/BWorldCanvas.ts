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

import BRenderGear from "../../../../graphics/common/classes/BRenderGear";
import BObject from "../../../common/classes/BObject";
import BWorld from "../../../common/classes/BWorld";
import BContainerWorldCanvas from "./BContainerWorldCanvas";

// == CLASSE(S)
// ============================================================================

class BWorldCanvas extends BWorld
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
		this._container = new BContainerWorldCanvas(this);
    }

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	draw(renderGear:BRenderGear): void
	{
		super.draw(renderGear);
		
		if(this._container && this._container instanceof BContainerWorldCanvas)
		{
			let currentContainer = this._container as BContainerWorldCanvas;
			currentContainer.elementBuffer.forEach( (element) => 
			{
				element.draw(renderGear);
			});
		}
	}

	// == GETTER(S) AND SETTER(S)
	// ========================================================================
};

// == EXPORTS
// ============================================================================

export default BWorldCanvas;