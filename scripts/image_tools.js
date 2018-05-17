/**
 * Reads image from file input
 */
function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function(e) {
			$('#image')
				.attr('src', e.target.result)
				.width(224)
				.height(224);
		};

		reader.readAsDataURL(input.files[0]);
	}
}

$(document).ready(function() {

	$("#analyze").click(function() {
		$("#result_of_analysis").html('unknown')
		$("#analyze").addClass("is-loading")
		$("#analyze_form").submit()
	})

	$("#analyze_form").submit(function(e) {
	    e.preventDefault();
	    var formData = new FormData(this);    

	    $.ajax({
	        url: $(this).attr("action"),
	        type: 'POST',
	        data: formData,
	        success: function (data) {
	            $("#result_of_analysis").html(data)
	            $("#analyze").removeClass("is-loading")
	        },
	        error: function (data) {
	            $("#result_of_analysis").html("Analysis failed")
	            $("#analyze").removeClass("is-loading")
	        },
	        cache: false,
	        contentType: false,
	        processData: false
	    });
	});
	
})
