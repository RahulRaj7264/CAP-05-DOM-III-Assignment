function generateID() {
            var selectedItems = [];
            var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

            for (var i = 0; i < checkboxes.length; i++) {
                selectedItems.push(checkboxes[i].value);
            }

            if (selectedItems.length === 0) {
                document.getElementById("result").innerText = "Please select at least one order.";
            } else {
                var generatedID = "ID-" + Math.floor(Math.random() * 1000);
                document.getElementById("result").innerText = "Selected Order: " + selectedItems.join(", ") + "\nID: " + generatedID;
            }
        }