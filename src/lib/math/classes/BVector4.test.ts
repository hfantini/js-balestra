// == IMPORT(S)
// ============================================================================

import InvalidParamException from "../../error/classes/InvalidParamException";
import BVector2 from "./BVector2";
import BVector3 from "./BVector3";
import BVector4 from "./BVector4";
import MathException from "./MathException";

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe( "BVector4 Tests", () => {

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Constructor test #1: Single value", () => {
        const vec = new BVector4(1);

        expect(vec).toBeDefined();
        expect(vec.X).toBe(1);
        expect(vec.Y).toBe(1);
        expect(vec.Z).toBe(1);
        expect(vec.W).toBe(1);
    });
    
    test("Constructor test #2: Normal values", () => {
        const vec = new BVector4(1, 2, 3, 4);

        expect(vec).toBeDefined();
        expect(vec.X).toBe(1);
        expect(vec.Y).toBe(2);
        expect(vec.Z).toBe(3);
        expect(vec.W).toBe(4);
    });

    test("Constructor test #3: From Vector2", () => {
        const vec = new BVector4( new BVector2(3, 4) );

        expect(vec).toBeDefined();
        expect(vec.X).toBe(3);
        expect(vec.Y).toBe(4);
        expect(vec.Z).toBe(0);
        expect(vec.W).toBe(0);
    });

    test("Constructor test #4: From Vector3", () => {
        const vec = new BVector4( new BVector3(3, 4, 5) );

        expect(vec).toBeDefined();
        expect(vec.X).toBe(3);
        expect(vec.Y).toBe(4);
        expect(vec.Z).toBe(5);
        expect(vec.W).toBe(0);
    });
    
    test("Constructor test #5: From Vector4", () => {
        const vec = new BVector4( new BVector4(3, 4, 5, 6) );

        expect(vec).toBeDefined();
        expect(vec.X).toBe(3);
        expect(vec.Y).toBe(4);
        expect(vec.Z).toBe(5);
        expect(vec.W).toBe(6);
    });

    test("Constructor test #6: Empty Value", () => {
        const vec = new BVector4();

        expect(vec).toBeDefined();
        expect(vec.X).toBe(0);
        expect(vec.Y).toBe(0);
        expect(vec.Z).toBe(0);
        expect(vec.W).toBe(0);
    });

    test("Constructor test #7: from two values", () => {
        const vec = new BVector4(1, 2);

        expect(vec).toBeDefined();
        expect(vec.X).toBe(1);
        expect(vec.Y).toBe(2);
        expect(vec.Z).toBe(0);
        expect(vec.W).toBe(0);
    });

    test("Constructor test #7: from three values", () => {
        const vec = new BVector4(1, 2, 3);

        expect(vec).toBeDefined();
        expect(vec.X).toBe(1);
        expect(vec.Y).toBe(2);
        expect(vec.Z).toBe(3);
        expect(vec.W).toBe(0);
    });    

    test("Method from(): Should return an vector with same values from param", () =>
    {
        const vec = new BVector4(1, 2, 3, 4);
        const vec4 = BVector4.from(vec);

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(vec.X);
        expect(vec4.Y).toBe(vec.Y);
        expect(vec4.Z).toBe(vec.Z);
        expect(vec4.W).toBe(vec.W);
    });

    test("Method from(): Should return an vector with same values from vector2", () =>
    {
        const vec = new BVector2(1, 2);
        const vec4 = BVector4.from(vec);

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(vec.X);
        expect(vec4.Y).toBe(vec.Y);
        expect(vec4.Z).toBe(0);
        expect(vec4.W).toBe(0);
    });
    
    test("Method from(): Should return an vector with same values from vector3", () =>
    {
        const vec = new BVector3(1, 2, 3);
        const vec4 = BVector4.from(vec);

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(vec.X);
        expect(vec4.Y).toBe(vec.Y);
        expect(vec4.Z).toBe(vec.Z);
        expect(vec4.W).toBe(0);
    });    

    test("Method from(): Should throw an InvalidParamException", () =>
    {
        expect( () => {BVector4.from("The cake is a lie...")} ).toThrow(InvalidParamException);
    });

    test("Method sum(): Should calculate the correct sum based in a single value", () =>
    {
        const vec = new BVector4(1, 2, 3, 4);
        const vec4 = vec.sum(1);

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(2);
        expect(vec4.Y).toBe(3);
        expect(vec4.Z).toBe(4);
        expect(vec4.W).toBe(5);
    });

    test("Method sum(): Should calculate the correct sum based in a vector4", () =>
    {
        const vec = new BVector4(1, 2, 3, 4);
        const vec4 = vec.sum( new BVector4(1, 2, 3, 4) );

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(2);
        expect(vec4.Y).toBe(4);
        expect(vec4.Z).toBe(6);
        expect(vec4.W).toBe(8);
    });

    test("Method sum(): Should calculate the correct sum based in a vector4 with weight", () =>
    {
        const vec = new BVector4(1, 2, 3, 4);
        const vec4 = vec.sum(1, new BVector4(1, 0, 0, 1) );

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(2);
        expect(vec4.Y).toBe(2);
        expect(vec4.Z).toBe(3);
        expect(vec4.W).toBe(5);
    });    
    
    test("Method sum(): Should calculate the correct sum based in a vector4 with zero weight", () =>
    {
        const vec = new BVector4(1, 2, 3, 4);
        const vec4 = vec.sum(1, new BVector4() );

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(1);
        expect(vec4.Y).toBe(2);
        expect(vec4.Z).toBe(3);
        expect(vec4.W).toBe(4);
    });    
    
    test("Method sub(): Should calculate the correct sub based in a single value", () =>
    {
        const vec = new BVector4(1, 2, 3, 4);
        const vec4 = vec.sub(1);

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(0);
        expect(vec4.Y).toBe(1);
        expect(vec4.Z).toBe(2);
        expect(vec4.W).toBe(3);
    });

    test("Method sub(): Should calculate the correct sub based in a vector4", () =>
    {
        const vec = new BVector4(1, 2, 3, 4);
        const vec4 = vec.sub( new BVector4(1, 2, 3, 4) );

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(0);
        expect(vec4.Y).toBe(0);
        expect(vec4.Z).toBe(0);
        expect(vec4.W).toBe(0);
    });

    test("Method sub(): Should calculate the correct sub based in a vector4 with weight", () =>
    {
        const vec = new BVector4(1, 2, 3, 4);
        const vec4 = vec.sub( 1, new BVector4(0, 1, 0, 1) );

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(1);
        expect(vec4.Y).toBe(1);
        expect(vec4.Z).toBe(3);
        expect(vec4.W).toBe(3);
    });

    test("Method sub(): Should calculate the correct sub based in a vector4 with zero weight", () =>
    {
        const vec = new BVector4(1, 2, 3, 4);
        const vec4 = vec.sub( 1, new BVector4(0, 0, 0, 0) );

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(1);
        expect(vec4.Y).toBe(2);
        expect(vec4.Z).toBe(3);
        expect(vec4.W).toBe(4);
    });  
    
    test("Method multi(): Should calculate the correct multiplication based in a single value", () =>
    {
        const vec = new BVector4(1, 2, 3, 4);
        const vec4 = vec.multi(2);

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(2);
        expect(vec4.Y).toBe(4);
        expect(vec4.Z).toBe(6);
        expect(vec4.W).toBe(8);
    });

    test("Method multi(): Should calculate the correct multiplication based in a vector4", () =>
    {
        const vec = new BVector4(1, 2, 3, 4);
        const vec4 = vec.multi( new BVector4(1, 2, 3, 4) );

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(1);
        expect(vec4.Y).toBe(4);
        expect(vec4.Z).toBe(9);
        expect(vec4.W).toBe(16);
    });

    test("Method multi(): Should calculate the correct multiplication based in a vector4 with weight", () =>
    {
        const vec = new BVector4(1, 2, 3, 4);
        const vec4 = vec.multi( 3, new BVector4(1, 0, 1, 1) );

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(3);
        expect(vec4.Y).toBe(2);
        expect(vec4.Z).toBe(9);
        expect(vec4.W).toBe(12);
    });

    test("Method multi(): Should calculate the correct multiplication based in a vector4 with zero weight", () =>
    {
        const vec = new BVector4(1, 2, 3, 4);
        const vec4 = vec.multi( 3, new BVector4() );

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(1);
        expect(vec4.Y).toBe(2);
        expect(vec4.Z).toBe(3);
        expect(vec4.W).toBe(4);
    });    

    test("Method div(): Should calculate the correct division based in a single value", () =>
    {
        const vec = new BVector4(2, 4, 6, 8);
        const vec4 = vec.div(2);

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(1);
        expect(vec4.Y).toBe(2);
        expect(vec4.Z).toBe(3);
        expect(vec4.W).toBe(4);
    });

    test("Method div(): Should calculate the correct division based in a vector4", () =>
    {
        const vec = new BVector4(10, 20, 30, 40);
        const vec4 = vec.div( new BVector4(5, 10, 15, 20) );

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(2);
        expect(vec4.Y).toBe(2);
        expect(vec4.Z).toBe(2);
        expect(vec4.W).toBe(2);
    });

    test("Method div(): Should calculate the correct division based in a vector4 with weight", () =>
    {
        const vec = new BVector4(3, 9, 27, 30);
        const vec4 = vec.div( 3, new BVector4(1, 1, 1, 1) );

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(1);
        expect(vec4.Y).toBe(3);
        expect(vec4.Z).toBe(9);
        expect(vec4.W).toBe(10);
    });
    
    test("Method div(): Should calculate the correct division based in a vector4 with zero weight", () =>
    {
        const vec = new BVector4(3, 9, 27, 30);
        const vec4 = vec.div( 3, new BVector4() );

        expect(vec4).toBeDefined();
        expect(vec4.X).toBe(3);
        expect(vec4.Y).toBe(9);
        expect(vec4.Z).toBe(27);
        expect(vec4.W).toBe(30);
    });

    test("Method div(): Should throw MathException based in single value zero", () =>
    {
        const vec = new BVector4(3, 3, 3, 3);
        expect(() => {vec.div(0);}).toThrow(MathException);
    });
    
    test("Method div(): Should throw MathException based with vector with zero values", () =>
    {
        const vec = new BVector4(3, 3, 3, 4);
        expect(() => {vec.div(new BVector4(1, 0, 0, 0));}).toThrow(MathException);
        expect(() => {vec.div(new BVector4(0, 1, 0, 0));}).toThrow(MathException);
        expect(() => {vec.div(new BVector4(0, 0, 1, 0));}).toThrow(MathException);
        expect(() => {vec.div(new BVector4(0, 0, 0, 1));}).toThrow(MathException);
    });

    test("Method clone(): Should return a new instance with same values", () =>
    {
        const vec = new BVector4(3, 9, 27, 30);
        const clonedVec = vec.clone();

        expect(clonedVec.X).toBe(vec.X);
        expect(clonedVec.Y).toBe(vec.Y);
        expect(clonedVec.Z).toBe(vec.Z);
        expect(clonedVec.W).toBe(vec.W);
    });
} );