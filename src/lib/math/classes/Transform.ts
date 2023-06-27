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

import BObject from "../../engine/common/classes/BObject";
import BVector3 from "./BVector3";

// == IMPORT(S)
// ============================================================================

// == CLASSE(S)
// ============================================================================

class Transform
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR
    private _parent:BObject|undefined = undefined;
    private _position:BVector3 = new BVector3();
    private _scale:BVector3 = new BVector3(1);
    private _rotation:BVector3 = new BVector3();
    private _origin:BVector3 = new BVector3();

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

    constructor(parent:BObject, position?: BVector3, scale?: BVector3, rotation?: BVector3, origin?:BVector3);

    constructor(...param: any[])
    {
        if(param[0])
        {
            this._parent = param[0];
        }

        if(param.length > 0)
        {
            if(param[1])
            {
                this._position = param[1];
            }

            if(param[2])
            {
                this._scale = param[2];
            }

            if(param[3])
            {
                this._rotation = param[3];
            }

            if(param[4])
            {
                this._origin = param[4];
            }
        }
    }

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

    get parent():BObject|undefined
    {
        return this._parent;
    }

    get position():BVector3
    {
        return this._position;
    }

    set position(value:BVector3)
    {
        this._position = value;
    }
    
    get scale():BVector3
    {
        return this._scale;
    }

    set scale(value:BVector3)
    {
        this._scale = value;
    }
    
    get rotation():BVector3
    {
        return this._rotation;
    }

    set rotation(value:BVector3)
    {
        this._rotation = value;
    }
    
    get origin():BVector3
    {
        return this._origin;
    }

    set origin(value:BVector3)
    {
        this._origin = value;
    }
};

// == EXPORTS
// ============================================================================

export default Transform;