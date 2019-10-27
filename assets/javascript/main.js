const articlePage = document.querySelector('.page-article');

const initArticlePage = () => {
  const articleContent = document.querySelector('.article-content');
  const contentImages = articleContent.querySelectorAll('img');

  contentImages.forEach(image => {
    const figure = document.createElement('figure');
    const newImage = document.createElement('img');

    newImage.setAttribute('src', image.getAttribute('src'));

    figure.appendChild(newImage);
    
    image.parentNode.replaceChild(figure, image);
    

    if (image.hasAttribute('alt')) {
      const figcaption = document.createElement('figcaption');

      figcaption.innerText = image.getAttribute('alt');

      figure.appendChild(figcaption);
    }
  });  
};

if (articlePage) {
  initArticlePage();
}
