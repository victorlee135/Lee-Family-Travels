import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ThemeProvider } from '../hooks/useTheme';
import { TripList } from '~/data/triplist';
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';
import { Lee } from '~/lib/utils';
import { Filter } from '~/components/Sidebar/Sidebar';

// import { PLACES } from '../data/places';

const Map = dynamic(() => import('../components/Map'), { ssr: false });





export default function Home() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [mapRef, setMapRef] = useState(null);
  const [filterKey, setFilterKey] = useState<Filter>({ users: [Lee.All] });
  

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
        filterKey={filterKey}
        setFilterKey={setFilterKey}
      />
      <div className="map">
        <ThemeProvider>
          <Map mapRef={mapRef} setMapRef={setMapRef} trips={TripList} filterKey={filterKey} />
        </ThemeProvider>
      </div>
    </div>
  );
}