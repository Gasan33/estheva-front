const config = {
    env: {
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
        apiEndpoint: process.env.NEXT_PUBLIC_API_URL,
        imageBaseUrl: process.env.NEXT_PUBLIC_IMAGE_BASE_URL,
        appName: process.env.NEXT_PUBLIC_APP_NAME || 'Estheva Polyclinic',
        appDescription:
            process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
            'Estheva Polyclinic offers premium healthcare and aesthetic services.',
    },
};

export default config;
