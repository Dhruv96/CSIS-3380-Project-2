// get all contacts from class name. 
var contacts = Array.from(document.querySelectorAll('.contact-item'));

// This function calculates and returns number of contacts 
function getTotalNumberOfContacts() {
    return document.querySelectorAll('.contact-details').length;
}

// This function generates links based on number of contacts
function generateLinks() {
    let paginationDiv = document.querySelector('.pagination');
    paginationDiv.classList.toggle('pagination');
    const numOfContacts = getTotalNumberOfContacts();
    console.log(numOfContacts);
    var ul = document.createElement('ul');
    ul.classList.toggle('pagination');
    paginationDiv.appendChild(ul);

    const numOfPages = Math.ceil(numOfContacts/10); // getting ceil value
    console.log(numOfPages);
    for(var i=0;i<numOfPages;i++){
        var li = document.createElement('li'); // creating li element
        ul.appendChild(li);
        var anchor = document.createElement('a'); // creating anchor element
        anchor.href = " ";
        li.appendChild(anchor);
        anchor.innerText = i+1; // setting inner text for pagination link
    }
}

// This function sets event listeners for pagination links
function setLinkEventListeners() {
    const links = Array.from(document.querySelectorAll('a'));
    console.log(links);
    links.forEach(link => link.addEventListener('click', onLinkClick));
}

// This is the function that gets called when any pagination link is clicked
function onLinkClick(e) {
    e.preventDefault();
    console.log(e.srcElement.outerText);
    let linkNumber = e.srcElement.outerText;    
    let upperNo = (linkNumber*10) - 1;
    let lowerNo = (linkNumber*10) - 10;
    for(var i=0;i<contacts.length;i++) {
        if(i>=lowerNo && i<=upperNo) {
            contacts[i].style.display = "block"; // showing only required 10 contacts
        }
        else
        {
            contacts[i].style.display = "none"; // hiding all other contacts
        }
    }
}

// This function shows the first 10 contacts and hide others for the initial state/run
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
