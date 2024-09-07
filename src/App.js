import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Marked from 'marked'


function App() {

  const [texte, setTexte] = useState("# `Prévisualisateur - Believemy`\n### Oh ! De la magie !\nEn réalité, pas vraiment : ceci s\'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !\n\n### Cas d\'utilisation\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n* # h1\n* ## h2\n* ### h3\n* #### etc\n[Believemy](https://believemy.com)")

  const changeTxt = event => {
    console.log(event.target.value)
    setTexte(event.target.value)
  }

  const markdownToHTML = () => {
    return {__html: Marked(texte)};
  }

  return (
    <div className="App">
      <textarea className="elem" onChange={(e) => changeTxt(e)} value={texte}>

      </textarea>
      <div  className="elem">
        <div dangerouslySetInnerHTML={markdownToHTML()}></div>
      </div>
    </div>
  );
  
}


export default App;
