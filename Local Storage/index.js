    document.getElementById(`userForm`).addEventListener(`submit`, function (e) {

        e.preventDefault();

        let name = document.getElementById(`name`).value;
        let age = document.getElementById(`age`).value;

        localStorage.setItem('userName', name);
        localStorage.setItem('userAge', age);

        displayedName.textContent = name;
        displayedAge.textContent = age;

        document.getElementById('name').value = '';
        document.getElementById('age').value = '';

        displayArea.style.display = `block`
    })

    document.getElementById('retrieveData').addEventListener('click', function () {
        const name = localStorage.getItem('userName');
        const age = localStorage.getItem('userAge');

        if (name && age) {
            const displayArea = document.getElementById('displayArea');
            displayArea.innerHTML = `
          <h2>Stored Data</h2>
          <table id="table-data">
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>${name}</td>
              <td>${age}</td>
            </tr>
          </table>
        `;
        } else {
            alert('No data found in Local Storage.');

            document.getElementById("userForm").reset();
        }
    });

    document.getElementById(`clearBtn`).addEventListener(`click`, function () {

        document.getElementById("userForm").reset();

    });
