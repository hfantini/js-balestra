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

import InvalidParamException from "../../../error/classes/InvalidParamException";
import IContainer from "../interfaces/IContainer";
import BOject from "./BObject";

// == IMPORT(S)
// ============================================================================

// == CLASSE(S)
// ============================================================================

class BContainer implements IContainer
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR

    private _parent:BOject|undefined = undefined;
    private _data:Map<string, BOject> = new Map<string, BOject>();

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

    constructor(parent?:BOject)
    {
        this._parent = parent;
    }

	// == METHOD(S) & EVENT(S)
	// ========================================================================

    addChild(value:BOject): void
    {
        if(this._data.has(value.id))
        {
            throw new InvalidParamException(`BObject with name [${value.id}] already exists.`);
        }

        this._data.set(value.id, value);
    }

    removeChild(value: string | BOject): void
    {
        let id = typeof value === 'string' ? value : value.id;

        if(this._data.has(id))
        {
            this._data.delete(id);
        }
    }

    removeChildren(values: string[] | BOject[]): void
    {
        values.forEach( (value) =>
        {
            this.removeChild(value);
        });
    }

    getChild(id: string):BOject|undefined
    {
        return this._data.get(id);
    }

    getChildren(id: string[]): BOject[]
    {
        let retValue = new Array<BOject>();
        
        id.forEach((value) => {
            const obj = this.getChild(value);
            if(obj)
            {
                retValue.push(obj);
            }
        });

        return retValue;
    }
    
    count(): number
    {
        return this._data.size;
    }

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

    get parent():BOject|undefined
    {
        return this._parent;
    }
};

// == EXPORTS
// ============================================================================

export default BContainer;