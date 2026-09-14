class Jquery{
    constructor(tags){
        this.tags = tags;
    }
    each(fn){
        this.tags.forEach((element,index) => {
            fn(element,index);
        });
        return this;
    }
    addClass(className){
        this.each((tag) => tag.classList.add(className));
        return this;
    }
    removeClass(className){
        this.each((tag) => tag.classList.remove(className));
        return this;
    }
    hasClass(className){
        return this.tags[0].classList.contains(className);
    }
    attr(name,value){
        if(arguments.length === 2) this.each((tag) => tag.setAttribute(name,value));
        else return this.tags[0].getAttribute(name);
        return this;
    }
    prop(name,value){
        if(arguments.length === 2) this.each((tag) => tag[name] = value);
        else return this.tags[0][name];
        return this;
    }
    append(info){
        this.each((tag) => tag.insertAdjacentHTML('beforehand', info));
        return this;
    }
    prepend(info){
        this.each((tag) => tag.insertAdjacentHTML('afterbegin', info));
        return this;
    }
    remove(){
        this.each((tag) => tag.remove());
        return this;
    }
    empty(){
        this.each((tag) => tag.innerHTML = '');
        return this;
    }
    on(action,reaction){
        this.each((tag) => tag.addEventListener(action,reaction));
        return this;
    }
    off(action,reaction){
        this.each((tag) => tag.removeEventListener(action,reaction));
        return this;
    }
    parent(){
        let parents = new Set();
        this.each((tag) => {
            if(tag.parentElement){
                parents.add(tag.parentElement);
            }
        });
        return new Jquery([...parents]);
    }
    children(){
        let childrens = [];
        this.each((tag) => childrens.push(...tag.children));
        const childrenObj = new Jquery(childrens);
        return childrenObj;
    }
    toUpper(){
        for(const tag of this.tags){
            tag.textContent = tag.textContent.toUpperCase();
        }
        return this;
    }
    toLower(){
        for(const tag of this.tags){
            tag.textContent = tag.textContent.toLowerCase();
        }
        return this;
    }
}

function $(tag){
    return new Jquery(document.querySelectorAll(tag))
}