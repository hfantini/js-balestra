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

import BUpdateGear from "../../classes/BUpdateGear";

// == IMPORT(S)
// ============================================================================

// == INTERFACE(S)
// ============================================================================

interface IUpdatable
{
	// == METHOD(S) & EVENT(S)
	// ========================================================================

	update(updateGear:BUpdateGear):void;
};

// == EXPORTS
// ============================================================================

export default IUpdatable;

