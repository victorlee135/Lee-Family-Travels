import React, {useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Sidebar from '../../components/Sidebar';
import Menu from '../../components/Menu';
import { ITrip, Lee} from '~/lib/utils';
import { Filter } from '~/components/Sidebar/Sidebar';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

export interface AppProps {
    trips: ITrip[];
    tripColors: string[];
  }

export default function App({trips, tripColors} : AppProps) {
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
            trips={trips}
            filterKey={filterKey}
            setFilterKey={setFilterKey}
          />
          <div className="map">
              <Map 
                mapRef={mapRef} 
                setMapRef={setMapRef} 
                trips={trips} 
                tripColors={tripColors}
                filterKey={filterKey} />
          </div>
        </div>
      );

}