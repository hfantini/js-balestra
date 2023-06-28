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

// == IMPORT(S)
// ============================================================================

import BTime from "../classes/BTime";
import BUpdateGear from "../classes/BUpdateGear";

// == METHOD(S) & EVENT(S)
// ========================================================================

const createBUpdateGearMock = ():BUpdateGear =>
{
    return new BUpdateGear(new BTime());
}

// == EXPORTS
// ============================================================================

export default createBUpdateGearMock;