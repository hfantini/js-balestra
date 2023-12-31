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

import BInvalidParamException from "../../../error/classes/BInvalidParamException";
import IContainer from "../mocks/interfaces/IContainer";
import BObject from "./BObject";

// == IMPORT(S)
// ============================================================================

// == CLASSE(S)
// ============================================================================

class BContainer implements IContainer
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR

    private _parent:BObject|undefined = undefined;
    protected _data:Map<string, BObject> = new Map<string, BObject>();

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

    constructor(parent?:BObject)
    {
        this._parent = parent;
    }

	// == METHOD(S) & EVENT(S)
	// ========================================================================

    addChild(value:BObject): void
    {
        if(this._data.has(value.id))
        {
            throw new BInvalidParamException(`BObject with name [${value.id}] already exists in this container.`);
        }

        if(value.parent === this.parent)
        {
            this._data.set(value.id, value);
        }
        else
        {
            value.parent = this.parent;
        }
    }

    removeChild(value: string | BObject): void
    {
        let id = typeof value === 'string' ? value : value.id;
        const obj = this._data.get(id);

        if(obj)
        {
            if(obj.parent === undefined && this._data.has(obj.id))
            {
                this._data.delete(id);
            }
            else if(obj.parent === this.parent)
            {
                obj.parent = undefined;
            }
        }
        else
        {
            throw new BInvalidParamException(`BObject with id [${id}] doesn't exists in this container.`);
        }
    }

    removeChildren(values: string[] | BObject[]): void
    {
        values.forEach( (value) =>
        {
            this.removeChild(value);
        });
    }

    getChild(id: string):BObject|undefined
    {
        return this._data.get(id);
    }

    getChildren(id: string[]): BObject[]
    {
        let retValue = new Array<BObject>();
        
        id.forEach((value) => {
            const obj = this.getChild(value);
            if(obj)
            {
                retValue.push(obj);
            }
        });

        return retValue;
    }

    getAllChildren(): BObject[]
    {
        return Array.from(this._data.values());
    }    
    
    count(): number
    {
        return this._data.size;
    }

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

    get parent():BObject|undefined
    {
        return this._parent;
    }
};

// == EXPORTS
// ============================================================================

export default BContainer;