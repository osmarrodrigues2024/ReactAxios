import axios from "axios";

export async function fetchUserDatails(element, username){
    try {
        // const response = await fetch(`https://api.github.com/users/${username}`)

        const response = await axios.get(`https://api.github.com/users/${username}`)

        console.log(response);
        // if(!response.ok){
        //      throw new Error(`Github API returned atatus code ${response.status}`);
        //  }

        //  const user = await response.json()
        
        //  element.innerHTML = `
        //     <img src="${user.avatar_url}" alt=${user.name}/>
        //      <h1>${user.name ? user.name : "No name"}</h1>
        //     <p>${user.bio ? user.bio : "No bio"}</p>
        
    } catch (error) {
        console.error(`Error fetching Github user: ${error.message}`)
        element.innerHTML = `<p>Error loading user data</p>`
    }
}