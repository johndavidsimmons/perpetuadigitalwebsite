// Cookie Consent Management Tool
;(function () {
  // Check if consent has already been given
  function getCookieConsent() {
    const consent = document.cookie.split('; ').find((row) => row.startsWith('cookieConsent='))
    return consent ? consent.split('=')[1] : null
  }

  // Set cookie consent preference
  function setCookieConsent(value) {
    const expires = new Date()
    expires.setFullYear(expires.getFullYear() + 1) // Expires in 1 year
    document.cookie = `cookieConsent=${value}; expires=${expires.toUTCString()}; path=/`
  }

  // Create and show the consent modal
  function showConsentModal() {
    // Create modal overlay
    const overlay = document.createElement('div')
    overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
        `

    // Create modal content
    const modal = document.createElement('div')
    modal.style.cssText = `
            background: white;
            padding: 20px;
            border-radius: 8px;
            max-width: 400px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        `

    modal.innerHTML = `
            <h3 style="margin-top: 0; color: #333;">Cookie Consent</h3>
            <p style="color: #666; margin-bottom: 20px;">
                This website uses cookies for no reason. 
                Please choose whether to accept or reject cookies.
            </p>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button id="acceptCookies" style="
                    background: #007bff;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                ">Accept Cookies</button>
                <button id="rejectCookies" style="
                    background: #6c757d;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                ">Reject Cookies</button>
            </div>
        `

    overlay.appendChild(modal)
    document.body.appendChild(overlay)

    // Add event listeners
    document.getElementById('acceptCookies').onclick = function () {
      setCookieConsent('accepted')
      document.body.removeChild(overlay)
      console.log('Cookies accepted')
    }

    document.getElementById('rejectCookies').onclick = function () {
      setCookieConsent('rejected')
      document.body.removeChild(overlay)
      console.log('Cookies rejected')
    }

    // Close modal when clicking overlay
    overlay.onclick = function (e) {
      if (e.target === overlay) {
        document.body.removeChild(overlay)
      }
    }
  }

  // Check if consent query parameter is present
  function shouldShowConsent() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('consent') === 'true'
  }

  // Add timeout to ensure body element exists before executing
  setTimeout(function () {
    // Check if consent already exists
    const existingConsent = getCookieConsent()

    if (!existingConsent && shouldShowConsent()) {
      // Show modal if no consent has been given AND consent=true is in query string
      showConsentModal()
    } else {
      console.log(
        `Cookie consent status: ${
          existingConsent || 'No consent given (consent=true not in query string)'
        }`
      )
    }
  }, 100)

  // Add a global function to check consent status
  window.checkCookieConsent = function () {
    const consent = getCookieConsent()
    console.log('Current cookie consent:', consent || 'No consent given')
    return consent
  }

  // Add a global function to reset consent (for testing)
  window.resetCookieConsent = function () {
    document.cookie = 'cookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    console.log('Cookie consent reset')
    showConsentModal()
  }
})()
