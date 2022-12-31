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
    el.classList.add(tag);
    el.classList.add('tag');
    const text = document.createElement('span');
    text.classList.add('icon-text');
    text.innerText = tag.toUpperCase();
    el.append(text)
    const tagImg = document.createElement('img');
    tagImg.classList.add('icon');
    tagImg.width = 25
    tagImg.height = 25
    tagImg.src = `./public/icons/${tag}.png`
    el.append(tagImg);
    el.addEventListener('click', () => {
        alert(`search ${tag}`)
    })
    tagElements.push(el);
})

tagElements.forEach((element, i) => {
    TagContainer.append(element)
})

NavBarContainer.append(TagContainer);

export { NavBarContainer, Home, TagContainer, tags, tagElements }