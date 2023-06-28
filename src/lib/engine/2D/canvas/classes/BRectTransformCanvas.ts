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

import BVector2 from "../../../../math/classes/BVector2";
import BVector3 from "../../../../math/classes/BVector3";
import BObject from "../../../common/classes/BObject";
import BWorld from "../../../common/classes/BWorld";
import BRectTransform from "../../common/classes/BRectTransform";
import ICanvasObjectZPosChangeEvent from "../interfaces/ICanvasObjectZPosChangeEvent";
import BVector3PositionCanvas from "./BVector3PositionCanvas";

// == CLASSE(S)
// ============================================================================

class BRectTransformCanvas extends BRectTransform
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

    constructor();
    constructor(parent: BObject, position?: BVector3, scale?: BVector3, rotation?: BVector3, origin?:BVector3, size?: BVector2);

    constructor(...param: any[])
    {
        super(param[0], ...param);

        // CREATE A SPECIAL BVECTOR2 FOR POSITION
        if(param[1])
        {
            this._position = new BVector3PositionCanvas(param[1]);
        }
        else
        {
            this._position = new BVector3PositionCanvas();
        }

        (this._position as BVector3PositionCanvas).parent = this;
    }

	// == METHOD(S) & EVENT(S)
	// ========================================================================

    public dispatchEventZPosChanged():void
    {
        if(this.parent)
        {
            window.dispatchEvent(
                new CustomEvent<ICanvasObjectZPosChangeEvent>('ICanvasObjectZPosChangeEvent', 
                    {
                        detail: 
                        {
                            world: this.parent.getParentByType<BWorld>(BWorld), 
                            object: this.parent
                        }
                    }
                )
            );
        }
    }

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

    get position():BVector3
    {
        return this._position;
    }

    set position(value:BVector3)
    {
        this._position.X = value.X;
        this._position.Y = value.Y;
        this._position.Z = value.Z;
    }
};

// == EXPORTS
// ============================================================================

export default BRectTransformCanvas;