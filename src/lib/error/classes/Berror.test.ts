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

import BError from "./BError";

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("BError Tests", () => {

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor: Should handle right if the parameter is another Error", () => {

        let error:BError|undefined = undefined;

        try
        {
            throw new Error("Ops! The cake is a lie...");
        }
        catch(e)
        {
            if(e instanceof Error)
            {
                error = new BError(e);
            }
        }

        expect(error).toBeDefined();
        expect(error?.message).toBeDefined();
        expect(error?.name).toBeDefined();
    });
} );