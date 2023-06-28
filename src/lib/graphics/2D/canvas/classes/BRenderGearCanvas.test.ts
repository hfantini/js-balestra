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

import createRenderingContext2DMock from "../mocks/CanvasRenderingContext2DMock";
import createHTMLCanvasElementMock from "../mocks/HTMLCanvasElementMock";
import BRenderGearCanvas from "./BRenderGearCanvas";

// == IMPORT(S)
// ============================================================================

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("BRenderGearCanvas Tests", () => 
{
    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Should create an instance with default values", () => 
    {
        const htmlCanvasElement = createHTMLCanvasElementMock();
        const renderingContext2D = createRenderingContext2DMock();

		const renderGear = new BRenderGearCanvas(htmlCanvasElement, renderingContext2D);

        expect(renderGear).toBeDefined();
        expect(renderGear.canvas).toMatchObject(htmlCanvasElement);
        expect(renderGear.context).toMatchObject(renderingContext2D);
    });
} );