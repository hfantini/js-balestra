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

import BInvalidParamException from "../../../../error/classes/BInvalidParamException";
import BContainer from "../../../common/classes/BContainer";
import BWorld from "../../../common/classes/BWorld";
import IContainerAddEvent from "../../../common/mocks/interfaces/IContainerAddEvent";
import IContainerRemoveEvent from "../../../common/mocks/interfaces/IContainerRemoveEvent";
import ICanvasObjectZPosChangeEvent from "../interfaces/ICanvasObjectZPosChangeEvent";
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

		window.addEventListener("IContainerAddChildEvent", (e) =>
		{
			this.onAddChild( (e as CustomEvent).detail );
		});

		window.addEventListener("IContainerRemoveChildEvent", (e) =>
		{
			this.onRemoveChild( (e as CustomEvent).detail );
		});

		window.addEventListener("ICanvasObjectZPosChangeEvent", (e) =>
		{
			this.onCanvasObjectChangeZPos( (e as CustomEvent).detail );
		});			
	}

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	addChild(value: BObject2DCanvas): void
	{
		if(value.parent === this.parent)
		{
			const count = this.count();
			super.addChild(value);
			if(this.count() == count + 1)
			{
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
		}
		else
		{
			super.addChild(value);
		}
	}

	removeChild(value: BObject2DCanvas|string): void
	{
		let id = typeof value === 'string' ? value : value.id;
        const obj = this._data.get(id);

		if(obj)
		{
			if(obj.parent === undefined)
			{
				const count = this.count();
				super.removeChild(value);
				if(this.count() == count - 1)
				{
					window.dispatchEvent(
						new CustomEvent<IContainerRemoveEvent>('IContainerRemoveChildEvent', 
							{
								detail: 
								{
									world: this.parent as BWorld,
									object: obj
								}
							}
						)
					);		
				}
			}
			else
			{
				super.removeChild(value);
			}
		}
		else
		{
			throw new BInvalidParamException(`BObject with id [${id}] doesn't exists in this container.`);
		}
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

	private onAddChild(evt:IContainerAddEvent)
	{
		if(this.parent?.id === evt.world?.id && evt.object instanceof BObject2DCanvas)
		{
			this.addChildToElementBuffer(evt.object);
		}
	}

	private onRemoveChild(evt:IContainerRemoveEvent)
	{
		if(this.parent?.id === evt.world?.id && evt.object instanceof BObject2DCanvas)
		{
			if(this._elementBuffer.includes(evt.object))
			{
				this._elementBuffer.splice(this._elementBuffer.indexOf(evt.object), 1);
			}
		}
	}

	private onCanvasObjectChangeZPos(evt:ICanvasObjectZPosChangeEvent)
	{
		if(this.parent?.id === evt.world?.id && evt.object instanceof BObject2DCanvas)
		{
			if(this._elementBuffer.includes(evt.object))
			{
				this._elementBuffer.splice(this._elementBuffer.indexOf(evt.object), 1);
				this.addChildToElementBuffer(evt.object);
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