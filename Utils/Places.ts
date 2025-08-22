
export interface TouristPlace {
  id: number;
  name: string;
  image_url: string;
  short_desc: string;
  location: string;
  description: string;
  visited: boolean;
}


export const places:TouristPlace[]=[
  {
    "id": 1,
    "name": "Taj Mahal",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
    "short_desc": "Iconic marble mausoleum in Agra.",
    "location": "Agra, India",
    "description": "Built by Mughal Emperor Shah Jahan in memory of Mumtaz Mahal, the Taj Mahal is an architectural masterpiece and UNESCO World Heritage Site.",
    "visited": false
  },
  {
    "id": 2,
    "name": "Eiffel Tower",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    "short_desc": "Famous wrought-iron tower in Paris.",
    "location": "Paris, France",
    "description": "Constructed in 1889 for the World's Fair, the Eiffel Tower is one of the most visited monuments in the world, offering panoramic views of Paris.",
    "visited": false
  },
  {
    "id": 3,
    "name": "Great Wall of China",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Mutianyu-Great-Wall-of-China.jpg",
    "short_desc": "Ancient defensive wall across China.",
    "location": "China",
    "description": "The Great Wall of China is a series of fortifications built to protect Chinese states, stretching over 13,000 miles across diverse landscapes.",
    "visited": false
  },
  {
    "id": 4,
    "name": "Colosseum",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Colosseo_2020.jpg",
    "short_desc": "Ancient Roman amphitheater.",
    "location": "Rome, Italy",
    "description": "The Colosseum hosted gladiatorial contests and public spectacles, symbolizing the grandeur of the Roman Empire.",
    "visited": false
  },
  {
    "id": 5,
    "name": "Machu Picchu",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
    "short_desc": "Incan citadel high in the Andes.",
    "location": "Cusco Region, Peru",
    "description": "Machu Picchu is a 15th-century Incan citadel set high in the Andes, famous for its sophisticated dry-stone walls and panoramic views.",
    "visited": false
  },
  {
    "id": 6,
    "name": "Statue of Liberty",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
    "short_desc": "Symbol of freedom in New York.",
    "location": "New York City, USA",
    "description": "Gifted by France in 1886, the Statue of Liberty is a universal symbol of freedom and democracy.",
    "visited": false
  },
  {
    "id": 7,
    "name": "Christ the Redeemer",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/9/97/Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg",
    "short_desc": "Famous Jesus statue atop Corcovado.",
    "location": "Rio de Janeiro, Brazil",
    "description": "Standing 30 meters tall, the Christ the Redeemer statue is one of the New Seven Wonders of the World.",
    "visited": false
  },
  {
    "id": 8,
    "name": "Pyramids of Giza",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
    "short_desc": "Ancient pyramids in Egypt.",
    "location": "Giza, Egypt",
    "description": "The Pyramids of Giza, including the Great Pyramid, are among the most iconic ancient monuments still standing today.",
    "visited": false
  },
  {
    "id": 9,
    "name": "Sydney Opera House",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/4/40/Sydney_Opera_House_Sails.jpg",
    "short_desc": "World-famous performing arts center.",
    "location": "Sydney, Australia",
    "description": "Opened in 1973, the Sydney Opera House is an architectural marvel with sail-like structures overlooking Sydney Harbour.",
    "visited": false
  },
  {
    "id": 10,
    "name": "Petra",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Al_Khazneh_Petra_edit_2.jpg",
    "short_desc": "Ancient city carved in sandstone cliffs.",
    "location": "Ma'an, Jordan",
    "description": "Petra, known as the 'Rose City,' is famous for its rock-cut architecture and water conduit system.",
    "visited": false
  },
  {
    "id": 11,
    "name": "Angkor Wat",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Angkor_Wat_temple.jpg",
    "short_desc": "Largest religious monument in the world.",
    "location": "Siem Reap, Cambodia",
    "description": "Built in the 12th century, Angkor Wat is a massive temple complex and symbol of Cambodia.",
    "visited": false
  },
  {
    "id": 12,
    "name": "Big Ben",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Big_Ben_2012.jpg",
    "short_desc": "Iconic clock tower of London.",
    "location": "London, UK",
    "description": "Big Ben is the nickname for the Great Bell of the clock at the Palace of Westminster, a symbol of Britain.",
    "visited": false
  },
  {
    "id": 13,
    "name": "Burj Khalifa",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/9/93/Burj_Khalifa.jpg",
    "short_desc": "Tallest building in the world.",
    "location": "Dubai, UAE",
    "description": "Standing 828 meters tall, the Burj Khalifa is an engineering marvel and a centerpiece of Dubai’s skyline.",
    "visited": false
  },
  {
    "id": 14,
    "name": "Mount Fuji",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Fuji_from_Hotel_Mt_Fuji_2014.jpg",
    "short_desc": "Japan’s tallest mountain and symbol.",
    "location": "Honshu, Japan",
    "description": "Mount Fuji is a sacred symbol of Japan and a popular destination for climbers and photographers.",
    "visited": false
  },
  {
    "id": 15,
    "name": "Niagara Falls",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Niagara_Falls_view.jpg",
    "short_desc": "Massive waterfalls between USA and Canada.",
    "location": "Ontario, Canada / New York, USA",
    "description": "Niagara Falls is one of the most famous waterfalls in the world, attracting millions of visitors each year.",
    "visited": false
  },
  {
    "id": 16,
    "name": "Santorini",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/5/51/Santorini_sunset.jpg",
    "short_desc": "Greek island with whitewashed houses.",
    "location": "Cyclades, Greece",
    "description": "Santorini is known for its dramatic views, stunning sunsets, and blue-domed churches overlooking the Aegean Sea.",
    "visited": false
  },
  {
    "id": 17,
    "name": "Banff National Park",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Lake_Louise_Banff.jpg",
    "short_desc": "Scenic Canadian Rockies park.",
    "location": "Alberta, Canada",
    "description": "Banff National Park is Canada’s oldest national park, offering turquoise lakes, snowcapped peaks, and wildlife.",
    "visited": false
  },
  {
    "id": 18,
    "name": "Chichen Itza",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/9/99/Chichen_Itza_3.jpg",
    "short_desc": "Ancient Mayan city with pyramid.",
    "location": "Yucatán, Mexico",
    "description": "Chichen Itza was a large pre-Columbian city built by the Maya, featuring the famous El Castillo pyramid.",
    "visited": false
  },
  {
    "id": 19,
    "name": "Times Square",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Times_Square_at_night.jpg",
    "short_desc": "Lively commercial hub in NYC.",
    "location": "New York City, USA",
    "description": "Times Square is a major commercial intersection and entertainment hub, famous for its neon lights and Broadway shows.",
    "visited": false
  },
  {
    "id": 20,
    "name": "Sagrada Família",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/76/Sagrada_Familia_2020.jpg",
    "short_desc": "Gaudí’s unfinished masterpiece.",
    "location": "Barcelona, Spain",
    "description": "The Sagrada Família is a large basilica designed by Antoni Gaudí, under construction since 1882.",
    "visited": false
  },
  {
    "id": 21,
    "name": "Stonehenge",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg",
    "short_desc": "Prehistoric stone monument.",
    "location": "Wiltshire, England",
    "description": "Stonehenge is a prehistoric monument consisting of a ring of standing stones, with origins shrouded in mystery.",
    "visited": false
  },
  {
    "id": 22,
    "name": "Golden Gate Bridge",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg",
    "short_desc": "Iconic red suspension bridge.",
    "location": "San Francisco, USA",
    "description": "Opened in 1937, the Golden Gate Bridge is one of the most internationally recognized symbols of San Francisco.",
    "visited": false
  },
  {
    "id": 23,
    "name": "Acropolis of Athens",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Acropolis_of_Athens.jpg",
    "short_desc": "Ancient citadel above Athens.",
    "location": "Athens, Greece",
    "description": "The Acropolis contains several ancient buildings of great architectural significance, including the Parthenon.",
    "visited": false
  },
  {
    "id": 24,
    "name": "Grand Canyon",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Grand_Canyon_view.jpg",
    "short_desc": "Vast canyon carved by Colorado River.",
    "location": "Arizona, USA",
    "description": "The Grand Canyon is a breathtaking natural wonder with layered bands of red rock revealing millions of years of history.",
    "visited": false
  },
  {
    "id": 25,
    "name": "Mount Everest Base Camp",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Everest_Base_Camp.jpg",
    "short_desc": "Starting point for Everest expeditions.",
    "location": "Nepal",
    "description": "The Everest Base Camp trek offers stunning Himalayan views and is a gateway to the world’s tallest peak.",
    "visited": false
  },
  {
    "id": 26,
    "name": "Buckingham Palace",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/3/39/Buckingham_Palace_from_gardens.jpg",
    "short_desc": "Royal residence in London.",
    "location": "London, UK",
    "description": "Buckingham Palace is the official residence of the British monarch and a venue for state ceremonies.",
    "visited": false
  },
  {
    "id": 27,
    "name": "Alhambra",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Alhambra_Granada_Spain.jpg",
    "short_desc": "Medieval palace and fortress.",
    "location": "Granada, Spain",
    "description": "The Alhambra is a palace and fortress complex showcasing Moorish architecture and beautiful gardens.",
    "visited": false
  },
  {
    "id": 28,
    "name": "Mount Kilimanjaro",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Mount_Kilimanjaro.jpg",
    "short_desc": "Tallest mountain in Africa.",
    "location": "Tanzania",
    "description": "Mount Kilimanjaro is a dormant volcano and the highest peak in Africa, attracting climbers from around the world.",
    "visited": false
  },
  {
    "id": 29,
    "name": "CN Tower",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/2/25/CN_Tower_Toronto_2012.jpg",
    "short_desc": "Tall communications tower in Toronto.",
    "location": "Toronto, Canada",
    "description": "The CN Tower was once the tallest free-standing structure in the world, offering observation decks and glass floors.",
    "visited": false
  },
  {
    "id": 30,
    "name": "Hagia Sophia",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Hagia_Sophia_Mars_2013.jpg",
    "short_desc": "Historic mosque and museum.",
    "location": "Istanbul, Turkey",
    "description": "The Hagia Sophia has served as a cathedral, mosque, and museum, representing Byzantine and Ottoman heritage.",
    "visited": false
  }
]
