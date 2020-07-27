//*************************************** */
// Functions.js                           */
// Author: Anthony McGrath                */
//*************************************** */

//*************************************** */
// Add Event Listeners                    */
//*************************************** */
document.addEventListener('DOMContentLoaded', addListeners);
function addListeners(){
  // if (hero && document.getElementById("heroPreload").complete == true){
  //   alert('imageLoaded');
  //   showHero();
  // };
  document.getElementById('scroll').addEventListener('click', toTop);
  window.onscroll = function() {scrollFunction()};
} // addListeners

//*************************************** */
// Define Global Variables                */
//*************************************** */
var locale = '/'; 
if (window.location.host == 'localhost'){
  locale = '/site/';
}
var entryFormat = false;
var gridEntry = 0;
var gridInx = 0;

// Define site Navigation Array
// Object items:
//  - title:    Page title
//  - link:     Link to page from root
//  - subpages: Pages under page (not included in nav)  
//  - children: Pages under page (included in nav)
//
// note if title == "divider" - will insert divider into nav.
nav = [
  {
    title: "Home",
    link: locale + "",
    subpages: []
  },
  {
    title: "Blog",
    link: locale + "blog/",
    subpages: [
      "Foundation Reflections",
      "Neuroplasticity and Growth",
      "Problems While Coding",
      "Emotional Intelligence",
      "JavaScript and the DOM",
      "Goals, Skills and Self",
      "CSS Position Attribute Explained",
      "My Values",
      "Responses",
      "Stories and Legends"
    ]
  },
  {
    title: "Tools / Games",
    link: locale + "games/",
    children: [
      {
        title: "Browse All",
        link: locale + "games/",
      },
      {
        title: "divider"
      },
      {
        title: "Calculator",
        link: "/calculator/",
      },
      {
        title: "DVD Screensaver",
        link: "/dvd-bounce/",
      },
      {
        title: "Color Swatch",
        link: "/colorSwatch/",
      },
      {
        title: "The Great RGB Color Game",
        link: "/colorGame/",
      },
      {
        title: "divider"
      },
      {
        title: "Patatap",
        link: "/patatap/",
      },
      {
        title: "Minesweeper",
        link: "/minesweeper/",
      },
      {
        title: "Whack-a-Mole",
        link: "/javascript-carnival/whack-a-mole/whack-a-mole.html",
      },
      {
        title: "Dress the Clown",
        link: "/javascript-carnival/dress-the-clown/dress-the-clown.html",
      },
      {
        title: "Inflate the Unicorn",
        link: "/javascript-carnival/inflate-the-unicorn/inflate-the-unicorn.html",
      },
    ], 
    subpages: []
  },
  {
    title: "Contact",
    link: locale + "contact.html",
    subpages: []
  }
]; // nav[{}]

//*************************************** */
// Hero Image Functionality               */
//*************************************** */

function loadHero(){
  document.getElementById('heroLogo').classList.remove('animate');
  document.getElementById('hero-image').style.opacity = '1';
}
//*************************************** */
// Scroll to Top Functionality            */
//*************************************** */
function scrollFunction() {
  // Toggle display of to top link based on scroll position
  let toTop = document.getElementById('scroll');
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
} // scrollFunction

function toTop(){
  // Scroll to top of page
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
} // toTop()

//*************************************** */
// Utility Functions                      */
//*************************************** */
function makeUrl(link, text, params){
  // Return an Anchor Tag from variables
  let pString = "";
  for (let key in params){
    pString += " " + key + '="' + params[key] + '"';
  }
  document.write('<a href="' + link + '"' + pString + '>' + text + '</a>');
} // makelink(link, text, params{})

function getEntry(entry){
  // Create a item to be displayed in a list of alternating blocks
  // var content is to store full HTML for item, once content is built output to DOM

  let content = ''; // var to store entry HTML as defined

  if (entryFormat === true){ 
    content += '<div class="container-fluid pt-5 pb-5">';
  } // current object is full width

  // Base container plus padding if not full width
  content += '<div class="entry container' + (entryFormat === false ? ' pt-5 pb-5' : '') + '">'; 

  if (entry.imgSrc &&  entry.imgSrc != ''){
    content += '<img class="entryImg" src="' + entry.imgSrc + '" alt="' + (entry.imgAlt ? entry.imgAlt : '') + '">';
  } // if image is defined, add to entry

  if (entry.title && entry.title != '')  {
    content += '<h3>';
    if (entry.link && entry.link != ''){
      content += '<a href="' + entry.link + '">';
    } // if link defined open anchor

    content += entry.title; // add header to content

    if (entry.link && entry.link != ''){
      content += '</a>';
    } // if link defined close anchor
    content += "</h3>";
  } // if title defined add to entry
  
  if (entry.blurb && entry.blurb != ''){
    content += '<p>' + entry.blurb + '</p>';  
  } // if blurb defined add to content

  content += '</div><!-- .container -->'; // close base container

  if (entryFormat === true){
    content += '</div><!-- .container-fluid -->'; // close full width container
    entryFormat = false; // toggle next container to not be full width
  } else {
    entryFormat = true; // toggle next container to be full width
  }

  // output content to DOM
  document.write(content);
} // getEntry(entry)

