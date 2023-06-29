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

describe( "BVector3 Tests", () => {

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor test #1: Single value", () => {
        const vec = new BVector3(1);

        expect(vec).toBeDefined();
        expect(vec.X).toBe(1);
        expect(vec.Y).toBe(1);
        expect(vec.Z).toBe(1);
    });
    
    test("Constructor test #2: Normal values", () => {
        const vec = new BVector3(1, 2, 3);

        expect(vec).toBeDefined();
        expect(vec.X).toBe(1);
        expect(vec.Y).toBe(2);
        expect(vec.Z).toBe(3);
    });

    test("Constructor test #3: From Vector2", () => {
        const vec = new BVector3( new BVector2(3, 4) );

        expect(vec).toBeDefined();
        expect(vec.X).toBe(3);
        expect(vec.Y).toBe(4);
        expect(vec.Z).toBe(0);
    });

    test("Constructor test #4: From Vector3", () => {
        const vec = new BVector3( new BVector3(3, 4, 5) );

        expect(vec).toBeDefined();
        expect(vec.X).toBe(3);
        expect(vec.Y).toBe(4);
        expect(vec.Z).toBe(5);
    });
    
    test("Constructor test #5: From Vector4", () => {
        const vec = new BVector3( new BVector4(3, 4, 5, 6) );

        expect(vec).toBeDefined();
        expect(vec.X).toBe(3);
        expect(vec.Y).toBe(4);
        expect(vec.Z).toBe(5);
    });

    test("Constructor test #6: Empty Value", () => {
        const vec = new BVector3();

        expect(vec).toBeDefined();
        expect(vec.X).toBe(0);
        expect(vec.Y).toBe(0);
        expect(vec.Z).toBe(0);
    });

    test("Constructor test #7: from two values", () => {
        const vec = new BVector3(1, 2);

        expect(vec).toBeDefined();
        expect(vec.X).toBe(1);
        expect(vec.Y).toBe(2);
        expect(vec.Z).toBe(0);
    });

    test("Method from(): Should return an vector with same values from param", () =>
    {
        const vec = new BVector3(1, 2, 3);
        const vec3 = BVector3.from(vec);

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(vec.X);
        expect(vec3.Y).toBe(vec.Y);
        expect(vec3.Z).toBe(vec.Z);
    });

    test("Method from(): Should return an vector with same values from vector2", () =>
    {
        const vec = new BVector2(1, 2);
        const vec3 = BVector3.from(vec);

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(vec.X);
        expect(vec3.Y).toBe(vec.Y);
        expect(vec3.Z).toBe(0);
    });    

    test("Method from(): Should throw an BInvalidParamException", () =>
    {
        expect( () => {BVector3.from("The cake is a lie...")} ).toThrow(BInvalidParamException);
    });

    test("Method sum(): Should calculate the correct sum based in a single value", () =>
    {
        const vec = new BVector3(1, 2, 3);
        const vec3 = vec.sum(1);

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(2);
        expect(vec3.Y).toBe(3);
        expect(vec3.Z).toBe(4);
    });

    test("Method sum(): Should calculate the correct sum based in a vector3", () =>
    {
        const vec = new BVector3(1, 2, 3);
        const vec3 = vec.sum( new BVector3(1, 2, 3) );

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(2);
        expect(vec3.Y).toBe(4);
        expect(vec3.Z).toBe(6);
    });

    test("Method sum(): Should calculate the correct sum based in a vector3 with weight", () =>
    {
        const vec = new BVector3(1, 2, 3);
        const vec3 = vec.sum(1, new BVector3(1, 0, 1) );

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(2);
        expect(vec3.Y).toBe(2);
        expect(vec3.Z).toBe(4);
    });    
    
    test("Method sum(): Should calculate the correct sum based in a vector3 with zero weight", () =>
    {
        const vec = new BVector3(1, 2, 3);
        const vec3 = vec.sum(1, new BVector3(0, 0, 0) );

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(1);
        expect(vec3.Y).toBe(2);
        expect(vec3.Z).toBe(3);
    });    
    
    test("Method sub(): Should calculate the correct sub based in a single value", () =>
    {
        const vec = new BVector3(1, 2, 3);
        const vec3 = vec.sub(1);

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(0);
        expect(vec3.Y).toBe(1);
        expect(vec3.Z).toBe(2);
    });

    test("Method sub(): Should calculate the correct sub based in a vector3", () =>
    {
        const vec = new BVector3(1, 2, 3);
        const vec3 = vec.sub( new BVector3(1, 2, 3) );

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(0);
        expect(vec3.Y).toBe(0);
        expect(vec3.Z).toBe(0);
    });

    test("Method sub(): Should calculate the correct sub based in a vector3 with weight", () =>
    {
        const vec = new BVector3(1, 2, 3);
        const vec3 = vec.sub( 1, new BVector3(0, 1, 0) );

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(1);
        expect(vec3.Y).toBe(1);
        expect(vec3.Z).toBe(3);
    });

    test("Method sub(): Should calculate the correct sub based in a vector3 with zero weight", () =>
    {
        const vec = new BVector3(1, 2, 3);
        const vec3 = vec.sub( 1, new BVector3(0, 0, 0) );

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(1);
        expect(vec3.Y).toBe(2);
        expect(vec3.Z).toBe(3);
    });  
    
    test("Method multi(): Should calculate the correct multiplication based in a single value", () =>
    {
        const vec = new BVector3(1, 2, 3);
        const vec3 = vec.multi(2);

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(2);
        expect(vec3.Y).toBe(4);
        expect(vec3.Z).toBe(6);
    });

    test("Method multi(): Should calculate the correct multiplication based in a vector3", () =>
    {
        const vec = new BVector3(1, 2, 3);
        const vec3 = vec.multi( new BVector3(1, 2, 3) );

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(1);
        expect(vec3.Y).toBe(4);
        expect(vec3.Z).toBe(9);
    });

    test("Method multi(): Should calculate the correct multiplication based in a vector3 with weight", () =>
    {
        const vec = new BVector3(1, 2, 3);
        const vec3 = vec.multi( 3, new BVector3(1, 0, 1) );

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(3);
        expect(vec3.Y).toBe(2);
        expect(vec3.Z).toBe(9);
    });

    test("Method multi(): Should calculate the correct multiplication based in a vector3 with zero weight", () =>
    {
        const vec = new BVector3(1, 2, 3);
        const vec3 = vec.multi( 3, new BVector3() );

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(1);
        expect(vec3.Y).toBe(2);
        expect(vec3.Z).toBe(3);
    });    

    test("Method div(): Should calculate the correct division based in a single value", () =>
    {
        const vec = new BVector3(2, 4, 6);
        const vec3 = vec.div(2);

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(1);
        expect(vec3.Y).toBe(2);
        expect(vec3.Z).toBe(3);
    });

    test("Method div(): Should calculate the correct division based in a vector3", () =>
    {
        const vec = new BVector3(10, 20, 30);
        const vec3 = vec.div( new BVector3(5, 10, 15) );

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(2);
        expect(vec3.Y).toBe(2);
        expect(vec3.Z).toBe(2);
    });

    test("Method div(): Should calculate the correct division based in a vector3 with weight", () =>
    {
        const vec = new BVector3(3, 9, 27);
        const vec3 = vec.div( 3, new BVector3(1, 1, 1) );

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(1);
        expect(vec3.Y).toBe(3);
        expect(vec3.Z).toBe(9);
    });
    
    test("Method div(): Should calculate the correct division based in a vector3 with zero weight", () =>
    {
        const vec = new BVector3(3, 9, 27);
        const vec3 = vec.div( 3, new BVector3() );

        expect(vec3).toBeDefined();
        expect(vec3.X).toBe(3);
        expect(vec3.Y).toBe(9);
        expect(vec3.Z).toBe(27);
    });

    test("Method div(): Should throw BMathException based in single value zero", () =>
    {
        const vec = new BVector3(3, 3, 3);
        expect(() => {vec.div(0);}).toThrow(BMathException);
    });
    
    test("Method div(): Should throw BMathException based with vector with zero values", () =>
    {
        const vec = new BVector3(3, 3, 3);
        expect(() => {vec.div(new BVector3(1, 0, 0));}).toThrow(BMathException);
        expect(() => {vec.div(new BVector3(0, 1, 0));}).toThrow(BMathException);
        expect(() => {vec.div(new BVector3(0, 0, 1));}).toThrow(BMathException);
    });

    test("Method clone(): Should return a new instance with same values", () =>
    {
        const vec = new BVector3(3, 9, 27);
        const clonedVec = vec.clone();

        expect(clonedVec.X).toBe(vec.X);
        expect(clonedVec.Y).toBe(vec.Y);
        expect(clonedVec.Z).toBe(vec.Z);
    });
} );