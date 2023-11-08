document.getElementById("FetchUserbtn").addEventListener(`click`, fetchUsers)


function fetchUsers() {
    fetch(`https://reqres.in/api/users`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.data);

            let output = ``;
            data.data.forEach(function (user) {
                console.log(user);

                output += `
                <div class="user-card">
                <img src="${user.avatar}" alt="User Avatar">
                <div class="user-details">
                    <span class="name">${user.first_name}</span>
                    <span class="email">${user.email}</span>
                </div>
            </div>
                `
            })

            document.getElementById(`userList`).innerHTML=output;


        })
}