//*************************************** */
// Functions.js                           */
// Author: Anthony McGrath                */
//*************************************** */
document.addEventListener('DOMContentLoaded', addListeners);

function addListeners(){
  document.getElementById('scroll').addEventListener('click', toTop);
  window.onscroll = function() {scrollFunction()};
} // addListeners

var entryFormat = false;

nav = [
  {
    title: "Home",
    link: "",
    selected: false
  },
  
  
  {
    title: "Blog",
    link: "blog/",
    selected: false
  },
  {
    title: "Tools / Games",
    link: "games/",
    selected: false,
    children: [
      {
        title: "Browse All",
        link: "games/",
        selected: false
      },
      {
        title: "divider"
      },
      {
        title: "Calculator",
        link: "calculator/",
        selected: false
      },
      {
        title: "DVD Screensaver",
        link: "dvd-bounce/",
        selected: false
      },
      {
        title: "divider"
      },
      {
        title: "Minesweeper",
        link: "minesweeper/",
        selected: false
      },
      {
        title: "Whack-a-Mole",
        link: "javascript-carnival/whack-a-mole/whack-a-mole.html",
        selected: false
      },
      {
        title: "Dress the Clown",
        link: "javascript-carnival/dress-the-clown/dress-the-clown.html",
        selected: false
      },
      {
        title: "Inflate the Unicorn",
        link: "javascript-carnival/inflate-the-unicorn/inflate-the-unicorn.html",
        selected: false
      },
    ]
  },
  {
    title: "Contact",
    link: "contact.html",
    selected: false
  }
]; // nav[{}]

function scrollFunction() {
  let toTop = document.getElementById('scroll');
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

function toTop(){
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
}

function makeUrl(path, link, text, params){
  let pString = "";
  for (let key in params){
    
    pString += " " + key + '="' + params[key] + '"';
  }
  document.write('<a href="' + path + link + '"' + pString + '>' + text + '</a>');
} // makelink(path, link, text, params{})

function getPageName(title, parent){
  if (title == parent){
    return title + ' <span class="sr-only">(current)</span>';
  } else {
    return title;
  } 
} // getPageName(title, parent)

function isCurrentPage(title, parent, pageTitle){

}

function buildNavContents(pageTitle, parent){
  let navClass;
  nav.forEach(page => {
    navClass="nav-item";
    if (page.title == pageTitle || page.title == parent){
      navClass += " active";
    };
    
    if(page.children){
      navClass += " dropdown";
      document.write('<li class="' + navClass + '">');
        let params = {
          "class": "nav-link dropdown-toggle",
          "id": "navbarDropdown",
          "role": "button",
          "data-toggle":"dropdown",
          "aria-haspopup":"true",
          "aria-expanded":"false"
        };
        makeUrl(path, page.link, page.title, params);
        document.write('<div class="dropdown-menu" aria-labelledby="navbarDropdown">');
          navClass = 'dropdown-item';			
          page.children.forEach(child => {
            if (child.title == "divider"){
              document.write('<div class="dropdown-divider"></div>');
            } else {
              makeUrl(path, child.link, child.title, {class: navClass});
            }
          });
        document.write('</div>');
			document.write('</li>');
    } else {  
      document.write('<li class="' + navClass + '">');
			makeUrl(path, page.link, getPageName(page.title, parent), {class: 'nav-link'});
			document.write('</li>');
    }
  });
}   

function getEntry(entry){
  let entryTitle = '';
  if (entryFormat === true){
    document.write('<div class="container-fluid pt-5 pb-5">');
  }
  document.write('<div class="entry container' + (entryFormat === false ? ' pt-5 pb-5' : '') + '">');
  if (entry.imgSrc &&  entry.imgSrc != ''){
    document.write('<img class="entryImg" src="' + entry.imgSrc + '" alt="' + (entry.imgAlt ? entry.imgAlt : '') + '">')
  }
    if (entry.title != '')  {
      entryTitle = '<h3>';
      if (entry.link != ''){
        entryTitle += '<a href="' + entry.link + '">';
      }
      entryTitle += entry.title;
      if (entry.link != ''){
        entryTitle += '</a>';
      }
      entryTitle += "</h3>";
      document.write(entryTitle);
    }
    
    if (entry.blurb != ''){
      document.write('<p>' + entry.blurb + '</p>');  
    }
  document.write('</div><!-- .container -->');
  if (entryFormat === true){
    document.write('</div><!-- .container-fluid -->');
    entryFormat = false;
  } else {
    entryFormat = true;
  }
}
	