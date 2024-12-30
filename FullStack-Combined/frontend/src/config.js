const config = {
    apiUrl: process.env.NODE_ENV === 'production' 
<<<<<<< HEAD
      ? 'https://registration-backend-demgw40r4-farhankhalid-devs-projects.vercel.app'
=======
      ? 'https://registration-backend-gilt.vercel.app' // Update this after deploying
>>>>>>> 486b46b (fixed it, turns out I was missing an import... ._.)
      : 'http://localhost:3001'
  };
  
  export default config;