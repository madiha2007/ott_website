
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("authToken");
  const authSection = document.getElementById("authSection");


  if (token) {
    // Show profile icon with link to profile page
    authSection.innerHTML = `
      <a href="profile.html" class="p-2">
        <img id="navbarProfilePic" src="default.png" alt="Profile" 
             style="width:32px;height:32px;border-radius:20%">
      </a>
      <button id="logoutBtn" class="btn btn-sm btn-outline-light ms-2">Logout</button>
    `;

    // Handle logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
      localStorage.removeItem('authToken');
      window.location.reload();
    });

  } else {
    // Show login button
    authSection.innerHTML = `<a href="login.html" class="btn btn-danger">Login</a>`;
  }
});