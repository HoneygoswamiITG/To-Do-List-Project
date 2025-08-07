function deleteItem(ele) {
            ele.parentElement.remove();
        }
        function clickvalue() {
            let val = document.getElementById("inp");
            let main = document.getElementById("textShow");
            let ele = document.getElementById("inp").value;
            let ele2 = document.createElement("p");
            ele2.innerHTML = `${ele} <button onclick='deleteItem(this)' class = "btn"> delete</button>`;
            main.appendChild(ele2);
            val.value = "";
        }