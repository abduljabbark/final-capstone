// import React from "react";
// import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
// import { Link } from "react-router-dom";

// // Importing City Images
// import Islamabad from "../../images/Islamabad.webp";
// import Karachi from "../../images/Karachi.webp";
// import Lahore from "../../images/Lahore.webp";
// import Faisalabad from "../../images/Faisalabad.webp";
// import Rawalpindi from "../../images/Rawalpindi.webp";
// import Abbottabad from "../../images/Abottabad.webp";
// import Bahawalpur from "../../images/Bahawalpur.webp";
// import DeraGhaziKhan from "../../images/DeraGhaziKhan.webp";
// import Gujranwala from "../../images/Gujranwala.webp";
// import Gujrat from "../../images/Gujrat.jpg.webp";
// import Hyderabad from "../../images/Hyderabad.webp";
// import Jhelum from "../../images/Jhelum.webp";
// import Kamoke from "../../images/Kamoke.webp";
// import Larkana from "../../images/Larkana.webp";
// import Mangla from "../../images/Mangla.webp";
// import Mardan from "../../images/Mardan.webp";
// import Multan from "../../images/Multan.webp";
// import Murree from "../../images/Murree.webp";
// import Okara from "../../images/Okara.webp";
// import PanoAqil from "../../images/PanoAqil.webp";
// import Peshawar from "../../images/Peshawar.webp";
// import Quetta from "../../images/Quetta.webp";
// import RahimYarKhan from "../../images/RahimYarKhan.webp";
// import Sadiqabad from "../../images/Sadiqabad.webp";
// import Sahiwal from "../../images/Sahiwal.webp";
// import Sargodha from "../../images/Sargodha.webp";
// import Sheikhupura from "../../images/Sheikhupura.jpg.webp";
// import Sialkot from "../../images/Sialkot.webp";
// import Sukkur from "../../images/Sukkur.webp";
// import WahhCannt from "../../images/WahhCannt.webp";

// // CityCard Component
// const CityCard = ({ name, image }) => {
//   return (
//     <Card
//       sx={{
//         borderRadius: 3,
//         boxShadow: 3,
//         maxWidth: 400,
//         position: "relative",
//         textDecoration: "none",
//       }}
//     >
//       <CardMedia
//         component="img"
//         image={image}
//         alt={name}
//         sx={{ height: 280, objectFit: "cover" }}
//       />
//       <CardContent
//         sx={{
//           position: "absolute",
//           bottom: 10,
//           left: 10,
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           borderRadius: 5,
//           px: 2,
          
//         }}
//       >
//         <Typography
//           variant="body1"
//           fontWeight="bold"
//           sx={{ fontSize: "1.1rem", }}
//         >
//           {name}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// const Cities = () => {
//   const cities = [
//     { id: 1, name: "Islamabad", image: Islamabad },
//     { id: 2, name: "Karachi", image: Karachi },
//     { id: 3, name: "Lahore", image: Lahore },
//     { id: 4, name: "Faisalabad", image: Faisalabad },
//     { id: 5, name: "Rawalpindi", image: Rawalpindi },
//     { id: 6, name: "Abbottabad", image: Abbottabad },
//     { id: 7, name: "Bahawalpur", image: Bahawalpur },
//     { id: 8, name: "Dera Ghazi Khan", image: DeraGhaziKhan },
//     { id: 9, name: "Gujranwala", image: Gujranwala },
//     { id: 10, name: "Gujrat", image: Gujrat },
//     { id: 11, name: "Hyderabad", image: Hyderabad },
//     { id: 12, name: "Jhelum", image: Jhelum },
//     { id: 13, name: "Kamoke", image: Kamoke },
//     { id: 14, name: "Larkana", image: Larkana },
//     { id: 15, name: "Mangla", image: Mangla },
//     { id: 16, name: "Mardan", image: Mardan },
//     { id: 17, name: "Multan", image: Multan },
//     { id: 18, name: "Murree", image: Murree },
//     { id: 19, name: "Okara", image: Okara },
//     { id: 20, name: "Pano Aqil", image: PanoAqil },
//     { id: 21, name: "Peshawar", image: Peshawar },
//     { id: 22, name: "Quetta", image: Quetta },
//     { id: 23, name: "Rahim Yar Khan", image: RahimYarKhan },
//     { id: 24, name: "Sadiqabad", image: Sadiqabad },
//     { id: 25, name: "Sahiwal", image: Sahiwal },
//     { id: 26, name: "Sargodha", image: Sargodha },
//     { id: 27, name: "Sheikhupura", image: Sheikhupura },
//     { id: 28, name: "Sialkot", image: Sialkot },
//     { id: 29, name: "Sukkur", image: Sukkur },
//     { id: 30, name: "Wahh Cantt", image: WahhCannt },
//   ];

//   return (
//     <Box sx={{ backgroundColor: "#f9f9f9", py: 4 }}>
//       <Box sx={{ textAlign: "center", mb: 3 }}>
//         <Typography
//           variant="h4"
// fontSize="45px"
//           fontWeight="700"
//           sx={{ textAlign: "left", ml: 39 }}
//         >
//           Find us in these cities and many more!
//         </Typography>
//       </Box>
//       <Box sx={{ mx: "auto", maxWidth: 1300, px: 2 }}>
//         <Grid container spacing={3}>
//           {cities.map((city) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={city.id}>
//              <Link to="/restaurants" style={{ textDecoration: "none" }}>
//   <CityCard name={city.name} image={city.image} />
// </Link>

