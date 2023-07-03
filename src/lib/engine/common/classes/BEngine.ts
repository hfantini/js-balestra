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

import BRenderGear from "../../../graphics/common/classes/BRenderGear";
import BObject from "./BObject";
import BTime from "./BTime";
import BUpdateGear from "./BUpdateGear";
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

	createUpdateGear():BUpdateGear
	{
		return new BUpdateGear(this._time);
	};

	createRenderGear():BRenderGear
	{
		return new BRenderGear();
	};	

    tick(lastFrameTime:number)
    {
		// UPDATE TIME
		this._time.update(lastFrameTime);

		// ASSEMBLE ENGINE DTO

		// UPDATE & DRAW

		this.update( this.createUpdateGear() );

		if(this._world)
		{
			this._world.draw( this.createRenderGear() );
		}
    }

	update(updateGear:BUpdateGear) 
	{
		super.update(updateGear);

		if(this._world)
		{
			this._world.update(updateGear);
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