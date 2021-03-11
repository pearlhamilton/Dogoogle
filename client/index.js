

const form = document.querySelector('form')
const body = document.querySelector('body')
const searchPage = document.getElementById('searchPage')
const resultsPage = document.getElementById('resultsPage')
const resultsSection = document.getElementById('results')



form.addEventListener('submit', DogoogleSearch)


function DogoogleSearch(e){
    e.preventDefault()
    getResults()
    toggle()
}


function getResults(){
    fetch('http://localhost:3000/results')
    .then(res => res.json())
    .then (data => { data.forEach(element => {
        const div = document.createElement('div')
        // div.textContent = element.heading + element.url + element.desc
        resultsSection.appendChild(div)
        const website = document.createElement('h3')
        website.textContent = element.url
        div.appendChild(website)
        const title = document.createElement('h2')
        title.textContent = element.heading
        div.appendChild(title)
        const description = document.createElement('p')
        description.textContent = element.desc
        div.appendChild(description)
        })
    })
}



function toggle(){ 
    if (searchPage.style.display === 'none'){
        searchPage.style.display = 'block';
        resultsPage.style.display ='none'       
    }
    else{
        searchPage.style.display = 'none';
        resultsPage.style.display ='block';
    }
}