// Insert commands into browser console
console.log(`All elements ${document.querySelectorAll(`*`).length}`)
console.log(`DIV elements ${document.querySelectorAll(`div`).length}`)
console.log(`Not DIV elements ${document.querySelectorAll(`*`).length - document.querySelectorAll(`div`).length}`)
if(document.querySelectorAll(`p`).length > 0) 
	{document.querySelectorAll(`p`).forEach(p => p.style.setProperty(`color`, `#ff0000`)); console.log(`<p> elements are red`)} 
		else {console.log(`no <p> elemetns on page`)}

