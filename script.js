const name = 'frugence';
  const nameArray = Array.from(name);
console.log(name);


const menuItem = document.getElementById("menu-item")
console.log(menuItem)



fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.getElementById("activity-name").textContent = data.activity
    })