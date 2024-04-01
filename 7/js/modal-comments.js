// // Модуль отрисовки комментариев popup

const COMMENT_SHOWN_STEP_COUNT = 5;
let commentCurrentCount = 0;
let commentsBand = [];

//Находим HTML ноды (селекторы)
const bigPicture = document.querySelector('.big-picture');
const socialHeader = bigPicture.querySelector('.social__header');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const socialCommentsList = bigPicture.querySelector('.social__comments');
const socialCommentsTemplate = bigPicture.querySelector('.social__comment');
const commentsLoader = bigPicture.querySelector('.comments-loader');
socialCommentsList.innerHTML = '';

const commentCountModal = () => {
  const commentFragment = document.createDocumentFragment();
  const renderComments = commentsBand.slice(commentCurrentCount, commentCurrentCount + COMMENT_SHOWN_STEP_COUNT);
  const renderCommentsLength = renderComments.length + commentCurrentCount;

  renderComments.forEach((comment) => {
    const cloneSocialComment = socialCommentsTemplate.cloneNode(true);
    socialHeader.querySelector('.social__picture').setAttribute('src', comment.avatar);
    socialHeader.querySelector('.social__picture').setAttribute('alt', comment.name);
    cloneSocialComment.querySelector('.social__picture').setAttribute('src', comment.avatar);
    cloneSocialComment.querySelector('.social__picture').setAttribute('alt', comment.name);
    cloneSocialComment.querySelector('.social__text').textContent = comment.message;

    commentFragment.appendChild(cloneSocialComment);
  });

  socialCommentsList.appendChild(commentFragment);
  socialCommentCount.querySelector('.social__comment-shown-count').textContent = renderCommentsLength;
  socialCommentCount.querySelector('.social__comment-total-count').textContent = commentsBand.length;

  if (renderCommentsLength >= commentsBand.length) {
    commentsLoader.classList.add('hidden');
  }
  commentCurrentCount += COMMENT_SHOWN_STEP_COUNT;
};

// Функция очистки комментариев

const clearCommentClose = () => {
  commentCurrentCount = 0;
  socialCommentsList.innerHTML = '';
  commentsLoader.classList.remove('hidden');
  commentsLoader.addEventListener('click', commentCountModal);
};

const commentRender = (commentsPhotoCurrent) => {
  commentsBand = commentsPhotoCurrent;
  commentCountModal();

  commentsLoader.addEventListener('click', commentCountModal);
};

export { commentCountModal, clearCommentClose, commentRender };
