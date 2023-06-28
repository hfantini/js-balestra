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

import BVector3 from "../../../../math/classes/BVector3";
import BRectTransformCanvas from "./BRectTransformCanvas";

// == CLASSE(S)
// ============================================================================

class BVector3PositionCanvas extends BVector3
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR

	private _parent:BRectTransformCanvas|undefined = undefined;

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

	set parent(value:BRectTransformCanvas)
	{
		this._parent = value;
	}

	get Z():number
	{
		return this._Z;
	}

    set Z(value:number)
    {
		const oldValue = this._Z;
		this._Z = value;

        if(this._parent && value !== oldValue)
		{
			this._parent.dispatchEventZPosChanged();
		}
    }
};

// == EXPORTS
// ============================================================================

export default BVector3PositionCanvas;