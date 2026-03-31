// script.js
document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.querySelector('.search_bar');
  if (searchBar) {
    searchBar.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        const query = encodeURIComponent(searchBar.value.trim());
        if (query.length) {
          alert(`Searching for: ${searchBar.value}`);
          window.open(`https://github.com/search?q=${query}`, '_blank');
        }
      }
    });
  }

  const loginBtn = document.querySelector('.login_button');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      alert('Redirecting to login page...');
      window.location.href = 'login.html';
    });
  }

  const signupBtn = document.querySelector('.signup_button');
  if (signupBtn) {
    signupBtn.addEventListener('click', () => {
      alert('Redirecting to Signup page...');
      window.location.href = 'signup.html';
    });
  }

  const signUpForGithub = document.querySelector('.sign_up_for_github');
  if (signUpForGithub) {
    signUpForGithub.addEventListener('click', () => {
      alert('Redirecting to Signup page...');
      window.location.href = 'signup.html';
    });
  }

  const copilotBtn = document.querySelector('.copilot_btn');
  if (copilotBtn) {
    copilotBtn.addEventListener('click', () => {
      alert('Redirecting to Trial page...');
      window.location.href = 'trial.html';
    });
  }

  // Simple dropdown hover/focus handling for accessibility
  document.querySelectorAll('.dropdown').forEach((dd) => {
    const btn = dd.querySelector('.dropbtn');
    const menu = dd.querySelector('.dropdown_content');

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      menu.style.display = expanded ? 'none' : 'block';
      menu.setAttribute('aria-hidden', String(expanded));
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!dd.contains(e.target)) {
        btn.setAttribute('aria-expanded', 'false');
        menu.style.display = 'none';
        menu.setAttribute('aria-hidden', 'true');
      }
    });
  });

  // Login form submit handler (example)
  const signinForm = document.getElementById('signin_form');
  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('get_email').value.trim();
      const password = document.getElementById('get_password').value;
      if (!email || !password) {
        alert('Please enter both email and password.');
        return;
      }
      // Placeholder: handle credentials securely on server side
      alert('Credentials submitted (demo).');
    });
  }
});
