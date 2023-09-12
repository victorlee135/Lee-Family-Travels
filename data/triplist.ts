import { ITrip } from "../lib";
import { EUR_PICS, BANFF_PICS } from "./places";

// Trips to add
// senior spring break
// 1. first road trip
// 2. covid road trip
// 3. first edc
// 4. outside land
// 5. salt lake city
// 6. first forest
// 7. hawaii
// 8. seattle
// 9. chicago
// 10. Japan + Korea
// 10. LA friends trip
// 11. 2nd forest
// 12. bamf

export const TripList: ITrip[] = [
    {
      id: "1",
      tripName: "Europe 2023",
      author: "Victor Lee",
      startDate: "July 27, 2023",
      endDate: "August 17, 2023",
      markers: EUR_PICS,
      googlePhotos: "https://testEurope.com"
    },
    {
      id: "2",
      tripName: "Banff 2023",
      author: "Victor Lee",
      startDate: "August 18, 2023",
      endDate: "August 23, 2023",
      markers: BANFF_PICS,
      googlePhotos: "https://testBanff.com"
    }
]