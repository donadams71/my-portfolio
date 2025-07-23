<script>
  // Get the button
  const backToTop = document.getElementById('backToTop');

  // Show or hide the button based on scroll position
  window.onscroll = function() {
    if (window.scrollY > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  };

  // Smooth scroll to top on click
  backToTop.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
</script>
