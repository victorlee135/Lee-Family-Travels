-- Insert records into the Markers table
INSERT INTO Markers (author, lee, city, state, province, country, coordinates, date, photo, way_point, trip_id)
VALUES
  ('{"Victor"}', '{"Victor"}', 'Newark', 'New Jersey', null, 'United States of America', point(40.6895, -74.1745), '2023-07-27', '/images/nice.jpeg', NULL, 2),
  ('{"Victor"}', '{"Victor"}', 'Paris', null, null, 'France', point(48.8566, 2.3522), '2023-07-27', '/images/nice.jpeg', NULL, 2),
  ('{"Victor"}', '{"Victor"}', 'Nice', null, null, 'France', point(43.7102, 7.2620), '2023-07-27', '/images/nice.jpeg', NULL, 2),
  ('{"Victor"}', '{"Victor"}', 'Frejus', null, null, 'France', point(43.4332, 6.7370), '2023-07-30', '/images/frejus.jpeg', NULL, 2),
  ('{"Victor"}', '{"Victor"}', 'Moustiers-Sainte-Marie', null, null, 'France', point(43.8457, 6.2215), '2023-08-02', '/images/mountain.jpeg', NULL, 2),
  ('{"Victor"}', '{"Victor"}', 'Montpellier', null, null, 'France', point(43.6108, 3.8767), '2023-08-01', '/images/montpellier.jpeg', NULL, 2),
  ('{"Victor"}', '{"Victor"}', 'Ibiza', null, null, 'Spain', point(38.9067, 1.4206), '2023-08-03', '/images/ibiza.jpeg', NULL, 2),
  ('{"Victor"}', '{"Victor"}', 'Barcelona', null, null, 'Spain', point(41.5888, 1.8422), '2023-08-08', '/images/barcelona.jpeg', NULL, 2),
  ('{"Victor"}', '{"Victor"}', 'Porto', null, null, 'Portugal', point(41.1579, -8.6291), '2023-08-11', '/images/porto.jpeg', NULL, 2),
  ('{"Victor"}', '{"Victor"}', 'Lisbon', null, null, 'Portugal', point(38.7223, -9.1393), '2023-08-14', '/images/lisbon.jpeg', NULL, 2),
  ('{"Victor"}', '{"Victor"}', 'Sintra', null, null, 'Portugal', point(38.7804, -9.4991), '2023-08-15', '/images/sintra.jpeg', NULL, 2),
  ('{"Victor"}', '{"Victor"}', 'Ponta Delgada', null, null, 'Portugal', point(37.7394, -25.6687), '2023-08-15', '/images/sintra.jpeg', NULL, 2);


-- Insert records from BANFF_PICS into the Markers table with trip_id set to 2
INSERT INTO Markers (author, lee, city, state, province, country, coordinates, date, photo, way_point, trip_id)
VALUES
  ('{"Victor"}', '{"Victor"}', 'Calgary', null, 'Alberta', 'Canada', point(51.0447, -114.0719), '2023-08-18', '/images/nice.jpeg', false, 2),
  ('{"Victor"}', '{"Victor"}', 'Canmore', null, 'Alberta', 'Canada', point(51.0884, -115.3479), '2023-08-18', '/images/frejus.jpeg', true, 2),
  ('{"Victor"}', '{"Victor"}', 'Banff', null, 'Alberta', 'Canada', point(51.1784, -115.5708), '2023-08-18', '/images/banff/banff.jpg', false, 2),
  ('{"Victor"}', '{"Victor"}', 'Lake Louise', null, 'Alberta', 'Canada', point(51.4254, -116.1773), '2023-08-19', '/images/banff/louis.jpeg', false, 2),
  ('{"Victor"}', '{"Victor"}', 'Lake Moraine', null, 'Alberta', 'Canada', point(51.3217, -116.1860), '2023-08-19', '/images/banff/moraine.jpg', false, 2),
  ('{"Victor"}', '{"Victor"}', 'Peyto Lake', null, 'British Columbia', 'Canada', point(51.7255, -116.5227), '2023-08-19', '/images/banff/peyto.jpeg', false, 2),
  ('{"Victor"}', '{"Victor"}', 'Eureka', 'Montana', null, 'United States of America', point(48.8800, -115.0535), '2023-08-20', '/images/banff/eureka.jpeg', false, 2);

