
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import OneProduct from "./OneProduct/OneProduct"; // Ensure you pass data to OneProduct if necessary
import SecondApi from "./SecondApi/SecondApi";
import DeliveryPaymentSection from "./DeliveryPaymentSection/DeliveryPaymentSection";
import FirstNavbar from "./FirstNavbar/FirstNavbar";
import SecondNavbar from "./SecondNavbar/SecondNavbar";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();  // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (response.status === 200) {
          setProduct(response.data.meals[0]);
        }
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <Box>Loading...</Box>;  // Show loading message until product data is fetched
  }

  return (
    <Box
      sx={{
        paddingLeft: { xs: "20px", sm: "50px", md: "120px" },
        marginTop: "20px",
        marginLeft: { xs: "0", sm: "20px", md: "40px" },
        backgroundColor: "#fff",
        maxWidth: "90%",
        marginRight: "auto",
        paddingBottom: "20px",
        width: "100%",
      }}
    >
      <FirstNavbar />
      <OneProduct product={product} />  {/* Pass the product data to OneProduct */}
      <SecondNavbar />
      <Box className=" d-flex flex-wrap" sx={{ display: "flex", gap: 4, padding: 2 }}>
        <SecondApi />
        <DeliveryPaymentSection />
      </Box>
    </Box>
  );
};

export default ProductDetail;
