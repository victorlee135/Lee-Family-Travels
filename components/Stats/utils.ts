import { IPin, sortByOldest, getDistance, ITrip, Lee } from '../../lib';
import styles from './style.module.css';


///////////////////////////////////////////////////////////
////////////////////////// Types //////////////////////////
///////////////////////////////////////////////////////////
export enum EStatKeys {
    Markers = 'Markers',
    Cities = 'Cities',
    States = 'States',
    Countries = 'Countries',
    Trips = 'Trips',
    Distance = 'Distance'
}

export interface Player {
    author: string;
    value: number;
  }
  
export interface User {
    lee: Lee;
    city: string,
    country: string,
    coordinates: [number, number];
}

export interface UserStats {
    markers: number;
    cities: Set<string>;
    states: Set<string>;
    countries: Set<string>;
    numTrips: number;
    coordinates: [[number, number]];
}


///////////////////////////////////////////////////////////
////////////////////////// Utils //////////////////////////
///////////////////////////////////////////////////////////

export function getOrdinals(num: number) {
    switch (num) {
        case 0:
          return 'st';
        case 1:
          return 'nd';
        case 2:
          return 'rd';
        default:
          return 'th';
    }
}

export function getBarStyle(num: number) {
    switch (num) {
        case 0:
        return styles.bar_first;
        case 1:
        return styles.bar_second;
        case 2:
        return styles.bar_third;
        default:
        return styles.bar;
    }
}

export function getProgressWidth(index: number, players: Player[]) {
    const maxValue = players[0].value;
    const value = players[index].value;
  
    return (value * 100) / maxValue + '%';
}

export function makeStats(inputTrips: ITrip[], type: string) {
    const leaderboard = [];
    const trips = inputTrips.slice();

    const allUserStats = new Map<Lee, UserStats>([
        [Lee.Victor, {markers: 0, cities: new Set(), states: new Set(), countries: new Set(), numTrips: 0, coordinates: [[0, 0]]}],
        [Lee.Phil, {markers: 0, cities: new Set(), states: new Set(), countries: new Set(), numTrips: 0, coordinates: [[0, 0]]}],
        [Lee.Bumo, {markers: 0, cities: new Set(), states: new Set(), countries: new Set(), numTrips: 0, coordinates: [[0, 0]]}],
    ])
    
    for (var i = 0; i < trips.length; i++) {
        for (var j = 0; j < trips[i].lee.length; j++) {
            const leeKey = trips[i].lee[j];
            const userStats = allUserStats.get(leeKey);

            userStats.numTrips += 1;
            
            for (var k = 0; k < trips[i].markers.length; k++) {
                const city = trips[i].markers[k].city;
                const country = trips[i].markers[k].country;
                const coordinates = trips[i].markers[k].coordinates;
                if (country === "United States of America") {
                    const state = trips[i].markers[k].state;
                    userStats.states.add(state);
                }
                
                userStats.markers += 1;
                userStats.cities.add(city);
                userStats.countries.add(country);
                userStats.coordinates.push(coordinates);
            }
            allUserStats.set(leeKey, userStats);
        }
    }

    for (const [user, stats] of allUserStats) {
        var acc = 0
        switch (type) {
            case 'Markers': {
                 acc += stats.markers
                 break;
            }
            case 'Cities': {
                acc += stats.cities.size
                break;
            }
            case 'States': {
                acc += stats.states.size
                break;
            }
            case 'Countries': {
                acc += stats.countries.size
                break;
            }
            case 'Trips': {
                acc += stats.numTrips
                break;
            }
            case 'Distance': {
                for (var i = 0; i < stats.coordinates.length; i++) {
                    if (stats.coordinates.length === 1) {
                        break;
                    }
                    acc += getDistance(stats.coordinates[i]);
                }
                break;
            }
        }

        leaderboard.push({
            author: user,
            value: acc
        });
    }

    return leaderboard;

}

