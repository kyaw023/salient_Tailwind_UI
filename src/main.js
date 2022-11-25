const toggle = document.getElementById('toggle')
           const changeThemeToDark =  () =>  {
               document.documentElement.classList.add('dark');
               localStorage.setItem('data_theme','dark')
           }
           const changeThemeToLight =  () =>  {
               document.documentElement.classList.remove('dark');
               localStorage.setItem('data_theme','light')
           }
           toggle.addEventListener('click',() =>{
             const theme = localStorage.getItem('data_theme')
             if(theme === 'dark'){
               changeThemeToLight()
             }
             
             else{
               changeThemeToDark()
             }

           })
           const theme = localStorage.getItem('data_theme')
             if(theme === 'dark'){
               changeThemeToDark()
               toggle.setAttribute('checked','checked')
             }
             
             else{
               changeThemeToLight()
             }
            

      const tabs = document.querySelectorAll(".main-tab")
        
        const contents = document.querySelectorAll(".content-img")
        tabs.forEach((tab,index) =>{
           tab.addEventListener('click',()=>{
               // to remove active class from previous tab
               tabs.forEach((tab)=>{
                   tab.classList.remove("active")
                   
               })
               tab.classList.add("active")

               // to hide the previous tab contents
               contents.forEach((con)=>con.classList.remove("active-img"))
                     console.log(contents)
               contents[index].classList.add("active-img")
              
           })
           
           });

            //  slide
            
            
                //  Animation navbar
                const navAni = document.querySelector('.nav-ani')
                var waypoint = new Waypoint({
                element: document.getElementById('feature'),
                handler: function(direction) {
                  if(direction === 'down'){
                        navAni.classList.add('fixed','w-full','animate__fadeInDown','shadow')
                  }
                  else
                  {
                        navAni.classList.remove('fixed','w-full','animate__fadeInDown','shadow')
                  }
                },
                offset: '60%'
                })
              const sections = document.querySelectorAll("section[id]");
              function scrollActive() {
                const scrollY = window.pageYOffset;  
                // console.log(scrollY)         // scroll height
                sections.forEach((current) => {
                        const sectionHeight = current.offsetHeight, // get current height
                        sectionTop = current.offsetTop - 58, 
                              // get current section of height
                        sectionId = current.getAttribute("id");
                        // console.log(sectionTop)
                        // console.log(sectionId)  
                        //  console.log(sectionTop + sectionHeight)
                  if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document
                      .querySelector("a[href*=" + sectionId + "]").classList.add("active-link");
                  } else {
                    document
                      .querySelector("a[href*=" + sectionId + "]").classList.remove("active-link");
                  }
                });
              }
              window.addEventListener("scroll", scrollActive);
              