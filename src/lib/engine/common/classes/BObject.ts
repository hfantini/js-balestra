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

import BTransform from "../../../math/classes/BTransform";
import IUpdatable from "../interfaces/IUpdatable";
import BContainer from "./BContainer";
import BUpdateGear from "./BUpdateGear";

// == CLASSE(S)
// ============================================================================

class BObject implements IUpdatable
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR
    private _id:string = "";
    private _transform:BTransform = new BTransform(this);
    private _parent:BObject|undefined = undefined;
    protected _container:BContainer = new BContainer(this);

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

    constructor(id:string, parent?:BObject) 
    {
        this._id = id;
        this.parent = parent;
    }

	// == METHOD(S) & EVENT(S)
	// ========================================================================

    getParentByType<T>(type: any):T|undefined
    {
        let retValue:any = undefined;

        if(this instanceof type)
        {
            retValue = this;
        }

        if(!retValue  && this._parent)
        {
            let lastParent = this.parent;

            while(!retValue)
            {
                if(!lastParent)
                {
                    break;
                }
                else if(lastParent instanceof type)
                {
                    retValue = lastParent;
                }
                else
                {
                    lastParent = lastParent.parent;
                }
            }
        }

        return retValue as T;
    }

    update(updateGear:BUpdateGear): void
    {
        if(this.container.count() > 0)
        {
            this._container.getAllChildren().forEach( (obj) =>
            {
                obj.update(updateGear);
            } );
        }
    }

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

    get id():string
    {
        return this._id;
    }

    get parent():BObject|undefined
    {
        return this._parent;
    }

    set parent(value:BObject|undefined)
    {
        if(value)
        {
            if(this.parent)
            {
                this.parent.container.removeChild(this);
            }

            this._parent = value;
            this._parent?.container.addChild(this);
        }
        else
        {
            if(this._parent)
            {
                const container = this._parent.container;
                this._parent = undefined;
                container.removeChild(this);
            }
        }
    }    

    get transform():BTransform
    {
        return this._transform;
    }
    
    set transform(value:BTransform)
    {
        this._transform = value;
    }

    get container(): BContainer
    {
        return this._container;
    }
};

// == EXPORTS
// ============================================================================

export default BObject;