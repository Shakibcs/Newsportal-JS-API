const handleCategory = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();

    const tabContainer = document.getElementById('tab-container');//get html data

    data.data.news_category.slice(0,3).forEach((category)=>{ //get data with foreach loop
        const div = document.createElement('div');
        div.innerHTML = `
        <a class="tab">${category.category_name}</a>       
        `;
        tabContainer.appendChild(div);                    //append child to container
    });

    
    //console.log(data.data.news_category);
}

handleCategory();


    
    
    
    