export const checkItem = (itemArray, product) => {
   
   if (itemArray) {
      return itemArray.find((item) => item._id === product._id);
   }
   return false;
};

// export const API_ENDPOINT = 'https://ecommerce-site-alpha.vercel.app';
export const API_ENDPOINT = 'http://localhost:8000';
