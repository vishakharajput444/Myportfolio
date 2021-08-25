/*------------navigation menu----------*/

(() =>{
       const hamburger = document.querySelector(".hamburger");
       const navmenu = document.querySelector(".nav-menu");
       const closenav = navmenu.querySelector(".close-nav-menu");


       hamburger.addEventListener("click", showNavMenu);
       closenav.addEventListener("click", hideNavMenu);
       function showNavMenu(){
              navmenu.classList.add("open");
       }
       function hideNavMenu(){
              navmenu.classList.remove("open");
       }

})();



// ----------------about section---------

(() =>{
       const aboutSection = document.querySelector(".about-section"); 
       const tabsContainer = document.querySelector(".about-tabs") ;
       
       tabsContainer.addEventListener("click", (event) =>{
              /* if event.target contains 'tab-item' class and not contains 'active' class */
              if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
               const target = event.target.getAttribute("data-target");
               console.log(target);  
               //deactivating existing active 'tab-item'
               tabsContainer.querySelector(".active").classList.remove("inner-shadow","active");
               
               //activate new 'tab-item'
               
               event.target.classList.add("active","inner-shadow");
              //  deactivate existing active 'tab-content'
              aboutSection.querySelector(".tab-content.active").classList.remove("active");
              // activate new 'tab-content'
              aboutSection.querySelector(target).classList.add("active");
              }
       })
       
})();

(() =>{
       const filterContainer = document.querySelector(".portfolio-filter");

       const portfolioItems = document.querySelectorAll(".portfolio-item");

       filterContainer.addEventListener("click", (event)=>{
         if(event.target.classList.contains("filter-item") && !event.target.classList.contains("active")){
           filterContainer.querySelector(".active").classList.remove("outer-shadow","active");    
           event.target.classList.add("active","outer-shadow");
           const target = event.target.getAttribute("data-target");
           portfolioItems.forEach((item) =>{
                  if(target == item.getAttribute("data-category") || target === 'all'){
                         item.classList.remove("hide");
                         item.classList.add("show");

                  }
                  else{
                     item.classList.remove("show");
                     item.classList.add("hide");
                     
                  }
           })
         }
       })

})();


// -------------theme light and dark mode-------------------------

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () =>{

document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
     localStorage.setItem("theme","dark");
  }
  else{
       localStorage.setItem("theme","light");    
  }
  updateIcon();
})

function themeMode(){
       //checking if 'theme' key exists
       if(localStorage.getItem("theme") != null){
         if(localStorage.getItem("theme") === "light"){
           document.body.classList.remove("dark");     
         }
         else{
           document.body.classList.add("dark");     
         }
       }
       updateIcon();
}
themeMode();

function updateIcon(){
       if(document.body.classList.contains("dark")){
                     dayNight.querySelector("i").classList.remove("fa-moon");

                     dayNight.querySelector("i").classList.add("fa-sun");

        }
       else{
             
              dayNight.querySelector("i").classList.remove("fa-sun");

              dayNight.querySelector("i").classList.add("fa-moon");

       }
}