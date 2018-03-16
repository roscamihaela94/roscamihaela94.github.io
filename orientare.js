window.addEventListener("deviceorientation", on_divice_orientation)

function on_divice_orientation(e)
{
	document.getElementById(id_orientation).innerHTML = e.alpha.toFixed(1)+ " " + e.beta.toFixed(1) + " " + e.gamma.toFixed(1);
 	var viewpoint = documen.getElementById("id_viewpoint");

 	viewpoint.setAttribute("orientation","0 0 1" + e.alpha * Math.PI / 180);
}