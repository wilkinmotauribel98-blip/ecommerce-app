import BreadCrumbSection from "@/sections/BreadCrumbSection";

const INFO_CONTENT = {
  contact: {
    title: "Contact Us",
    body: [
      "Our support team is available 24/7. Write to us at support@niflix.com and we will get back to you as soon as possible.",
      "For order inquiries, please include your order number so we can help you faster.",
    ],
  },
  "shipping-delivery": {
    title: "Shipping & Delivery",
    body: [
      "Shipping is free on all orders. Standard delivery takes 3 to 5 business days.",
      "You can track your order from the confirmation email or from the support page.",
    ],
  },
  "returns-refunds": {
    title: "Returns & Refunds",
    body: [
      "You have 30 days from delivery to return any item in its original condition.",
      "Once we receive your return, your refund is issued to the original payment method within 5 to 10 business days.",
    ],
  },
  faqs: {
    title: "FAQs",
    body: [
      "Find quick answers to common questions about orders, shipping, payments and returns on our support page.",
      "If you cannot find what you are looking for, contact our support team and we will be happy to help.",
    ],
  },
  about: {
    title: "About Us",
    body: [
      "NIFLIX is a demo e-commerce store built to showcase a modern shopping experience: catalog, search, cart and a simulated checkout.",
      "Beyond technology. Elevate your everyday.",
    ],
  },
  careers: {
    title: "Careers",
    body: [
      "We are always looking for talented people passionate about e-commerce and technology.",
      "Send your resume to careers@niflix.com and tell us how you can contribute.",
    ],
  },
  press: {
    title: "Press",
    body: [
      "For press inquiries, interviews or brand assets, write to press@niflix.com.",
      "We will be glad to collaborate with media outlets.",
    ],
  },
  sustainability: {
    title: "Sustainability",
    body: [
      "We work with suppliers committed to responsible practices and recyclable packaging.",
      "Every order is packed with minimal waste to reduce our environmental footprint.",
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    body: [
      "This is a demo store. We do not collect, store or share real personal data.",
      "Any information you enter during checkout stays in your own browser and is never sent to a server.",
    ],
  },
  "terms-of-service": {
    title: "Terms of Service",
    body: [
      "This is a demo storefront: products, prices and checkout are simulated and no real purchase takes place.",
      "By browsing this site you agree to use it for evaluation purposes only.",
    ],
  },
};

export default function InfoPage({ contentKey }) {
  const content = INFO_CONTENT[contentKey] ?? { title: "Page", body: [] };
  return (
    <main className="max-w-360 relative m-auto w-[95%] mb-20">
      <BreadCrumbSection title={content.title} cart={true} />
      <h1 className="text-white text-4xl my-5">{content.title}</h1>
      <div className="flex flex-col gap-4 max-w-3xl">
        {content.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-zinc-400 text-lg">{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
