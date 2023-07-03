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

import { BRenderGear, BRenderGearCanvas } from "../../../..";
import BError from "../../../../error/classes/BError";
import BEngine from "../../../common/classes/BEngine";
import BWorld from "../../../common/classes/BWorld";

// == CLASSE(S)
// ============================================================================

class BEngineCanvas extends BEngine
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR
    
    private _canvas:HTMLCanvasElement;
    private _context:CanvasRenderingContext2D;

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

	constructor(id:string, canvas:HTMLCanvasElement, world?:BWorld)
	{
		super(id, world);
        this._canvas = canvas;

        const context = this._canvas.getContext("2d");

        if(!context)
        {
            throw new BError("Canvas is not supported by this device");
        }

        this._context = context;
	}

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	createRenderGear():BRenderGear
	{
		return new BRenderGearCanvas(this._canvas, this._context);
	};

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

export default BEngineCanvas;