var courseDomain = {
  "B.Sc IT": "Web Development",
  "B.Sc CS": "Programming",
  "B.Sc Data Science": "Data Science",
  "BCA": "Programming",
  "B.Com Banking": "Banking and Finance",
  "BBA": "Banking and Finance"
};

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var course = document.getElementById("course").value;
  var year = document.getElementById("year").value;

  if (name == "" || email == "" || phone == "" || course == "" || year == "") {
    alert("Please fill all the details");
    return;
  }
  if (email.indexOf("@") == -1) {
    alert("Enter a correct email");
    return;
  }
  if (phone.length != 10) {
    alert("Phone number must be 10 digits");
    return;
  }

  var counts = {
    "Web Development": 0,
    "Data Science": 0,
    "Networking and Linux": 0,
    "Banking and Finance": 0,
    "Programming": 0
  };

  var boxes = document.getElementsByClassName("skill");
  var total = 0;
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].checked) {
      counts[boxes[i].value] = counts[boxes[i].value] + 1;
      total = total + 1;
    }
  }

  if (total == 0) {
    alert("Please select at least one skill");
    return;
  }

  var best = "";
  var bestCount = 0;
  for (var d in counts) {
    if (counts[d] > bestCount) {
      best = d;
      bestCount = counts[d];
    }
  }

  var message = "";
  var courseSuits = courseDomain[course];

  if (courseSuits == undefined) {
    message = "Your skills match the " + best + " domain.";
  } else if (courseSuits == best) {