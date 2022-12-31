const ButtonContainer = document.createElement('div');
ButtonContainer.classList.add('button-container');

const LikeButton = document.createElement('button');
LikeButton.setAttribute('id', 'like_button');
LikeButton.classList.add('like-button');
LikeButton.innerText = '💓';
LikeButton.addEventListener('click', () => alert('I like this'));

const CommentButton = document.createElement('button');
CommentButton.setAttribute('id', 'comment_button');
CommentButton.classList.add('comment-button');
CommentButton.innerText = '💬';
CommentButton.addEventListener('click', () => alert('I got something to say about this'));

export { ButtonContainer, LikeButton, CommentButton };