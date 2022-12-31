import './style.css';
import { getGif } from './public/src/getGif';

import { getAdvice } from "./public/src/getAdvice.js";
import { root, CardContainer, Card, CardTitle, GifImage, AdviceContainer, ButtonContainer, LikeButton, CommentButton, NavBarContainer, Home, TagContainer, tags, tagElements } from "./public/Components/index.js";

window.onload = RunApp;

async function RunApp() {
    renderGifCard();
    renderContent();
}

function renderGifCard() {
    root.append(CardContainer);
    CardContainer.append(AdviceContainer);
    CardContainer.append(Card);
    CardContainer.append(GifImage);
    CardContainer.append(ButtonContainer);
    CardContainer.append(CardTitle);
    ButtonContainer.append(LikeButton);
    ButtonContainer.append(CommentButton);
}

function renderContent() {
    blurrElement(CardContainer, 750);
    renderGif();
    renderAdvice();
}

function blurrElement(element, duration) {
    element.classList.add('blurred');
    setTimeout(() => {
        element.classList.remove('blurred');
    }, duration);
}

async function renderGif() {
    const gif = await getGif();
    const data = gif['data'];
    const index = Math.floor(Math.random() * data.length);
    const gifTitle = data[index]['title'];
    const gifImageOriginal = data[index]['images']['original'];
    CardTitle.innerText = gifTitle;
    GifImage.src = gifImageOriginal['url'];
}

async function renderAdvice() {
    const adviceData = await getAdvice();
    const advice = adviceData['slip']['advice'];
    AdviceContainer.innerText = `"${advice}"`;
}
// -----------------------------------------

GifImage.addEventListener('click', renderContent);

root.append(NavBarContainer);


export default {}