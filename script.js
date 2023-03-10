const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

$(document).ready(function () {
	// User data
	var users = [
		{ username: "admin", password: "admin", name: "Admin User", role: "admin" },
		{ username: "user", password: "user", name: "Standard User", role: "standard" },
		{ username: "user1", password: "user1", name: "Standard User 1", role: "standard1" }
	];

	// Hide car info panel initially
	$(".car-info").hide();

	// Login form submit event
	$("form").submit(function (e) {
		e.preventDefault();

		var username = $(".username").val();
		var password = $(".password").val();

		var user = users.find(function (u) {
			return u.username === username && u.password === password;
		});

		if (user) {
			// Show car info panel
			$(".container").hide();
			$(".car-info").show();

			// Display user info
			$("#user-info").html("<p>Name: " + user.name + "</p><p>Role: " + user.role + "</p>");

			// Display car info based on user role
			if (user.role === "admin") {
				$("#car-info").html("<ul><li><span class='component'>Engine:</span> <span id='engine-status' class='status-off'>Off</span> <button id='engine-btn'>Start</button></li><li><span class='component'>Doors:</span> <span id='doors-status' class='status-off'>Closed</span> <button id='doors-btn'>Open</li><li><span class='component'>Lights:</span> <span id='lights-status' class='status-off'>Off</span> <button id='lights-btn'>Turn On</button></li></ul>");
				// Engine button click event
				$("#engine-btn").click(function () {
					if ($("#engine-status").hasClass("status-off")) {
						$("#engine-status").removeClass("status-off").addClass("status-on").text("On");
						alert("Engine started!");
					} else {
						$("#engine-status").removeClass("status-on").addClass("status-off").text("Off");
						alert("Engine stopped!");
					}
				});

				// Doors button click event
				$("#doors-btn").click(function () {
					if ($("#doors-status").hasClass("status-off")) {
						$("#doors-status").removeClass("status-off").addClass("status-on").text("Open");
						alert("Doors opened!");
					} else {
						$("#doors-status").removeClass("status-on").addClass("status-off").text("Closed");
						alert("Doors closed!");
					}
				});

				// Lights button click event
				$("#lights-btn").click(function () {
					if ($("#lights-status").hasClass("status-off")) {
						$("#lights-status").removeClass("status-off").addClass("status-on").text("On");
						alert("Lights turned on!");
					} else {
						$("#lights-status").removeClass("status-on").addClass("status-off").text("Off");
						alert("Lights turned off!");
					}
				});
			} else if (user.role === "standard") {
				$("#car-info").html("<ul><li><span class='component'>Engine:</span> <span id='engine-status' class='status-off'>Off</span></li><li><span class='component'>Doors:</span> <span id='doors-status' class='status-off'>Closed</span></li><li><span class='component'>Lights:</span> <span id='lights-status' class='status-off'>Off</span></li></ul>");
			}
			else if (user.role === "standard1") {
				$("#car-info").html("<ul><li><span class='component'>Engine:</span> <span id='engine-status' class='status-off'>Off</span></li><li><span class='component'>Doors:</span> <span id='doors-status' class='status-off'>Closed</span></li><li><span class='component'>Lights:</span> <span id='lights-status' class='status-off'>Off</span></li> <li><span class='component'>Footmat:</span> <span id='Footmat-status' class='status-off'>Not There</span></li> <li><span class='component'>Arm-rest:</span> <span id='arm-rest-status' class='status-off'>Available</span></li></ul> ");
			}
		} else {
			$("#login-error").text("Invalid username or password.");
		}
	});

	// Logout button click event
	$("#logout-btn").click(function () {
		// Hide car info panel and show login form
		$(".car-info").hide();
		$(".container").show();

		// Clear user info and car info
		$("#user-info").empty();
		$("#car-info").empty();
	});
});