INSERT INTO Trips (trip_name, author, start_date, end_date, google_photos, lee)
VALUES
  ('National Park Road Trip', 'Victor Lee', '2019-05-20', '2019-06-04', 'https://testRoadTrip.com', '{Victor}'),
  ('COVID Road Trip', 'Victor Lee', '2020-06-20', '2020-07-04', 'https://testRoadTrip.com', '{Victor}'),
  ('Asia 2022/2023', 'Victor Lee', '2022-12-24', '2023-01-04', 'https://testAsia.com', '{Victor,Phil}'),
  ('Hawaii', 'Victor Lee', '2022-08-02', '2022-08-14', 'https://testHawaii.com', '{Victor,Phil,Bumo}'),
  ('COVID Moving Out West', 'Victor Lee', '2021-01-03', '2021-03-17', 'https://testHawaii.com', '{Victor}'),
  ('SLC Ski Trip 2023', 'Victor Lee', '2023-03-21', '2023-03-28', 'https://testHawaii.com', '{Victor}'),
  ('Moving to Florida 2020', 'Victor Lee', '2020-08-20', '2020-08-23', 'https://testHawaii.com', '{Victor}'),
  ('Shenandoah Family Trip', 'Victor Lee', '2020-10-10', '2020-10-18', 'https://testHawaii.com', '{Victor,Phil,Bumo}'),
  ('Seattle Camping Trip 2022', 'Victor Lee', '2022-08-18', '2022-08-25', 'https://testHawaii.com', '{Victor,Phil}'),
  ('Phil 30th Bday / Gorge', 'Victor Lee', '2023-07-21', '2023-07-24', 'https://testHawaii.com', '{Victor,Phil}'),
  ('Spring Break 2020', 'Victor Lee', '2020-03-01', '2020-03-08', 'https://testHawaii.com', '{Victor}'),
  ('Spring Break 2018', 'Victor Lee', '2018-03-01', '2018-03-08', 'https://testHawaii.com', '{Victor}'),
  ('Spring Break 2019', 'Victor Lee', '2019-03-01', '2019-03-08', 'https://testHawaii.com', '{Victor}'),
  ('Windsor', 'Victor Lee', '2020-09-01', '2020-09-04', 'https://testHawaii.com', '{Victor}'),
  ('Okeechobee Festival', 'Victor Lee', '2019-03-09', '2019-03-14', 'https://testHawaii.com', '{Victor}'),
  ('Forest 2022', 'Victor Lee', '2022-06-22', '2022-06-26', 'https://testHawaii.com', '{Victor}'),
  ('Universal Studios', 'Victor Lee', '2020-12-21', '2020-12-26', 'https://testHawaii.com', '{Victor,Phil}'),
  ('Higgins Lake', 'Victor Lee', '2019-07-21', '2019-07-23', 'https://testHawaii.com', '{Victor}');


