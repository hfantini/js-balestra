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

import InvalidParamException from "../../../error/classes/InvalidParamException";
import BContainer from "./BContainer";
import BObject from "./BObject";

// == IMPORT(S)
// ============================================================================

// == MOCK FUNCTION(S)
// ============================================================================

const mockContainer = ():BContainer =>
{
    const parent = new BObject("ApertureScience");
    const retValue = new BContainer(parent);

    const obj1 = new BObject("CompanionCube")
    retValue.addChild(obj1)

    const obj2 = new BObject("Turret")
    retValue.addChild(obj2)

    const obj3 = new BObject("Cake")
    retValue.addChild(obj3)
    
    const obj4 = new BObject("PortalGun")
    retValue.addChild(obj4)       

    const obj5 = new BObject("Cheel")
    retValue.addChild(obj5)           

    return retValue;
}

// == TEST SUITE(S)
// ============================================================================

describe("BContainer Tests", () => {

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Should create a instance with default values", () => 
    {
        const container = new BContainer();

        expect(container).toBeDefined();
        expect(container.parent).not.toBeDefined();
        expect(container.count()).toBe(0);
    });

    test("Constructor #2: Should create a instance with default values", () => 
    {
        const parent = new BObject("AppertureScience");
        const container = new BContainer(parent);

        expect(container).toBeDefined();
        expect(container.parent).toMatchObject(parent);
        expect(container.count()).toBe(0);
    });    

    test("Method addChild: Should add new object in the container data", () =>
    {
        let container = mockContainer();
        container.addChild( new BObject("TestChamber20") )

        expect(container.count()).toBe(6);
        expect(container.getChild("TestChamber20")).toBeDefined();
    })

    test("Method addChild: Should throw an error when trying to add a duplicate object id", () =>
    {
        let container = mockContainer();
        
        expect( () =>
        {
            container.addChild( new BObject("Cheel") )
        } ).toThrow(InvalidParamException);
    })
    
    test("Method removeChild: Should remove a existing element by id", () =>
    {
        let container = mockContainer();
        container.removeChild("Turret");

        expect(container.count()).toBe(4);
        expect(container.getChild("Turret")).not.toBeDefined();
    })

    test("Method removeChild: Should remove a existing element from object", () =>
    {
        let container = mockContainer();
        const obj = new BObject("Turret");
        container.removeChild(obj);

        expect(container.count()).toBe(4);
        expect(container.getChild("Turret")).not.toBeDefined();
    })    

    test("Method removeChildren: Should remove a existing multiple elements", () =>
    {
        let container = mockContainer();
        container.removeChildren(["Cake", "PortalGun"]);

        expect(container.count()).toBe(3);
        expect(container.getChild("Cake")).not.toBeDefined();
        expect(container.getChild("PortalGun")).not.toBeDefined();
    })

    test("Method getChild: Should return the right value", () =>
    {
        let container = mockContainer();
        const obj = container.getChild("Cake");

        expect(obj).toBeDefined();
        expect(obj?.id).toBe("Cake");
        // Cake is not a lie! :)
    })
    
    test("Method getChild: Should return the undefined for unexistent id", () =>
    {
        let container = mockContainer();
        const obj = container.getChild("GordonFreeman");

        expect(obj).not.toBeDefined();
    })
    
    test("Method getChildren: Should return two existent objects", () =>
    {
        let container = mockContainer();
        const obj = container.getChildren(["Cheel", "CompanionCube"]);

        expect(obj).toBeDefined();
        expect(obj.length).toBe(2);
        expect(obj[0].id).toBe("Cheel");
        expect(obj[1].id).toBe("CompanionCube");
    })

    test("Method getChildren: Should return two existent objects from three value", () =>
    {
        let container = mockContainer();
        const obj = container.getChildren(["Cheel", "CompanionCube", "GordonFreeman"]);

        expect(obj).toBeDefined();
        expect(obj.length).toBe(2);
        expect(obj[0].id).toBe("Cheel");
        expect(obj[1].id).toBe("CompanionCube");
    })
    
    test("Method getChildren: Should return an empty value", () =>
    {
        let container = mockContainer();
        const obj = container.getChildren(["GordonFreeman"]);

        expect(obj).toBeDefined();
        expect(obj.length).toBe(0);
    })

    test("Method count: Should return right object quantity", () =>
    {
        let container = mockContainer();
        expect(container.count()).toBe(5);
    })

    test("Getter parent: Should return the right parent for container", () =>
    {
        let container = mockContainer();
        expect(container.parent?.id).toBe("ApertureScience");
    });
} );