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

import BObject from "./BObject";
import BTime from "./BTime";
import BWorld from "./BWorld";

// == CLASSE(S)
// ============================================================================

class BEngine extends BObject
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR
	private _world:BWorld|undefined = undefined;
	private _time:BTime = new BTime();

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

	constructor(id:string, world?:BWorld)
	{
		super(id);
		this._world = world;
	}

	// == METHOD(S) & EVENT(S)
	// ========================================================================

    tick(lastFrameTime:number)
    {
		// UPDATE TIME
		this._time.update(lastFrameTime);

		// ASSEMBLE ENGINE DTO

		// UPDATE & DRAW

		this.update();
		this.draw();
    }

	update() 
	{
		if(this._world)
		{
			this._world.update();
		}
	}

	draw()
	{
		if(this._world)
		{
			this._world.draw();
		}
	}

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

	get time():BTime
	{
		return this._time;
	}

	get world():BWorld|undefined
	{
		return this._world;
	}

	set world(value:BWorld|undefined)
	{
		this._world = value;
		
		if(this._world)
		{
			this._world.parent = this;
		}
	}	
};

// == EXPORTS
// ============================================================================

export default BEngine;