import { Evenement } from "../modele/Evenement";
import { ChauffeurVIP } from "../modele/ChauffeurVIP";
import { Chalet } from "../modele/Chalet";

import { PleinAir } from "src/modele/PleinAir";
import { Restauration } from "src/modele/Restauration";
import { RouteVin } from "src/modele/RouteVin";
export class listData {
    constructor( ) {
       
    }
public chauffeurs: ChauffeurVIP[] = [
    new ChauffeurVIP(1, "John Smith", "Experienced chauffeur for VIP events", 500, "../assets/chauffeur1.jpg"),
    new ChauffeurVIP(2, "Sarah Jones", "Expert driver with extensive experience in VIP transportation", 600, "../assets/chauffeur1.jpg"),
    new ChauffeurVIP(3, "David Lee", "Professional driver with luxury car for VIP transportation", 700, "../assets/chauffeur1.jpg"),
    new ChauffeurVIP(4, "Emily Chen", "Chauffeur with impeccable driving record for high-profile clients", 550, "../assets/chauffeur1.jpg"),
    new ChauffeurVIP(5, "Michael Brown", "Experienced driver with top-notch customer service skills", 650, "../assets/chauffeur1.jpg"),
    new ChauffeurVIP(6, "Karen Kim", "Chauffeur with excellent knowledge of local roads and traffic patterns", 600, "../assets/chauffeur1.jpg"),
    new ChauffeurVIP(7, "Chris Evans", "Professional driver with luxury car for high-profile clients", 750, "../assets/chauffeur1.jpg"),
    new ChauffeurVIP(8, "Linda Nguyen", "Experienced driver with excellent communication skills", 550, "../assets/chauffeur1.jpg"),
    new ChauffeurVIP(9, "Ryan Patel", "Chauffeur with impeccable safety record for VIP events", 600, "../assets/chauffeur1.jpg"),
    new ChauffeurVIP(10, "Amy Liu", "Expert driver with top-of-the-line luxury car for high-profile clients", 800, "../assets/chauffeur1.jpg"),
  ];
  chalets: Chalet[] = [
    new Chalet(1, 'Cozy Cabin', 'A quaint and cozy cabin in the woods', 100, '../assets/chalet.jpg'),
    new Chalet(2, 'Mountain Chalet', 'A luxurious chalet with stunning mountain views', 250, '../assets/chalet.jpg'),
    new Chalet(3, 'Rustic Retreat', 'A rustic retreat perfect for a weekend getaway', 150, '../assets/chalet.jpg'),
    new Chalet(4, 'Lakeside Lodge', 'A spacious lodge with breathtaking views of the lake', 300, '../assets/chalet.jpg'),
    new Chalet(5, 'Ski-in/Ski-out Chalet', 'A cozy chalet just steps away from the ski slopes', 200, '../assets/chalet.jpg'),
    new Chalet(6, 'Treehouse Getaway', 'A unique and cozy treehouse in the forest', 125, '../assets/chalet.jpg'),
    new Chalet(7, 'Secluded Cabin', 'A secluded cabin with a hot tub and fireplace', 175, '../assets/chalet.jpg'),
    new Chalet(8, 'Luxury Chalet', 'A luxurious chalet with all the amenities', 400, '../assets/chalet.jpg'),
    new Chalet(9, 'Modern Mountain Retreat', 'A modern and stylish mountain retreat', 225, '../assets/chalet.jpg'),
    new Chalet(10, 'Family-Friendly Chalet', 'A spacious and family-friendly chalet in the woods', 175, '../assets/chalet.jpg'),
  ];
  pleinAirs: PleinAir[] = [
    new PleinAir(1, 'Hiking in the Mountains', 'Explore the beautiful mountain scenery on foot', 50, '../assets/pleinair.jpg'),
    new PleinAir(2, 'Camping in the Woods', 'Experience the great outdoors with a camping trip', 75, '../assets/pleinair.jpg'),
    new PleinAir(3, 'Kayaking Adventure', 'Paddle through scenic rivers and lakes on a kayaking adventure', 100, '../assets/pleinair.jpg'),
    new PleinAir(4, 'Whitewater Rafting', 'Experience the rush of adrenaline with whitewater rafting', 150, '../assets/pleinair.jpg'),
    new PleinAir(5, 'Zip Line Adventure', 'Soar through the treetops on a thrilling zip line adventure', 75, '../assets/pleinair.jpg'),
    new PleinAir(6, 'Mountain Biking', 'Hit the trails on a mountain biking adventure', 80, '../assets/pleinair.jpg'),
    new PleinAir(7, 'Fishing Trip', 'Cast your line and enjoy a relaxing day of fishing', 50, '../assets/pleinair.jpg'),
    new PleinAir(8, 'Rock Climbing', 'Challenge yourself with a rock climbing adventure', 100, '../assets/pleinair.jpg'),
    new PleinAir(9, 'Horseback Riding', 'Explore the countryside on horseback', 75, '../assets/pleinair.jpg'),
    new PleinAir(10, 'Hot Air Balloon Ride', 'Experience the beauty of the landscape from high above in a hot air balloon', 200, '../assets/pleinair.jpg'),
  ];
  restaurations: Restauration[] = [
    new Restauration(1, 'Italian Restaurant', 'Enjoy authentic Italian cuisine in a cozy atmosphere', 50, '../assets/restaurant.jpg'),
    new Restauration(2, 'Seafood Restaurant', 'Savor the taste of the ocean with fresh seafood dishes', 75, '../assets/restaurant.jpg'),
    new Restauration(3, 'Steakhouse', 'Indulge in a juicy steak cooked to perfection', 100, '../assets/restaurant.jpg'),
    new Restauration(4, 'Sushi Bar', 'Experience the art of sushi making with a variety of rolls', 150, '../assets/restaurant.jpg'),
    new Restauration(5, 'Mexican Restaurant', 'Enjoy flavorful Mexican dishes with a margarita on the side', 75, '../assets/restaurant.jpg'),
    new Restauration(6, 'Burger Joint', 'Sink your teeth into a delicious burger with all the fixings', 80, '../assets/restaurant.jpg'),
    new Restauration(7, 'Brunch Spot', 'Start your day off right with a delicious brunch', 50, '../assets/restaurant.jpg'),
    new Restauration(8, 'Asian Fusion', 'Experience the fusion of flavors from different Asian cuisines', 100, '../assets/restaurant.jpg'),
    new Restauration(9, 'Gourmet Dining', 'Indulge in a gourmet dining experience with exquisite dishes and wine pairings', 200, '../assets/restaurant.jpg'),
    new Restauration(10, 'Vegan Restaurant', 'Enjoy delicious plant-based dishes that are good for you and the planet', 75, '../assets/restaurant.jpg'),
  ];
   routesVins: RouteVin[] = [
    new RouteVin(1, 'Wine Tasting Tour', 'Discover the flavors of the region with a guided wine tasting tour', 75, '../assets/routeVin.jpg'),
    new RouteVin(2, 'Vineyard Walk', 'Take a leisurely stroll through the vineyards and learn about the wine-making process', 50, '../assets/routeVin.jpg'),
    new RouteVin(3, 'Wine and Cheese Pairing', 'Savor the perfect pairing of wine and cheese with a guided tasting', 100, '../assets/routeVin.jpg'),
    new RouteVin(4, 'Cellar Tour', 'Explore the underground cellars where the wine is aged to perfection', 75, '../assets/routeVin.jpg'),
    new RouteVin(5, 'Grape Harvest', 'Join in the grape harvest and experience the hard work that goes into making wine', 150, '../assets/routeVin.jpg'),
    new RouteVin(6, 'Wine Museum Visit', 'Learn about the history of wine-making with a visit to the local wine museum', 50, '../assets/routeVin.jpg'),
    new RouteVin(7, 'Wine and Food Pairing', 'Enjoy a multi-course meal paired perfectly with local wines', 200, '../assets/routeVin.jpg'),
    new RouteVin(8, 'Wine Festival', 'Celebrate the harvest season with a wine festival featuring local wineries and food vendors', 75, '../assets/routeVin.jpg'),
    new RouteVin(9, 'Wine Country Bike Tour', 'Explore the wine country on two wheels with a guided bike tour', 100, '../assets/routeVin.jpg'),
    new RouteVin(10, 'Wine Tasting Workshop', 'Learn how to taste wine like a pro with a hands-on workshop', 80, '../assets/routeVin.jpg'),
  ];
}