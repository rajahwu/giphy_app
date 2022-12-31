import { getGif } from "./getGif.js";
import { getAdvice } from "./getAdvice.js";

const root = document.querySelector('body');
root.setAttribute('id', 'root');
root.classList.add('root');

const cardContainer = document.createElement('div');
cardContainer.classList.add('card-container');

const card = document.createElement('div');
card.classList.add('card');

const cardTitle = document.createElement('h2');
cardTitle.classList.add('card-title');

const gifImage = new Image();
gifImage.classList.add('gif-image');
gifImage.height = 250;
gifImage.width = 250;

const adviceContainer = document.createElement('div');
adviceContainer.classList.add('advice-container');

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');

const likeButton = document.createElement('button');
likeButton.setAttribute('id', 'like_button');
likeButton.classList.add('like-button');
likeButton.innerText = '💓';
likeButton.addEventListener('click', () => alert('I like this'))

const commentButton = document.createElement('button');
commentButton.setAttribute('id', 'comment_button');
commentButton.classList.add('comment-button');
commentButton.innerText = '💬';
commentButton.addEventListener('click', () => alert('I got something to say about this'))


root.append(cardContainer);
cardContainer.append(cardTitle);
cardContainer.append(card);
cardContainer.append(gifImage);
cardContainer.append(adviceContainer);
cardContainer.append(buttonContainer);
buttonContainer.append(likeButton);
buttonContainer.append(commentButton);

async function app() {
    renderNewContent();
}

async function renderNewContent() {
    cardContainer.classList.add('blurred');
    setTimeout(() => {
        cardContainer.classList.remove('blurred');
    }, 750)
    const gif = await getGif();
    const data = gif['data'];
    const index = Math.floor(Math.random() * data.length);
    const gifData = data[index]['images']['original'];
    const title = data[index]['title'];
    cardTitle.innerText = title;
    gifImage.src = gifData['url'];
    const adviceData = await getAdvice();
    const advice = adviceData['slip']['advice'];
    adviceContainer.innerText = `"${advice}"`;
}

gifImage.addEventListener('click', renderNewContent);

app()