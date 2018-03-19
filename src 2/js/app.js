document.addEventListener("DOMContentLoaded", function(){

  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/src/service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }

  // Notification
  Notification.requestPermission(function (permission) {
    if (permission === 'granted') {
      var notification = new Notification('New Conversation!');
    }
  });
});
