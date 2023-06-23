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

import InvalidParamException from "../../error/classes/InvalidParamException";
import IBVector from "../interfaces/IBVector";
import BVector2 from "./BVector2";
import BVector3 from "./BVector3";
import MathException from "./MathException";

// == CLASSE(S)
// ============================================================================

class BVector4 implements IBVector<BVector4>
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR
    private _X: number = 0;
    private _Y: number = 0;
	private _Z: number = 0;
	private _W: number = 0;

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

	public constructor();
	public constructor(value: number|BVector2|BVector3|BVector4);
	public constructor(X: number, Y: number);
	public constructor(X: number, Y: number, Z: number);
	public constructor(X: number, Y: number, Z: number, W: number);

	public constructor(...param: any[])
	{
		if(param.length == 1) 
		{
			if(typeof param[0] === "number")
			{
				this._X = param[0];
				this._Y = param[0];
				this._Z = param[0];
				this._W = param[0];
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
				this._Z = vec.Z;
			}
			else
			{
				const vec = param[0] as BVector4;
				this._X = vec.X;
				this._Y = vec.Y;
				this._Z = vec.Z;
				this._W = vec.W;
			}	
		}
		else if(param.length == 2)
		{
			this._X = param[0];
			this._Y = param[1];
		}
		else if(param.length == 3)
		{
			this._X = param[0];
			this._Y = param[1];
			this._Z = param[2];
		}
		else if(param.length == 4)
		{
			this._X = param[0];
			this._Y = param[1];
			this._Z = param[2];
			this._W = param[3];
		}				
	}

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	static from(vec:any): BVector4
	{
		if(vec instanceof BVector2) 
		{
			return new BVector4(vec.X, vec.Y);
		}
		else if(vec instanceof BVector3)
		{
			return new BVector4(vec.X, vec.Y, vec.Z);
		}
		else if(vec instanceof BVector4)
		{
			return new BVector4(vec.X, vec.Y, vec.Z, vec.W);
		}		
		
		throw new InvalidParamException("The param 'vec' should be a BVector of any scale");
	}

	sum(value: number | IBVector<BVector4>, weight:IBVector<BVector4> = new BVector4(1, 1, 1, 1)): BVector4
	{
		let retValue = new BVector4();

		if(typeof value === "number")
		{
			const wVec = weight as BVector4;

			retValue.X = wVec.X !== 0 ? this.X + value : this.X;
			retValue.Y = wVec.Y !== 0 ? this.Y + value : this.Y;
			retValue.Z = wVec.Z !== 0 ? this.Z + value : this.Z;
			retValue.W = wVec.W !== 0 ? this.W + value : this.W;
		}
		else
		{
			const vec = value as BVector4;

			retValue.X = this.X + vec.X;
			retValue.Y = this.Y + vec.Y;
			retValue.Z = this.Z + vec.Z;
			retValue.W = this.W + vec.W;
		}

		return retValue;
	}

	sub(value: number | IBVector<BVector4>, weight:IBVector<BVector4> = new BVector4(1, 1, 1, 1)): BVector4
	{
		let retValue = new BVector4();

		if(typeof value === "number")
		{
			const wVec = weight as BVector4;

			retValue.X = wVec.X !== 0 ? this.X - value : this.X;
			retValue.Y = wVec.Y !== 0 ? this.Y - value : this.Y;
			retValue.Z = wVec.Z !== 0 ? this.Z - value : this.Z;
			retValue.W = wVec.W !== 0 ? this.W - value : this.W;
		}
		else
		{
			const vec = value as BVector4;

			retValue.X = this.X - vec.X;
			retValue.Y = this.Y - vec.Y;
			retValue.Z = this.Z - vec.Z;
			retValue.W = this.W - vec.W;
		}
		
		return retValue;
	}

	multi(value: number | IBVector<BVector4>, weight:IBVector<BVector4> = new BVector4(1, 1, 1, 1)): BVector4
	{
		let retValue = new BVector4();

		if(typeof value === "number")
		{
			const wVec = weight as BVector4;

			retValue.X = wVec.X !== 0 ? this.X * value : this.X;
			retValue.Y = wVec.Y !== 0 ? this.Y * value : this.Y;
			retValue.Z = wVec.Z !== 0 ? this.Z * value : this.Z;
			retValue.W = wVec.Z !== 0 ? this.W * value : this.W;
		}
		else
		{
			const vec = value as BVector4;

			retValue.X = this.X * vec.X;
			retValue.Y = this.Y * vec.Y;
			retValue.Z = this.Z * vec.Z;
			retValue.W = this.W * vec.W;
		}		

		return retValue;
	}
	
	div(value: number | IBVector<BVector4>, weight:IBVector<BVector4> = new BVector4(1, 1, 1, 1)): BVector4
	{
		let retValue = new BVector4();

		if(typeof value === "number")
		{
			if(value == 0)
			{
				throw new MathException("Division by zero");
			}

			const wVec = weight as BVector4;

			retValue.X = wVec.X !== 0 ? this.X / value : this.X;
			retValue.Y = wVec.Y !== 0 ? this.Y / value : this.Y;
			retValue.Z = wVec.Z !== 0 ? this.Z / value : this.Z;
			retValue.W = wVec.W !== 0 ? this.W / value : this.W;
		}
		else
		{
			const vec = value as BVector4;

			if(vec.X == 0 || vec.Y == 0 || vec.Z == 0 || vec.W == 0)
			{
				throw new MathException("Division by zero");
			}

			retValue.X = this.X / vec.X;
			retValue.Y = this.Y / vec.Y;
			retValue.Z = this.Z / vec.Z;
			retValue.W = this.W / vec.W;
		}		

		return retValue;
	}	

	clone(): BVector4
	{
		return new BVector4(this._X, this._Y, this._Z, this._W);
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

	public get Z(): number
	{
		return this._Z;
	}

	public set Z(value: number)
	{
		this._Z = value;
	}	
	
	public get W(): number
	{
		return this._W;
	}

	public set W(value: number)
	{
		this._W = value;
	}		
};

// == EXPORTS
// ============================================================================

export default BVector4;