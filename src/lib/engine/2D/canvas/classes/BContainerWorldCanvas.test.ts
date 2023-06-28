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

import BInvalidParamException from "../../../../error/classes/BInvalidParamException";
import BObject from "../../../common/classes/BObject";
import BWorld from "../../../common/classes/BWorld";
import IContainerAddEvent from "../../../common/interfaces/IContainerAddEvent";
import IContainerRemoveEvent from "../../../common/interfaces/IContainerRemoveEvent";
import BContainerWorldCanvas from "./BContainerWorldCanvas";
import BObject2DCanvas from "./BObject2DCanvas";
import BWorldCanvas from "./BWorldCanvas";

// == MOCK FUNCTION(S)
// ============================================================================

const mockAddEvent = (obj:BObject, world:BWorld) =>
{
    return new CustomEvent<IContainerAddEvent>('IContainerAddChildEvent', 
    {
        detail: 
        {
            world: world, 
            object: obj
        }
    });
}

const mockRemoveEvent = (obj:BObject, world:BWorld) =>
{
    return new CustomEvent<IContainerRemoveEvent>('IContainerRemoveChildEvent', 
    {
        detail: 
        {
            world: world, 
            object: obj
        }
    });
}

// == TEST SUITE(S)
// ============================================================================

describe("BContainerWorldCanvas Tests", () => 
{

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Should create an instance where parent is a BWorldCanvas", () => 
    {
        const world = new BWorldCanvas("ApertureLabs");
        const container = new BContainerWorldCanvas(world);

        expect(container.parent).toBeDefined();
        expect(container.parent).toBeInstanceOf(BWorldCanvas);
    });

    test("Method addChild: Should dispatch an event of type IContainerAddChildEvent", () => 
    {
        const spyAddChild = jest.spyOn(window, "dispatchEvent").mockImplementationOnce(jest.fn());
        const world = new BWorldCanvas("ApertureLabs");
        const obj = new BObject2DCanvas("PortalGun");

        world.container?.addChild(obj);
        expect(spyAddChild).toBeCalledWith(mockAddEvent(obj, world));
    });
    
    test("Method removeChild: Should dispatch an event of type IContainerRemoveChildEvent", () => 
    {
        const spyRemoveChild = jest.spyOn(window, "dispatchEvent").mockImplementationOnce(jest.fn());
        const world = new BWorldCanvas("ApertureLabs");
        const obj = new BObject2DCanvas("PortalGun", world);
        
        world.container?.removeChild(obj);
        expect(spyRemoveChild).toBeCalledWith(mockRemoveEvent(obj, world));
    });

    test("Method removeChild: Should throw BInvalidParamException when tries to remove an unexistent child from object", () => 
    {
        const world = new BWorldCanvas("ApertureLabs");
        const obj = new BObject2DCanvas("PortalGun");
        
        expect( () => world.container?.removeChild(obj) ).toThrowError(BInvalidParamException);
    });
    
    test("Method removeChild: Should throw BInvalidParamException when tries to remove an unexistent child from string", () => 
    {
        const world = new BWorldCanvas("ApertureLabs");
        
        expect( () => world.container?.removeChild("PortalGun") ).toThrowError(BInvalidParamException);
    });    

    test("Method onAddChild: Should add child in the right place in ElementBuffer", () =>
    {
        const world = new BWorldCanvas("HalfLifeWorld");

        const obj1 = new BObject2DCanvas("Cheel");
        obj1.transform.position.Z = 0;

        const obj2 = new BObject2DCanvas("GordonFreeman");
        obj2.transform.position.Z = 1;

        const obj3 = new BObject2DCanvas("GMAN");
        obj3.transform.position.Z = 2;

        const obj4 = new BObject2DCanvas("GlaDOS");
        obj4.transform.position.Z = 3;

        const obj5 = new BObject2DCanvas("CaveJohnson");
        obj5.transform.position.Z = 4;

        const obj6 = new BObject2DCanvas("DrBreen");
        obj6.transform.position.Z = 5;
        
        const obj7 = new BObject2DCanvas("DrKleiner");
        obj7.transform.position.Z = 6;    
        
        const obj8 = new BObject2DCanvas("Barney");
        obj8.transform.position.Z = 7;
        
        const obj9 = new BObject2DCanvas("Dog");
        obj9.transform.position.Z = 8;    
        
        const obj10 = new BObject2DCanvas("Alyx");
        obj10.transform.position.Z = 9;

        const container = world.container as BContainerWorldCanvas;

        // == START ADDING SOME VALUES;
        
        // ROUND #1
        container.addChild(obj5);
        expect(container.elementBuffer.length).toBe(1);

        // ROUND #2
        container.addChild(obj2);
        expect(container.elementBuffer.length).toBe(2);
        expect(container.elementBuffer[0]).toMatchObject(obj2);

        // ROUND #3
        container.addChild(obj9);
        expect(container.elementBuffer.length).toBe(3);
        expect(container.elementBuffer[container.elementBuffer.length - 1]).toMatchObject(obj9);

        // ROUND #4
        container.addChild(obj7);
        expect(container.elementBuffer.length).toBe(4);
        expect(container.elementBuffer[2]).toMatchObject(obj7);

        // ROUND #5
        container.addChild(obj10);
        expect(container.elementBuffer.length).toBe(5);
        expect(container.elementBuffer[container.elementBuffer.length - 1]).toMatchObject(obj10);

        // ROUND #6
        container.addChild(obj1);
        expect(container.elementBuffer.length).toBe(6);
        expect(container.elementBuffer[0]).toMatchObject(obj1);
        
        // ROUND #7
        container.addChild(obj3);
        expect(container.elementBuffer.length).toBe(7);
        expect(container.elementBuffer[2]).toMatchObject(obj3);

        // ROUND #8
        container.addChild(obj8);
        expect(container.elementBuffer.length).toBe(8);
        expect(container.elementBuffer[5]).toMatchObject(obj8);
        
        // ROUND #9
        container.addChild(obj6);
        expect(container.elementBuffer.length).toBe(9);
        expect(container.elementBuffer[4]).toMatchObject(obj6);
        
        // ROUND #10
        container.addChild(obj4);
        expect(container.elementBuffer.length).toBe(10);
        expect(container.elementBuffer[3]).toMatchObject(obj4);
        
        // ROUND #11
        // ADDING A CHILD WITH SAME Z POS

        const obj11 = new BObject2DCanvas("EliVance");
        obj11.transform.position.Z = 4;
        container.addChild(obj11);

        expect(container.elementBuffer.length).toBe(11);
        expect(container.elementBuffer[5]).toMatchObject(obj11);
    });

    test("Method onRemoveChild: Should remove child in the right place in ElementBuffer", () =>
    {
        const world = new BWorldCanvas("HalfLifeWorld");
        const obj = new BObject2DCanvas("Cheel");
        const container = world.container as BContainerWorldCanvas;

        container.addChild(obj);

        expect(container.elementBuffer.length).toBe(1);

        container.removeChild(obj);

        expect(container.elementBuffer.length).toBe(0);
    });

    test("Behavior BObject2DCanvas: ElementBuffer should be sorted after a change in Z position of object", () =>
    {
        const world = new BWorldCanvas("HalfLifeWorld");

        const obj1 = new BObject2DCanvas("Cheel");
        obj1.transform.position.Z = 0;
        obj1.parent = world;

        const obj2 = new BObject2DCanvas("GordonFreeman");
        obj2.transform.position.Z = 1;
        obj2.parent = world;

        const obj3 = new BObject2DCanvas("GMAN");
        obj3.transform.position.Z = 2;
        obj3.parent = world;

        expect(world.container.count()).toBe(3);
        const container = world.container as BContainerWorldCanvas;
        expect(container.elementBuffer[0]).toMatchObject(obj1);
        expect(container.elementBuffer[1]).toMatchObject(obj2);
        expect(container.elementBuffer[2]).toMatchObject(obj3);

        obj3.transform.position.Z = -1;

        expect(container.elementBuffer[0]).toMatchObject(obj3);
        expect(container.elementBuffer[1]).toMatchObject(obj1);
        expect(container.elementBuffer[2]).toMatchObject(obj2);       
    });    
} );