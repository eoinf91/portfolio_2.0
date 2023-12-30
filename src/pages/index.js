import * as React from "react";
import { useLocation } from "@reach/router";

// Styles
import '../styles/index.styles.scss';
import '../styles/main.styles.scss';

// Components
import PFheader from "../components/PFheader/PFheader.component";
import Bento from "../components/Bento/Bento.component";
import Footer from "../components/Footer/Footer.component";
import PageIntro from "../components/PageIntro/pageIntro.component";

const IndexPage = () => {
  const location = useLocation();
  return (
    <main>
      <PFheader 
        pagePath = {location.pathname}
      />
      <div className="content">
        <PageIntro
          introHeader="Hey, I am Eoin"
          introPara="A senior product designer passionate about creating intuitive and engaging experiences that truly resonate with users."
        />
        <Bento />
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
