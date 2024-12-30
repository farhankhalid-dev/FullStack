const config = {
    apiUrl: process.env.NODE_ENV === 'production' 
      ? 'https://registration-backend-gilt.vercel.app' // Update this after deploying
      : 'http://localhost:3001'
  };
  
  export default config;