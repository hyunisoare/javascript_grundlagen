const books = {
    school: ["science", "math", "English"],
    hobby: ["psychology", "romance", "game"],
    }
    function makeList(arr){
        const bookList = [];
        for (let i=0; i<arr.length; i++){
            bookList.push(`<li class="text-warning">${arr[i]}</li>`);
        }
        return bookList;
    }
    console.log(makeList(books.hobby));
    