export const data = {
    dev:{
        port:process.env.PORT || "",
        stripe_key:process.env.STRIPE_SECRET_KEY || ''
    },
    db: process.env.MONGO_URL || '',
    cloudinary: {
        name:process.env.CLDN_NAME || '',
        key:process.env.CLDN_APP_KEY || '',
        secret:process.env.CLDN_APP_SECRET || '',

    },
    jwt:process.env.JWT_SECRET || '',
    admin:{
        email:process.env.ADMIN_EMAIL || '',
        password:process.env.ADMIN_PASSWORD || ""
    }
  };
  