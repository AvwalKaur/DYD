document.addEventListener('DOMContentLoaded', function() {
    const videoUrls = {
      calves: 'https://www.youtube.com/embed/C7qnbmpLNGI',
      biceps:'https://www.youtube.com/embed/snA6ls2kG3U',
      quads: 'https://www.youtube.com/embed/DDpa-P4CcFs',
      abdominals: 'https://www.youtube.com/embed/8PwoytUU06g',
      obliques: 'https://www.youtube.com/embed/Szel63xuAxc',
      forearms: 'https://www.youtube.com/embed/fKDKrK5njI8',
      hands: 'https://www.youtube.com/embed/ihuxQ4WD9dE',
      chest:'https://www.youtube.com/embed/qwx1VV9vV1A',
      traps:'https://www.youtube.com/embed/Z4aPEhwvLWk',
      fshoulders: 'https://www.youtube.com/embed/jBPdbt0Fxb4',
    };
  
    document.getElementById('muscle-svg-front').addEventListener('click', function(event) {
      let target = event.target;
      while (target && target.tagName !== 'g') {
        target = target.parentNode;
      }
  
      if (target && videoUrls[target.id]) {
        const videoUrl = videoUrls[target.id];
        showVideo(videoUrl);
      }
    });
  
    function showVideo(videoUrl) {
      const videoContainer = document.getElementById('video-container');
      videoContainer.innerHTML = `
        <iframe width="560" height="315" src="${videoUrl}" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;
    }
  });
  



  document.addEventListener('DOMContentLoaded', function() {
    const videoUrls = {
      calves: 'https://www.youtube.com/embed/C7qnbmpLNGI',
      triceps: 'https://www.youtube.com/embed/RPkTy8emOgQ',
      traps:'https://www.youtube.com/embed/Z4aPEhwvLWk',
      hamstrings: 'https://www.youtube.com/embed/2PAm7gEVCAg',
      rshoulders: 'https://www.youtube.com/embed/jBPdbt0Fxb4',
      forearms: 'https://www.youtube.com/embed/fKDKrK5njI8',
      hands: 'https://www.youtube.com/embed/ihuxQ4WD9dE',
      lats: 'https://www.youtube.com/embed/QqZV3JEoOlc',
      lowerback: 'https://www.youtube.com/embed/ZkPIuHh0eRY',
      middletraps: 'https://www.youtube.com/embed/hh8EU1iSyYw',
      glutes: 'https://www.youtube.com/embed/_hIFF8G-BG0',
      triceps: 'https://www.youtube.com/embed/RPkTy8emOgQ',
      triceps: 'https://www.youtube.com/embed/RPkTy8emOgQ',
      triceps: 'https://www.youtube.com/embed/RPkTy8emOgQ',
      triceps: 'https://www.youtube.com/embed/RPkTy8emOgQ',
      triceps: 'https://www.youtube.com/embed/RPkTy8emOgQ',
    };
  
    document.getElementById('muscle-svg-back').addEventListener('click', function(event) {
      let target = event.target;
      while (target && target.tagName !== 'g') {
        target = target.parentNode;
      }
  
      if (target && videoUrls[target.id]) {
        const videoUrl = videoUrls[target.id];
        showVideo(videoUrl);
      }
    });
  
    function showVideo(videoUrl) {
      const videoContainer = document.getElementById('video-container');
      videoContainer.innerHTML = `
        <iframe width="560" height="315" src="${videoUrl}" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;
    }
  });
  