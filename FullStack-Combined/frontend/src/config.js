const config = {
    apiUrl: process.env.NODE_ENV === 'production' 
      ? 'https://your-vercel-app-name.vercel.app' // Update this after deploying
      : 'http://localhost:3000'
  };
  
  export default config;