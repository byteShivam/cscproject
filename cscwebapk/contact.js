function sendEmail (){
    Email.send({
      Host : "smtp.gmail.com",
      Username : "shivamdm11@gmail.com",
      Password : "msd@110201",
      To : 'shivamdm11@gmail.com',
      From : document.getElementById("email").value,
      Subject : "for genral info",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}