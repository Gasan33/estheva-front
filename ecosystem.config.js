module.exports = {
    apps: [
        {
            name: 'estheva-front',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            cwd: '/root/apps/estheva-front',
            env: {
                NODE_ENV: 'production',
                PORT: 3000,
            },
        },
    ],
};
