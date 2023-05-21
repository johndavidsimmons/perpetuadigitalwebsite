import Script from 'next/script'

const Prehide = () => {
  return (
    <>
      <Script strategy="afterInteractive" id="adobe-prehide">
        {`
            !function(e,a,n,t){var i=e.head;if(i){
                if (a) return;
                var o=e.createElement("style");
                o.id="alloy-prehiding",o.innerText=n,i.appendChild(o),setTimeout(function(){o.parentNode&&o.parentNode.removeChild(o)},t)}}
                (document, document.location.href.indexOf("adobe_authoring_enabled") !== -1, ".prehide { opacity: 0 !important }", 3000);console.log("prehiding....")
        `}
      </Script>
    </>
  )
}

export default Prehide
