export interface Palette {
  id: number;
  name: string;
  colors: string[];
  description: string;
}

export const PREDEFINED_PALETTES: Palette[] = [
{
    id: 0,
    name: "Material Ocean",
    colors: ["#0F111A", "#3B4252", "#4F5B93", "#8FBCBB", "#88C0D0"],
    description: "Inspired by the deep ocean, perfect for dark themes"
  },
  {
    id: 1,
    name: "Spotify",
    colors: ["#1DB954", "#191414", "#FFFFFF", "#535353", "#B3B3B3"],
    description: "Spotify's iconic brand colors"
  },
  {
    id: 2,
    name: "Instagram Gradient",
    colors: ["#405DE6", "#5851DB", "#833AB4", "#C13584", "#E1306C"],
    description: "Instagram's vibrant gradient palette"
  },
  {
    id: 3,
    name: "Forest Fresh",
    colors: ["#2D5A27", "#5E8C31", "#A4B494", "#BEC5AD", "#D6DBD2"],
    description: "Natural and calming forest tones"
  },
  {
    id: 4,
    name: "Sunset Vibes",
    colors: ["#FF7B89", "#FF9B89", "#FFB489", "#FFD289", "#FFF289"],
    description: "Warm sunset gradient colors"
  },
  {
    id: 5,
    name: "Moonlight",
    colors: ["#0D1B2A", "#1B263B", "#415A77", "#778DA9", "#E0E1DD"],
    description: "Elegant night sky inspired palette"
  },
  {
    id: 6,
    name: "Cherry Blossom",
    colors: ["#FFB7C5", "#FFC9D6", "#FFE0E6", "#FFF0F3", "#FFF7F9"],
    description: "Soft and delicate pink tones"
  },
  {
    id: 7,
    name: "Tech Mint",
    colors: ["#2EC4B6", "#CBF3F0", "#FFFFFF", "#FFBF69", "#FF9F1C"],
    description: "Modern and fresh tech-inspired colors"
  },
  {
    id: 8,
    name: "Autumn Harvest",
    colors: ["#9C4722", "#D68B45", "#FFCE78", "#FFE2AD", "#FFF4E3"],
    description: "Warm autumn color palette"
  },
  {
    id: 9,
    name: "Arctic Aurora",
    colors: ["#112F41", "#068587", "#4FB99F", "#F2B134", "#ED553B"],
    description: "Inspired by northern lights"
  },
  {
    id: 10,
    name: "Desert Night",
    colors: ["#1A1B25", "#242535", "#313140", "#3D3D4C", "#4A4A59"],
    description: "Dark and mysterious desert night tones"
  },
  {
    id: 11,
    name: "Coastal Breeze",
    colors: ["#00B4D8", "#48CAE4", "#90E0EF", "#ADE8F4", "#CAF0F8"],
    description: "Fresh coastal water tones"
  },
  {
    id: 12,
    name: "Berry Smoothie",
    colors: ["#FF0A54", "#FF477E", "#FF7096", "#FF8FA3", "#FFB5B5"],
    description: "Sweet and vibrant berry colors"
  },
  {
    id: 13,
    name: "Emerald City",
    colors: ["#004B23", "#006400", "#007200", "#008000", "#38B000"],
    description: "Rich emerald green gradients"
  },
  {
    id: 14,
    name: "Lavender Fields",
    colors: ["#7400B8", "#6930C3", "#5E60CE", "#5390D9", "#4EA8DE"],
    description: "Soothing lavender and blue tones"
  },
  {
    id: 15,
    name: "Retro Wave",
    colors: ["#2B0F54", "#AB2346", "#FF6B6B", "#FFE66D", "#4ECDC4"],
    description: "80s inspired retro color scheme"
  },
    {
    id: 16,
    name: "Material Design",
    colors: ["#FF5252", "#FF4081", "#E040FB", "#7C4DFF", "#536DFE"],
    description: "Google's Material Design color system"
  },
  {
    id: 17,
    name: "Tailwind CSS",
    colors: ["#F8FAFC", "#E2E8F0", "#CBD5E1", "#94A3B8", "#64748B"],
    description: "Default Tailwind CSS gray palette"
  },
  {
    id: 18,
    name: "GitHub Dark",
    colors: ["#0D1117", "#161B22", "#21262D", "#30363D", "#484F58"],
    description: "GitHub's dark mode color scheme"
  },
  {
    id: 19,
    name: "Dracula",
    colors: ["#282A36", "#44475A", "#F8F8F2", "#6272A4", "#BD93F9"],
    description: "Popular Dracula theme palette"
  },
  {
    id: 20,
    name: "Nord",
    colors: ["#2E3440", "#3B4252", "#434C5E", "#4C566A", "#D8DEE9"],
    description: "Arctic, north-bluish color palette"
  },
  {
    id: 21,
    name: "Solarized",
    colors: ["#002B36", "#073642", "#586E75", "#657B83", "#839496"],
    description: "Precision color scheme for terminals"
  },
  {
    id: 22,
    name: "One Dark",
    colors: ["#282C34", "#353B45", "#3E4451", "#545862", "#ABB2BF"],
    description: "Atom's default dark theme"
  },
  {
    id: 23,
    name: "Monokai",
    colors: ["#272822", "#383830", "#49483E", "#F92672", "#A6E22E"],
    description: "Classic Monokai editor theme"
  },
  {
    id: 24,
    name: "Gruvbox",
    colors: ["#282828", "#3C3836", "#504945", "#BDAE93", "#EBDBB2"],
    description: "Retro groove color scheme"
  },
  {
    id: 25,
    name: "Tomorrow Night",
    colors: ["#1D1F21", "#282A2E", "#373B41", "#969896", "#C5C8C6"],
    description: "Dark color scheme for coding"
  },
  {
    id: 26,
    name: "Figma",
    colors: ["#0ACF83", "#A259FF", "#F24E1E", "#FF7262", "#1ABCFE"],
    description: "Figma's brand color palette"
  },
  {
    id: 27,
    name: "Notion",
    colors: ["#37352F", "#9B9A97", "#D4D4D2", "#EBEBEA", "#FFFFFF"],
    description: "Notion's default color scheme"
  },
  {
    id: 28,
    name: "Discord",
    colors: ["#5865F2", "#404EED", "#3A3C42", "#2C2F33", "#23272A"],
    description: "Discord brand colors"
  },
  {
    id: 29,
    name: "Twitter/X",
    colors: ["#000000", "#14171A", "#657786", "#AAB8C2", "#E1E8ED"],
    description: "Twitter's (now X) color palette"
  },
  {
    id: 30,
    name: "Slack",
    colors: ["#4A154B", "#611F69", "#E01E5A", "#36C5F0", "#2EB67D"],
    description: "Slack's vibrant brand colors"
  },
  {
    id: 31,
    name: "Bootstrap",
    colors: ["#0D6EFD", "#6610F2", "#6F42C1", "#D63384", "#DC3545"],
    description: "Bootstrap 5 default theme colors"
  },
  {
    id: 32,
    name: "Bulma",
    colors: ["#00D1B2", "#3273DC", "#363636", "#FFDD57", "#FF3860"],
    description: "Bulma CSS framework colors"
  },
  {
    id: 33,
    name: "Chakra UI",
    colors: ["#805AD5", "#319795", "#38A169", "#D69E2E", "#DD6B20"],
    description: "Chakra UI default theme colors"
  },
  {
    id: 34,
    name: "Ant Design",
    colors: ["#1890FF", "#52C41A", "#FAAD14", "#F5222D", "#722ED1"],
    description: "Ant Design system colors"
  },
  {
    id: 35,
    name: "Adobe Creative Cloud",
    colors: ["#FF0000", "#FF7C00", "#FFD400", "#00FF0A", "#00B8FF"],
    description: "Adobe CC app brand colors"
  },
  {
    id: 36,
    name: "Windows 11",
    colors: ["#0078D7", "#50E6FF", "#6B69D6", "#E81123", "#EA005E"],
    description: "Windows 11 accent colors"
  },
  {
    id: 37,
    name: "macOS",
    colors: ["#FF453A", "#FF9F0A", "#FFD60A", "#32D74B", "#64D2FF"],
    description: "macOS system accent colors"
  },
  {
    id: 38,
    name: "iOS",
    colors: ["#FF2D55", "#FF9500", "#FFCC00", "#34C759", "#5AC8FA"],
    description: "iOS system colors"
  },
  {
    id: 39,
    name: "Android",
    colors: ["#EA4335", "#FBBC05", "#34A853", "#4285F4", "#9B72CB"],
    description: "Google's Android colors"
  },
  {
    id: 40,
    name: "PlayStation",
    colors: ["#003087", "#0147B5", "#0E6ECD", "#5A92E8", "#B9D4F1"],
    description: "PlayStation brand blues"
  },
  {
    id: 41,
    name: "Xbox",
    colors: ["#107C10", "#0F7A0F", "#0E700E", "#0D660D", "#0C5C0C"],
    description: "Xbox brand greens"
  },
  {
    id: 42,
    name: "Nintendo",
    colors: ["#E60012", "#FFCB05", "#2D6BA1", "#8DC641", "#D7D7D7"],
    description: "Nintendo brand colors"
  },
  {
    id: 43,
    name: "Steam",
    colors: ["#1B2838", "#2A475E", "#66C0F4", "#C7D5E0", "#FFFFFF"],
    description: "Steam platform colors"
  },
  {
    id: 44,
    name: "Spotify Dark",
    colors: ["#1DB954", "#191414", "#535353", "#B3B3B3", "#FFFFFF"],
    description: "Spotify's dark theme colors"
  },
  {
    id: 45,
    name: "YouTube",
    colors: ["#FF0000", "#282828", "#464646", "#E5E5E5", "#FFFFFF"],
    description: "YouTube brand colors"
  },
  {
    id: 46,
    name: "Netflix",
    colors: ["#E50914", "#B20710", "#221F1F", "#F5F5F1", "#FFFFFF"],
    description: "Netflix brand colors"
  },
  {
    id: 47,
    name: "Amazon",
    colors: ["#FF9900", "#146EB4", "#232F3E", "#37475A", "#131A22"],
    description: "Amazon brand colors"
  },
  {
    id: 48,
    name: "Google",
    colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#000000"],
    description: "Google brand colors"
  },
  {
    id: 49,
    name: "Facebook",
    colors: ["#1877F2", "#FFFFFF", "#F0F2F5", "#DADDE1", "#1C1E21"],
    description: "Facebook color palette"
  },
  {
    id: 50,
    name: "LinkedIn",
    colors: ["#0A66C2", "#378FE9", "#D0E8FF", "#FFFFFF", "#000000"],
    description: "LinkedIn brand colors"
  },
  {
    id: 51,
    name: "Reddit",
    colors: ["#FF4500", "#FF8717", "#FFB000", "#FFD635", "#0079D3"],
    description: "Reddit brand colors"
  },
  {
    id: 52,
    name: "Pinterest",
    colors: ["#E60023", "#B8001C", "#FFC0CB", "#F5F5F5", "#333333"],
    description: "Pinterest color scheme"
  },
  {
    id: 53,
    name: "TikTok",
    colors: ["#000000", "#25F4EE", "#FE2C55", "#FFFFFF", "#F5F5F5"],
    description: "TikTok brand colors"
  },
  {
    id: 54,
    name: "Snapchat",
    colors: ["#FFFC00", "#FFFFFF", "#000000", "#F5F5F5", "#E5E5E5"],
    description: "Snapchat yellow and colors"
  },
  {
    id: 55,
    name: "Twitch",
    colors: ["#9146FF", "#772CE8", "#1F1F23", "#0E0E10", "#FFFFFF"],
    description: "Twitch brand colors"
  },
  {
    id: 56,
    name: "WhatsApp",
    colors: ["#25D366", "#128C7E", "#075E54", "#DCF8C6", "#FFFFFF"],
    description: "WhatsApp brand colors"
  },
  {
    id: 57,
    name: "Telegram",
    colors: ["#0088CC", "#17212B", "#242F3D", "#2B5278", "#5288C1"],
    description: "Telegram color palette"
  },
  {
    id: 58,
    name: "Signal",
    colors: ["#3A76F0", "#2C6BED", "#1E60EA", "#1055E7", "#F8F8F8"],
    description: "Signal messenger colors"
  },
  {
    id: 59,
    name: "Zoom",
    colors: ["#2D8CFF", "#2D8CFF", "#2D8CFF", "#2D8CFF", "#2D8CFF"],
    description: "Zoom blue variations"
  },
  {
    id: 60,
    name: "Microsoft 365",
    colors: ["#D83B01", "#0078D7", "#50E6FF", "#6B69D6", "#8764B8"],
    description: "Microsoft 365 product colors"
  },
  {
    id: 61,
    name: "Google Workspace",
    colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#000000"],
    description: "Google Workspace colors"
  },
  {
    id: 62,
    name: "Dropbox",
    colors: ["#0061FF", "#3D4852", "#4B88E2", "#D4E5FF", "#FFFFFF"],
    description: "Dropbox brand colors"
  },
  {
    id: 63,
    name: "Airbnb",
    colors: ["#FF5A5F", "#008489", "#484848", "#767676", "#FFFFFF"],
    description: "Airbnb brand colors"
  },
  {
    id: 64,
    name: "Uber",
    colors: ["#000000", "#1FBAD6", "#FFFFFF", "#C0C0C8", "#90D6E8"],
    description: "Uber brand colors"
  },
  {
    id: 65,
    name: "Lyft",
    colors: ["#FF00BF", "#352384", "#333447", "#6B6B6B", "#FFFFFF"],
    description: "Lyft brand colors"
  },
  {
    id: 66,
    name: "DoorDash",
    colors: ["#FF3008", "#FF5C00", "#FF9200", "#FFAB0D", "#FFC72C"],
    description: "DoorDash brand colors"
  },
  {
    id: 67,
    name: "Postmates",
    colors: ["#000000", "#363636", "#666666", "#999999", "#FFFFFF"],
    description: "Postmates color palette"
  },
  {
    id: 68,
    name: "Shopify",
    colors: ["#5C6AC4", "#202E78", "#50B83C", "#108043", "#F49342"],
    description: "Shopify brand colors"
  },
  {
    id: 69,
    name: "WooCommerce",
    colors: ["#96588A", "#3C3C3C", "#7F54B3", "#F7F7F7", "#FFFFFF"],
    description: "WooCommerce colors"
  },
  {
    id: 70,
    name: "PayPal",
    colors: ["#003087", "#009CDE", "#012169", "#FFFFFF", "#D3D3D3"],
    description: "PayPal brand colors"
  },
  {
    id: 71,
    name: "Stripe",
    colors: ["#6772E5", "#5595FF", "#32325D", "#6B7C93", "#FFFFFF"],
    description: "Stripe payment colors"
  },
  {
    id: 72,
    name: "Square",
    colors: ["#28B662", "#2C9BDB", "#5F30E6", "#FFCB00", "#FFFFFF"],
    description: "Square payment colors"
  },
  {
    id: 73,
    name: "Venmo",
    colors: ["#3D95CE", "#008CFF", "#0074D9", "#005EA6", "#003D73"],
    description: "Venmo brand blues"
  },
  {
    id: 74,
    name: "Cash App",
    colors: ["#00D632", "#000000", "#1E1E1E", "#2E2E2E", "#FFFFFF"],
    description: "Cash App green and dark colors"
  },
  {
    id: 75,
    name: "Coinbase",
    colors: ["#1652F0", "#1554F0", "#0A47D9", "#0A3CC3", "#0832AD"],
    description: "Coinbase brand blues"
  },
  {
    id: 76,
    name: "Binance",
    colors: ["#F0B90B", "#F8D33A", "#FCD535", "#FCE68D", "#FFFFFF"],
    description: "Binance yellow theme"
  },
  {
    id: 77,
    name: "Robinhood",
    colors: ["#00C805", "#008522", "#006400", "#003D00", "#000000"],
    description: "Robinhood green palette"
  },
  {
    id: 78,
    name: "Etsy",
    colors: ["#F56400", "#F56400", "#F56400", "#F56400", "#F56400"],
    description: "Etsy orange variations"
  },
  {
    id: 79,
    name: "eBay",
    colors: ["#E53238", "#0064D2", "#F5AF02", "#86B817", "#000000"],
    description: "eBay multicolor palette"
  },
  {
    id: 80,
    name: "Alibaba",
    colors: ["#FF6A00", "#FF6A00", "#FF6A00", "#FF6A00", "#FF6A00"],
    description: "Alibaba orange theme"
  },
  {
    id: 81,
    name: "AliExpress",
    colors: ["#FF0036", "#FF0036", "#FF0036", "#FF0036", "#FF0036"],
    description: "AliExpress red theme"
  },
  {
    id: 82,
    name: "Walmart",
    colors: ["#0071CE", "#004F9A", "#FFC220", "#FFF8E8", "#FFFFFF"],
    description: "Walmart brand colors"
  },
  {
    id: 83,
    name: "Target",
    colors: ["#CC0000", "#CC0000", "#CC0000", "#CC0000", "#CC0000"],
    description: "Target red theme"
  },
  {
    id: 84,
    name: "Best Buy",
    colors: ["#003B64", "#003B64", "#003B64", "#003B64", "#003B64"],
    description: "Best Buy blue theme"
  },
  {
    id: 85,
    name: "IKEA",
    colors: ["#FFCC00", "#003399", "#003399", "#003399", "#FFFFFF"],
    description: "IKEA blue and yellow"
  },
  {
    id: 86,
    name: "LEGO",
    colors: ["#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000"],
    description: "LEGO red theme"
  },
  {
    id: 87,
    name: "Nike",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "Nike black and white"
  },
  {
    id: 88,
    name: "Adidas",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "Adidas black and white"
  },
  {
    id: 89,
    name: "Puma",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "Puma black and white"
  },
  {
    id: 90,
    name: "Under Armour",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "Under Armour black and white"
  },
  {
    id: 91,
    name: "Reebok",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "Reebok black and white"
  },
  {
    id: 92,
    name: "New Balance",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "New Balance black and white"
  },
  {
    id: 93,
    name: "Converse",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "Converse black and white"
  },
  {
    id: 94,
    name: "Vans",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "Vans black and white"
  },
  {
    id: 95,
    name: "The North Face",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "The North Face black and white"
  },
  {
    id: 96,
    name: "Patagonia",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "Patagonia black and white"
  },
  {
    id: 97,
    name: "Columbia",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "Columbia black and white"
  },
  {
    id: 98,
    name: "Apple Watch",
    colors: ["#000000", "#1D1D1F", "#3A3A3C", "#57575A", "#747478"],
    description: "Apple Watch dark grays"
  },
  {
    id: 99,
    name: "Fitbit",
    colors: ["#00B0B9", "#00B0B9", "#00B0B9", "#00B0B9", "#00B0B9"],
    description: "Fitbit teal theme"
  },
  {
    id: 100,
    name: "Garmin",
    colors: ["#007CC3", "#007CC3", "#007CC3", "#007CC3", "#007CC3"],
    description: "Garmin blue theme"
  },
  {
    id: 101,
    name: "GoPro",
    colors: ["#00B3A1", "#00B3A1", "#00B3A1", "#00B3A1", "#00B3A1"],
    description: "GoPro teal theme"
  },
  {
    id: 102,
    name: "DJI",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "DJI black and white"
  },
  {
    id: 103,
    name: "Sony",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "Sony black and white"
  },
  {
    id: 104,
    name: "Canon",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "Canon black and white"
  },
  {
    id: 105,
    name: "Nikon",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "Nikon black and white"
  },
  {
    id: 106,
    name: "Fujifilm",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "Fujifilm black and white"
  },
  {
    id: 107,
    name: "GoDaddy",
    colors: ["#1FDBB2", "#1FDBB2", "#1FDBB2", "#1FDBB2", "#1FDBB2"],
    description: "GoDaddy teal theme"
  },
  {
    id: 108,
    name: "Bluehost",
    colors: ["#0078D7", "#0078D7", "#0078D7", "#0078D7", "#0078D7"],
    description: "Bluehost blue theme"
  },
  {
    id: 109,
    name: "HostGator",
    colors: ["#0EC15F", "#0EC15F", "#0EC15F", "#0EC15F", "#0EC15F"],
    description: "HostGator green theme"
  },
  {
    id: 110,
    name: "SiteGround",
    colors: ["#FF6C2C", "#FF6C2C", "#FF6C2C", "#FF6C2C", "#FF6C2C"],
    description: "SiteGround orange theme"
  },
  {
    id: 111,
    name: "WP Engine",
    colors: ["#0ECAD4", "#0ECAD4", "#0ECAD4", "#0ECAD4", "#0ECAD4"],
    description: "WP Engine teal theme"
  },
  {
    id: 112,
    name: "Cloudflare",
    colors: ["#F38020", "#F38020", "#F38020", "#F38020", "#F38020"],
    description: "Cloudflare orange theme"
  },
  {
    id: 113,
    name: "AWS",
    colors: ["#FF9900", "#FF9900", "#FF9900", "#FF9900", "#FF9900"],
    description: "Amazon Web Services orange"
  },
  {
    id: 114,
    name: "Google Cloud",
    colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#000000"],
    description: "Google Cloud Platform colors"
  },
  {
    id: 115,
    name: "Microsoft Azure",
    colors: ["#0078D7", "#50E6FF", "#6B69D6", "#E81123", "#EA005E"],
    description: "Microsoft Azure colors"
  },
  {
    id: 116,
    name: "IBM Cloud",
    colors: ["#054ADA", "#054ADA", "#054ADA", "#054ADA", "#054ADA"],
    description: "IBM Cloud blue theme"
  },
  {
    id: 117,
    name: "Oracle Cloud",
    colors: ["#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000"],
    description: "Oracle Cloud red theme"
  },
  {
    id: 118,
    name: "DigitalOcean",
    colors: ["#0080FF", "#0080FF", "#0080FF", "#0080FF", "#0080FF"],
    description: "DigitalOcean blue theme"
  },
  {
    id: 119,
    name: "Linode",
    colors: ["#00A95C", "#00A95C", "#00A95C", "#00A95C", "#00A95C"],
    description: "Linode green theme"
  },
  {
    id: 120,
    name: "Vultr",
    colors: ["#007BFF", "#007BFF", "#007BFF", "#007BFF", "#007BFF"],
    description: "Vultr blue theme"
  },
  {
    id: 121,
    name: "Heroku",
    colors: ["#430098", "#430098", "#430098", "#430098", "#430098"],
    description: "Heroku purple theme"
  },
  {
    id: 122,
    name: "Netlify",
    colors: ["#00AD9F", "#00AD9F", "#00AD9F", "#00AD9F", "#00AD9F"],
    description: "Netlify teal theme"
  },
  {
    id: 123,
    name: "Vercel",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "Vercel black and white"
  },
  {
    id: 124,
    name: "GitLab",
    colors: ["#FC6D26", "#FC6D26", "#FC6D26", "#FC6D26", "#FC6D26"],
    description: "GitLab orange theme"
  },
  {
    id: 125,
    name: "Bitbucket",
    colors: ["#0052CC", "#0052CC", "#0052CC", "#0052CC", "#0052CC"],
    description: "Bitbucket blue theme"
  },
  {
    id: 126,
    name: "Docker",
    colors: ["#2496ED", "#2496ED", "#2496ED", "#2496ED", "#2496ED"],
    description: "Docker blue theme"
  },
  {
    id: 127,
    name: "Kubernetes",
    colors: ["#326CE5", "#326CE5", "#326CE5", "#326CE5", "#326CE5"],
    description: "Kubernetes blue theme"
  },
  {
    id: 128,
    name: "Terraform",
    colors: ["#623CE4", "#623CE4", "#623CE4", "#623CE4", "#623CE4"],
    description: "Terraform purple theme"
  },
  {
    id: 129,
    name: "Ansible",
    colors: ["#000000", "#000000", "#000000", "#000000", "#FFFFFF"],
    description: "Ansible black and white"
  },
  {
    id: 130,
    name: "Puppet",
    colors: ["#FFAE1A", "#FFAE1A", "#FFAE1A", "#FFAE1A", "#FFAE1A"],
    description: "Puppet yellow theme"
  },
  {
    id: 131,
    name: "Chef",
    colors: ["#F09820", "#F09820", "#F09820", "#F09820", "#F09820"],
    description: "Chef orange theme"
  },
  {
    id: 132,
    name: "Jenkins",
    colors: ["#D24939", "#D24939", "#D24939", "#D24939", "#D24939"],
    description: "Jenkins red theme"
  },
  {
    id: 133,
    name: "CircleCI",
    colors: ["#343434", "#343434", "#343434", "#343434", "#343434"],
    description: "CircleCI dark theme"
  },
  {
    id: 134,
    name: "Travis CI",
    colors: ["#3EAAAF", "#3EAAAF", "#3EAAAF", "#3EAAAF", "#3EAAAF"],
    description: "Travis CI teal theme"
  },
  {
    id: 135,
    name: "GitHub Actions",
    colors: ["#2088FF", "#2088FF", "#2088FF", "#2088FF", "#2088FF"],
    description: "GitHub Actions blue theme"
  },
  {
    id: 136,
    name: "Azure DevOps",
    colors: ["#0078D7", "#0078D7", "#0078D7", "#0078D7", "#0078D7"],
    description: "Azure DevOps blue theme"
  },
  {
    id: 137,
    name: "AWS CodePipeline",
    colors: ["#FF9900", "#FF9900", "#FF9900", "#FF9900", "#FF9900"],
    description: "AWS CodePipeline orange"
  },
  {
    id: 138,
    name: "Google Cloud Build",
    colors: ["#4285F4", "#4285F4", "#4285F4", "#4285F4", "#4285F4"],
    description: "Google Cloud Build blue"
  },
  {
    id: 139,
    name: "Slack Dark",
    colors: ["#4A154B", "#3F0E40", "#350D36", "#2B0A2C", "#210721"],
    description: "Slack dark theme variations"
  },
  {
    id: 140,
    name: "Slack Light",
    colors: ["#FFFFFF", "#F8F8F8", "#F0F0F0", "#E8E8E8", "#E0E0E0"],
    description: "Slack light theme grays"
  },
  {
    id: 141,
    name: "Discord Dark",
    colors: ["#36393F", "#2F3136", "#202225", "#18191C", "#0C0D0E"],
    description: "Discord dark theme variations"
  },
  {
    id: 142,
    name: "Discord Light",
    colors: ["#FFFFFF", "#F8F9FA", "#E9EBEE", "#DCDDDE", "#CECECE"],
    description: "Discord light theme grays"
  },
  {
    id: 143,
    name: "Twitter Dark",
    colors: ["#15202B", "#192734", "#22303C", "#38444D", "#5B7083"],
    description: "Twitter dark theme blues"
  },
  {
    id: 144,
    name: "Twitter Light",
    colors: ["#FFFFFF", "#F7F9FA", "#EFF3F4", "#E1E8ED", "#CCD6DD"],
    description: "Twitter light theme grays"
  },
  {
    id: 145,
    name: "Facebook Dark",
    colors: ["#18191A", "#242526", "#3A3B3C", "#4E4F50", "#636466"],
    description: "Facebook dark theme grays"
  },
  {
    id: 146,
    name: "Facebook Light",
    colors: ["#FFFFFF", "#F0F2F5", "#E4E6EB", "#D8DADF", "#CCCCCC"],
    description: "Facebook light theme grays"
  },
  {
    id: 147,
    name: "Instagram Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Instagram dark theme grays"
  },
  {
    id: 148,
    name: "Instagram Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Instagram light theme grays"
  },
  {
    id: 149,
    name: "YouTube Dark",
    colors: ["#0F0F0F", "#181818", "#212121", "#2C2C2C", "#383838"],
    description: "YouTube dark theme grays"
  },
  {
    id: 150,
    name: "YouTube Light",
    colors: ["#FFFFFF", "#F9F9F9", "#F2F2F2", "#EBEBEB", "#E5E5E5"],
    description: "YouTube light theme grays"
  },
  {
    id: 151,
    name: "Netflix Dark",
    colors: ["#000000", "#141414", "#1F1F1F", "#2A2A2A", "#363636"],
    description: "Netflix dark theme grays"
  },
  {
    id: 152,
    name: "Netflix Light",
    colors: ["#FFFFFF", "#F5F5F1", "#EBEBE3", "#E1E1D5", "#D7D7C7"],
    description: "Netflix light theme creams"
  },
  {
    id: 153,
    name: "Spotify Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Spotify dark theme grays"
  },
  {
    id: 154,
    name: "Spotify Light",
    colors: ["#FFFFFF", "#F8F8F8", "#F0F0F0", "#E8E8E8", "#E0E0E0"],
    description: "Spotify light theme grays"
  },
  {
    id: 155,
    name: "Apple Music Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Apple Music dark theme grays"
  },
  {
    id: 156,
    name: "Apple Music Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Apple Music light theme grays"
  },
  {
    id: 157,
    name: "Amazon Prime Dark",
    colors: ["#000000", "#141414", "#1F1F1F", "#2A2A2A", "#363636"],
    description: "Amazon Prime dark theme grays"
  },
  {
    id: 158,
    name: "Amazon Prime Light",
    colors: ["#FFFFFF", "#F5F5F5", "#EBEBEB", "#E1E1E1", "#D7D7D7"],
    description: "Amazon Prime light theme grays"
  },
  {
    id: 159,
    name: "Disney+ Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Disney+ dark theme grays"
  },
  {
    id: 160,
    name: "Disney+ Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Disney+ light theme grays"
  },
  {
    id: 161,
    name: "HBO Max Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "HBO Max dark theme grays"
  },
  {
    id: 162,
    name: "HBO Max Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "HBO Max light theme grays"
  },
  {
    id: 163,
    name: "Hulu Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Hulu dark theme grays"
  },
  {
    id: 164,
    name: "Hulu Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Hulu light theme grays"
  },
  {
    id: 165,
    name: "Peacock Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Peacock dark theme grays"
  },
  {
    id: 166,
    name: "Peacock Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Peacock light theme grays"
  },
  {
    id: 167,
    name: "Paramount+ Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Paramount+ dark theme grays"
  },
  {
    id: 168,
    name: "Paramount+ Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Paramount+ light theme grays"
  },
  {
    id: 169,
    name: "Apple TV+ Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Apple TV+ dark theme grays"
  },
  {
    id: 170,
    name: "Apple TV+ Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Apple TV+ light theme grays"
  },
  {
    id: 171,
    name: "Prime Video Dark",
    colors: ["#000000", "#141414", "#1F1F1F", "#2A2A2A", "#363636"],
    description: "Prime Video dark theme grays"
  },
  {
    id: 172,
    name: "Prime Video Light",
    colors: ["#FFFFFF", "#F5F5F5", "#EBEBEB", "#E1E1E1", "#D7D7D7"],
    description: "Prime Video light theme grays"
  },
  {
    id: 173,
    name: "Crunchyroll Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Crunchyroll dark theme grays"
  },
  {
    id: 174,
    name: "Crunchyroll Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Crunchyroll light theme grays"
  },
  {
    id: 175,
    name: "Funimation Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Funimation dark theme grays"
  },
  {
    id: 176,
    name: "Funimation Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Funimation light theme grays"
  },
  {
    id: 177,
    name: "Tubi Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Tubi dark theme grays"
  },
  {
    id: 178,
    name: "Tubi Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Tubi light theme grays"
  },
  {
    id: 179,
    name: "Pluto TV Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Pluto TV dark theme grays"
  },
  {
    id: 180,
    name: "Pluto TV Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Pluto TV light theme grays"
  },
  {
    id: 181,
    name: "Roku Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Roku dark theme grays"
  },
  {
    id: 182,
    name: "Roku Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Roku light theme grays"
  },
  {
    id: 183,
    name: "Fire TV Dark",
    colors: ["#000000", "#141414", "#1F1F1F", "#2A2A2A", "#363636"],
    description: "Fire TV dark theme grays"
  },
  {
    id: 184,
    name: "Fire TV Light",
    colors: ["#FFFFFF", "#F5F5F5", "#EBEBEB", "#E1E1E1", "#D7D7D7"],
    description: "Fire TV light theme grays"
  },
  {
    id: 185,
    name: "Android TV Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Android TV dark theme grays"
  },
  {
    id: 186,
    name: "Android TV Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Android TV light theme grays"
  },
  {
    id: 187,
    name: "Apple TV Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Apple TV dark theme grays"
  },
  {
    id: 188,
    name: "Apple TV Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Apple TV light theme grays"
  },
  {
    id: 189,
    name: "Chromecast Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Chromecast dark theme grays"
  },
  {
    id: 190,
    name: "Chromecast Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Chromecast light theme grays"
  },
  {
    id: 191,
    name: "Nvidia Shield Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Nvidia Shield dark theme grays"
  },
  {
    id: 192,
    name: "Nvidia Shield Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Nvidia Shield light theme grays"
  },
  {
    id: 193,
    name: "Xbox Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Xbox dark theme grays"
  },
  {
    id: 194,
    name: "Xbox Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Xbox light theme grays"
  },
  {
    id: 195,
    name: "PlayStation Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "PlayStation dark theme grays"
  },
  {
    id: 196,
    name: "PlayStation Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "PlayStation light theme grays"
  },
  {
    id: 197,
    name: "Nintendo Switch Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Nintendo Switch dark theme grays"
  },
  {
    id: 198,
    name: "Nintendo Switch Light",
    colors: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F0F0F0", "#EBEBEB"],
    description: "Nintendo Switch light theme grays"
  },
  {
    id: 199,
    name: "Steam Deck Dark",
    colors: ["#000000", "#121212", "#242424", "#363636", "#484848"],
    description: "Steam Deck dark theme grays"
  },
];
