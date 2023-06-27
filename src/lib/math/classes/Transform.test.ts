// == IMPORT(S)
// ============================================================================

import BObject from "../../engine/common/classes/BObject";
import BWorld from "../../engine/common/classes/BWorld";
import BVector3 from "./BVector3";
import Transform from "./Transform";

// == MOCK FUNCTION(S)
// ============================================================================

const mockFullTransform = () =>
{
    return new Transform(new BObject("Cheel"), new BVector3(1), new BVector3(2), new BVector3(3), new BVector3(4));
}

// == TEST SUITE(S)
// ============================================================================

describe("Transform Tests", () => {

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor #1: Empty constructor should create default vectors", () => {
        const transform = new Transform(new BObject("Cheel"));
        expect(transform).toBeDefined();
        expect(transform.parent).toBeDefined();
        expect(transform.position).toMatchObject(new BVector3(0));
        expect(transform.scale).toMatchObject(new BVector3(1));
        expect(transform.rotation).toMatchObject(new BVector3(0));
        expect(transform.origin).toMatchObject(new BVector3(0));
    });   

    test("Constructor #2: Full parameters constructor should initialize right vectors", () => {
        const transform = new Transform(new BObject("Cheel"), new BVector3(1), new BVector3(2), new BVector3(3), new BVector3(4));
        expect(transform).toBeDefined();
        expect(transform.position).toMatchObject(new BVector3(1));
        expect(transform.scale).toMatchObject(new BVector3(2));
        expect(transform.rotation).toMatchObject(new BVector3(3));
        expect(transform.origin).toMatchObject(new BVector3(4));
    });
    
    test("Constructor #3: Optional parameters constructor should initialize right vectors", () => {
        const transform = new Transform(new BObject("Cheel"), new BVector3(1), new BVector3(2));
        expect(transform).toBeDefined();
        expect(transform.position).toMatchObject(new BVector3(1));
        expect(transform.scale).toMatchObject(new BVector3(2));
        expect(transform.rotation).toMatchObject(new BVector3(0));
        expect(transform.origin).toMatchObject(new BVector3(0));
    });
    
    test("Getter parent: Should return a defined parent", () =>
    {
        const transform = new Transform(new BWorld("ApertureScience"));
        expect(transform.parent).toBeDefined();
        expect(transform.parent?.id).toBe("ApertureScience");
    })

    test("Getter position: Should return the right BVector3", () => {
        const transform = mockFullTransform();
        expect(transform.position).toMatchObject(new BVector3(1));
    });

    test("Setter position: Should set the right BVector3", () => {
        const transform = mockFullTransform();
        transform.position = new BVector3(10);
        expect(transform.position).toMatchObject(new BVector3(10));
    });    

    test("Getter scale: Should return the right BVector3", () => {
        const transform = mockFullTransform();
        expect(transform.scale).toMatchObject(new BVector3(2));
    });

    test("Setter scale: Should set the right BVector3", () => {
        const transform = mockFullTransform();
        transform.scale = new BVector3(10);
        expect(transform.scale).toMatchObject(new BVector3(10));
    });        

    test("Getter rotation: Should return the right BVector3", () => {
        const transform = mockFullTransform();
        expect(transform.rotation).toMatchObject(new BVector3(3));
    });

    test("Setter rotation: Should set the right BVector3", () => {
        const transform = mockFullTransform();
        transform.rotation = new BVector3(10);
        expect(transform.rotation).toMatchObject(new BVector3(10));
    });

    test("Getter origin: Should return the right BVector3", () => {
        const transform = mockFullTransform();
        expect(transform.origin).toMatchObject(new BVector3(4));
    });

    test("Setter rotation: Should set the right BVector3", () => {
        const transform = mockFullTransform();
        transform.origin = new BVector3(10);
        expect(transform.origin).toMatchObject(new BVector3(10));
    });    
} );