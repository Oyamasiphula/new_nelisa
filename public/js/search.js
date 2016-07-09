	//Jquery AKA AJAX searching patern and custom style for content
	$(document).ready(function(){
				//Products Search
	$("#productPullReq").keyup(function(){
		var productPullReq = $("#productPullReq").val();
		$.get("/products/search/" + productPullReq, function(results){
			$("#reqProductsOutPut").html(results);
		  });
	});	
				//Category Search
	$("#pullCatNameReq").keyup(function(){
		var pullCatNameReq = $("#pullCatNameReq").val();
		$.get("/productsCategories/search/" + pullCatNameReq, function(results){
				$("#reqCategoriesOutPut").html(results);
		  });
	});
			// sales search
	$("#pullProductsEarnings").keyup(function(){
		var pullProductsEarnings = $("#pullProductsEarnings").val();
		$.get("/sales/search/" + pullProductsEarnings, function(results){
			$("#reqProductsEarning").html(results);
		  });
			// conditional statements as a layout manager for a proper search textBox output
				if (pullProductsEarnings === true) {
		$.get("/sales/search/" + pullProductsEarnings, function(results){
					$("#reqSumOfProductsEarning").html(results);
		  });
				} else if(pullProductsEarnings === "" || false){
					window.location.replace("http://localhost:2001/sales");
				  };
	});
	$("#pullSumOfEarnings").keyup(function(){
			var pullSumOfEarnings = $("#pullSumOfEarnings").val();
			$.get("/salesSummary/showCategories/search/" + pullSumOfEarnings, function(results){
				$("#sumOfProductsEarningsOutPut").html(results);
			  });
			// conditional statements as a layout manager for a proper search textBox output
				if (pullSumOfEarnings === true) {
		$.get("/salesSummary/earningsPerCategory/search/" + pullSumOfEarnings, function(results){
					$("#reqEarningsCategoryNameTd").html(results);
		  });
				} else if(pullSumOfEarnings === "" || false){
					window.location.replace("http://localhost:2001/salesSummary/showCategories");
				  };
	});
	$('#pullCategoryName').keyup(function(){
		var pullCategoryName = $('#pullCategoryName').val();
		$.get('/salesSummary/earningsPerCategory/search/' + pullCategoryName, function(results){
				$('#reqEarningsCategoryNameTd').html(results);

		  });
		// conditional statements as a layout manager for a proper search textBox output
				if (pullCategoryName === true) {
		$.get("/salesSummary/earningsPerCategory/search/" + pullCategoryName, function(results){
					$("#reqEarningsCategoryNameTd").html(results);
		  });
				} else if(pullCategoryName === "" || false){
					window.location.replace("http://localhost:2001/salesSummary/EarningsPerCategory");
				  };
	});
	$('#pullProductProfit').keyup(function(){
		var pullProductProfit = $('#pullProductProfit').val();
		$.get('/salesProfits/search/' + pullProductProfit, function(results){
			$('#productNamesProfitsOutPutTd').html(results);
		});
				if (pullProductProfit === true) {
				$.get("/salesSummary/earningsPerCategory/search/" + pullProductProfit, function(results){
							$("#reqEarningsCategoryNameTd").html(results);
				  });

				} else if(pullProductProfit === "" || false){
					window.location.replace("http://localhost:2001/salesProfits");
				  };
	});
	$(function(){setTimeout(function(){
		$('.content').addClass('fadeIn');},300);
	});
});	