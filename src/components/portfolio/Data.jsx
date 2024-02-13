import emmajohn from '../../assets/emmajohn-store.jpg';
import dream from '../../assets/dream.jpg';
import game from '../../assets/breakout game.jpg';
import portfolio from '../../assets/portfolio.jpg';
import moviflex from '../../assets/moviflex-cover.png'
import FileSphere from '../../assets/FileSphere.png'
import ChatGPT from '../../assets/ChatGPT.png'

export const projectData = [

    {
        id: 1,
        image: FileSphere,
        title: 'FileSphere',
        catagory: "app",
        demo: 'https://filesphere-kappa.vercel.app/',
        github: 'https://github.com/yeasinshakil/fileSphere-Next-Typescript',
        description: 'FileSphere is a cloud-based file storage and collaboration platform that people manage and share their digital content. FileSphere allows users to store files securely in the cloud and access them from any device, anywhere, anytime with an internet connection.',
        tech: 'Next Js, Typescript, Zustand, ShadCn, Tailwind',
    },
    {
        id: 23578,
        image: ChatGPT,
        title: 'ChatGPT Clone',
        catagory: "web",
        demo: 'https://chat-gpt-type-script-next-js.vercel.app/',
        github: 'https://github.com/yeasinshakil/chatGPT-TypeScript-NextJs',
        description: '',
        tech: 'Next Js, Typescript, ShadCn, Tailwind',
    },
    {
        id: 111,
        image: emmajohn,
        title: 'Emmajohn-Store',
        catagory: "web",
        demo: 'https://emmajohn-store.netlify.app/',
        github: 'https://github.com/yeasinshakil/eCommerce-website-Strapi',
        description: '',
        tech: '',
    },
    {
        id: 12,
        image: moviflex,
        title: 'Moviflex',
        catagory: "web",
        demo: 'https://moviflex-by-shakil.netlify.app/',
        github: 'https://github.com/yeasinshakil/Moviflex-app',
        description: '',
        tech: '',
    },


    {
        id: 3,
        image: dream,
        title: 'Brand Desgin',
        catagory: "design",
        demo: 'https://heartfelt-raindrop-9a4add.netlify.app',
        github: 'https://github.com/YeasinShakil/disney-plus-clone',
        description: '',
        tech: '',
    },
    {
        id: 4,
        image: game,
        title: 'Brick-Out Game',
        catagory: "web",
        demo: ' https://yeasinshakil.github.io/BreakOut-2D-Game/',
        github: 'https://github.com/YeasinShakil/BreakOut-2D-Game',
        description: '',
        tech: '',
    },
    {
        id: 5,
        image: portfolio,
        title: 'Portfolio',
        catagory: "design",
        demo: 'https://yeasin-shakil.netlify.app',
        github: 'https://github.com/YeasinShakil/Yeasin-Shakil-portfollio',
        description: '',
        tech: '',
    },

]

export const projectNav = [
    { name: 'all' },
    { name: 'app' },
    { name: 'web' },
    { name: 'design' },
]