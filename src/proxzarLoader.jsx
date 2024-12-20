import React, { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    // Define the dynamic script loading function
    const proxzarDynaScrptFn = {
      load: function (src, callback) {
        if (!document.querySelector(`script[src="${src}"]`)) {
          const scriptJs = document.createElement("script");
          scriptJs.setAttribute("src", src);
          scriptJs.setAttribute("type", "text/javascript");
          scriptJs.onload = function () {
            if (callback) {
              callback();
            }
          };
          scriptJs.onerror = function () {   
            console.error(`Failed to load script: ${src}`);
          };
          document.head.appendChild(scriptJs);
        } 
      },
    };

    // Load script.js first 
    // const scriptSrc = `https://pf.proxzar.ai/EkgWebForms/Widgets2/2Lsb/proxzar2lsb.${window.location.hostname.toLowerCase()}.js`;
const scriptSrc = `https://pf.proxzar.ai/EkgWebForms/Widgets2/2Lsb/proxzar2lsb.${window.location.hostname.toLowerCase()}.js`

    proxzarDynaScrptFn.load(scriptSrc, function () {
      // After script.js is loaded and executed, load iframeScript.js
      const scriptJs = document.createElement("script");
      scriptJs.setAttribute("src", `https://pf.proxzar.ai/EkgWebForms/Widgets2/2Lsb/proxzar2lsb.js`);
      scriptJs.setAttribute("type", "text/javascript");
      document.head.appendChild(scriptJs);
    });

  }, []);

 

  return (
    <div id="div-proxzar-getresp">
     
    </div>
  );
};

export default MyComponent;