function getGrid(entry){
  // Create an item to be displayed in a dynamic grid of objects
  let entryTitle = '';
  let entryImg = '';
  if (gridEntry == 0){
    // Create New Row
    document.write('<div class="row dynamicGrid">');
  }

  // Create Column Entry (every second column assigned alt class)
  document.write('<div class="col-sm-4' + (gridInx % 2 != 0 ? ' alt' : '') + '">');

    // If there is an image defined add to DOM
    if (entry.imgSrc &&  entry.imgSrc != ''){

      
      if (entry.link && entry.link != ''){
        entryImg += '<a href="' + entry.link + '">';
      } // If link defined open anchor tag

      // Define image
      entryImg += '<img class="thumb gridIcon" src="' + entry.imgSrc + '" alt="' + (entry.imgAlt ? entry.imgAlt : '') + '">';

      if (entry.link && entry.link != ''){
        entryImg += '</a>';
      } // If link defined close anchor tag

      document.write(entryImg); // Output to DOM
    } // img definition

    // If entry title defined add header
    if (entry.title && entry.title != '')  {
      entryTitle = '<h4>'; // Open Header

      if (entry.link && entry.link != ''){
        entryTitle += '<a href="' + entry.link + '">';
      } // if link defined open anchor tag

      entryTitle += entry.title; // Define header content

      if (entry.link && entry.link != ''){
        entryTitle += '</a>'; 
      } // if link defined close anchor tag

      entryTitle += "</h4>"; // close header
      document.write(entryTitle); // Output to DOM
    } // title / header definition
    
    if (entry.blurb && entry.blurb != ''){
      document.write('<p>' + entry.blurb + '</p>');  
    } // Add blurb to DOM
    
  document.write('</div><!-- .col.sm -->'); // Close Column Object
  gridInx++; // increment grid index
  if (gridEntry < 2){ // max columns in row = 3
    gridEntry++;
  } else { // close row and reset
    document.write('</div>');
    gridEntry = 0;
  }
} // getGrid(entry)


//*************************************** */
// Navigation Functions                   */
//*************************************** */
function isCurrentPage(title, parent){
  // Check if NAV entry is the current page
  if (title == parent){
    return title + ' <span class="sr-only">(current)</span>';
  } else {
    return title;
  } 
} // isCurrentPage(title, parent)

function findParent(pageTitle){
  let found = false;
  for (var i = 0; i < nav.length; i++){
    if (nav[i].title == pageTitle || nav[i].subpages.indexOf(pageTitle) > -1){ 
      found = true;
      break; 
    } else {
      if (nav[i].children){
        for (let j = 0; j < nav[i].children.length; j++){
          if (nav[i].children[j].title == pageTitle){
            found = true;
            break;
          } // if found as child
        } // for j
      } // if has children
    } // if found at top level
    if (found === true){ break; }
  } // for i
  return nav[i].title;
}


function buildNavContents(pageTitle){
  // Generate Navigation
  let navClass;
  let parent = findParent(pageTitle);

  // Create Top Level Nav
  nav.forEach(navPage => {
    navClass="nav-item";
    if (navPage.title == pageTitle || navPage.title == parent){
      navClass += " active";
    };
    
    if(navPage.children){
      // If page object has children property, is dropdown menu
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
        makeUrl(navPage.link, navPage.title, params);
        document.write('<div class="dropdown-menu" aria-labelledby="navbarDropdown">');
          navClass = 'dropdown-item';			
          navPage.children.forEach(child => {
            if (child.title == "divider"){
              document.write('<div class="dropdown-divider"></div>');
            } else {
              makeUrl(child.link, child.title, {class: navClass});
            }
          });
        document.write('</div>');
			document.write('</li>');
    } else {  
      document.write('<li class="' + navClass + '">');
			makeUrl(navPage.link, isCurrentPage(navPage.title, parent), {class: 'nav-link'});
			document.write('</li>');
    }
  }); // End nav.forEach(page)

} // buildNavContents(pageTitle, parent)