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
        div.classList.add('col-lg-3', 'p-2');


        div.innerHTML = `

        <div class="card" style="width: 18rem;">
            <img " src="${data.image}" class="card-img-top w-50" alt="...">
            <div class="card-body">
                <h5 class="card-title">"${data.phone_name}"</h5>
                <p class="card-text">Brand : ${data.brand} </p>

                <a href="#" class="btn btn-primary" onclick="seeDetails('${data.slug}')">
                 See Details
                </a>
            </div>
        </div>
        `
        document.getElementById('display-card').appendChild(div)

    })


}

// see phone details 

const seeDetails = (id) => {

    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displyDetailsData(data.data))
}

const displyDetailsData = (data) => {
    const main = data.others
    console.log(main);

    const key = Object.keys(main)
    console.log(key);
    key.forEach((key, index) => {
        //console.log(`${key}:${main[key]}`)
        const div = document.createElement('div')
        div.innerHTML = `${key}:${main[key]}`
        document.getElementById('phone-details').appendChild(div)

    })

}