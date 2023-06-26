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

import BVector4 from "./BVector4";

// == CLASSE(S)
// ============================================================================

class BRect
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR
    private _data:BVector4 = new BVector4();

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

    constructor();
    constructor(value: BVector4|number);
    constructor(x: number, y: number, width: number, height: number);

    constructor(...param: any[]) 
    {
        if(param.length === 0)
        {
            this._data = new BVector4(0);
        }
        else if(param.length === 1)
        {
            this._data = new BVector4(param[0])
        }
        else
        {
            this._data = new BVector4(param[0], param[1], param[2], param[3])
        }
    }

	// == METHOD(S) & EVENT(S)
	// ========================================================================

    getBounds():BVector4
    {
        let retValue = new BVector4();

        retValue.X = this._data.X;
        retValue.Y = this._data.Y;
        retValue.Z = retValue.X + this._data.Z;
        retValue.W = retValue.Y + this._data.W;

        return retValue;
    }

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

    get data():BVector4
    {
        return this._data;
    }

    set data(value:BVector4)
    {
        this._data = value;
    }

    get X():number
    {
        return this._data.X;
    }

    set X(value:number)
    {
        this.data.X = value;
    }

    get Y():number
    {
        return this._data.Y;
    }

    set Y(value:number)
    {
        this.data.Y = value;
    }
    
    get width():number
    {
        return this._data.Z;
    }

    set width(value:number)
    {
        this.data.Z = value;
    }    
    
    get height():number
    {
        return this._data.W;
    }
    
    set height(value:number)
    {
        this.data.W = value;
    }
};

// == EXPORTS
// ============================================================================

export default BRect;