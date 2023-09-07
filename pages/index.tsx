import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ThemeProvider } from '../hooks/useTheme';
import { TripList } from '~/data/triplist';
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';

// import { PLACES } from '../data/places';

const Map = dynamic(() => import('../components/Map'), { ssr: false });



export default function Home() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [mapRef, setMapRef] = useState(null);

  return (
    <div>
      <Head>
        <title>Lee Family Travels</title>
        <meta
          name="description"
          content="A world map with the places we've been"
          key="description"
        />
      </Head>
      <Menu isOpen={isOpen} setOpen={setOpen} />
      <Sidebar
        mapRef={mapRef}
        isOpen={isOpen}
        setOpen={setOpen}
        trips={TripList}
      />
      <div className="map">
        <ThemeProvider>
          <Map setMapRef={setMapRef} trips={TripList} />
        </ThemeProvider>
      </div>
    </div>
  );
}