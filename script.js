<script>
    let addBtn = document.getElementById('add_btn');
    addBtn.addEventListener('click', addList);
    let parentList = document.getElementById('parentList');

    function addList(e) {
        if (parentList.children[0].className == "emptymsg") {
            parentList.children[0].remove();
        }
        let currentBtn = e.currentTarget;
        let currentInput = currentBtn.previousElementSibling;
        let currentChapterName = currentInput.value;

        let newLi = document.createElement('li');
        newLi.className = "list-group-item d-flex justify-content-between";
        newLi.innerHTML = `<h3 class="flex-grow-1">${currentChapterName}</h3>
                <button class="btn btn-warning mx-3" onclick="editChapter(this)" >Edit</button>
                <button class="btn btn-danger"  onclick="removeChapter(this)">Remove</button>`;


        parentList.appendChild(newLi);
    }

    function removeChapter(currElement) {
        currElement.parentElement.remove();
        let parentList = document.getElementById('parentList');
        if (parentList.children.length <= 0) {
            let newEmptymsg = document.createElement("h3");
            newEmptymsg.classList.add("emptymsg");
            newEmptymsg.textContent = "Nothing is Here!!!";

            parentList.appendChild(newEmptymsg);
        }
    }

    function editChapter(currElement) {
        if (currElement.textContent == "Done") {
            currElement.textContent = "Edit";
            let currentHeading = document.createElement('h3');
            let currentChapterName = currElement.previousElementSibling.value;
            currentHeading.className = "flex-grow-1";
            currentHeading.textContent = currentChapterName;
            currElement.parentElement.replaceChild(currentHeading, currElement.previousElementSibling)
        } else {
            currElement.textContent = "Done";
            let currentChapterName = currElement.previousElementSibling.textContent;
            let currentInput = document.createElement('input');
            currentInput.type = "text";
            currentInput.placeholder = "Add Item";
            currentInput.className = "form-control";
            currentInput.value = currentChapterName;
            currElement.parentElement.replaceChild(currentInput, currElement.previousElementSibling)
        }
    }
</script>