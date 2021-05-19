
var contacts = Array.from(document.querySelectorAll('.contact-item'));

function getTotalNumberOfContacts() {
    return document.querySelectorAll('.contact-details').length;
}


function generateLinks() {
    let paginationDiv = document.querySelector('.pagination');
    paginationDiv.classList.toggle('pagination');
    const numOfContacts = getTotalNumberOfContacts();
    console.log(numOfContacts);
    var ul = document.createElement('ul');
    ul.classList.toggle('pagination');
    paginationDiv.appendChild(ul);

    const numOfPages = Math.ceil(numOfContacts/10);
    console.log(numOfPages);
    for(var i=0;i<numOfPages;i++){
        var li = document.createElement('li');
        ul.appendChild(li);
        var anchor = document.createElement('a');
        anchor.href = " ";
        li.appendChild(anchor);
        anchor.innerText = i+1;
    }
}

function setLinkEventListeners() {
    const links = Array.from(document.querySelectorAll('a'));
    console.log(links);
    links.forEach(link => link.addEventListener('click', onLinkClick));
}

function onLinkClick(e) {
    e.preventDefault();
    console.log(e.srcElement.outerText);
    let linkNumber = e.srcElement.outerText;    
    let upperNo = (linkNumber*10) - 1;
    let lowerNo = (linkNumber*10) - 10;
    for(var i=0;i<contacts.length;i++) {
        if(i>=lowerNo && i<=upperNo) {
            contacts[i].style.display = "";
        }
        else
        {
            contacts[i].style.display = "none";
        }
    }
}

function onLoad() {
    for(var i=0;i<contacts.length;i++) {
        if(i<=9) {
            contacts[i].style.display = "";
        }
        else
        {
            contacts[i].style.display = "none";
        }
    }
}

generateLinks();
setLinkEventListeners();
onLoad();
