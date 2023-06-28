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
import BContainer from "./BContainer";

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
    protected _container:BContainer = new BContainer();

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

    constructor(id:string, parent?:BObject) 
    {
        this._id = id;
        this._parent = parent;
    }

	// == METHOD(S) & EVENT(S)
	// ========================================================================

    getParentByType<T>(type: any):T|undefined
    {
        let retValue:any = undefined;

        if(this._parent)
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

    update(): void
    {
        if(this.container.count() > 0)
        {
            this._container.getAllChildren().forEach( (obj) =>
            {
                obj.update();
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
        this._parent = value;
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