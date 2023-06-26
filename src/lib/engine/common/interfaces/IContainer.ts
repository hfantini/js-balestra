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

import BOject from "../classes/BObject";

// == IMPORT(S)
// ============================================================================

// == INTERFACE(S)
// ============================================================================

interface IContainer
{
	// == METHOD(S) & EVENT(S)
	// ========================================================================

    addChild(value:BOject):void;
    removeChild(value:string|BOject):void;
    removeChildren(values:string[]|BOject[]):void;
    getChild(id:string):BOject|undefined;
    getChildren(id:string[]):BOject[];
	count():number;
};

// == EXPORTS
// ============================================================================

export default IContainer;