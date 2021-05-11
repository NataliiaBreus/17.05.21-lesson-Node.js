'use strict';
const cardsContainer = document.getElementById("root");
const cardElements = responseData.map((user) => createUserCards(user));
cardsContainer.append(...cardElements);

function createUserCards(user){
  return createElement (
    "li",
    {classNames: ["cardWrapper"]},
    createElement (
      "article",
      {classNames: ["cardContainer"]},
      createImageWrapper (user),
      createContentContainer(user)
    )
  );
}

/**
 *
 * @param {string} tagName
 * @param {object} options
 * @param {string[]} options.classNames - css classes
 * @param {object} options.handlers - event handlers
 * @param {object} options.attributes - attributes
 * @param  {...Node} children
 * @returns {HTMLElement}
 */
 function createElement(
  tagName,
  { classNames = [], handlers = {}, attributes = {} } = {},
  ...children
) {
  const elem = document.createElement(tagName);
  elem.classList.add(...classNames);
  for( const [attrName, attrValue] of Object.entries(attributes)){
    elem.setAttribute(attrName, attrValue);
  }

  for (const [eventType, eventHandler] of Object.entries(handlers)) {
    elem.addEventListener(eventType, eventHandler);
  }

  elem.append(...children);
  return elem;
}

function createCardImage(link) {
  const img = createElement ("img", {
    classNames: ["cardImage"],
    handlers: {
      error: handleImageError,
      load: handleImageLoad,
    }
  });
  img.src = link;
  img.hidden = true;

  return img;
}

function createImageWrapper ({
  firstName,
  lastName,
  profilePicture
}) {
  const imageWrapper = createElement(
    "div", {
      classNames: ["cardImageWrapper"]
    },
    createElement (
      "div", {
        classNames: ["initials"]
      },
      document.createTextNode(firstName[0] + lastName[0] || ""),
      ),
      createCardImage (profilePicture)
    ); 
      imageWrapper.style.backgroundColor = stringToColor(firstName || "");
      return imageWrapper;
}

function createContentContainer({firstName, lastName, contacts}) {
  return createElement (
    "div",
    {
      classNames: ["contentContainer"],
  },
  createElement (
    "h3",
    {classNames: ["cardName"]},
    document.createTextNode(firstName || "")
  ),
  createElement (
    "h3",
    {classNames: ["cardLastName"] },
    document.createTextNode(lastName || "")
  ),
  createElement (
    "p",
    {classNames: ["cardContacts"] },
    ...createLink(contacts, SOCIAL_ICONS_MAP)
  )
  );
}

function createLink(contacts) {
  return contacts.map((contact) => {
    const url = new URL(contact);
    return createElement("a", {
      attributes: { href: contact },
      classNames: [SOCIAL_ICONS_MAP.get(url.hostname) || "fa-adn", "fab", 'socialLink'],
    });
  });
}
         
document.body.append(...createLink(["https://www.instagram.com/therock/?hl=ru"]));

/*
EVENT HANDLERS
*/
function handleImageError({target}) {
  target.remove();
}

function handleImageLoad({target}){
  target.hidden = false;
}
/*
UTILS
*/

function stringToColor(str) {
 var hash = 0;
 for (var i = 0; i < str.length; i++) {
   hash = str.charCodeAt(i) + ((hash << 5) - hash);
 }
 var colour = '#';
 for (var i = 0; i < 3; i++) {
   var value = (hash >> (i * 8)) & 0xFF;
   colour += ('00' + value.toString(16)).substr(-2);
 }
 return colour;
}

