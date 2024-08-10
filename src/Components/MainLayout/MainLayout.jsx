import { useState } from 'react';
import { HeaderSection } from './Header/HeaderSection';
import ContentContainer from './Content Container/ContentContainer';

function MainLayout({data}) {

  const [currentSection, setCurrentSection] = useState('');

  return (
    <>
          <div className='lg:flex lg:justify-between lg:gap-4'>
            <HeaderSection currentSection={currentSection} data={data} />
            <ContentContainer setCurrentSection={setCurrentSection} data={data} />
          </div>
    </>
  );
}

export default MainLayout;
