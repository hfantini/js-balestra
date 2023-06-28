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

import BVector2 from "../../../../math/classes/BVector2";
import BVector3 from "../../../../math/classes/BVector3";
import BTransform from "../../../../math/classes/BTransform";
import BObject from "../../../common/classes/BObject";

// == IMPORT(S)
// ============================================================================

// == CLASSE(S)
// ============================================================================

class BRectTransform extends BTransform
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR
    private _size:BVector2 = new BVector2();

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

    constructor();
    constructor(parent: BObject, position?: BVector3, scale?: BVector3, rotation?: BVector3, origin?:BVector3, size?: BVector2);

    constructor(...param: any[])
    {
        super(param[0], ...param);

        if(param.length === 6)
        {
            this._size = param[5];
        }
    }

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

    get size():BVector2
    {
        return this._size;
    }

    set size(value:BVector2)
    {
        this._size = value;
    }
};

// == EXPORTS
// ============================================================================

export default BRectTransform;