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

import BRenderGear from "../../../common/classes/BRenderGear";

// == CLASSE(S)
// ============================================================================

class BRenderGearCanvas extends BRenderGear
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR
    protected _canvas:HTMLCanvasElement;
    protected _context:CanvasRenderingContext2D;

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

    constructor(canvas:HTMLCanvasElement, context:CanvasRenderingContext2D)
    {
        super();

        this._canvas = canvas;
        this._context = context;
    };

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

    get canvas():HTMLCanvasElement
    {
        return this._canvas;
    }

    get context():CanvasRenderingContext2D
    {
        return this._context;
    }
};

// == EXPORTS
// ============================================================================

export default BRenderGearCanvas;