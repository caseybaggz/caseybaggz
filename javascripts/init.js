export default (() => {

  // iOS has a different viewport
  function setUpiOSNine() {
    if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream){
      document.querySelector('meta[name=viewport]')
        .setAttribute(
          'content',
          'initial-scale=1.0001, minimum-scale=1.0001, maximum-scale=1.0001, user-scalable=no'
        );
    }
  }


  setUpiOSNine();

})();
