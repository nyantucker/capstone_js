export let userLocalStorage = {
    get: () => {
        let dataJason = localStorage.getItem("USER")
        return JSON.parse(dataJason)
     },
    set: (user) => { 
        let dataJason = JSON.stringify(user);
        localStorage.setItem("USER",dataJason)
    },
    remove: () => { 
        localStorage.removeItem("USER")
    },
}
