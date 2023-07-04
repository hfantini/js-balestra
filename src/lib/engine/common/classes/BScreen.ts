/*
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

	BALESTRA ENGINE - REACT
	---------------
	Balestra engine support for react library.
	
	Author: Henrique Fantini
	Contact: henrique.fantini@hotmail.com
	LinkedIn: https://www.linkedin.com/in/henrique-fantini/
	
	-- X --
	
	Published over MIT License @ 2023

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
*/

// == IMPORT(S)
// ============================================================================

import BVector2 from "../../../math/classes/BVector2";

// == CLASSE(S)
// ============================================================================

class BScreen
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR
    public _elementSize: BVector2;
    public _container: HTMLDivElement;

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

    constructor(container:HTMLDivElement)
    {
        this._container = container;
        this._elementSize = new BVector2(this._container.clientWidth, this._container.clientHeight);
    }

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	// == GETTER(S) AND SETTER(S)
	// ========================================================================

    get elementSize():BVector2
    {
        return new BVector2(this._elementSize);
    }

    get windowSize():BVector2
    {
        return new BVector2(window.innerWidth, window.innerHeight);
    }

    get screenSize():BVector2
    {
        return new BVector2(screen.width, screen.height);
    }

    get screenOrientation():ScreenOrientation
    {
        return screen.orientation;
    }

    get container():HTMLDivElement
    {
        return this._container;
    }
};

// == EXPORTS
// ============================================================================

export default BScreen;