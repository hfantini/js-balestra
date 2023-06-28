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

import createBRenderGearCanvasMock from "../../../../graphics/2D/canvas/mocks/BRenderGearCanvasMock";
import BObject2D from "./BObject2D";
import BRectTransform from "./BRectTransform";

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("BObject2D Tests", () => 
{

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Should create a BRectTransform instance for container attr", () => 
    {
		let obj = new BObject2D("PortalGun");
        expect(obj.transform).toBeInstanceOf(BRectTransform)
    });

    test("Method draw: Should be called without any errors", () =>
    {
        let obj = new BObject2D("PortalGun");
        expect(() => {
            obj.draw(createBRenderGearCanvasMock())
        }).not.toThrow();
    })
} );