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

	const $storageTrunk = $("<ul></ul>");
	$storageTrunk.attr("storage", "trunk");
	console.log($storageTrunk);
	const $butterBeer = $("<li>butter beer</li>");
	const $invisibilityCloak = $("<li>invisibility cloak</li>");
	$invisibilityCloak.addClass("secret");
	const $magicMap = $("<li>magic map</li>");
	$magicMap.addClass("secret");
	const $timeTurner = $("<li>time turner</li>");
	$timeTurner.addClass("secret");
	const $leash = $("<li>leash</li>");
	$leash.addClass("cat");
	const $jellyBeans = $("<li>Bertie Bott's Every Flavor Beans</li>");
	$storageTrunk.append($butterBeer, $invisibilityCloak, $magicMap, $timeTurner, $leash, $jellyBeans );
	$container.append($storageTrunk);
	const $table = $("<table></table>");
	const $tHead = $("<thead></thead>");
	const $th1 = $("<th></th>");
	const $th2 = $("<th></th>");
	$th1.text("Day");
	$th2.text("Classes");
	const $tr = $("<tr></tr>");
	const $td1 = $("<td>Monday</td>");
	const $td2 = $("<td>Herbology, Quiditch, History of Magic</td>");
	const $tr1 = $("<tr></tr>");
	const $td3 = $("<td>Tuesday</td>");
	const $td4 = $("<td>Potions. Defense Against the Dark Arts</td>");
	const $tr2 = $("<tr></tr>");
	const $td5 = $("<td>Wednesday</td>");
	const $td6 = $("<td>Quiditch, Herbology, Potions</td>");
	const $tr3 = $("<tr></tr>");
	const $td7 = $("<td>Thursday</td>");
	const $td8 = $("<td>Charms, History of Magic, Potions</td>");
	const $tr4 = $("<tr></tr>");
	const $td9 = $("<td>Friday</td>");
	const $td10 = $("<td>Potions, Defense Against the Dark Arts</td>");


	$tr.append($td1, $td2);
	$tr1.append($td3, $td4);
	$tr2.append($td5, $td6);
	$tr3.append($td7, $td8);
	$tr4.append($td9, $td10);

	$tHead.append($th1, $th2);
	$table.append($tHead);
	$table.append($tr, $tr1, $tr2, $tr3, $tr4);
	

	$container.append($table);
	$butterBeer.remove();

	$wand.css("color", "indigo");
	$pet.appendTo($tr);
	$pet.insertAfter($h3);

	$(".secret").hide("slow").delay(2000).show("slow");
	$leash.addClass("cabbage");

	$leash.removeClass("cabbage");





 






















































});
