const config = {
      apiUrl: process.env.NODE_ENV === 'production'
        ? 'https://nodejs-serverless-function-express-nu-beryl.vercel.app'
        : 'http://localhost:3000'
    };
    
    export default config;