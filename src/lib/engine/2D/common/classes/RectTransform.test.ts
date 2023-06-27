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

import BVector2 from "../../../../math/classes/BVector2";
import BVector3 from "../../../../math/classes/BVector3";
import BObject from "../../../common/classes/BObject";
import BObject2D from "./BObject2D";
import RectTransform from "./RectTransform";


// == MOCK FUNCTION(S)
// ============================================================================
const mockFullRectTransform = () =>
{
    return new RectTransform(new BObject("Cheel"), new BVector3(1), new BVector3(2), new BVector3(3), new BVector3(4), new BVector2(5));
}

// == TEST SUITE(S)
// ============================================================================

describe("RectTransform Tests", () => 
{

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Empty constructor should create a default size BVector2", () => 
    {
        const rectTransform = new RectTransform(new BObject2D('Cheel'));
        expect(rectTransform.size).toBeDefined();
        expect(rectTransform.size).toMatchObject(new BVector2());
    });

    test("Constructor #2: Full constructor should define the right size BVector2", () => 
    {
        const rectTransform = mockFullRectTransform();
        expect(rectTransform.size).toBeDefined();
        expect(rectTransform.size).toMatchObject(new BVector2(5));
    });
    
    test("Setter size: Should define the right value for size", () => 
    {
        const rectTransform = mockFullRectTransform();
        rectTransform.size = new BVector2(500);

        expect(rectTransform.size).toBeDefined();
        expect(rectTransform.size).toMatchObject(new BVector2(500));
    });    
} );