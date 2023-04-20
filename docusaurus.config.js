const gamefamConfig = require('./gamefam.config')
const getAuthorsString = require('./getAuthorsString')

module.exports = {
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  url: "https://Gamefam.github.io",
  projectName: gamefamConfig.projectName,
  favicon: "img/favicon.ico",
  organizationName: "GameFam",
  title: gamefamConfig.projectName,
  baseUrl: `/${gamefamConfig.projectRoot}`,
  tagline: gamefamConfig.tagLine,
  themeConfig: {
    /*
      Prism is a popular library to render code blocks in your examples.
      
      I created support for Luau at src/theme/customPrisms/luau.js

      Feel free to improve it if you want to, I'm not a regex expert so I ended up by setting up a pretty basic support
    */
    prism: {
      additionalLanguages: [
        "lua",
        "powershell"
      ]
    },
    navbar: {
      title: "Inventory System",
      items: [
        {
          type: "doc",
          to: "/docs",
          docId: 'About',
          label: "Docs",
          position: "left"
        },
        {
          to: "/api/",
          label: "API",
          position: "left"
        },
        {
          href: `https://github.com/Gamefam/${gamefamConfig.projectRoot}`,
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} GameFam. Built with Moonwave and Docusaurus. Developed by `+ getAuthorsString(gamefamConfig.authors)
    },
    colorMode: {
      "respectPrefersColorScheme": true
    }
  },
  plugins: [
    [
      "docusaurus-plugin-moonwave",
      {
        "id": "moonwave",
        "code": [
          "C:\\Users\\user\\Documents\\GameFam\\InventorySystem\\src"
        ],
        "sourceUrl": "https://github.com/Gamefam/InventorySystem/blob/master",
        "projectDir": "C:\\Users\\user\\Documents\\GameFam\\InventorySystem",
        "classOrder": [],
        "apiCategories": [],
        "binaryPath": "C:\\Users\\user\\AppData\\Roaming\\npm\\node_modules\\moonwave\\dist\\bin\\moonwave-extractor-1.0.1.exe"
      }
    ],
    "docusaurus-lunr-search"
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: false,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: [
            "src/css/moonwave.css"
          ]
        }
      }
    ]
  ]
}