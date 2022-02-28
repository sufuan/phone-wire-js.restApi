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
        const slug = data.slug
        const id = slug.split('-').pop();
        console.log(id);

        div.innerHTML = `

        <div class="card" style="width: 18rem;">
            <img " src="${data.image}" class="card-img-top w-50" alt="...">
            <div class="card-body">
                <h5 class="card-title">"${data.phone_name}"</h5>
                <p class="card-text">Brand : ${data.brand} </p>

                <a href="#" class="btn btn-primary" onclick="seeDetails(${id})">
                 See Details
                </a>
            </div>
        </div>
        `
        document.getElementById('display-card').appendChild(div)

    })


}

// see phone details 

const seeDetails = (pra) => {
    console.log(pra);


}


// apple_iphone_xr-9320
// apple_iphone_se_(2020)-10170

// const str = 'apple_iphone_se_(2020)-10170';
// const slug = str.substring(str.indexOf('-') + 1);

// const slug = str.split('-').pop();
// console.log(typeof parseInt(slug));