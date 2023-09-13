import { ITrip, Lee } from "../lib";
import { EUR_PICS, BANFF_PICS, ASIA_PICS } from "./places";

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
      lee: [Lee.Victor],
      startDate: "July 27, 2023",
      endDate: "August 17, 2023",
      markers: EUR_PICS,
      googlePhotos: "https://testEurope.com"
    },
    {
      id: "2",
      tripName: "Banff 2023",
      author: "Victor Lee",
      lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
      startDate: "August 18, 2023",
      endDate: "August 23, 2023",
      markers: BANFF_PICS,
      googlePhotos: "https://testBanff.com"
    },
    // {
    //   id: "3",
    //   tripName: "National Park Road Trip",
    //   author: "Victor Lee",
    //   lee: [Lee.Victor],
    //   startDate: "May 20, 2019",
    //   endDate: "June 4, 2019",
    //   markers: BANFF_PICS,
    //   googlePhotos: "https://testRoadTrip.com"
    // },
    // {
    //   id: "4",
    //   tripName: "Covid Road Trip",
    //   author: "Victor Lee",
    //   lee: [Lee.Victor],
    //   startDate: "June 20, 2020",
    //   endDate: "July 3, 2020",
    //   markers: BANFF_PICS,
    //   googlePhotos: "https://testCovidRoadTrip.com"
    // },
    // {
    //   id: "5",
    //   tripName: "Hawaii",
    //   author: "Victor Lee",
    //   lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    //   startDate: "Aug 2, 2022",
    //   endDate: "August 14, 2022",
    //   markers: BANFF_PICS,
    //   googlePhotos: "https://testHawaii.com"
    // },
    {
      id: "3",
      tripName: "Asia 2022/2023",
      author: "Victor Lee",
      lee: [Lee.Victor, Lee.Phil],
      startDate: "December 24, 2022",
      endDate: "January 4, 2023",
      markers: ASIA_PICS,
      googlePhotos: "https://testAsia.com"
    }
]