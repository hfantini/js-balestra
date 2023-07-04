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

import createBScreenMock from "../mocks/BScreenMock";
import BTime from "./BTime";
import BUpdateGear from "./BUpdateGear";

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("BUpdateGear Tests", () => 
{

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Should build an instance with default values", () => 
    {
        const time = new BTime();
        const screen = createBScreenMock();
        const extra = {city: 17};
        const updateGear = new BUpdateGear(time, screen, extra);

        expect(updateGear).toBeDefined();
        expect(updateGear.time).toMatchObject(time);
        expect(updateGear.screen).toMatchObject(screen);
        expect(updateGear.extra).toMatchObject(extra);
    });
} );