function validateForm() {
  let email = document.forms["form"]["email"].value;
  for (let i = 0; i < email.length; i++) {
    if (!email.includes("@", 0)) {
      alert("Please enter a valid email");
      return false;
    }
  }

  let name = document.forms["form"]["name"].value;
  let achievements = document.forms["form"]["achievements"].value;
  let dob = document.forms["form"]["date"].value;
  let grade = document.forms["form"]["grade"].value;
  let checked = document.forms["form"]["radio"].checked;

  alert(
    "We have successfully received the voyagers data in our databases. It is as follows"
  );
  alert("Name: " + name);
  alert("Email: " + email);
  alert("Achievements: " + achievements);
  alert("Date of Birth: " + dob);
  alert("Grade: " + grade);
  if (checked === true) {
    alert("You have accepted to recieve the notifications.");
  }
  alert("Thank you. We look forward to meet you on the fleet.");
}
