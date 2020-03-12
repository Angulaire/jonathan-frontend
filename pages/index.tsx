import React from 'react';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import Hero from '../components/section/Hero';
import CTA from '../components/section/CTA';
import Customers from '../components/section/Customers';
import TextGrid from '../components/section/TextGrid';

class IndexPage extends React.Component {

  render() {
    return (
      <>
        <Hero
          title="Je pilote des stratégies pour les marques de demain."
        />
        <TextGrid
          title="Mon Quotidien"
          textCards={[
            {title: "Audit", description: "Veniam nostrud do amet consequat."},
            {title: "Conseil", description: "Sunt elit deserunt eiusmod nulla consequat qui eiusmod occaecat."},
            {title: "Design", description: "Excepteur amet sunt aliquip veniam reprehenderit ex sint aliquip cupidatat."},
            {title: "Gestion", description: "Ad ad Lorem irure ea aute irure nulla laboris pariatur dolore labore exercitation sint laborum."},
            {title: "Production", description: "Ad adipisicing velit quis ut excepteur ut dolore mollit ex in."},
            {title: "Suivi", description: "Sunt proident magna excepteur ad."}
          ]}
          variant="secondary"
        />
        <TextGrid
          title="Comment s'y prendre ?"
          textCards={[
            {title: "Rencontre", description: "Veniam nostrud do amet consequat."},
            {title: "Qualification", description: "Sunt elit deserunt eiusmod nulla consequat qui eiusmod occaecat."},
            {title: "Proposition", description: "Excepteur amet sunt aliquip veniam reprehenderit ex sint aliquip cupidatat."},
          ]}
          variant="primary"
        />
        <TextGrid
          title="Pouquoi me choisir ?"
          textCards={[
            {title: "Champ d'action", description: "Veniam nostrud do amet consequat."},
            {title: "Expertises", description: "Sunt elit deserunt eiusmod nulla consequat qui eiusmod occaecat."},
            {title: "Track record", description: "Excepteur amet sunt aliquip veniam reprehenderit ex sint aliquip cupidatat."},
          ]}
          variant="secondary"
        />
        <Customers />
        <CTA />
        <Footer />
      </>
    )
  }
  
}
export default IndexPage