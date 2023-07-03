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

import BObject from "../../classes/BObject";

// == IMPORT(S)
// ============================================================================

// == INTERFACE(S)
// ============================================================================

interface IContainer
{
	// == METHOD(S) & EVENT(S)
	// ========================================================================

    addChild(value:BObject):void;
    removeChild(value:string|BObject):void;
    removeChildren(values:string[]|BObject[]):void;
    getChild(id:string):BObject|undefined;
    getChildren(id:string[]):BObject[];
	getAllChildren():BObject[];
	count():number;
};

// == EXPORTS
// ============================================================================

export default IContainer;