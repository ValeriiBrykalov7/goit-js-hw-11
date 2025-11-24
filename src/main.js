import getImagesByQuery from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formEl = document.querySelector('form');
formEl.addEventListener('submit', e => {
  e.preventDefault();

  clearGallery();
  showLoader();
  const q = e.target.elements.search.value;
  if (!q) {
    iziToast.info({
      message: 'Please enter value',
      position: 'topRight',
      color: 'yellow',
    });
    hideLoader();
    return;
  }

  getImagesByQuery(q)
    .then(res => {
      if (res.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
        });
      } else {
        createGallery(res);
      }
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      hideLoader();
    });

  e.target.reset();
});
