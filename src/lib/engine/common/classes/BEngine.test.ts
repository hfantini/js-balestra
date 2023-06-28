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

import createBUpdateGearMock from "../mocks/BUpdateGearMock";
import BEngine from "./BEngine";
import BWorld from "./BWorld";

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("BEngine Tests", () => {

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Should create instance with default values with half parameters", () => 
    {
        const engine = new BEngine("Engine");
        expect(engine).toBeDefined();
        expect(engine.time).toBeDefined();
        expect(engine.id).toBe("Engine");
        expect(engine.parent).not.toBeDefined();
        expect(engine.world).not.toBeDefined();
    });

    test("Constructor #2: Should create instance with default values with full parameters", () => 
    {
        const world = new BWorld("ApertureLabs");
        const engine = new BEngine("Engine", world);

        expect(engine.world).toBeDefined();
    });

    test("Method tick: should update the time", () => 
    {
        const engine = new BEngine("Engine");
        const spy = jest.spyOn(engine.time, "update");

        engine.tick(1000);

        expect(spy).toBeCalledTimes(1);
        expect(spy).toBeCalledWith(1000);
    })

    test("Method tick: should call update method", () => 
    {
        const engine = new BEngine("Engine");
        const spy = jest.spyOn(engine, "update");

        engine.tick(1000);

        expect(spy).toBeCalledTimes(1);
    })
    
    test("Method tick: should call world draw method", () => 
    {
        const world = new BWorld("City17")
        const engine = new BEngine("Engine", world);
        const spy = jest.spyOn(world, "draw");

        engine.tick(1000);

        expect(spy).toBeCalledTimes(1);
    })
    
    test("Method update: should world.update be called if an world is defined", () => 
    {
        const world = new BWorld("BlackMesa");
        const engine = new BEngine("Engine", world);
        const spy = jest.spyOn(world, "update");

        engine.update( createBUpdateGearMock() );

        expect(spy).toBeCalledTimes(1);
    })
    
    test("Method update: should world.update not be called if an world is not defined", () => 
    {
        const world = new BWorld("BlackMesa");
        const engine = new BEngine("Engine");
        const spy = jest.spyOn(world, "update");

        engine.update( createBUpdateGearMock() );

        expect(spy).not.toBeCalled();
    })

    test("Method draw: should world.draw be called if an world is defined", () => 
    {
        const world = new BWorld("BlackMesa");
        const engine = new BEngine("Engine", world);
        const spy = jest.spyOn(world, "draw");

        engine.tick(1000);

        expect(spy).toBeCalledTimes(1);
    })
    
    test("Method draw: should world.draw not be called if an world is not defined", () => 
    {
        const world = new BWorld("BlackMesa");
        const engine = new BEngine("Engine");
        const spy = jest.spyOn(world, "draw");

        engine.tick(1000);

        expect(spy).not.toBeCalled();
    }) 

    test("Setter world: Should set the right value", () =>
    {
        const world = new BWorld("ApertureLabs");
        const engine = new BEngine("Engine");

        engine.world = world;

        expect(engine.world).toBeDefined();
        expect(engine.world.id).toBe("ApertureLabs");
    });

    test("Setter world: Engine should be set as parent of world", () =>
    {
        const world = new BWorld("ApertureLabs");
        const engine = new BEngine("Engine");

        engine.world = world;

        expect(engine.world).toBeDefined();
        expect(engine.world.parent!.id).toBe("Engine");
    });    

    test("Setter world: Should unset correctly", () =>
    {
        const world = new BWorld("ApertureLabs");
        const engine = new BEngine("Engine", world);

        expect(engine.world).toBeDefined();
        engine.world = undefined;
        expect(engine.world).not.toBeDefined();
    });    
} );