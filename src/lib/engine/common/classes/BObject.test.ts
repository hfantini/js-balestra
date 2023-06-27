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
import BEngine from "./BEngine";
import BObject from "./BObject";
import BWorld from "./BWorld";

// == IMPORT(S)
// ============================================================================

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("BObject Tests", () => {

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Should create an instance with default values with incomplete parameters.", () => 
    {
        const obj = new BObject("CaveJohnson");

        expect(obj).toBeDefined();
        expect(obj.id).toBe("CaveJohnson");
        expect(obj.parent).not.toBeDefined();
        expect(obj.transform).toMatchObject(new Transform(obj));
    });

    test("Constructor #2: Should create an instance with default values with full parameters.", () => 
    {
        const parent = new BWorld("ApertureLabs")
        const obj = new BObject("CaveJohnson", parent);
        

        expect(obj).toBeDefined();
        expect(obj.id).toBe("CaveJohnson");
        expect(obj.parent).toBeDefined();
        expect(obj.parent!.id).toBe("ApertureLabs");
        expect(obj.transform).toMatchObject(new Transform(obj));
    });    

    test("Method getParentByType: Should return the engine instance", () => 
    {
        const engine = new BEngine('Engine');
        const world = new BWorld('ApertureLabs', engine);
        const obj = new BObject("CaveJohnson", world);

        const engineRef = obj.getParentByType<BEngine>(BEngine);

        expect(engineRef).toBeDefined();
        expect(engineRef!.id).toBe("Engine");
    });

    test("Method getParentByType: Should return undefined ref for BEngine", () => 
    {
        const world = new BWorld('ApertureLabs');
        const obj = new BObject("CaveJohnson", world);

        const engineRef = obj.getParentByType<BEngine>(BEngine);

        expect(engineRef).not.toBeDefined();
    });    

    test("Getter parent: Should return the right value", () => 
    {
        const obj = new BObject("CaveJohnson", new BWorld('ApertureLabs'));

        expect(obj.parent).toBeDefined();
        expect(obj.parent!.id).toBe("ApertureLabs");
    });

    test("Setter parent: Should set the right value", () => 
    {
        const obj = new BObject("CaveJohnson");
        const parent = new BObject('Caroline');

        obj.parent = parent;

        expect(obj.parent).toBeDefined();
        expect(obj.parent!.id).toBe("Caroline");
    });    

    test("Getter transform: Should return the right value", () => 
    {
        const obj = new BObject("CaveJohnson");
        obj.transform.position = obj.transform.position.sum(50);

        expect(obj.transform).toMatchObject(new Transform(obj, new BVector3(50, 50, 50)));
    });

    test("Setter transform: Should set the right value", () => 
    {
        const obj = new BObject("CaveJohnson");
        obj.transform = new Transform(obj, new BVector3(50, 50, 50));

        expect(obj.transform).toMatchObject(new Transform(obj, new BVector3(50, 50, 50)));
    });    
} );