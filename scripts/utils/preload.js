// Preload lightbox image
arrayMedia.forEach((element) => {
    let media = element.media
    media = media.replace('/small/', '/medium/');
    let img=new Image();
    img.src=media;
  });