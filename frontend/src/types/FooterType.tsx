import { ReactNode } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";


export interface FooterLinkColumn {
    title: string;
    links: string[];
  }
  
  export const FOOTER_LINKS: FooterLinkColumn[] = [
    {
      title: "Learn More",
      links: ["About Us", "Latest books", "Hot Offers","Popular books"],
    },
    {
      title: "Resources",
      links: ["Blog", "Help Center", "Privacy Policy","FAQ"],
    },

  ];

  export interface FooterLink {
    label: string;
    value: string;
  }
  
  export interface FooterContactInfo {
    title: string;
    links: FooterLink[];
  }
  
  export const FOOTER_CONTACT_INFO: FooterContactInfo = {
    title: "Contact Information",
    links: [
      { label: "Phone", value: "+1 234 567 890" },
      { label: "Email", value: "contact@example.com" },
      { label: "Address", value: "123 Main Street, City, Country" },
    ],
  };
  


  export interface SocialLink {
  id: string;
  icon: ReactNode;
}

export interface Socials {
  title: string;
  links: SocialLink[];
}

export const SOCIALS: Socials = {
  title: "Follow Us",
  links: [
    { id: "facebook", icon: <FaFacebookSquare /> },
    { id: "twitter", icon:<FaSquareXTwitter /> },
    { id: "instagram", icon: <FaSquareInstagram /> },
    { id: "linkedin", icon: <FaLinkedin /> },
  ],
};
