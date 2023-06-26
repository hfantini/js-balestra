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

import BVector3 from "../../../math/classes/BVector3";
import Transform from "../../../math/classes/Transform";
import BOject from "./BObject";

// == IMPORT(S)
// ============================================================================

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("BOject Tests", () => {

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Should create an instance with default values.", () => 
    {
        const obj = new BOject("CaveJohnson");

        expect(obj).toBeDefined();
        expect(obj.id).toBe("CaveJohnson");
        expect(obj.transform).toMatchObject(new Transform());
    });

    test("Getter transform: Should return the right value", () => 
    {
        const obj = new BOject("CaveJohnson");
        obj.transform.position = obj.transform.position.sum(50);

        expect(obj.transform).toMatchObject(new Transform(new BVector3(50, 50, 50)));
    });

    test("Setter transform: Should return the right value", () => 
    {
        const obj = new BOject("CaveJohnson");
        obj.transform = new Transform(new BVector3(50, 50, 50));

        expect(obj.transform).toMatchObject(new Transform(new BVector3(50, 50, 50)));
    });    
} );