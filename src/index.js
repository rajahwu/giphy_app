import { getGif } from "./getGif.js";
import { getAdvice } from "./getAdvice.js";
import { root, CardContainer, Card, CardTitle, GifImage, AdviceContainer, ButtonContainer, LikeButton, CommentButton } from "../Components/index.js";


async function app() {
    renderGifCard();
    renderNewContent();
}

function renderGifCard() {
    root.append(CardContainer);
    CardContainer.append(CardTitle);
    CardContainer.append(Card);
    CardContainer.append(GifImage);
    CardContainer.append(AdviceContainer);
    CardContainer.append(ButtonContainer);
    ButtonContainer.append(LikeButton);
    ButtonContainer.append(CommentButton);
}

function renderNewContent() {
    blurrElement(CardContainer, 750);
    renderGif();
    renderAdvice();
}

function blurrElement(element, duration) {
    element.classList.add('blurred');
    setTimeout(() => {
        element.classList.remove('blurred');
    }, duration)
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

GifImage.addEventListener('click', renderNewContent);

app()

export default {}