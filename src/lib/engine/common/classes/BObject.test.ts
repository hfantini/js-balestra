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

import BVector3 from "../../../math/classes/BVector3";
import BTransform from "../../../math/classes/BTransform";
import BContainer from "./BContainer";
import BEngine from "./BEngine";
import BObject from "./BObject";
import BWorld from "./BWorld";
import createBUpdateGearMock from "../mocks/BUpdateGearMock";
import createDomContainerMock from "../mocks/BEngineMock";
import createHTMLCanvasElementMock from "../../../graphics/2D/canvas/mocks/HTMLCanvasElementMock";

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
        expect(obj.transform).toMatchObject(new BTransform(obj));
        expect(obj.container).toBeDefined();
        expect(obj.container).toMatchObject(new BContainer(obj));
    });

    test("Constructor #2: Should create an instance with default values with full parameters.", () => 
    {
        const parent = new BWorld("ApertureLabs")
        const obj = new BObject("CaveJohnson", parent);
  
        expect(obj).toBeDefined();
        expect(obj.id).toBe("CaveJohnson");
        expect(obj.parent).toBeDefined();
        expect(obj.parent!.id).toBe("ApertureLabs");
        expect(obj.transform).toMatchObject(new BTransform(obj));
    });
    
    test("Constructor #3: Should set element as parent child.", () => 
    {
        const parent = new BWorld("ApertureLabs")
        const obj = new BObject("CaveJohnson", parent);
  
        expect(obj).toBeDefined();
        expect(parent.container.getChild("CaveJohnson")).toBeDefined();
    });    

    test("Method getParentByType: Should return itself", () => 
    {
        const engine = new BEngine('Engine', createDomContainerMock(), createHTMLCanvasElementMock());
        const engineRef = engine.getParentByType<BEngine>(BEngine);

        expect(engineRef).toBeDefined();
        expect(engineRef!.id).toBe("Engine");
    });

    test("Method getParentByType: Should return the engine instance", () => 
    {
        const engine = new BEngine('Engine', createDomContainerMock(), createHTMLCanvasElementMock());
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
    
    test("Method update: Should update all children inside container", () =>
    {
        const obj = new BObject("PortalGun");
        const parent = new BObject("CaveJohnson");
        const spy = jest.spyOn(obj, "update").mockImplementationOnce(jest.fn());

        parent.container.addChild(obj);
        parent.update( createBUpdateGearMock() );
        
        expect(spy).toBeCalled();
    });

    test("Getter parent: Should return the right value", () => 
    {
        const obj = new BObject("CaveJohnson", new BWorld('ApertureLabs'));

        expect(obj.parent).toBeDefined();
        expect(obj.parent!.id).toBe("ApertureLabs");
    });

    test("Setter parent: Should set the right value and sould add to parent's container", () => 
    {
        const obj = new BObject("CaveJohnson");
        const parent = new BObject('Caroline');

        obj.parent = parent;

        expect(obj.parent).toBeDefined();
        expect(obj.parent!.id).toBe("Caroline");
        expect(obj.parent.container.getChild("CaveJohnson")).toBeDefined();
    });

    test("Setter parent: Should set undefined and remove from parent container", () => 
    {
        const obj = new BObject("CaveJohnson");
        const parent = new BObject('Caroline');

        obj.parent = parent;

        expect(obj.parent).toBeDefined();
        expect(parent.container.count()).toBe(1);

        obj.parent = undefined;

        expect(obj.parent).not.toBeDefined();
        expect(parent.container.count()).toBe(0);
    });

    test("Setter parent: Should add new element but remove from old parent container", () => 
    {
        const obj = new BObject("CaveJohnson");
        const parent1 = new BObject('Caroline');
        const parent2 = new BObject('GlaDOS');

        obj.parent = parent1;

        expect(obj.parent).toBeDefined();
        expect(parent1.container.count()).toBe(1);
        expect(parent2.container.count()).toBe(0);

        obj.parent = parent2;

        expect(obj.parent).toBeDefined();
        expect(parent1.container.count()).toBe(0);
        expect(parent2.container.count()).toBe(1);
    });
    
    test("Getter transform: Should return the right value", () => 
    {
        const obj = new BObject("CaveJohnson");
        obj.transform.position = obj.transform.position.sum(50);

        expect(obj.transform).toMatchObject(new BTransform(obj, new BVector3(50, 50, 50)));
    });

    test("Setter transform: Should set the right value", () => 
    {
        const obj = new BObject("CaveJohnson");
        obj.transform = new BTransform(obj, new BVector3(50, 50, 50));

        expect(obj.transform).toMatchObject(new BTransform(obj, new BVector3(50, 50, 50)));
    });
    
    test("Getter container: Should return the right value", () => 
    {
        const obj = new BObject("CaveJohnson");
        expect(obj.container).toBeDefined();
        expect(obj.container).toMatchObject(new BContainer(obj));
    });
} );