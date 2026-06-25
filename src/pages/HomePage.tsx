import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesDetailedCards from '@/components/sections/features/FeaturesDetailedCards';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroCenteredLogos from '@/components/sections/hero/HeroCenteredLogos';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';
import { CheckCircle } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroCenteredLogos
      avatarsSrc={[
        "http://img.b2bpic.net/free-photo/portrait-beautiful-afro-american-woman_23-2148332136.jpg",
        "http://img.b2bpic.net/free-photo/portrait-cheerful-overjoyed-male-with-bushy-hairdo-smiles-happily_273609-8518.jpg",
        "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-1297.jpg",
        "http://img.b2bpic.net/free-photo/smiley-woman-holding-shopping-bags_23-2148728597.jpg",
        "http://img.b2bpic.net/free-photo/portrait-charming-family-with-their-cute-little-daughter_8353-11289.jpg",
      ]}
      avatarText="Trusted by 27+ local customers"
      title="Authentic Indian Flavors in San Secondo Parmense"
      description="Sony KMB Market brings you the finest selection of Indian and Pakistani groceries. From fresh spices to traditional favorites, we are your neighborhood hub for culinary excellence."
      primaryButton={{
        text: "Visit Today",
        href: "#contact",
      }}
      secondaryButton={{
        text: "See Products",
        href: "#products",
      }}
      names={[
        "Basmati Rice",
        "Fresh Masalas",
        "Organic Grains",
        "Daily Produce",
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/mock-up-green-screen-pharmaceutical-product-standing-counter-desk-empty-drugstore-space-filled-with-pills-vitamins-ready-customers-medicine-support-service-concept_482257-60609.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Our Story"
      title="Dedicated to Quality & Tradition"
      description="For years, Sony KMB Market has served the community by sourcing the highest quality ingredients. We take pride in bringing the authentic taste of the East to your kitchen."
      items={[
        {
          icon: CheckCircle,
          title: "Handpicked Ingredients",
          description: "We ensure every item meets our strict quality standards.",
        },
        {
          icon: CheckCircle,
          title: "Traditional Selection",
          description: "Sourcing products directly from authentic regional producers.",
        },
        {
          icon: CheckCircle,
          title: "Community Focus",
          description: "Your neighborhood store with friendly, personalized service.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/local-turkish-delices-tea-grand-bazar-market_1268-20173.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesDetailedCards
      tag="What We Offer"
      title="Beyond Grocery Shopping"
      description="More than just a market, we are your partner in crafting delicious, authentic meals at home."
      items={[
        {
          title: "Authentic Masalas",
          description: "A wide variety of blended spices for every dish.",
          tags: [
            "Spice",
            "Quality",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/easy-flexitarian-diet-food-arrangement_23-2148955534.jpg",
        },
        {
          title: "Organic Grains",
          description: "Premium pulses, rice, and flour varieties.",
          tags: [
            "Healthy",
            "Organic",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/composition-different-delicious-ingredients_23-2149028609.jpg",
        },
        {
          title: "Farm Fresh Produce",
          description: "Seasonal vegetables sourced locally and internationally.",
          tags: [
            "Fresh",
            "Seasonal",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/fruit-stand-background_23-2147960255.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesImageBento
      tag="Featured Items"
      title="Shop Our Best Sellers"
      description="Discover the most loved items by our local customers."
      items={[
        {
          title: "Basmati Rice",
          description: "Long grain premium quality.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiling-young-woman-stacking-plastic-sacks-greenhouse_23-2147948300.jpg",
        },
        {
          title: "Curry Spices",
          description: "Aromatic masalas.",
          imageSrc: "http://img.b2bpic.net/free-photo/exotic-spices-with-plate-spoons-cloth_23-2147684938.jpg",
        },
        {
          title: "Lentils",
          description: "Diverse healthy pulses.",
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-colorful-lentils-dark-background_84443-72312.jpg",
        },
        {
          title: "Specialty Tea",
          description: "Authentic tea leaves.",
          imageSrc: "http://img.b2bpic.net/free-photo/seasonings-tea-counter_1398-3833.jpg",
        },
        {
          title: "Condiments",
          description: "Pickles and chutney.",
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-with-preserved-vegetables_23-2148626044.jpg",
        },
        {
          title: "Traditional Snacks",
          description: "Savory namkeen mixes.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-cheese-rusks-with-cips-popcorn-light-background_140725-89451.jpg",
        },
        {
          title: "Frozen Favorites",
          description: "Quick meal solutions.",
          imageSrc: "http://img.b2bpic.net/free-photo/herbal-rock-salt-oil-blueberry-cosmetics-products-white-plate-wooden-desk_23-2148087670.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialTrustCard
      quote="The best place to buy Mogumogu and all essential Indian groceries. Everything is authentic and the staff is wonderful!"
      rating={5}
      author="Gioele Gelati, Local Guide"
      avatars={[
        {
          name: "Gioele",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-senior-woman-with-shopping-basket_1187-1555.jpg",
        },
        {
          name: "Avtar",
          imageSrc: "http://img.b2bpic.net/free-photo/young-hispanic-girl-smiling-happy-standing-city_839833-15335.jpg",
        },
        {
          name: "Customer 3",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-climbing-escalator-holding-shopping-bag_23-2148339193.jpg",
        },
        {
          name: "Customer 4",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-holding-bag-with-organic-vegetables_23-2148454518.jpg",
        },
        {
          name: "Customer 5",
          imageSrc: "http://img.b2bpic.net/free-photo/son-giving-his-dad-taste-salad_23-2148366181.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Information"
      title="Common Questions"
      description="Find answers to help you plan your visit."
      items={[
        {
          question: "Where are you located?",
          answer: "Via G. Matteotti, 49, 43017 San Secondo Parmense PR.",
        },
        {
          question: "Are you open on weekends?",
          answer: "Please check our Google Maps listing for live updates.",
        },
        {
          question: "Can I order online?",
          answer: "Currently we are focusing on providing the best in-store experience.",
        },
        {
          question: "Do you stock Pakistani products?",
          answer: "Yes, we stock a wide variety of both Indian and Pakistani items.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Visit Us"
      text="Ready for an authentic grocery experience? Visit us today in San Secondo Parmense."
      primaryButton={{
        text: "Get Directions",
        href: "https://www.google.com/maps/dir/?api=1&destination=Via+G.+Matteotti,+49,+43017+San+Secondo+Parmense+PR",
      }}
      secondaryButton={{
        text: "Call Now",
        href: "tel:+393512617506",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
