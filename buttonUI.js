Jquery.prototype.DarkButton = function (){
    this.each((tag) => {
        if(tag.tagName === 'BUTTON' || (tag.tagName == 'INPUT' && tag.type == 'button')){
            tag.style.background = "#4e4c4c";
            tag.style.color = "#fff";
            tag.style.outline = "none";
            tag.style.cursor = "pointer";
            tag.style.border = "2px solid #171717"
            tag.style.boxShadow = "1px 2px 3px 1px #171717";
            tag.style.borderRadius = "35px 35px 35px 35px";
        }
    })
    return this;
}

Jquery.prototype.LightButton = function (){
    this.each((tag) => {
        if(tag.tagName === 'BUTTON' || (tag.tagName == 'INPUT' && tag.type == 'button')){
            tag.style.background = "#fff";
            tag.style.color = "#000";
            tag.style.outline = "none";
            tag.style.cursor = "pointer";
            tag.style.boxShadow = "1px 2px 3px 1px #979696";
            tag.style.border = "4px solid #c1c1c1"
            tag.style.borderRadius = "35px 35px 35px 35px";
        }
    })
    return this;
}