var prefix = 'ls';

const localStorageService = {

    set: (key, value) => localStorage.setItem(`${prefix}.${key}`, value),

    get: (key) => {
        let value = localStorage.getItem(`${prefix}.${key}`)
        if (!value) return null;
        return value;
    },

    clear: () => localStorage.clear(),

    remove: (key) => localStorage.removeItem(`${prefix}.${key}`)
}


export default localStorageService;