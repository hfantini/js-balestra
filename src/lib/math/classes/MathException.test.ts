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

import MathException from "./MathException";

// == IMPORT(S)
// ============================================================================

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("MathException Tests", () => {

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor: Should be defined right after new instance", () => {

        let error = new MathException("Ops! The cake is a lie...");

        expect(error).toBeDefined();
        expect(error.message).toBe("Ops! The cake is a lie...");
        expect(error.name).toBe("MathException");
    });
} );