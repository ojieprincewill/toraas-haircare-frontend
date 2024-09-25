import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";

export const FOOTER_DATA = [
  {
    socials: [
      {
        icon: <IoLogoWhatsapp />,
        iconTarget: "https://wa.me/2349053108229",
      },
      {
        icon: <IoLogoInstagram />,
        iconTarget:
          "https://www.instagram.com/toraas.haircare?igsh=MXBnOG1ycjY4ZDh5Nw==",
      },
      {
        icon: <TiSocialFacebook />,
        iconTarget:
          "https://www.facebook.com/profile.php?id=61564011782580&mibextid=ZbWKwL",
      },
    ],
    title: "get started",
    links: [
      { text: "About Us", target: "/about" },
      { text: "Contact Us", target: "/contact" },
      { text: "shop", target: "/shop" },
      { text: "FAQ", target: "/questions" },
    ],
    id: 1,
  },
  {
    socials: [],
    title: "account",
    links: [
      { text: "My Account", target: "/account" },
      { text: "Cart", target: "/cart" },
      { text: "Wishlist", target: "/wishlist" },
    ],
    id: 2,
  },
];
