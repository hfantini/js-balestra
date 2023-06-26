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

import Transform from "../../../math/classes/Transform";

// == CLASSE(S)
// ============================================================================

class BOject implements IUpdatable, IDrawable
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR
    private _id:string = "";
    private _transform:Transform = new Transform();

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

    constructor(id:string) 
    {
        this._id = id;
    }

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

    get id():string
    {
        return this._id;
    }

    get transform():Transform
    {
        return this._transform;
    }
    
    set transform(value:Transform)
    {
        this._transform = value;
    }
};

// == EXPORTS
// ============================================================================

export default BOject;