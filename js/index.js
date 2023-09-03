let count = 0;
const handleCategory = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();

    const tabContainer = document.getElementById('tab-container');//get html data
    const trimData = data.data.news_category.slice(0,3);
    trimData.forEach((category)=> { // foreach to create div and add data to html dynamically
        count++;
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab">${count} ${category.category_name}</a>       
        `;
        tabContainer.appendChild(div);                    //append child to container
    });
//console.log(data.data.news_category);
}

 //show category news
 const handleLoadNews = async(categoryID) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryID}`)
    const data = await response.json();
    console.log(data);
}

handleCategory();


    
    
    
    