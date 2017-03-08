
window.onload = function() {
    	var button = document.getElementById("but");
		button.addEventListener("click", showData, false);
};
  
	function showData(){
			var data = new XMLHttpRequest();
			
			data.open('GET', 'users.json', true);
			data.send();
			data.onreadystatechange = function(){

				if (data.readyState != 4) return;
				
				if (data.status != 200) {
				alert(data.status + ': ' + data.statusText);
			  } else {
				let users = JSON.parse(data.responseText);
					users.forEach((user) => {
						console.log(user.name)
					})
			  }
			
			}			
					
	}	
			