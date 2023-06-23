/*= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

	BALESTRA ENGINE
	---------------
	Simple graphical engine designed for web.
	
	  Author: Henrique Fantini
	 Contact: henrique.fantini@hotmail.com
    LinkedIn: https://www.linkedin.com/in/henrique-fantini/
	
	-- X --
	
	Published over MIT License @ 2023

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =*/

// == INTERFACE
// ============================================================================

interface IBVector<T> {

	// == METHOD(S) & EVENT(S)
	// ========================================================================

	sum(value:number|IBVector<T>, weight:IBVector<T>):T;
	sub(value:number|IBVector<T>, weight:IBVector<T>):T;
	multi(value:number|IBVector<T>, weight:IBVector<T>):T;
	div(value:number|IBVector<T>, weight:IBVector<T>):T;
	clone():T;
};

// == EXPORTS
// ============================================================================

export default IBVector;