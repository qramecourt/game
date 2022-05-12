function renderImage() {
    var selected = document.getElementById("selectOption");
    var imgUrl = "";
    if (selected.value == 1) {
        imgUrl = "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
    } else if (selected.value == 2) {
        imgUrl = "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
    } else {
        imgUrl = "";
    }
    
    document.getElementById("myImg").src = imgUrl;
    }