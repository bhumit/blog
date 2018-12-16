// custom typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

require("prismjs/themes/prism-okaidia.css")

export function onRouteUpdate(location) {
    console.log('new pathname', location.pathname);
    if (window.MathJax !== undefined) {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
    }
  };
  