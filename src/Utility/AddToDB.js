const getStoredBook = () => {
    const storeBookStr = localStorage.getItem("readList");

    if(storeBookStr){
        const storeBookData = JSON.parse(storeBookStr)
        return storeBookData
    }
    else{
        return [];
    }
}

const addToDB = (id) =>{
    const storeBookData = getStoredBook()
    if(storeBookData.includes(id)){
        alert('The book is already exits !!')
    }
    else{
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData)
        localStorage.setItem("readList" , data)
    }
}

export {addToDB}