// profile.js
document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    window.location.href = "login.html";
    return;
  }

  const profilesKey = "profiles";
  const selectedProfileKey = "selectedProfileIndex";

  let profiles = JSON.parse(localStorage.getItem(profilesKey)) || [];
  let selectedProfileIndex = parseInt(localStorage.getItem(selectedProfileKey)) || 0;

  // Fetch logged-in user from backend
  try {
    const res = await fetch('http://localhost:5000/profile', {
      headers: { 'Authorization': 'Bearer ' + token }
    });
    const result = await res.json();

    if (!res.ok || !result.success) {
      localStorage.removeItem('authToken');
      alert(result.message || "Failed to fetch profile");
      window.location.href = "login.html";
      return;
    }

    const user = result.user;

    // Update first profile to match logged-in user
    if (profiles.length === 0) profiles.push({});
    profiles[0] = {
      name: user.name,
      email: user.email,
      plan: user.plan,
      img: 'default.png',
      kids: false
    };

    // Ensure "Kids" profile always exists
    if (!profiles.some(p => p.kids)) {
      profiles.push({ name: "Kids", email: "", plan: "Basic", img: 'kids.jpg', kids: true });
    }

    localStorage.setItem(profilesKey, JSON.stringify(profiles));
  } catch (err) {
    console.error("Profile fetch failed:", err);
    alert("Error loading profile");
    return;
  }

  // DOM references
  const profileNameEl  = document.getElementById('profileName');
  const profileEmailEl = document.getElementById('profileEmail');
  const profilePlanEl  = document.getElementById('profilePlan');
  const profilesContainer = document.getElementById('profilesContainer');

  const manageBtn = document.getElementById('manageBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const resetBtn = document.getElementById('resetBtn');

  const editProfileModalEl = document.getElementById("editProfileModal");
  const editProfileModal = new bootstrap.Modal(editProfileModalEl);
  const editName = document.getElementById("editProfileName");
  const editKids = document.getElementById("editProfileKids");
  const avatarChoices = document.getElementById("avatarChoices");
  const selectedAvatar = document.getElementById("selectedAvatar");
  const saveEditBtn = document.getElementById("saveEditBtn");

  let editingIndex = null;
  let manageMode = false;

  // --- Render header ---
  function renderHeader() {
  const selected = profiles[selectedProfileIndex] || {};
  profileNameEl.textContent  = selected.name || 'Member';
  profileEmailEl.textContent = selected.email || 'member@example.com';
  profilePlanEl.textContent  = selected.plan || 'Basic';

  // Update navbar profile pic
  const navbarPic = document.getElementById("navbarProfilePic");
  if (navbarPic) navbarPic.src = selected.img || "default.png";
}


  // --- Render profile cards ---
  function renderProfiles() {
    profilesContainer.innerHTML = "";
    profiles.forEach((p, i) => {
      const col = document.createElement("div");
      col.className = "col-auto";
      col.innerHTML = `
        <div class="profile-card ${i === selectedProfileIndex ? 'active-card' : ''}" data-index="${i}">
          <img src="${p.img || 'default.png'}" alt="${p.name}" onerror="this.src='default.png'">
          ${p.kids ? '<div class="kids-badge">KIDS</div>' : ''}
          <div class="mt-2 fw-semibold">${p.name} ${p.kids ? '👶' : ''}</div>
          <div class="manage-btns" style="display:${manageMode ? 'flex':'none'}; gap:5px;">
              <button class="btn btn-sm btn-warning edit-btn">Edit</button>
              ${i === 0 ? '' : `<button class="btn btn-sm btn-danger remove-btn">Remove</button>`}
          </div>
        </div>
      `;
      profilesContainer.appendChild(col);
    });

    // Add profile card
    const addCol = document.createElement("div");
    addCol.className = "col-auto";
    addCol.innerHTML = `<div class="add-profile" id="addProfileBtn"><div style="font-size:2rem">+</div><small>Add Profile</small></div>`;
    profilesContainer.appendChild(addCol);

    attachCardEvents();
  }

  // --- Card click events ---
  function attachCardEvents() {
    document.querySelectorAll(".profile-card").forEach(card => {
      const index = parseInt(card.dataset.index);

      // Click to select active profile
      card.addEventListener("click", e => {
        // Avoid toggling when clicking buttons inside the card
        if(e.target.tagName === "BUTTON") return;
        selectedProfileIndex = index;
        localStorage.setItem(selectedProfileKey, selectedProfileIndex);
        renderHeader();
        renderProfiles();
      });
    });

    // Edit buttons
    document.querySelectorAll(".edit-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        editingIndex = parseInt(btn.closest(".profile-card").dataset.index);
        const p = profiles[editingIndex];
        editName.value = p.name;
        editKids.checked = p.kids;
        selectedAvatar.src = p.img || 'default.png';

        // Highlight selected avatar in modal
        avatarChoices.querySelectorAll(".avatar-option").forEach(img => {
          img.classList.toggle("active", img.dataset.img === p.img);
        });

        editProfileModal.show();
      });
    });

    // Remove buttons
    document.querySelectorAll(".remove-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const idx = parseInt(btn.closest(".profile-card").dataset.index);
        if (confirm(`Remove profile "${profiles[idx].name}"?`)) {
          profiles.splice(idx, 1);
          if (selectedProfileIndex >= profiles.length) selectedProfileIndex = 0;
          localStorage.setItem(profilesKey, JSON.stringify(profiles));
          localStorage.setItem(selectedProfileKey, selectedProfileIndex);
          renderHeader();
          renderProfiles();
        }
      });
    });

    // Add profile
    const addBtn = document.getElementById("addProfileBtn");
    if (addBtn) {
      addBtn.addEventListener("click", () => {
        const name = prompt("Enter profile name:");
        if (!name) return;
        profiles.push({ name, img: 'default.png', kids: false });
        localStorage.setItem(profilesKey, JSON.stringify(profiles));
        renderProfiles();
      });
    }

    // Avatar selection in modal
    avatarChoices.querySelectorAll(".avatar-option").forEach(img => {
      img.addEventListener("click", () => {
        selectedAvatar.src = img.dataset.img;
        avatarChoices.querySelectorAll(".avatar-option").forEach(el => el.classList.remove("active"));
        img.classList.add("active");
      });
    });
  }

  // --- Edit profile save ---
  saveEditBtn.addEventListener("click", () => {
    if (editingIndex === null) return;
    profiles[editingIndex].name = editName.value || profiles[editingIndex].name;
    profiles[editingIndex].kids = editKids.checked;
    profiles[editingIndex].img = selectedAvatar.src;
    localStorage.setItem(profilesKey, JSON.stringify(profiles));
    editProfileModal.hide();
    renderProfiles();
  });

  // --- Manage Profiles toggle ---
  manageBtn.addEventListener("click", () => {
    manageMode = !manageMode;
    manageBtn.textContent = manageMode ? "Done" : "Manage Profiles";
    renderProfiles();
  });

  // --- Logout / Reset ---
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("authToken");
    window.location.href = "login.html";
  });

  resetBtn.addEventListener("click", () => {
  if (confirm("Reset all profiles?")) {
    // Keep first (logged-in) and kids profile
    profiles = profiles.filter(p => p.kids || p.email);

    // Reset pictures
    profiles.forEach(p => {
      if (p.kids) p.img = "kids.jpg";
      else p.img = "default.png";
    });

    // Set active profile back to logged-in user
    selectedProfileIndex = 0;

    localStorage.setItem(profilesKey, JSON.stringify(profiles));
    localStorage.setItem(selectedProfileKey, selectedProfileIndex);

    renderHeader();
    renderProfiles();
  }
});


  
  function renderProfileList() {
    const profileList = JSON.parse(localStorage.getItem("myList"))||[];
    const profileContainer = document.getElementById("profileMyList");
    profileContainer.innerHTML = "";
    if(profileList.length===0){profileContainer.innerHTML="<p class='text-white m-0'>No items in your list yet.</p>"; return;}
    profileList.forEach(item=>{
      const card=document.createElement("div");
      card.className="card bg-dark text-white";
      card.style.minWidth="180px";
      card.style.flex="0 0 auto";
      card.innerHTML=`
        <img src="${item.img}" class="card-img-top rounded" alt="${item.title}" style="height: 250px; object-fit: cover;" onerror="this.src='default.png'">
        <div class="card-body p-2">
          <h6 class="card-title mb-1">${item.title}</h6>
          <p class="card-text"><small>${item.genre??""}</small></p>
        </div>`;
      profileContainer.appendChild(card);
    });
  }

  // Initial render
  renderHeader();
  renderProfiles();
  renderProfileList();
});
