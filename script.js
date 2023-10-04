// აიპიდან მონაცემის წამოღება ( 4 მომხარებლის - ფოტო, სახელი და გვარი)
async function fetchUserData(page) {
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data.data;
    } catch (error) {
      throw new Error('Error fetching user data: ' + error.message);
    }
  }
  
  function createChefContainer(user) {
    const chefContainer = document.createElement('div');
    chefContainer.classList.add('chef');
  
    const chefBox = document.createElement('div');
    chefBox.classList.add('chef-box');
  
    const chefImage = document.createElement('img');
    chefImage.src = `${user.avatar}`;
    chefImage.alt = 'chef';
  
    const chefName = document.createElement('p');
    chefName.classList.add('chef-name');
    chefName.textContent = `${user.first_name} ${user.last_name}`;
  
    const chefStatus = document.createElement('p');
    chefStatus.classList.add('chef-status');
    chefStatus.textContent = 'chef';
  
    chefBox.appendChild(chefImage);
    chefBox.appendChild(chefName);
    chefBox.appendChild(chefStatus);
  
    chefContainer.appendChild(chefBox);
  
    return chefContainer;
  }
  
  async function fetchAndCreateChefs() {
    try {
      const page = 2;
      const userData = await fetchUserData(page);
  
      if (userData.length >= 4) {
        const chefContainer = document.getElementById('chef-container');
  
        for (let i = 0; i < 4; i++) {
          const chef = createChefContainer(userData[i]);
          chefContainer.appendChild(chef);
        }
      } else {
        console.error('Not enough users available');
      }
    } catch (error) {
      console.error('Error fetching and creating chefs:', error);
    }
  }
  
  fetchAndCreateChefs();
  