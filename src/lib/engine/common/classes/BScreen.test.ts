// == IMPORT(S)
// ============================================================================

import BVector2 from "../../../math/classes/BVector2";
import createBScreenMock from "../mocks/BScreenMock";

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("BScreen Tests", () => 
{

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Should create an instance with default values", () => 
	{
		const bScreen = createBScreenMock();

        expect(bScreen).toBeDefined();
        expect(bScreen.container).toBeDefined();
        expect(bScreen.elementSize).toMatchObject(new BVector2(300));
        expect(bScreen.windowSize).toMatchObject(new BVector2(window.innerWidth, window.innerHeight));
        expect(bScreen.screenSize).toMatchObject(new BVector2(screen.width, screen.height));
        expect(bScreen.screenOrientation).toBe(window.ScreenOrientation);
    });
} );