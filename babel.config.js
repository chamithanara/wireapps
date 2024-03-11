module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json'
                ],
                alias: {
                    '@app': './app',
                    '@src': './src',
                    '@navigation': 'app/navigation',
                    '@store': './app/store',
                    '@components': './src/components',
                    '@features': './src/features'
                }
            },
            'dynamic-import-node'
        ],
        '@babel/plugin-proposal-export-namespace-from',
        'nativewind/babel'
    ]
};
