!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,a=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(a)}));var a=null}();
//# sourceMappingURL=01-color-switcher.acaef7f4.js.map