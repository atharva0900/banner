// console.log(self);
self.addEventListener("install", function (event) {
    console.log("Installing..", event);

    caches.open("static").then(function (cache) {
        // cache.add("/")
        cache.add("/index.html")
    })

})

self.addEventListener("activate", function (event) {
    console.log("Activating..", event);

})

self.addEventListener("fetch", function (event) {
    console.log("Fetching..", event);
    event.respondWith(
        caches.match(e.request).then(function (responce) {
            if (responce) {
                return responce
            }else{
                return fetch(event.request)
            }    
        })
    )
})