// script.js
const membersData = [
    { name: 'Member 1', username: 'member1', imgSrc: 'Abu. (2023-5-20_1)-485', isFriend: false },
    { name: 'Member 2', username: 'member2', imgSrc: 'member2.jpg', isFriend: false },
    { name: 'Member 3', username: 'member3', imgSrc: 'member3.jpg', isFriend: false },
    { name: 'Member 4', username: 'member4', imgSrc: 'member4.jpg', isFriend: false },
    { name: 'Member 3', username: 'member5', imgSrc: 'member5.jpg', isFriend: false }
    // Add more members as needed
  ];
  
  const friendsData = [];
  
  const membersContainer = document.getElementById('membersContainer');
  const friendsContainer = document.getElementById('friendsContainer');
  
  function createItem(container, data, isFriend) {
    const itemDiv = document.createElement('div');
    itemDiv.className = isFriend ? 'friend' : 'member';
    
    const img = document.createElement('img');
    img.src = data.imgSrc;
    img.alt = `${data.name}'s Photo`;
    img.style.width = '100px'; // Set custom width for images
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = data.name;
    const usernameSpan = document.createElement('span');
    usernameSpan.textContent = `@${data.username}`;
    const followBtn = document.createElement('button');
    followBtn.className = 'follow-btn';
    setFollowButtonState(followBtn, data.isFriend);
  
    followBtn.addEventListener('click', () => {
      data.isFriend = !data.isFriend;
      setFollowButtonState(followBtn, data.isFriend);
      if (data.isFriend) {
        friendsData.push(data);
        friendsContainer.appendChild(itemDiv);
        membersContainer.removeChild(itemDiv);
      } else {
        friendsData.splice(friendsData.indexOf(data), 1);
        membersContainer.appendChild(itemDiv);
        friendsContainer.removeChild(itemDiv);
      }
    });
  
    itemDiv.appendChild(img);
    itemDiv.appendChild(document.createElement('br'));
    itemDiv.appendChild(nameSpan);
    itemDiv.appendChild(document.createElement('br'));
    itemDiv.appendChild(usernameSpan);
    itemDiv.appendChild(document.createElement('br'));
    itemDiv.appendChild(followBtn);
  
    container.appendChild(itemDiv);
  }
  
  function setFollowButtonState(button, isFriend) {
    if (isFriend) {
      button.textContent = 'Unfollow';
      button.style.backgroundColor = '#e74c3c'; // Change color for unfollowing state
    } else {
      button.textContent = 'Follow';
      button.style.backgroundColor = '#3498db'; // Reset color to original
    }
  }
  
  membersData.forEach(member => createItem(membersContainer, member, false));
  