
document.querySelectorAll('input[type="file"]').forEach(input => {
  input.addEventListener('change', () => {
    if (input.files.length > 0) {
      alert(`Uploaded: ${input.files[0].name}`);
    }
  });
});
