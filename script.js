const errMsg = document.getElementById('error-message');

const loadData = () => {
        const searchInput = document.getElementById('search-input')

        if (!isNaN(searchInput.value)) {
            errMsg.innerText = 'Enter valid input'
        } else {

            errMsg.innerText = ''

            // load api 
            const url = ` https://openapi.programming-hero.com/api/phones?search=${searchInput.value}`


            fetch(url)
                .then(res => res.json())
                .then(data => displayData(data.data))


        }
    } // loadData end

// display loaded data 

const displayData = (allDatas) => {
    // console.log(allDatas);
    allDatas.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('p-2');
        console.log(data);







    })


}