import React, { Fragment, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import LoadingComponent from './LoadingComponent';
import DashBoard from '../../features/thumbnails/DashBoard';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';

function App() {
  const{thumbNailStore} = useStore();

  useEffect(() => {
    thumbNailStore.loadThumbNails();
  }, [thumbNailStore]);


  if (thumbNailStore.loadingInitial) return <LoadingComponent content='Loading Images' />
  return (
    <Fragment>
      <NavBar  />
      <Container style={{marginTop:'7em'}}>
        <DashBoard  />
      </Container>
    </Fragment>
  );
}

export default observer(App);
