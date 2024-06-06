document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
  
    const images = [
      { src: 'images/photo-1.jpg', alt: 'Photo 1', details: 'Two guinea pigs eating carrots' },
      { src: 'images/photo-2.jpg', alt: 'Photo 2', details: 'cute dog outdoor' },
      { src: 'images/photo-3.jpg', alt: 'Photo 1', details: 'A cheerful young woman sitting outdoor with her dog' },
      { src: 'images/photo-4.jpg', alt: 'Photo 2', details: 'A woman and her dog' },
      { src: 'images/photo-5.jpg', alt: 'Photo 1', details: 'happy sinear woman standing close to a horse.' },
      { src: 'images/photo-6.jpg', alt: 'Photo 2', details: 'black cat playing with her boss' },
      { src: 'images/photo-7.jpg', alt: 'Photo 1', details: 'cute cut sleeping' },
      { src: 'images/photo-8.jpg', alt: 'Photo 2', details: 'Three cute dogs sitting outside.' },
     
    ];
  
    images.forEach(image => {
      const thumbnail = document.createElement('div');
      thumbnail.classList.add('thumbnail');
  
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;
  
      const details = document.createElement('div');
      details.classList.add('details');
      details.textContent = image.details;
  
      thumbnail.appendChild(img);
      thumbnail.appendChild(details);
  
      gallery.appendChild(thumbnail);
    });
  });
  