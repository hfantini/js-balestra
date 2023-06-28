/*
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

	BALESTRA ENGINE
	---------------
	Simple graphical engine designed for web.
	
	  Author: Henrique Fantini
	 Contact: henrique.fantini@hotmail.com
    LinkedIn: https://www.linkedin.com/in/henrique-fantini/
	
	-- X --
	
	Published over MIT License @ 2023

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
*/

// == IMPORT(S)
// ============================================================================

import BInvalidParamException from "../../error/classes/BInvalidParamException";
import IBVector from "../interfaces/IBVector";
import BVector3 from "./BVector3";
import BVector4 from "./BVector4";
import BMathException from "./BMathException";

// == CLASSE(S)
// ============================================================================
class BVector2 implements IBVector<BVector2>
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR
    protected _X: number = 0;
    protected _Y: number = 0;

	// == CONSTRUCTOR(S)
	// ========================================================================

	public constructor();
	public constructor(value: number|BVector2|BVector3|BVector4);
	public constructor(X: number, Y: number);

	public constructor(...param: any[])
	{
		if(param.length == 1) 
		{
			if(typeof param[0] === "number")
			{
				this._X = param[0];
				this._Y = param[0];
			}
			else if(param[0] instanceof BVector2)
			{
				const vec = param[0] as BVector2;
				this._X = vec.X;
				this._Y = vec.Y;
			}
			else if(param[0] instanceof BVector3)
			{
				const vec = param[0] as BVector3;
				this._X = vec.X;
				this._Y = vec.Y;
			}
			else
			{
				const vec = param[0] as BVector4;
				this._X = vec.X;
				this._Y = vec.Y;
			}						
		}
		else if(param.length == 2) 
		{
			this._X = param[0];
			this._Y = param[1];
		}
	}

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	static from(vec:any): BVector2
	{
		if(vec instanceof BVector2 || vec instanceof BVector3 || vec instanceof BVector3) 
		{
			return new BVector2(vec.X, vec.Y);
		}
		
		throw new BInvalidParamException("The param 'vec' should be a BVector of any scale");
	}

	sum(value: number | IBVector<BVector2>, weight:IBVector<BVector2> = new BVector2(1, 1)): BVector2
	{
		let retValue = new BVector2();

		if(typeof value === "number")
		{
			const wVec = weight as BVector2;

			retValue.X = wVec.X !== 0 ? this.X + value : this.X;
			retValue.Y = wVec.Y !== 0 ? this.Y + value : this.Y;
		}
		else
		{
			const vec = value as BVector2;

			retValue.X = this.X + vec.X
			retValue.Y = this.Y + vec.Y
		}

		return retValue;
	}

	sub(value: number | IBVector<BVector2>, weight:IBVector<BVector2> = new BVector2(1, 1)): BVector2
	{
		let retValue = new BVector2();

		if(typeof value === "number")
		{
			const wVec = weight as BVector2;

			retValue.X = wVec.X !== 0 ? this.X - value : this.X;
			retValue.Y = wVec.Y !== 0 ? this.Y - value : this.Y;
		}
		else
		{
			const vec = value as BVector2;

			retValue.X = this.X - vec.X;
			retValue.Y = this.Y - vec.Y;
		}
		
		return retValue;
	}

	multi(value: number | IBVector<BVector2>, weight:IBVector<BVector2> = new BVector2(1, 1)): BVector2
	{
		let retValue = new BVector2();

		if(typeof value === "number")
		{
			const wVec = weight as BVector2;

			retValue.X = wVec.X !== 0 ? this.X * value : this.X;
			retValue.Y = wVec.Y !== 0 ? this.Y * value : this.Y;
		}
		else
		{
			const vec = value as BVector2;

			retValue.X = this.X * vec.X;
			retValue.Y = this.Y * vec.Y;
		}	

		return retValue;
	}
	
	div(value: number | IBVector<BVector2>, weight:IBVector<BVector2> = new BVector2(1, 1)): BVector2
	{
		let retValue = new BVector2();

		if(typeof value === "number")
		{
			if(value == 0)
			{
				throw new BMathException("Division by zero");
			}

			const wVec = weight as BVector2;

			retValue.X = wVec.X !== 0 ? this.X / value : this.X;
			retValue.Y = wVec.Y !== 0 ? this.Y / value : this.Y;
		}
		else
		{
			const vec = value as BVector2;

			if(vec.X == 0 || vec.Y == 0)
			{
				throw new BMathException("Division by zero");
			}

			retValue.X = this.X / vec.X;
			retValue.Y = this.Y / vec.Y;
		}		

		return retValue;
	}

	clone(): BVector2
	{
		return new BVector2(this._X, this._Y);
	}

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

	public get X(): number
	{
		return this._X;
	}

	public set X(value: number)
	{
		this._X = value;
	}

	public get Y(): number
	{
		return this._Y;
	}

	public set Y(value: number)
	{
		this._Y = value;
	}	
};

// == EXPORTS
// ============================================================================

export default BVector2;