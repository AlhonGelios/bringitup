export default class Form {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
    
        return await res.text();
    }

    init() {
        this.forms.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                item.parentNode.appendChild(statusMessage);
            });
        });
    }
}