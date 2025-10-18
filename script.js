function getUser() {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
      let user = data.results[0];//targeted api ka first data
      if(user.gender === 'female'){ 
      document.getElementById("photo").src = user.picture.large;
      document.getElementById("name").textContent = user.name.first + " " + user.name.last;
      document.getElementById("email").textContent = user.email;
      document.getElementById("phone").textContent = user.phone;
      document.getElementById("location").textContent = user.location.city + ", " + user.location.country;}
    });
}
getUser();