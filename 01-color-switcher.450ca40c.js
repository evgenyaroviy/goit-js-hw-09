function t(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const o={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.body,colorTimerId:null};o.startBtn.addEventListener("click",(function(){const n=t();o.body.style.backgroundColor=`${n}`,o.colorTimerId=setInterval((()=>{const n=t();o.body.style.backgroundColor=`${n}`}),1e3),o.startBtn.disabled=!0,o.stopBtn.disabled=!1})),o.stopBtn.addEventListener("click",(function(){clearInterval(o.colorTimerId),o.startBtn.disabled=!1,o.stopBtn.disabled=!0})),o.stopBtn.disabled=!0,o.startBtn.style.padding="10px 15px",o.stopBtn.style.padding="10px 15px";
//# sourceMappingURL=01-color-switcher.450ca40c.js.map
