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

import createBRenderGearCanvasMock from "../../../../graphics/2D/canvas/mocks/BRenderGearCanvasMock";
import BContainerWorldCanvas from "./BContainerWorldCanvas";
import BObject2DCanvas from "./BObject2DCanvas";
import BWorldCanvas from "./BWorldCanvas";

// == IMPORT(S)
// ============================================================================

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("BWorldCanvas Tests", () => 
{

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Should initialize with default parameters", () => 
    {
        const world = new BWorldCanvas("ApertureScience");

        expect(world).toBeDefined();
        expect(world.container).toBeInstanceOf(BContainerWorldCanvas);
    });

    test("Method draw: Should call draw from element buffer array", () =>
    {
        const obj = new BObject2DCanvas("GravityGun");
        const world = new BWorldCanvas("HalfLifeUniverse");
        const spyObj = jest.spyOn(obj, "draw").mockImplementationOnce(jest.fn());
        const spyContainer = jest.spyOn(BContainerWorldCanvas.prototype, "elementBuffer", "get");

        world.container.addChild(obj);
        world.draw(createBRenderGearCanvasMock());

        expect(spyContainer).toBeCalled();
        expect(spyObj).toBeCalled();
    });
} );