//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Cities;
import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

// Importing City Images
import Islamabad from "../../images/Islamabad.webp";
 import Karachi from "../../images/Karachi.webp";
 import Lahore from "../../images/Lahore.webp";
 import Faisalabad from "../../images/Faisalabad.webp";
 import Rawalpindi from "../../images/Rawalpindi.webp";
 import Abbottabad from "../../images/Abottabad.webp";
 import Bahawalpur from "../../images/Bahawalpur.webp";
 import DeraGhaziKhan from "../../images/DeraGhaziKhan.webp";
 import Gujranwala from "../../images/Gujranwala.webp";
 import Gujrat from "../../images/Gujrat.jpg.webp";
 import Hyderabad from "../../images/Hyderabad.webp";
 import Jhelum from "../../images/Jhelum.webp";
 import Kamoke from "../../images/Kamoke.webp";
 import Larkana from "../../images/Larkana.webp";
 import Mangla from "../../images/Mangla.webp";
 import Mardan from "../../images/Mardan.webp";
 import Multan from "../../images/Multan.webp";
 import Murree from "../../images/Murree.webp";
 import Okara from "../../images/Okara.webp";
 import PanoAqil from "../../images/PanoAqil.webp";
 import Peshawar from "../../images/Peshawar.webp";
 import Quetta from "../../images/Quetta.webp";
 import RahimYarKhan from "../../images/RahimYarKhan.webp";
 import Sadiqabad from "../../images/Sadiqabad.webp";
 import Sahiwal from "../../images/Sahiwal.webp";
 import Sargodha from "../../images/Sargodha.webp";
 import Sheikhupura from "../../images/Sheikhupura.jpg.webp";
 import Sialkot from "../../images/Sialkot.webp";
 import Sukkur from "../../images/Sukkur.webp";
 import WahhCannt from "../../images/WahhCannt.webp";


// CityCard Component
const CityCard = ({ name, image }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        maxWidth: 400,
        position: "relative",
        textDecoration: "none",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{ height: 280, objectFit: "cover" }}
      />
      <CardContent
        sx={{
          position: "absolute",
          bottom: 10,
          left: 10,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: 5,
          px: 2,
        }}
      >
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{ fontSize: "1.1rem" }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Cities = () => {
  const cities = [
    { id: 1, name: "Islamabad", image: Islamabad },
    { id: 2, name: "Karachi", image: Karachi },
    { id: 3, name: "Lahore", image: Lahore },
    { id: 4, name: "Faisalabad", image: Faisalabad },
    { id: 5, name: "Rawalpindi", image: Rawalpindi },
    { id: 6, name: "Abbottabad", image: Abbottabad },
    { id: 7, name: "Bahawalpur", image: Bahawalpur },
    { id: 8, name: "Dera Ghazi Khan", image: DeraGhaziKhan },
    { id: 9, name: "Gujranwala", image: Gujranwala },
    { id: 10, name: "Gujrat", image: Gujrat },
    { id: 11, name: "Hyderabad", image: Hyderabad },
    { id: 12, name: "Jhelum", image: Jhelum },
    { id: 13, name: "Kamoke", image: Kamoke },
    { id: 14, name: "Larkana", image: Larkana },
    { id: 15, name: "Mangla", image: Mangla },
    { id: 16, name: "Mardan", image: Mardan },
    { id: 17, name: "Multan", image: Multan },
    { id: 18, name: "Murree", image: Murree },
    { id: 19, name: "Okara", image: Okara },
    { id: 20, name: "Pano Aqil", image: PanoAqil },
    { id: 21, name: "Peshawar", image: Peshawar },
    { id: 22, name: "Quetta", image: Quetta },
    { id: 23, name: "Rahim Yar Khan", image: RahimYarKhan },
    { id: 24, name: "Sadiqabad", image: Sadiqabad },
    { id: 25, name: "Sahiwal", image: Sahiwal },
    { id: 26, name: "Sargodha", image: Sargodha },
    { id: 27, name: "Sheikhupura", image: Sheikhupura },
    { id: 28, name: "Sialkot", image: Sialkot },
    { id: 29, name: "Sukkur", image: Sukkur },
    { id: 30, name: "Wahh Cantt", image: WahhCannt },
    // other cities...
  ];

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography
          variant="h4"
          fontSize="45px"
          fontWeight="700"
          sx={{ textAlign: "left", ml: 39 }}
        >
          Find us in these cities and many more!
        </Typography>
      </Box>
      <Box sx={{ mx: "auto", maxWidth: 1300, px: 2 }}>
        <Grid container spacing={3}>
          {cities.map((city) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={city.id}>
              <Link
                to={`/restaurants?city=${city.name}`} // Passing city name as query parameter
                style={{ textDecoration: "none" }}
              >
                <CityCard name={city.name} image={city.image} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Cities;
