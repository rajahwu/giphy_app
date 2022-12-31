const NavBarContainer = document.createElement('nav');
NavBarContainer.setAttribute('id', 'nav_bar');
NavBarContainer.classList.add('nav-bar');

const Home = document.createElement('div');
Home.setAttribute('id', 'home');
Home.classList.add('home');
Home.innerText = "HOME";

const TagContainer = document.createElement('div');
TagContainer.setAttribute('id', 'tags');
TagContainer.classList.add('tags');
TagContainer.append(Home);

const tags = ["comedy", "gaming", "food", "dance", "beauty", "animals", "sports"];
const tagElements = [];

tags.forEach(tag => {
    const el = document.createElement('div');
    el.setAttribute('id', tag);
    el.classList.add('class');
    el.classList.add('tag');
    tagElements.push(el);
})

tagElements.forEach((element, i) => {
    element.innerText = tags[i].toUpperCase();
    TagContainer.append(element)
})

NavBarContainer.append(TagContainer);

export { NavBarContainer, Home, TagContainer, tags, tagElements }