console.log("App Running");

// console.log(navigator);

if ("serviceWorker" in navigator) {


    navigator
        .serviceWorker
        .register("./sw.js")
        .then(function () {
            console.log("welcome to the world of service");

        })
        .catch(function () {
            console.error("something wend wrong");

        })

} else {
    console.warn("SERVICE WORKER NOT SUPPORTED");
}
let banner
window.addEventListener("beforeinstallprompt",function (event) {
    event.preventDefault()
    banner=event
})

btn.addEventListener("click",function () {
    if (banner) {
        banner.prompt()
        banner.userChoice.then(function (arg) {
            console.log(arg.outcome);
            if (arg.outcome==="dismissed") {
                console.log("User Deny");
            }else{
                console.log("User Installed");
            }
            
            
        })
    }
})