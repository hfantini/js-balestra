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

// == METHOD(S) & EVENT(S)
// ========================================================================

const createDomContainerMock = ():HTMLDivElement =>
{
    return {
        clientWidth: 300,
        clientHeight: 300,
    } as HTMLDivElement;
}

// == EXPORTS
// ============================================================================

export default createDomContainerMock;