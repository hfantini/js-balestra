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

import InvalidParamException from "./InvalidParamException";

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("InvalidParamException Tests", () => {

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor: Should be defined right after new instance", () => {

        let error = new InvalidParamException("Ops! The cake is a lie...");

        expect(error).toBeDefined();
        expect(error.message).toBe("Ops! The cake is a lie...");
        expect(error.name).toBe("InvalidParamException");
    });
} );