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

// == CLASSE(S)
// ============================================================================

class BTime
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR

	private _totalElapsedTimeMS:number = 0;
	private _totalElapsedTimeS:number = 0;
	private _deltaTime:number = 0;
	private _currentFPS:number = 0;
	private _lastFrameTime:number = 0;

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

	constructor()
	{

	}

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	update(totalElapsedTime:number)
	{
		if(this._totalElapsedTimeMS === 0)
		{
			// IGNORES THE FIRST FRAME
			this._totalElapsedTimeMS = totalElapsedTime;
		}
		else
		{
			this._lastFrameTime = totalElapsedTime - this._totalElapsedTimeMS;
			this._deltaTime = this._lastFrameTime / 1000;
			this._currentFPS = Math.round(1000 / this._lastFrameTime);
			this._totalElapsedTimeMS = totalElapsedTime;
		}

		this._totalElapsedTimeS = Math.round(totalElapsedTime / 1000);
	}

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

	get totalElapsedTimeMS(): number
	{
		return this._totalElapsedTimeMS;
	}

	get totalElapsedTimeS(): number
	{
		return this._totalElapsedTimeS;
	}

	get deltaTime(): number
	{
		return this._deltaTime;
	}

	get currentFPS(): number
	{
		return this._currentFPS;
	}	
	
	get lastFrameTime(): number
	{
		return this._lastFrameTime;
	}	
};

// == EXPORTS
// ============================================================================

export default BTime;