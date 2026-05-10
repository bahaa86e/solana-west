import { siteConfig } from "@/data/site";

const sameAs = [
  siteConfig.social.facebook,
  siteConfig.social.instagram,
  siteConfig.social.youtube,
  siteConfig.social.x,
  siteConfig.social.snapchat,
];

export function getOrganizationJsonLd() {
  const logoUrl = `${siteConfig.url}${siteConfig.branding.schemaLogoUrl}`;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.developer,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      caption: `${siteConfig.name} · ${siteConfig.developer}`,
    },
    sameAs,
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}#organization` },
  };
}
