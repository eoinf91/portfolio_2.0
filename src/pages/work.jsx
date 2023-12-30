import * as React from "react";
import { useLocation } from "@reach/router"

// Styles
import '../styles/index.styles.scss';
import '../styles/main.styles.scss';

// Components
import PFheader from "../components/PFheader/PFheader.component";
import Footer from "../components/Footer/Footer.component";
import PageIntro from "../components/PageIntro/pageIntro.component";
import Bento from "../components/Bento/Bento.component"

const WorkPage = () => {
  const location = useLocation();
    return (
      <main>
        <PFheader 
          pagePath={location.pathname}
        />
        <PageIntro 
          introHeader="Work"
        />
        <Bento />
        <Footer />
      </main>
    )
  }
  
  export default WorkPage
  
  export const Head = () => <title>Work</title>
  