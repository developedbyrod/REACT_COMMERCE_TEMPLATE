import { HeaderDataProps, ProductType } from "../types"
import Logo from "../assets/kitchen_logo.png";

export const sliderData = {
    slides: [
        {
            url: "https://plus.unsplash.com/premium_photo-1669239112427-bfbc84fcd74c?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "https://www.google.com",
        },
        {
            url: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "https://www.google.com",
        },
        {
            url: "https://plus.unsplash.com/premium_photo-1676139292819-5566666a42cb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "https://www.google.com",
        },
        {
            url: "https://images.unsplash.com/photo-1704192257598-be5cb6e710e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "https://www.google.com",
        },
    ],
    autoPlay: false,
    interval: 5800,
    showArrows: true,
    showDots: true,
    showButton: false,
    showLink: true,
    width: 'full',
}

export const productsData = [
    {
        id: 1,
        name: "Product 1",
        desc: "lorem ipsum",
        image: "lorem ipsum",
        variants: ["Black", "Red", "Green"],
        price: 100,
        category: "Category 1",
        quantity: 10,
    } as ProductType,
    {
        id: 1,
        name: "Product 1",
        desc: "lorem ipsum",
        image: "lorem ipsum",
        variants: ["Black", "Red", "Green"],
        price: 100,
        category: "Category 1",
        quantity: 10,
    } as ProductType,
    {
        id: 1,
        name: "Product 1",
        desc: "lorem ipsum",
        image: "lorem ipsum",
        variants: ["Black", "Red", "Green"],
        price: 100,
        category: "Category 1",
        quantity: 10,
    } as ProductType,
]

export const headerData: HeaderDataProps = {
    headerContent: {
        logo: {
            image: Logo,
            url: "/",
        },
        socialIcons: [
            {
                name: "account",
                link: "https://facebook.com"
            },
            {
                name: "wish",
                link: "https://instagram.com"
            },
            {
                name: "bag",
                link: "https://twitter.com"
            }
        ],
        navLinks: [
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
            {
                name: "Home",
                link: "/",
                sub_links: [
                    {
                        name: "Sublink 1",
                        link: "/sublink1"
                    },
                    {
                        name: "Sublink 2",
                        link: "/sublink2"
                    },
                    {
                        name: "Sublink 3",
                        link: "/sublink3"
                    },
                ]
            },
        ],
    }
}
