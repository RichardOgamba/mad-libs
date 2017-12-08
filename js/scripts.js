$(document).ready(function(){
	$("#blanks form").submit(function(){
		var person1Input = $("input#person1").val();
		var person2Input = $("input#person2").val();
		var animalInput = $("input#animal").val();
		var exclamationInput = $("input#exclamation");
		var verbInput = $("input#verb");
		var nounInput = $("input#noun");

		$(".person1").text("blah blah");
		$(".person2").text("blah blah");
		$(".animal").text("blah blah");
		$(".exclamation").text("blah blah");
		$(".verb").text("blah blah");
		$(".noun").text("blah blah");

		$("#story").show();

		event.preventDefault();
	});
});
