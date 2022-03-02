import {useState, useEffect} from 'react'
import ProjectMenu from './ProjectMenu'
import ProjectCard from './ProjectCard'

const items = [
    {
       id: "all",
       title: "All"
   },
   {
       id: "blog",
       title: "Blog"
   },
   {
       id: "search",
       title: "Search"
   },                        
   {
       id: "game",
       title: "Game"
   },
   {
       id: "business",
       title: "Business"
   }        
]	

export default function Projects(){
    const [projects, setProjects] = useState([]) //ProjectCard - populate each card
    const [selected, setSelected] = useState(items)	//ProjectMenu - selected from menu - initial "all"

    useEffect(() => {
		async function fetchData(){
			try {
				const response = await fetch(`https://expansivedesigns.github.io/tech-taley-api/data.json`)
				const data = await response.json()
                
                setProjects(data.results.projects)

                    items.filter(item => {
                        if(selected === "all"){  
                            data.results.projects.filter(p => p.category)
                        } else {                    
                            data.results.projects.filter(p => p.category === item.id) 
                        }
                        return selected           
                    })
                
                                            // if(selected === "all"){
                        //     //alert("all"X
                        //     setProjects(data.results.projects.filter(p => p.category))
                        // } else {
                        //     //alert(selected)
                        //     setProjects(data.results.projects.filter(p => p.category === selected))
                        // }      
                
                // } 
			} catch(err){
				console.log("Issue loading images", err)
			}
		}
		
		fetchData()

    }, [selected]) 

    return (
        <>
            <div className="project_menu">
                { items.map(item => 
                    <ProjectMenu
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                )}
            </div>
         
            <div className="project_list">
                { projects.map(({ id, image, alt, title, desc, link, status, code, api, category }) => ( 
                    <ProjectCard 
                        key={id}
                        image={image}
                        alt={alt}
                        title={title}
                        desc={desc}
                        link={link}
                        code={code}
                        api={api}
                        status={status}
                        category={category}
                    />
                ))}
            </div>			   
        </>        
    )
}