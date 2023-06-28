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

import BVector3 from "../../../../math/classes/BVector3";
import BObject from "../../../common/classes/BObject";
import BWorld from "../../../common/classes/BWorld";
import ICanvasObjectZPosChangeEvent from "../interfaces/ICanvasObjectZPosChangeEvent";
import BObject2DCanvas from "./BObject2DCanvas";
import BRectTransformCanvas from "./BRectTransformCanvas";
import BVector3PositionCanvas from "./BVector3PositionCanvas";
import BWorldCanvas from "./BWorldCanvas";

// == MOCK FUNCTION(S)
// ============================================================================

const mockZPosChangeEvent = (transform:BRectTransformCanvas) =>
{
    let retValue = undefined;

    if(transform.parent)
    {
        retValue = new CustomEvent<ICanvasObjectZPosChangeEvent>('ICanvasObjectZPosChangeEvent', 
        {
            detail: 
            {
                world: transform.parent.getParentByType<BWorld>(BWorld), 
                object: transform.parent
            }
        });
    }

    return retValue;
}

// == TEST SUITE(S)
// ============================================================================

describe("BRectTransformCanvas Tests", () => 
{
    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Should create position as instance of BRectTransformCanvas", () => 
    {
		const transform = new BRectTransformCanvas();
        expect(transform).toBeDefined();
        expect(transform.position).toBeInstanceOf(BVector3PositionCanvas);
    });

    test("Constructor #2: Should create position as instance of BRectTransformCanvas with predefined value", () => 
    {
        const transform = new BRectTransformCanvas(new BObject("Parent"), new BVector3(50));
        expect(transform).toBeDefined();
        expect(transform.position).toMatchObject(new BVector3(50));
    });

    test("Method dispatchEventZPosChanged: Should not dispatch event without parent defined", () =>
    {
        const transform = new BRectTransformCanvas();
        const spy = jest.spyOn(window, "dispatchEvent").mockImplementationOnce(jest.fn());

        transform.dispatchEventZPosChanged();
        expect(spy).not.toBeCalled();
    });

    test("Method dispatchEventZPosChanged: Should dispatch event", () =>
    {
        const world = new BWorldCanvas("HalfLifeUniverse");
        const obj = new BObject2DCanvas("GordonFreeman", world);
        const transform = obj.transform as BRectTransformCanvas;
        const spy = jest.spyOn(window, "dispatchEvent").mockImplementationOnce(jest.fn());

        transform.dispatchEventZPosChanged();

        const dispatchParam = mockZPosChangeEvent(transform);
        expect(spy).toBeCalledWith(dispatchParam);
    });    

    test("Setter position: Should copy the vector from parameter", () => 
    {
        const transform = new BRectTransformCanvas();
        transform.position = new BVector3(100);

        expect(transform.position).toMatchObject(new BVector3(100));
        expect(transform.position).toBeInstanceOf(BVector3PositionCanvas);
    });
} );