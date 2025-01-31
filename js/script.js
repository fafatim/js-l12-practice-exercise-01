const randomFolks = document.querySelector(".random-peeps");
const getData = async function(){
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();
    console.log(data)
    const userResults = data.results;

    displayUsers(userResults);
};
getData()

const displayUsers = function(userResults){
    randomFolks.innerHTML = "";
    for(let key of userResults){
        let country = key.location.country;
        let name = key.name.first;
        let imageUrl = key.picture.medium;
        const userDiv = document.createElement("div")
        userDiv.innerHTML = `<h3>${name}</h3>
                             <p>${country}</p>
                              <img src =${imageUrl} alt ="user avatar"/>
                              `;
        randomFolks.append(userDiv);
    }
}
