$(document).ready(function() {
	$("#addData").click(function(event) {
		event.preventDefault();
		//var val = JSON.stringify($("#Form :input").serializeArray());
		$val = $("#Form").serializeArray();
		$data = {
			//Need to be a better way to convert data from form to JSON
			text: $val[0].value,
			star: $val[1].value,
			date: $val[2].value
		};
		$.ajax({
			type: "POST",
			url: "/add",
			datatype: "json",
			data: $data,
			async: true,
			success: function() {
				$('#myModal').modal('hide');
				$('body').removeClass('modal-open');
				$('.modal-backdrop').remove();
				reRender();
			}
		});
	});

	//Function for realtime rerendrering part with inner content without refreshing
	function reRender() {
		$.ajax({
			type: "GET",
			url: "/",
			datatype: "text/html",
			async: true,
			success: function(result) {
				console.log("Rerender");
				//Grab the necessary part of whole page, and replece it dynamicly
				var inner_content =  $(result).find("#inner-content");
				$("#inner-content").replaceWith(inner_content);
			}	
		});
	}

	//Update priority AJAX
	function updateStar(id, stars) {
		$.ajax({
			type: "PUT",
			url: "/" + id + "/update",
			datatype: "json",
			data: {
				"stars": stars
			},
			async: true,
			success: function(result) {
				console.log(result);
			}
		});
	}	

	//Add Star
	$(".add-star").click(function(e) {
		e.preventDefault();
		$stars = $( this ).parent().find( ".star" );
		$id = $(this).parent().parent().attr("id");
		//Cut unnecessary symbols from ID we taking from DOM
		$id = $id.replace(/\D/g, '')
		$stars.last().after("<i class='star glyphicon glyphicon-star'></i>");
		$stars.length += 1;
		console.log("Add star, current count of stars: " + $stars.length);
		updateStar($id, $stars.length);
	});

	//Remove Star
	$(".remove-star").click(function(e) {
		e.preventDefault();
		$stars = $( this ).parent().find( ".star" );
		$id = $(this).parent().parent().attr("id");
		//Cut unnecessary symbols from ID we taking from DOM
		$id = $id.replace(/\D/g, '');
		$stars.last().remove();
		$stars.length -= 1;
		console.log("Remove star, current count of stars: " + $stars.length + " with id " + $id);
		updateStar($id, $stars.length);
	});

	//Remove Item
	//This is the way how to stick the events after reRendering, see the https://stackoverflow.com/questions/19149354/jquery-on-event-doesnt-work-after-jquery-replacewith
	$(document).on('click','.removeData', function(event) {
		console.log("Clicked remove button");
		event.preventDefault();
		$id = $( this ).parent().parent().attr("id")
		//Cut unnecessary symbols from ID we taking from DOM
		$id = $id.replace(/\D/g, '');
		console.log($id);
		$.ajax({
			type: "POST",
			url: "/del",
			datatype: "json",
			async: true,
			data: {
				id: $id
			}
			})
			.done(function() {
				console.log("Item removed");				
			})
			.then(function() {reRender()})
			.fail(function() {
				console.log("Something went wrong");
			});
	});

});