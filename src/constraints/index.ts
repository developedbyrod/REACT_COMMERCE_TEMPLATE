import { HeaderDataProps, ProductType } from "../types"
import Logo from "../assets/thunder_black.png";

export const footerData = {
    contact: [
        {
            name: "Contact Us",
            link: "/contact"
        },
        {
            name: "About Us",
            link: "/about"
        },
        {
            name: "FAQ",
            link: "/faq"
        },
        {
            name: "Privacy Policy",
            link: "/privacy"
        }
    ],
    account: [
        {
            name: "My account",
            link: "/account"
        },
        {
            name: "Login / Register",
            link: "/login"
        },
        {
            name: "Cart",
            link: "/checkout"
        },
        {
            name: "Wishlist",
            link: "/wish"
        }
    ],
    quickLinks: [
        {
            name: "Privacy Policy",
            link: "/privacy"
        },
        {
            name: "Terms of Use",
            link: "/terms"
        },
        {
            name: "Contact Us",
            link: "/contact"
        },
        {
            name: "Donate",
            link: "/contact"
        },
    ],
    socialIcons: [
        {
            name: "Facebook",
            link: "https://www.facebook.com"
        },
        {
            name: "Twitter",
            link: "https://www.twitter.com"
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com"
        }
    ],
    companyInfo:[
        {
            name: "Company",
            link: "/company"
        },
        {
            name: "Careers",
            link: "/careers"
        },
        {
            name: "Press",
            link: "/press"
        },
        {
            name: "Blog",
            link: "/blog"
        }
    ],
    paymentMethods:[
        {   
            img: "https://www.visa.com",
            name: "Visa",
            link: "https://www.visa.com"
        },
        {
            img: "https://www.visa.com",
            name: "Mastercard",
            link: "https://www.mastercard.com"
        },
        {
            img: "https://www.visa.com",
            name: "Paypal",
            link: "https://www.paypal.com"
        },

        {
            name: "American Express",
            img: "https://www.visa.com",
            link: "https://www.americanexpress.com"
        }
    ]
}
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
    showLink: false,
    width: 'full',
}

// export const sliderData = {
//     slides: [
//         {
//             url: "https://tse1.mm.bing.net/th?id=OIG2.1TbVehgS1rlFVtJr5Fml&pid=ImgGn",
//             link: "https://www.google.com",
//         },
//         {
//         url: "https://tse1.mm.bing.net/th?id=OIG2.BjgubynX41Jh7Ho8bNLg&pid=ImgGn",
//             link: "https://www.google.com",
//         },
//         {
//             url: "https://tse1.mm.bing.net/th?id=OIG2.1TbVehgS1rlFVtJr5Fml&pid=ImgGn.QFATvMrIIGNI4p2WnFzB&form=SYDBIC",
//             link: "https://www.google.com",
//         },
//     ],
//     autoPlay: false,
//     interval: 5800,
//     showArrows: false,
//     showDots: false,
//     showButton: false,
//     showLink: false,
//     width: 'full',
// }

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
                name: "Kitchen",
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
                name: "Garden",
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
                name: "Bathroom",
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
                name: "Utilities",
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
                name: "Decorations",
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
                name: "Lighting",
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
                name: "Furniture",
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
