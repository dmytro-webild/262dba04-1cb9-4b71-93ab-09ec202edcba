import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Groceries",
    "href": "#products"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="Sony KMB Market"
      ctaButton={{
        text: "Visit Us",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBrand
      brand="Sony KMB Market"
      columns={[
        {
          items: [
            {
              label: "Via G. Matteotti, 49, 43017",
            },
            {
              label: "San Secondo Parmense, PR",
            },
          ],
        },
        {
          items: [
            {
              label: "351 261 7506",
              href: "tel:+393512617506",
            },
            {
              label: "Email Us",
              href: "mailto:info@kmbmarket.it",
            },
          ],
        },
        {
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Products",
              href: "#products",
            },
          ],
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
