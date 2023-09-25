import { ITrip, Lee } from "../lib";
import { EUR_PICS, BANFF_PICS, ASIA_PICS, ROADTRIP_PICS, COVIDROAD_PICS, HAWAII_PICS, COVID_MOVING_PICS, SKIROADTRIP_PICS, FLORIDA_MOVING_PICS, SHEN_FAMILY_PICS, SEATTLE_CAMP_PICS, PHIL_BDAY_GORGE_PICS, SOUTH_PADRE_PICS, FORT_MYERS_PICS, FORT_LAUDERDALE_PICS, WINDSOR_PICS, OKEECHOBEE_PICS, FOREST_PICS, UNIVERSAL_PICS, HIGGINS_LAKE_PICS } from "./places";

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

const addTrip = (id, tripName, author, lee, startDate, endDate, markers, googlePhotos) => {
  return {
    id: id,
    tripName: tripName,
    author: author,
    lee: lee,
    startDate: startDate,
    endDate: endDate,
    markers: markers,
    googlePhotos: googlePhotos
  }
}

export const TripList: ITrip[] = [
  addTrip("0", "Europe 2023", "Victor Lee", [Lee.Victor], 
    "July 27, 2023", "Aug 17, 2023", EUR_PICS, "https://testEurope.com"),

  addTrip("1", "Banff 2023", "Victor Lee", [Lee.Victor, Lee.Phil, Lee.Bumo], 
    "Aug 18, 2023", "Aug 23, 2023", BANFF_PICS, "https://testBanff.com"),

  addTrip("2", "National Park Road Trip", "Victor Lee", [Lee.Victor], 
    "May 20, 2019", "June 4, 2019", ROADTRIP_PICS, "https://testRoadTrip.com"),

  addTrip("3", "COVID Road Trip", "Victor Lee", [Lee.Victor], 
    "June 20, 2020", "July 4, 2020", COVIDROAD_PICS, "https://testRoadTrip.com"),

  addTrip("4", "Asia 2022/2023", "Victor Lee", [Lee.Victor, Lee.Phil], 
    "Dec 24, 2022", "Jan 4, 2023", ASIA_PICS, "https://testAsia.com"),

  addTrip("5", "Hawaii", "Victor Lee", [Lee.Victor, Lee.Phil, Lee.Bumo], 
    "Aug 2, 2022", "Aug 14, 2022", HAWAII_PICS, "https://testHawaii.com"),

  addTrip("6", "COVID Moving Out West", "Victor Lee", [Lee.Victor], 
    "Jan 3, 2021", "Mar 17, 2021", COVID_MOVING_PICS, "https://testHawaii.com"),

  addTrip("7", "SLC Ski Trip 2023", "Victor Lee", [Lee.Victor], 
    "Mar 21, 2023", "Mar 28, 2023", SKIROADTRIP_PICS, "https://testHawaii.com"),

  addTrip("8", "Moving to Florida 2020", "Victor Lee", [Lee.Victor], 
    "Aug 20, 2020", "Aug 23, 2020", FLORIDA_MOVING_PICS, "https://testHawaii.com"),

  addTrip("9", "Shenandoah Family Trip", "Victor Lee", [Lee.Victor, Lee.Phil, Lee.Bumo], 
    "Oct 10, 2020", "Oct 18, 2020", SHEN_FAMILY_PICS, "https://testHawaii.com"),

  addTrip("10", "Seattle Camping Trip 2022", "Victor Lee", [Lee.Victor, Lee.Phil], 
    "Aug 18, 2022", "Aug 25, 2022", SEATTLE_CAMP_PICS, "https://testHawaii.com"),

  addTrip('11', "Phil 30th Bday / Gorge", "Victor Lee", [Lee.Victor, Lee.Phil], 
    "July 21, 2023", "July 24, 2023", PHIL_BDAY_GORGE_PICS, "https://testHawaii.com"),

  addTrip('12', "Spring Break 2020", "Victor Lee", [Lee.Victor], 
    "Mar 1, 2020", "Mar 8, 2020", SOUTH_PADRE_PICS, "https://testHawaii.com"),

  addTrip('13', "Spring Break 2018", "Victor Lee", [Lee.Victor], 
    "Mar 1, 2018", "Mar 8, 2018", FORT_MYERS_PICS, "https://testHawaii.com"),
  
    addTrip('14', "Spring Break 2019", "Victor Lee", [Lee.Victor], 
    "Mar 1, 2019", "Mar 8, 2019", FORT_LAUDERDALE_PICS, "https://testHawaii.com"),

    addTrip('15', "Windsor", "Victor Lee", [Lee.Victor], 
    "Sept 1, 2020", "Sept 4, 2020", WINDSOR_PICS, "https://testHawaii.com"),

    addTrip('16', "Okeechobee Festival", "Victor Lee", [Lee.Victor], 
    "Mar 9, 2019", "Mar 14, 2019", OKEECHOBEE_PICS, "https://testHawaii.com"),

    addTrip('17', "Forest 2022", "Victor Lee", [Lee.Victor], 
    "June 22, 2022", "June 26, 2022", FOREST_PICS, "https://testHawaii.com"),

    addTrip('18', "Universal Studios", "Victor Lee", [Lee.Victor, Lee.Phil], 
    "Dec 21, 2020", "Dec 26, 2020", UNIVERSAL_PICS, "https://testHawaii.com"),

    addTrip('19', "Higgins Lake", "Victor Lee", [Lee.Victor], 
    "July 21, 2019", "July 23, 2019", HIGGINS_LAKE_PICS, "https://testHawaii.com")
];


// bumo
// florida to seattle
// 