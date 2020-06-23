function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}
let params = new URL(window.location.toString()).searchParams;
let filterComponent = "";

// Older versions of Edge don't support searchParams
if(typeof params == 'undefined'){
    filterComponent = decodeURI(window.location.search).replace("?by=","");
}else {
    filterComponent = params.get('by');
}

// Add tech into page title
document.getElementById('page-title').textContent += filterComponent;

let patterns = document.getElementsByClassName("pattern");
let filterComponentLowerCaseNoSpaces = filterComponent.toLowerCase().replace(/\s/g, "");
let numPatterns = 0;

// Older versions of edge don't support for of loops...
for(let index in patterns){
    let pattern = patterns[index];
    if(!hasClass(pattern, filterComponentLowerCaseNoSpaces)){
        if(typeof pattern.classList != 'undefined'){
            pattern.classList.add("hidden");
        }
    }else {
        numPatterns++;
    }
}

let titleText = document.getElementById('page-title').textContent;
// Need to change some verbage when there is only 1 result
if(numPatterns === 1){
    titleText = titleText.replace("Patterns", "Pattern");
    titleText = titleText.replace("Contain", "Contains");
}
document.getElementById('page-title').textContent = `${numPatterns} ${titleText}`;

if(numPatterns<3){
    let letters = document.getElementsByClassName("letter");
    for(let letter of letters){
        letter.classList.add("hidden");
    }
}