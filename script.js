 // Function to toggle the chat sidebar when the bar icon is clicked
function chatbar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
    event.stopPropagation(); // Prevent the click event from closing the sidebar immediately
}

// Function to toggle the update sidebar when the update bar icon is clicked
function updatebar() {
    const updateSidebar = document.getElementById('update-sidebar');
    updateSidebar.classList.toggle('hidden');
    event.stopPropagation(); // Prevent the click event from closing the update sidebar immediately
}

// Function to hide both sidebars when clicking outside of them
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const barIcon = document.querySelector('.fa-ellipsis-vertical');
    const updateSidebar = document.getElementById('update-sidebar');
    const updateBarIcon = document.querySelector('#updates-btn .fa-ellipsis-vertical');

    // Hide chat sidebar if click is outside of sidebar and chat bar icon
    if (!sidebar.contains(event.target) && !barIcon.contains(event.target)) {
        sidebar.classList.add('hidden');
    }

    // Hide update sidebar if click is outside of update sidebar and update bar icon
    if (!updateSidebar.contains(event.target) && !updateBarIcon.contains(event.target)) {
        updateSidebar.classList.add('hidden');
    }
});

// Functions to switch between chat and updates sections
function chats() {
    const mainMenu = document.getElementById('main-menue');
    const updatesBtn = document.getElementById('updates-btn');

    updatesBtn.classList.add('hidden');
    mainMenu.classList.remove('hidden');
}

function updates() {
    const mainMenu = document.getElementById('main-menue');
    const updatesBtn = document.getElementById('updates-btn');

    mainMenu.classList.add('hidden');
    updatesBtn.classList.remove('hidden');
}
