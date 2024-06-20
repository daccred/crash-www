import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import {compose} from 'redux'

// import UI from 'scalez-gui/browser'
// import UI from 'scalez-gui/dist/scratch-gui'

const backpackHostMatches = process.browser && window.location.href.match(/[?&]backpack_host=([^&]*)&?/);
const backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;

// @ts-ignore
const GUI = dynamic(() => import('scalez-gui/dist/scratch-gui'), { ssr: false });

import {AppStateHOC, HashParserHOC, setAppElement } from 'scalez-gui/src/index'


// BrowserModalComponent.setAppElement(appTarget);
//     const WrappedBrowserModalComponent = AppStateHOC(BrowserModalComponent, true /* localesOnly */);

const EnhancedGUI = compose(
  AppStateHOC,
  HashParserHOC
)(GUI)


const LearnView = () => {


// const appTarget = document.createElement('div');
// setAppElement(appTarget);

// document.body.appendChild(appTarget);
const handleBack = () => {};


  return (
    <div>
      <h1>Learn Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <EnhancedGUI
          canEditTitle={true}
          backpackVisible={true}
          showComingSoon={true}
          canSave={false}
          onClickLogo={() => console.log('Logo Clicked')}
        />
      </Suspense>
    </div>
  );
};

export default LearnView;