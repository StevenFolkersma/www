document.addEventListener('DOMContentLoaded', () => {
  // Find all buttons with the class 'custom-copy-button'
  const copyButtons = document.querySelectorAll('.custom-copy-button');

  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the text to copy from the data attribute
      const textToCopy = button.getAttribute('data-clipboard-text');
      const originalButtonText = button.innerText; // Store original text

      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          // Success feedback: Change button text temporarily
          button.disabled = true; // Optional: disable button briefly

          // Revert button text after a delay (e.g., 2 seconds)
          setTimeout(() => {
            button.disabled = false; // Re-enable button
          }, 2000);

        }).catch(err => {
          // Error feedback: Log to console (you could show an alert instead)
          console.error('Failed to copy text: ', err);
          });
      } else {
        console.warn('No text found in data-clipboard-text attribute for this button:', button);
        button.innerText = 'No Text';
         // Revert button text after a delay
         setTimeout(() => {
            button.innerText = originalButtonText;
          }, 2000);
      }
    });
  });
});
