
 
        const welcomeModal = document.getElementById('welcomeModal');
        const showWelcomeBtn = document.getElementById('showWelcome');
        const closeModalBtn = document.getElementById('closeModal');
        const startExploringBtn = document.getElementById('startExploring');
        
        // Show welcome modal when page loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                welcomeModal.classList.add('active');
            }, 1000);
        });
        
     
        
        // Close modal when X is clicked
        closeModalBtn.addEventListener('click', () => {
            welcomeModal.classList.remove('active');
        });
        

        
        // Close modal and redirect when start button is clicked
        startExploringBtn.addEventListener('click', () => {
            welcomeModal.classList.remove('active');
            // In a real application, you would redirect to the main page
            // window.location.href = '/dashboard';
        });
        
  
        
     
            
 