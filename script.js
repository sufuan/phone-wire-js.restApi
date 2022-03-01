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
    document.getElementById('display-card').innerHTML = ''
    document.getElementById('product-photo').innerHTML = ''
    document.getElementById('phone-details-mainfeature').innerHTML = ''
    document.getElementById('phone-details-others').innerHTML = ''
    const allData = allDatas.slice(0, 20)
    allData.forEach(data => {


        const div = document.createElement('div');
        div.classList.add('col-lg-4', 'p-2');


        div.innerHTML = `

        <div class="card" style="width: 18rem;">
            <img " src="${data.image}" class="card-img-top w-50 m-auto" alt="...">
            <div class="card-body m-auto">
                <h5 class="card-title">${data.phone_name}</h5>
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

    document.getElementById('product-photo').innerHTML = ''
    document.getElementById('phone-details-mainfeature').innerHTML = ''
    document.getElementById('phone-details-others').innerHTML = ''
        // display product image
    const PhotoDiv = document.createElement('div')
    PhotoDiv.classList.add('text-center')
    PhotoDiv.innerHTML = `
    <img  class="mb-4" src="${data.image}" alt="">
  `
    document.getElementById('product-photo').append(PhotoDiv)




    // display mainFeature
    const mainFeature = data.mainFeatures
    const key = Object.keys(mainFeature)
    document.getElementById('phone-details-mainfeature').innerHTML =
        `<h5>${data.brand}</h5>
        <h3>${data.name}</h3>
        <p class="opacity-50"> <b>Relaese Date : </b>${data.releaseDate}</p>
        `


    key.forEach((key, index) => {
        const Detailsdiv = document.createElement('div')
        Detailsdiv.innerHTML = `<p class="m-0"><b>${key}</b> : ${mainFeature[key]}</p>`
        document.getElementById('phone-details-mainfeature').appendChild(Detailsdiv)

    })

    // disply others information 

    const othersInformation = data.others

    const key_information = Object.keys(othersInformation)

    key_information.forEach((key, index) => {
        const div = document.createElement('div')
        div.innerHTML = `<p class="m-0"><b>${key}</b> : ${othersInformation[key]}</p>`
        document.getElementById('phone-details-others').appendChild(div)

    })



}