window.onload = function () {

    let button = document.getElementById("but");
    button.addEventListener("click", showData, false);
    let buttonBones = document.getElementById("bones");
    buttonBones.addEventListener("click", onThrowBonesClicked, false);
    let bonesStatistics = document.getElementById("bonesStatistics");
    bonesStatistics.addEventListener("click", showBonesStatistics, false);
    let buttonPassword = document.getElementById("buttonPassword");
    buttonPassword.addEventListener("click", newPassword, false);
	let delU = document.getElementsByClassName("bdu");
    delU.addEventListener("click", delUser, false);

    function showData() {
        var data = new XMLHttpRequest();
        data.open('GET', 'users.json', true);
        data.send();
        data.onreadystatechange = function () {
            if (data.readyState != 4) return;
            if (data.status != 200) {
                alert(data.status + ': ' + data.statusText);
            } else {
                let users = JSON.parse(data.responseText);
                let tableBody = document.getElementById("tableId");
                users.forEach((user) => {
                    let tr = document.createElement('tr');
                    let usersArray = [user.name, user.gender, user.company, user.age, user.email, user.tags]

                    for (let a = 0; a < usersArray.length; a++) {
                        let td = document.createElement('td');
                        td.innerHTML = usersArray[a];
                        if (usersArray[a] == user.gender || user.company || user.age) {
                            td.classList.add("genderCompanyAge");
                        }
                        tr.appendChild(td);
                    }
						let tdBtn = document.createElement('td');
						let btn = document.createElement('button');
						btn.setAttribute('value', 'GGG');
						btn.classList.add("btn");
						btn.classList.add("btn-danger");
						btn.classList.add("bdu");
						btn.innerHTML = "Удалить<br />данного<br />юзера ?"
										
						tdBtn.appendChild(btn);
						tr.appendChild(tdBtn);
                    
					
					tableBody.appendChild(tr);
					
                });
				console.log(typeof(tableBody));
            }
        }
    }

	function delUser(){
		console.log("RRR");
	}
	
	
	
	
	
	
	
	
	
	
	
    let min = 1, max = 6;
    let statisticsArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let resArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let ex = document.getElementById("listPassword");
    let p = document.createElement("p");
    let list = document.getElementById("list");
    let bonesExit = document.getElementById("bonesExit");

    function onThrowBonesClicked() {
        throwBones();
        renderThrowBonesResult(getRandomNumber(min, max), getRandomNumber(min, max));
    }

    function throwBones() {
        return [getRandomNumber(min, max), getRandomNumber(min, max)];
    }

    function getRandomNumber(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }

    function renderThrowBonesResult(a, b) {
        bonesExit.innerHTML = "Выпали цифры " + a + " и " + b;
    }

    function showBonesStatistics() {
        let number = getNumber();
        for (let i = 0; i < number; i++) {
            randomStatistics(1, 6);
        }
        showStatistics();
    }

    function randomStatistics(min, max) {
        let bones = throwBones();
        let rand = bones[0];
        let rand2 = bones[1];
        let res = rand + rand2;

        for (let i = 0; i < statisticsArray.length; i++) {
            if (statisticsArray[i] == (res)) {
                resArray[i]++;
            }
        }

    }

    function showStatistics() {
        let li = document.createElement("li");
        let a = document.getElementById("idNumberCast").value;
        li.innerHTML = "Статистика выпадания цифр за " + a + " бросков";
        list.appendChild(li);
        for (let i = 0; i < statisticsArray.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = statisticsArray[i] + " Выпадало " + resArray[i] + " раз ";
            list.appendChild(li);
        }
    }

    function getNumber() {
        return document.getElementById("idNumberCast").value;
    }

    function newPassword() {
        let result = '';
        let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        let max_position = words.length - 1;
        let passwordLength = getPasswordLength();
        for (let i = 0; i < passwordLength; ++i) {
            position = Math.floor(Math.random() * max_position);
            result = result + words.substring(position, position + 1);
        }
        generateNewPass(result);
    }

    function getPasswordLength() {
        return document.getElementById("inputPassword").value;
    }

    function generateNewPass(pass) {
        p.innerHTML = "Ваш новый пароль: " + pass;
        ex.appendChild(p);
    }

};