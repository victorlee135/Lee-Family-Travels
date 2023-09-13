import styles from './style.module.css';
import {
  makeStats,
  getOrdinals,
  getBarStyle,
  getProgressWidth,
  Player,
  EStatKeys
} from './utils';
import { useState, useMemo } from 'react';
import { ITrip } from '../../lib';
import 'bootstrap-icons/font/bootstrap-icons.css';

export interface StatsProps {
    trips: ITrip[]
}

export default function Stats({ trips } : StatsProps) {
    const [statKey, setStatKey] = useState<EStatKeys>(EStatKeys.Markers);

    function sortStats(statKey) {
        return makeStats(trips, statKey).sort((a, b) => {
            return b.value - a.value;
        })
    }

    const sortedStats = useMemo(() => sortStats(statKey), [statKey]);

    const getIcon = () => {
        if (statKey === EStatKeys.Markers) {
            return <i className="bi bi-geo-alt"></i>;
        }
        else if (statKey === EStatKeys.Cities) {
            return <i className="bi bi-buildings"></i>;
        }
        else if (statKey === EStatKeys.Countries) {
            return <i className="bi bi-globe-americas"></i>;
        }
        else if (statKey === EStatKeys.Trips) {
            return <i className="bi bi-suitcase2"></i>;
        }
        else {
            return <i className="bi bi-signpost-fill"></i>;
        }
    };

    const getValue = (player: Player) => {
        if (statKey === EStatKeys.Distance) {
            return Math.round(player.value) + ' km';
        }
        
        return player.value;
    }
    
    return (
        <div className={styles.leaderboard}>
            <div className={styles.sort}>
                <div className={styles.sort_back}>
                    <label>
                        <b>Leading Lee: </b>
                    </label>
                    <select
                        onChange={(e) => setStatKey(e.target.value as EStatKeys)}
                        className={styles.sort_button}
                    >
                        <option>Markers</option>
                        <option>Cities</option>
                        <option>Countries</option>
                        <option>Trips</option>
                    </select>
                </div>
            </div>
            {sortedStats.map((player: Player, index) => (
                <div className={styles.line} key={index}>
                    <div className={styles.info}>
                        <div className={styles.position}>
                            {' '}
                            {index + 1}
                            {getOrdinals(index)}{' '}
                        </div>
                        <div className={styles.name}>
                            {' '}
                            {player.author} Lee{' '}
                        </div>
                        <div className={styles.number}>
                            {' '}
                            {getValue(player)} {getIcon()}
                        </div>
                    </div>
                    <div className={styles.progress}>
                        <div
                            className={getBarStyle(index)}
                            style={{ width: getProgressWidth(index, sortedStats) }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
      )
}