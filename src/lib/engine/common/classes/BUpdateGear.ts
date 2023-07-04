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

import BScreen from "./BScreen";
import BTime from "./BTime";

// == CLASSE(S)
// ============================================================================

class BUpdateGear
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR

    private _time: BTime;
	private _screen: BScreen;
	private _extra?: any;
    
	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

    public constructor(time:BTime, screen:BScreen, extra?: any)
    {
        this._time = time;
		this._screen = screen;
		this._extra = extra;
    }

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

    public get time():BTime
    {
        return this._time
    }

	public get screen():BScreen
	{
		return this._screen;
	}

	public get extra():any|undefined
	{
		return this._extra;
	}
};

// == EXPORTS
// ============================================================================

export default BUpdateGear;