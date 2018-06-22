console.log("I did it! I linked jQuery and this file!");


 $(() => {

 	const $container = $("#container");
 	$("body").append($container);
 	const $h1 = $("<h1></h1>");
 	$container.append($h1);

 	$h1.text("Hogwarts");
 	const $h2 = $("<h2>Benjamin Kaplan</h2>");
 	$container.append($h2);
 	$h3 = $("<h3>Ravenclaw</h3>");
 	$container.append($h3)
 	const $pet = $("<h4>Sneak</h4>");
 	$container.append($pet);
 	const $wand = $("<h4>Mahagony Wand with Frog Guts Core</h4>"); 
 	$pet.addClass("cat");
	$container.append($wand);
  	

 






















































});
