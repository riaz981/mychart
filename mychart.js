//Get context with jQuery - using jQuery's .get() method.
			var ctx = $("#myChart").get(0).getContext("2d");

			var data = {

					labels: ["January","February","March","April","May", "June", "July"],
					datasets: [
						{
							fillColor: "rgba(220,220,220,0.5)",
							strokeColor: "rgba(220,220,220,1)",
							pointColor: "rgba(220,220,220,1)",
							pointStrokeColor: "#fff",
							data: [2000,1905,90,81,56,55,40]
						},
						{
							fillColor : "rgba(151,187,205,0.5)",
							strokeColor : "rgba(151,187,205,1)",
							pointColor : "rgba(151,187,205,1)",
							pointStrokeColor : "#fff",
							data : [500,48,600,19,96,27,100]
						}
					]
			};
			//This will get the first returned node in the jQuery collection.
			// Line(data) shows its a line chart, can have different charts
			//based on changing that bit.
			var myNewChart = new Chart(ctx).Line(data);