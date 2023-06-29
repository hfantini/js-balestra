// == IMPORT(S)
// ============================================================================

import { BMathException } from "../..";
import BInvalidParamException from "../../error/classes/BInvalidParamException";
import BVector2 from "./BVector2";
import BVector3 from "./BVector3";
import BVector4 from "./BVector4";

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe( "BVector2 Tests", () => {

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor test #1: Single value", () => {
        const vec = new BVector2(1);

        expect(vec).toBeDefined();
        expect(vec.X).toBe(1);
        expect(vec.Y).toBe(1);
    });
    
    test("Constructor test #2: Normal values", () => {
        const vec = new BVector2(1, 2);

        expect(vec).toBeDefined();
        expect(vec.X).toBe(1);
        expect(vec.Y).toBe(2);
    });

    test("Constructor test #3: From Vector2", () => {
        const vec = new BVector2( new BVector2(3, 4) );

        expect(vec).toBeDefined();
        expect(vec.X).toBe(3);
        expect(vec.Y).toBe(4);
    });

    test("Constructor test #4: From Vector3", () => {
        const vec = new BVector2( new BVector3(3, 4, 5) );

        expect(vec).toBeDefined();
        expect(vec.X).toBe(3);
        expect(vec.Y).toBe(4);
    });
    
    test("Constructor test #5: From Vector4", () => {
        const vec = new BVector2( new BVector4(3, 4, 5, 6) );

        expect(vec).toBeDefined();
        expect(vec.X).toBe(3);
        expect(vec.Y).toBe(4);
    });

    test("Constructor test #6: Empty Value", () => {
        const vec = new BVector2();

        expect(vec).toBeDefined();
        expect(vec.X).toBe(0);
        expect(vec.Y).toBe(0);
    });

    test("Method from(): Should return an vector with same values from param", () =>
    {
        const vec = new BVector2(1, 2);
        const vec2 = BVector2.from(vec);

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(vec.X);
        expect(vec2.Y).toBe(vec.Y);
    });

    test("Method from(): Should throw an BInvalidParamException", () =>
    {
        expect( () => {BVector2.from("The cake is a lie...")} ).toThrow(BInvalidParamException);
    });

    test("Method sum(): Should calculate the correct sum based in a single value", () =>
    {
        const vec = new BVector2(1, 2);
        const vec2 = vec.sum(1);

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(2);
        expect(vec2.Y).toBe(3);
    });

    test("Method sum(): Should calculate the correct sum based in a vector2", () =>
    {
        const vec = new BVector2(1, 2);
        const vec2 = vec.sum( new BVector2(1, 2) );

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(2);
        expect(vec2.Y).toBe(4);
    });

    test("Method sum(): Should calculate the correct sum based in a vector2 with weight", () =>
    {
        const vec = new BVector2(1, 2);
        const vec2 = vec.sum(1, new BVector2(1, 0) );

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(2);
        expect(vec2.Y).toBe(2);
    });    
    
    test("Method sum(): Should calculate the correct sum based in a vector2 with zero weight", () =>
    {
        const vec = new BVector2(1, 2);
        const vec2 = vec.sum(1, new BVector2(0, 0) );

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(1);
        expect(vec2.Y).toBe(2);
    }); 
    
    test("Method sub(): Should calculate the correct sub based in a single value", () =>
    {
        const vec = new BVector2(1, 2);
        const vec2 = vec.sub(1);

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(0);
        expect(vec2.Y).toBe(1);
    });

    test("Method sub(): Should calculate the correct sub based in a vector2", () =>
    {
        const vec = new BVector2(1, 2);
        const vec2 = vec.sub( new BVector2(1, 2) );

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(0);
        expect(vec2.Y).toBe(0);
    });

    test("Method sub(): Should calculate the correct sub based in a vector2 with weight", () =>
    {
        const vec = new BVector2(1, 2);
        const vec2 = vec.sub( 1, new BVector2(0, 1) );

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(1);
        expect(vec2.Y).toBe(1);
    });

    test("Method sub(): Should calculate the correct sub based in a vector2 with zero weight", () =>
    {
        const vec = new BVector2(1, 2);
        const vec2 = vec.sub( 1, new BVector2(0, 0) );

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(1);
        expect(vec2.Y).toBe(2);
    });  
    
    test("Method multi(): Should calculate the correct multiplication based in a single value", () =>
    {
        const vec = new BVector2(1, 2);
        const vec2 = vec.multi(2);

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(2);
        expect(vec2.Y).toBe(4);
    });

    test("Method multi(): Should calculate the correct multiplication based in a vector2", () =>
    {
        const vec = new BVector2(1, 2);
        const vec2 = vec.multi( new BVector2(1, 2) );

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(1);
        expect(vec2.Y).toBe(4);
    });

    test("Method multi(): Should calculate the correct multiplication based in a vector2 with weight", () =>
    {
        const vec = new BVector2(1, 2);
        const vec2 = vec.multi( 3, new BVector2(1, 0) );

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(3);
        expect(vec2.Y).toBe(2);
    });

    test("Method multi(): Should calculate the correct multiplication based in a vector2 with zero weight", () =>
    {
        const vec = new BVector2(1, 2);
        const vec2 = vec.multi( 3, new BVector2() );

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(1);
        expect(vec2.Y).toBe(2);
    });    

    test("Method div(): Should calculate the correct division based in a single value", () =>
    {
        const vec = new BVector2(2, 4);
        const vec2 = vec.div(2);

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(1);
        expect(vec2.Y).toBe(2);
    });

    test("Method div(): Should calculate the correct division based in a vector2", () =>
    {
        const vec = new BVector2(10, 20);
        const vec2 = vec.div( new BVector2(5, 10) );

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(2);
        expect(vec2.Y).toBe(2);
    });

    test("Method div(): Should calculate the correct division based in a vector2 with weight", () =>
    {
        const vec = new BVector2(3, 3);
        const vec2 = vec.div( 3, new BVector2(1, 0) );

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(1);
        expect(vec2.Y).toBe(3);
    });
    
    test("Method div(): Should calculate the correct division based in a vector2 with zero weight", () =>
    {
        const vec = new BVector2(3, 3);
        const vec2 = vec.div( 3, new BVector2() );

        expect(vec2).toBeDefined();
        expect(vec2.X).toBe(3);
        expect(vec2.Y).toBe(3);
    });

    test("Method div(): Should throw BMathException based in single value zero", () =>
    {
        const vec = new BVector2(3, 3);
        expect(() => {vec.div(0);}).toThrow(BMathException);
    });
    
    test("Method div(): Should throw BMathException based with vector with zero values", () =>
    {
        const vec = new BVector2(3, 3);
        expect(() => {vec.div(new BVector2(1, 0));}).toThrow(BMathException);
        expect(() => {vec.div(new BVector2(0, 1));}).toThrow(BMathException);
    });

    test("Method clone(): Should return a new instance with same values", () =>
    {
        const vec = new BVector2(3, 6);
        const clonedVec = vec.clone();

        expect(clonedVec.X).toBe(vec.X);
        expect(clonedVec.Y).toBe(vec.Y);
    });
} );