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

import BRect from "./BRect";
import BVector4 from "./BVector4";

// == IMPORT(S)
// ============================================================================

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("BRect Tests", () => {

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Construtor #1: Should initialize values with zero in a empty constructor", () => {
		const rect:BRect = new BRect();
        expect(rect.data).toMatchObject(new BVector4());
    });

    test("Construtor #2: Should initialize values based in an another BVector4", () => {
        const param:BVector4 = new BVector4(0, 1, 2, 4);
		const rect:BRect = new BRect(param);
        expect(rect.data).toMatchObject(param);
    });
    
    test("Construtor #3: Should initialize values based in a single value", () => {
		const rect:BRect = new BRect(4);
        expect(rect.data).toMatchObject(new BVector4(4, 4, 4, 4));
    });

    test("Construtor #4: Should initialize values based in a dimension array", () => {
		const rect:BRect = new BRect(2, 4, 6, 8);
        expect(rect.data).toMatchObject(new BVector4(2, 4, 6, 8));
    });
    
    test("Method getBounds(): Should return right calculated BVector4", () => {
		const rect:BRect = new BRect(200, 200, 200, 200);
        const bounds = rect.getBounds();
        expect(bounds).toMatchObject(new BVector4(200, 200, 400, 400));
    });

    test("Getter data: Should return right value", () => {
		const rect:BRect = new BRect(1, 2, 3, 4);
        expect(rect.data).toMatchObject(new BVector4(1, 2, 3, 4));
    });

    test("Setter data: Should set right value", () => {
		const rect:BRect = new BRect(1, 2, 3, 4);
        rect.data = new BVector4(1);
        expect(rect.data).toMatchObject(new BVector4(1, 1, 1, 1));
    });

    test("Getter X: Should get the right value", () => {
		const rect:BRect = new BRect(1, 2, 3, 4);
        expect(rect.X).toBe(1);
    });

    test("Setter X: Should set the right value", () => {
		const rect:BRect = new BRect(1, 2, 3, 4);
        rect.X = 0;
        expect(rect.X).toBe(0);
    });    
    
    test("Getter Y: Should get the right value", () => {
		const rect:BRect = new BRect(1, 2, 3, 4);
        expect(rect.Y).toBe(2);
    });
    
    test("Setter Y: Should set the right value", () => {
		const rect:BRect = new BRect(1, 2, 3, 4);
        rect.Y = 0;
        expect(rect.Y).toBe(0);
    });    
    
    test("Getter width: Should get the right value", () => {
		const rect:BRect = new BRect(1, 2, 3, 4);
        expect(rect.width).toBe(3);
    });
    
    test("Setter width: Should set the right value", () => {
		const rect:BRect = new BRect(1, 2, 3, 4);
        rect.width = 0;
        expect(rect.width).toBe(0);
    });
    
    test("Getter height: Should get the right value", () => {
		const rect:BRect = new BRect(1, 2, 3, 4);
        expect(rect.height).toBe(4);
    });
    
    test("Setter height: Should get the right value", () => {
		const rect:BRect = new BRect(1, 2, 3, 4);
        rect.height = 0;
        expect(rect.height).toBe(0);
    });     
});