-- Insert data into the Markers table for trip_id=5
INSERT INTO Markers (author, lee, city, state, province, country, coordinates, date, photo, way_point, trip_id)
VALUES
  ('{Victor Lee}', '{Victor,Phil}', 'Narita', NULL, NULL, 'Japan', '{35.7719, 140.3925}', '2023-08-18', '/images/nice.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Shibuya', NULL, NULL, 'Japan', '{35.6595, 139.7005}', '2023-08-18', '/images/frejus.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Harajuku', NULL, NULL, 'Japan', '{35.6718, 139.7035}', '2023-08-18', '/images/mountain.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Yoyogi Park', NULL, NULL, 'Japan', '{35.6712, 139.6945}', '2023-08-19', '/images/montpellier.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Golden Gai', NULL, NULL, 'Japan', '{35.6918, 139.7041}', '2023-08-19', '/images/ibiza.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Shinjuku', NULL, NULL, 'Japan', '{35.6895, 139.6917}', '2023-08-19', '/images/barcelona.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Kawaguchiko', NULL, NULL, 'Japan', '{35.5022, 138.7654}', '2023-08-20', '/images/porto.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Mt. Fuji', NULL, NULL, 'Japan', '{35.3606, 138.7274}', '2023-08-19', '/images/ibiza.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Akihabara', NULL, NULL, 'Japan', '{35.6995, 139.7710}', '2023-08-19', '/images/barcelona.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Ueno', NULL, NULL, 'Japan', '{35.7127, 139.7730}', '2023-08-20', '/images/porto.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Asakusa', NULL, NULL, 'Japan', '{35.7142, 139.7967}', '2023-08-20', '/images/porto.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Incheon', NULL, NULL, 'South Korea', '{37.4645, 126.4327}', '2023-08-18', '/images/mountain.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Myeondong', NULL, NULL, 'South Korea', '{37.5662, 126.9829}', '2023-08-19', '/images/montpellier.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Hanook Village', NULL, NULL, 'South Korea', '{37.5573, 127.0405}', '2023-08-19', '/images/ibiza.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Dongdaemon', NULL, NULL, 'South Korea', '{37.5663, 127.0094}', '2023-08-19', '/images/barcelona.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Gwanjang Market', NULL, NULL, 'South Korea', '{37.5683, 127.0049}', '2023-08-20', '/images/porto.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Gangnam', NULL, NULL, 'South Korea', '{37.5172, 127.0473}', '2023-08-19', '/images/ibiza.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Seonsudong', NULL, NULL, 'South Korea', '{37.5150, 126.9919}', '2023-08-19', '/images/barcelona.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Jeonju', NULL, NULL, 'South Korea', '{35.8242, 127.1489}', '2023-08-20', '/images/porto.jpeg', NULL, 5),
  ('{Victor Lee}', '{Victor,Phil}', 'Hongdae', NULL, NULL, 'South Korea', '{37.5562, 126.9267}', '2023-08-20', '/images/porto.jpeg', NULL, 5);

-- Repeat the above INSERT INTO statements for each record in ASIA_PICS with trip_id=5
-- Insert data into the Markers table for trip_id=6
INSERT INTO Markers (author, city, state, province, country, coordinates, date, photo, lee, way_point, trip_id)
VALUES
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Los Angeles', 'California', NULL, 'United States of America', point(33.9438, -118.4091), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Lihue', 'Hawaii', NULL, 'United States of America', point(21.9750, -159.3389), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Kapaa', 'Hawaii', NULL, 'United States of America', point(22.0897, -159.3358), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Anahola', 'Hawaii', NULL, 'United States of America', point(22.1396, -159.3122), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Kilauea', 'Hawaii', NULL, 'United States of America', point(22.2150, -159.4064), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Hanalei', 'Hawaii', NULL, 'United States of America', point(22.2048, -159.4813), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Waimea', 'Hawaii', NULL, 'United States of America', point(21.9634, -159.3673), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Koke State Park', 'Hawaii', NULL, 'United States of America', point(22.1319, -159.6465), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Kahului', 'Hawaii', NULL, 'United States of America', point(20.8947, -156.4700), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Kihei', 'Hawaii', NULL, 'United States of America', point(20.7697, -156.4499), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Haiku', 'Hawaii', NULL, 'United States of America', point(20.9126, -156.3166), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Kaeleku', 'Hawaii', NULL, 'United States of America', point(20.7553, -156.0478), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Hana', 'Hawaii', NULL, 'United States of America', point(20.7540, -155.9883), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Wailua Falls', 'Hawaii', NULL, 'United States of America', point(20.7904, -156.3315), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Makahiku Falls', 'Hawaii', NULL, 'United States of America', point(20.7197, -156.2508), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Waimoku Falls', 'Hawaii', NULL, 'United States of America', point(20.7267, -156.2553), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6),
  (ARRAY['Victor Lee', 'Victor', 'Phil', 'Bumo'], 'Palikea', 'Hawaii', NULL, 'United States of America', point(20.7107, -156.2494), '2023-08-20', '/images/porto.jpeg', ARRAY['Victor', 'Phil', 'Bumo'], false, 6);
-- Repeat the above INSERT INTO statements for each record in HAWAII_PICS with trip_id=6


CREATE VIEW marker_info AS
SELECT id, author, city, state, country, coordinates, date, lee, way_point, trip_id
FROM Markers;