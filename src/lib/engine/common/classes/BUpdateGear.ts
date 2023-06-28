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

import BTime from "./BTime";

// == CLASSE(S)
// ============================================================================

class BUpdateGear
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR

    private _time: BTime;
    
	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

    public constructor(time:BTime)
    {
        this._time = time;
    }

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

    public get time():BTime
    {
        return this._time
    }
};

// == EXPORTS
// ============================================================================

export default BUpdateGear;