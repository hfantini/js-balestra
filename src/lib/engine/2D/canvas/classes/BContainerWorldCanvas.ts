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

import BContainer from "../../../common/classes/BContainer";
import BWorld from "../../../common/classes/BWorld";
import IContainerAddEvent from "../../../common/interfaces/IContainerAddEvent";
import IContainerRemoveEvent from "../../../common/interfaces/IContainerRemoveEvent";
import BObject2DCanvas from "./BObject2DCanvas";
import BWorldCanvas from "./BWorldCanvas";

// == CLASSE(S)
// ============================================================================

class BContainerWorldCanvas extends BContainer
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR
	private _elementBuffer:Array<BObject2DCanvas> = new Array<BObject2DCanvas>();

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

	constructor(parent:BWorldCanvas)
	{
		super(parent);

		window.addEventListener("IContainerAddChildEvent", (e) =>{
			this.onAddChild( (e as CustomEvent).detail );
		});

		window.addEventListener("IContainerRemoveChildEvent", (e) =>{
			this.onRemoveChild( (e as CustomEvent).detail );
		});		
	}

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	addChild(value: BObject2DCanvas): void
	{
		super.addChild(value);
		window.dispatchEvent(
			new CustomEvent<IContainerAddEvent>('IContainerAddChildEvent', 
				{
					detail: 
					{
						world: this.parent as BWorld, 
						object: value
					}
				}
			)
		);
	}

	removeChild(value: BObject2DCanvas): void
	{
		super.removeChild(value);
		window.dispatchEvent(
			new CustomEvent<IContainerRemoveEvent>('IContainerRemoveChildEvent', 
				{
					detail: 
					{
						world: this.parent as BWorld,
						object: value
					}
				}
			)
		);		
	}

	private addChildToElementBuffer = (obj:BObject2DCanvas) =>
	{
		if(!this._elementBuffer.includes(obj))
		{
			if(this._elementBuffer.length === 0)
			{
				this._elementBuffer.push(obj);
			}
			else
			{
				const zPos = obj.transform.position.Z;

				if(zPos <= this._elementBuffer[0].transform.position.Z)
				{
					this._elementBuffer.unshift(obj);
				}
				else if(zPos >= this._elementBuffer[this._elementBuffer.length - 1].transform.position.Z)
				{
					this._elementBuffer.push(obj);
				}
				else
				{
					this.elementBuffer.push(obj);
					this.elementBuffer.sort( (value, value2) => 
					{
						if(value.transform.position.Z === value2.transform.position.Z)
						{
							return 0;
						}
						else if(value.transform.position.Z < value2.transform.position.Z)
						{
							return -1;
						} 
						else
						{
							return 1;
						}
					})
				}
			}
		};
	}

	onAddChild(evt:IContainerAddEvent)
	{
		if(this.parent?.id === evt.world?.id && evt.object instanceof BObject2DCanvas)
		{
			this.addChildToElementBuffer(evt.object);
		}
	}

	onRemoveChild(evt:IContainerRemoveEvent)
	{
		if(this.parent?.id === evt.world?.id && evt.object instanceof BObject2DCanvas)
		{
			if(this._elementBuffer.includes(evt.object))
			{
				this._elementBuffer.splice(this._elementBuffer.indexOf(evt.object), 1);
			}
		}
	}

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

	get elementBuffer():Array<BObject2DCanvas>
	{
		return this._elementBuffer;
	}
};

// == EXPORTS
// ============================================================================

export default BContainerWorldCanvas;