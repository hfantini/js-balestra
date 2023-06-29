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

import BRectTransformCanvas from "./BRectTransformCanvas";
import BVector3PositionCanvas from "./BVector3PositionCanvas";

// == IMPORT(S)
// ============================================================================

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("BVector3PositionCanvas Tests", () => 
{

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Should create an instance of BVector3PositionCanvas", () =>
    {
        const vec3 = new BVector3PositionCanvas();
        expect(vec3).toBeDefined();
    });

    test("Setter parent: Should set the right value", () => 
	{
        const transform = new BRectTransformCanvas();
        const vec3 = new BVector3PositionCanvas();

        expect(vec3.parent).not.toBeDefined();
        
        vec3.parent = transform;

        expect(vec3.parent).toMatchObject(transform);
    });

    test("Setter Z: Should not call dispatchEventZPosChanged from parent if value doesn't changes", () => 
	{
        const transform = new BRectTransformCanvas();
        const vec3 = new BVector3PositionCanvas(1);
        const spy = jest.spyOn(transform, "dispatchEventZPosChanged").mockImplementationOnce(jest.fn());

        vec3.parent = transform;
        vec3.Z = 1;
        expect(spy).not.toBeCalled();
    });

    test("Setter Z: Should not call dispatchEventZPosChanged from parent if its undefined", () => 
	{
        const transform = new BRectTransformCanvas();
        const vec3 = new BVector3PositionCanvas(1);
        const spy = jest.spyOn(transform, "dispatchEventZPosChanged").mockImplementationOnce(jest.fn());

        vec3.Z = 2;
        expect(spy).not.toBeCalled();
    }); 
    
    test("Setter Z: Should call dispatchEventZPosChanged from parent if value changes", () => 
	{
        const transform = new BRectTransformCanvas();
        const vec3 = new BVector3PositionCanvas(1);
        const spy = jest.spyOn(transform, "dispatchEventZPosChanged").mockImplementationOnce(jest.fn());

        vec3.parent = transform;
        vec3.Z = 2;
        expect(spy).toBeCalledTimes(1);
    });   
} );