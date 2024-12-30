const config = {
    apiUrl: process.env.NODE_ENV === 'production' 
      ? 'https://registration-backend-demgw40r4-farhankhalid-devs-projects.vercel.app'
      : 'http://localhost:3001'
  };
  
  export default config;