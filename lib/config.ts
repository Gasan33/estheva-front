const config = {
    env: {
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
        apiEndpoint: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1',
        imageBaseUrl: process.env.NEXT_PUBLIC_IMAGE_BASE_URL || 'http://localhost:8000',
        appName: process.env.NEXT_PUBLIC_APP_NAME || 'Estheva Polyclinic',
        appDescription:
            process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
            'Estheva Polyclinic offers premium healthcare and aesthetic services.',
    },
};

export default config;
