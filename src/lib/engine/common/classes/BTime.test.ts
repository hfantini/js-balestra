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

import BTime from "./BTime";

// == IMPORT(S)
// ============================================================================

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("BTime Tests", () => {

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Should initialize with default values", () => 
    {
		const time = new BTime();
        expect(time.totalElapsedTimeMS).toBe(0);
        expect(time.totalElapsedTimeS).toBe(0);
        expect(time.deltaTime).toBe(0);
        expect(time.currentFPS).toBe(0);
        expect(time.lastFrameTime).toBe(0);
    });

    test("Method Update: Should discard the first frame calculation and update _totalElapsedTimeMS", () => 
    {
        const time = new BTime();
        time.update(1000);

        expect(time.totalElapsedTimeMS).toBe(1000);
        expect(time.totalElapsedTimeS).toBe(1);
        expect(time.deltaTime).toBe(0);
        expect(time.currentFPS).toBe(0);
        expect(time.lastFrameTime).toBe(0);
    })

    test("Method Update: Should execute right calculations with fixed lastFrameTime", () =>
    {
        const time = new BTime();
        const fixedLastFrameTime:number = 13;
        time.update(1000);
        time.update(1000 + fixedLastFrameTime);

        expect(time.currentFPS).toBe(77);
        expect(time.lastFrameTime).toBe(13);
        expect(time.deltaTime).toBe(0.013);
        expect(time.totalElapsedTimeMS).toBe(1013);
        expect(time.totalElapsedTimeS).toBe(1);
    });
} );