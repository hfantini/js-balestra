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
import BScreen from "./BScreen";
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
	protected _world:BWorld|undefined = undefined;
	protected _time:BTime = new BTime();
	protected _canvas:HTMLCanvasElement;
	protected _domContainer:HTMLDivElement;
	protected _extra:any;

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

	constructor(id:string, container:HTMLDivElement, canvas:HTMLCanvasElement, world?:BWorld)
	{
		super(id);
		this._world = world;
		this._canvas = canvas;
		this._domContainer = container;
	}

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	createUpdateGear():BUpdateGear
	{
		return new BUpdateGear(
			this._time, 
			new BScreen(this._domContainer), 
			this._extra
		);
	};

	createRenderGear():BRenderGear
	{
		return new BRenderGear();
	};	

    tick(lastFrameTime:number, extra?: any)
    {
		this._extra = extra;

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

	get canvas():HTMLCanvasElement
	{
		return this._canvas;
	}
};

// == EXPORTS
// ============================================================================

export default BEngine;