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

import BError from "../../../../error/classes/BError";
import BRenderGearCanvas from "../../../../graphics/2D/canvas/classes/BRenderGearCanvas";
import createHTMLCanvasElementMock, { createHTMLCanvasElementUnsupportedMock } from "../../../../graphics/2D/canvas/mocks/HTMLCanvasElementMock";
import BEngineCanvas from "./BEngineCanvas";

// == IMPORT(S)
// ============================================================================

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("BEngineCanvas Tests", () => 
{

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Should create an instance with default values", () => 
	{
		const engine = new BEngineCanvas("Source2", createHTMLCanvasElementMock());
        
        expect(engine).toBeDefined();
        expect(engine.canvas).toBeDefined();
        expect(engine.context).toBeDefined();
    });

    test("Constructor #2: Should throw an exception with a device that doesn't support canvas", () => 
	{
		expect(() => new BEngineCanvas("Source2", createHTMLCanvasElementUnsupportedMock())).toThrowError(BError)
    });
    
    test("Method createRenderGear: Should return a valid instance of BRenderGearCanvas", () =>
    {
        const engine = new BEngineCanvas("Source2", createHTMLCanvasElementMock());
        expect(engine.createRenderGear()).toBeInstanceOf(BRenderGearCanvas);
    });
} );