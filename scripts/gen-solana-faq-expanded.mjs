/**
 * One-shot generator: emits data/faq/solana-west-faq-expanded.items.json (100 FAQs).
 * Run: node scripts/gen-solana-faq-expanded.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const items = [
  {
    "section": "prices",
    "question": "What are Solana West Prices in New Zayed?",
    "answer": "Solana West Prices start from 9.8M EGP at project level in New Zayed.\n\nFinal prices depend on the unit type, phase, size, view, finishing, and current availability. Request the latest price sheet before reserving.",
    "aiSnippet": "Solana West Prices start from 9.8M EGP in New Zayed, with final prices based on unit type, phase, view, finishing, and availability.",
    "internalLink": {
      "href": "/prices",
      "label": "View Solana West Prices"
    },
    "primaryIntent": "transactional_price",
    "schemaHint": "PriceSpecification"
  },
  {
    "section": "prices",
    "question": "What is the Solana West starting price?",
    "answer": "The current published starting price for Solana West New Zayed is from 9.8M EGP.\n\nThis is a starting price, not a fixed price for every unit. Apartments, townhouses, twin houses, and villas are priced differently.",
    "aiSnippet": "The current published starting price for Solana West New Zayed is from 9.8M EGP.",
    "internalLink": {
      "href": "/prices",
      "label": "Check Starting Price"
    },
    "primaryIntent": "transactional_price",
    "schemaHint": "PriceSpecification"
  },
  {
    "section": "prices",
    "question": "Are Solana West Villas priced higher than apartments?",
    "answer": "Solana West Villas are usually priced above apartments because they offer more privacy, land, garden space, and a stronger family-home profile.\n\nAlways compare villa prices with the latest phase map and payment plan.",
    "aiSnippet": "Solana West Villas are usually priced above apartments because they offer more privacy, land, garden space, and a stronger family-home profile.",
    "internalLink": {
      "href": "/properties/villas",
      "label": "View Solana West Villas"
    },
    "primaryIntent": "transactional_price",
    "schemaHint": "PriceSpecification"
  },
  {
    "section": "prices",
    "question": "How do Solana West Apartments compare on price?",
    "answer": "Solana West Apartments are usually the most accessible way to enter the ORA New Zayed Project.\n\nThey work well for buyers looking for a lower ticket, easier maintenance, and compound living in New Zayed.",
    "aiSnippet": "Solana West Apartments are usually the most accessible way to enter the ORA New Zayed Project.",
    "internalLink": {
      "href": "/properties/apartments",
      "label": "View Solana West Apartments"
    },
    "primaryIntent": "transactional_price",
    "schemaHint": "PriceSpecification"
  },
  {
    "section": "prices",
    "question": "Do views and floors affect Solana West prices?",
    "answer": "Yes. View, floor, building position, phase, and finishing can all affect Solana West prices.\n\nA green view, corner position, or preferred phase may carry a different price than a standard unit.",
    "aiSnippet": "Yes. View, floor, building position, phase, and finishing can all affect Solana West prices.",
    "internalLink": {
      "href": "/prices",
      "label": "Request Price Details"
    },
    "primaryIntent": "transactional_price",
    "schemaHint": "PriceSpecification"
  },
  {
    "section": "prices",
    "question": "Are prices different for townhouses and twin houses?",
    "answer": "Yes. Townhouses in New Zayed and Twin Houses in New Zayed have different price ranges because they offer different levels of privacy, land, and frontage.\n\nAsk for both options if you are comparing family homes.",
    "aiSnippet": "Yes. Townhouses in New Zayed and Twin Houses in New Zayed have different price ranges because they offer different levels of privacy, land, and frontage.",
    "internalLink": {
      "href": "/properties/townhouses",
      "label": "Compare Townhouses"
    },
    "primaryIntent": "transactional_price",
    "schemaHint": "PriceSpecification"
  },
  {
    "section": "prices",
    "question": "Can prices change by phase?",
    "answer": "Yes. Solana West prices can change by phase and release.\n\nThe best way to compare is to request current prices for the exact unit type you are considering.",
    "aiSnippet": "Yes. Solana West prices can change by phase and release.",
    "internalLink": {
      "href": "/contact",
      "label": "Request Current Prices"
    },
    "primaryIntent": "transactional_price",
    "schemaHint": "PriceSpecification"
  },
  {
    "section": "prices",
    "question": "Are online Solana West price lists always accurate?",
    "answer": "Online price lists can become outdated quickly.\n\nUse public prices for orientation, then confirm the latest Solana West Prices with the sales team before making a decision.",
    "aiSnippet": "Online price lists can become outdated quickly.",
    "internalLink": {
      "href": "/contact",
      "label": "Contact Sales Team"
    },
    "primaryIntent": "transactional_price",
    "schemaHint": "PriceSpecification"
  },
  {
    "section": "prices",
    "question": "What should buyers ask before comparing prices?",
    "answer": "Ask for the unit type, size, phase, view, finishing, delivery date, payment plan, and total price.\n\nThis gives you a clean comparison between apartments, townhouses, twin houses, and standalone villas.",
    "aiSnippet": "Ask for the unit type, size, phase, view, finishing, delivery date, payment plan, and total price.",
    "internalLink": {
      "href": "/prices",
      "label": "Price Comparison Guide"
    },
    "primaryIntent": "transactional_price",
    "schemaHint": "PriceSpecification"
  },
  {
    "section": "prices",
    "question": "Is Solana West a good value in New Zayed?",
    "answer": "Solana West New Zayed is positioned as a premium ORA development with a large land area, low-density planning, and a strong payment plan.\n\nValue depends on the unit you choose, your payment comfort, and your long-term ownership plan.",
    "aiSnippet": "Solana West New Zayed is positioned as a premium ORA development with a large land area, low-density planning, and a strong payment plan.",
    "internalLink": {
      "href": "/investment-guides",
      "label": "Read Investment Guides"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "InvestmentOrDeposit"
  },
  {
    "section": "payment_plans",
    "question": "What is the Solana West Payment Plan?",
    "answer": "The Solana West Payment Plan is marketed with 5% down payment and flexible installments up to 10 years.\n\nDelivery starts from 2027, with exact timing depending on the selected phase and unit.",
    "aiSnippet": "Solana West Payment Plan: 5% down payment, installments up to 10 years, and delivery starting from 2027.",
    "internalLink": {
      "href": "/payment-plan",
      "label": "View Solana West Payment Plan"
    },
    "primaryIntent": "transactional_finance",
    "schemaHint": "PaymentChargesSpecification"
  },
  {
    "section": "payment_plans",
    "question": "Does Solana West offer 5% down payment?",
    "answer": "Yes. Solana West is marketed with a 5% down payment.\n\nBefore reserving, confirm the reservation amount, payment dates, and any fees that apply to your chosen unit.",
    "aiSnippet": "Yes. Solana West is marketed with a 5% down payment.",
    "internalLink": {
      "href": "/payment-plan",
      "label": "View 5% Down Payment Details"
    },
    "primaryIntent": "transactional_finance",
    "schemaHint": "PaymentChargesSpecification"
  },
  {
    "section": "payment_plans",
    "question": "How long are Solana West installments?",
    "answer": "Solana West installments are marketed up to 10 years.\n\nThe exact installment schedule depends on the unit type and current sales offer.",
    "aiSnippet": "Solana West installments are marketed up to 10 years.",
    "internalLink": {
      "href": "/payment-plan",
      "label": "View Installments"
    },
    "primaryIntent": "transactional_finance",
    "schemaHint": "PaymentChargesSpecification"
  },
  {
    "section": "payment_plans",
    "question": "Is the payment plan flexible?",
    "answer": "Yes. The payment plan is designed to make entry into Solana West more flexible for serious buyers.\n\nAsk for the latest schedule so you can compare monthly and yearly payments clearly.",
    "aiSnippet": "Yes. The payment plan is designed to make entry into Solana West more flexible for serious buyers.",
    "internalLink": {
      "href": "/payment-plan",
      "label": "Request Payment Schedule"
    },
    "primaryIntent": "transactional_finance",
    "schemaHint": "PaymentChargesSpecification"
  },
  {
    "section": "payment_plans",
    "question": "Do villas and apartments have the same payment plan?",
    "answer": "They may share the same headline payment plan, but final schedules can differ by unit type, phase, and price.\n\nRequest the payment plan for the exact apartment, townhouse, twin house, or villa you are considering.",
    "aiSnippet": "They may share the same headline payment plan, but final schedules can differ by unit type, phase, and price.",
    "internalLink": {
      "href": "/payment-plan",
      "label": "Compare Payment Options"
    },
    "primaryIntent": "transactional_finance",
    "schemaHint": "PaymentChargesSpecification"
  },
  {
    "section": "payment_plans",
    "question": "What should I confirm before paying the down payment?",
    "answer": "Confirm the unit code, price, payment dates, delivery date, fees, cancellation terms, and sales contact before paying any amount.\n\nA premium purchase should always be documented clearly.",
    "aiSnippet": "Confirm the unit code, price, payment dates, delivery date, fees, cancellation terms, and sales contact before paying any amount.",
    "internalLink": {
      "href": "/contact",
      "label": "Contact Sales Team"
    },
    "primaryIntent": "transactional_finance",
    "schemaHint": "PaymentChargesSpecification"
  },
  {
    "section": "payment_plans",
    "question": "Can overseas buyers use the payment plan?",
    "answer": "Overseas buyers can enquire about the Solana West Payment Plan and request payment details remotely.\n\nThey should still confirm documents, transfer process, and ownership requirements with the sales team.",
    "aiSnippet": "Overseas buyers can enquire about the Solana West Payment Plan and request payment details remotely.",
    "internalLink": {
      "href": "/contact",
      "label": "Ask About Overseas Buying"
    },
    "primaryIntent": "transactional_finance",
    "schemaHint": "PaymentChargesSpecification"
  },
  {
    "section": "location",
    "question": "Where is Solana West New Zayed located?",
    "answer": "Solana West New Zayed is located on Mehwar El Dabaa in New Zayed, West Cairo.\n\nThe location connects buyers to Alexandria Desert Road, Middle Ring Road, Waslet Dahshour, Sphinx Airport, and Mall of Arabia.",
    "aiSnippet": "Solana West Location is on Mehwar El Dabaa in New Zayed, with access to Alexandria Desert Road, Middle Ring Road, Waslet Dahshour, Sphinx Airport, and Mall of Arabia.",
    "internalLink": {
      "href": "/location",
      "label": "View Solana West Location"
    },
    "primaryIntent": "navigational_local",
    "schemaHint": "Place"
  },
  {
    "section": "location",
    "question": "Is Solana West close to Sphinx Airport?",
    "answer": "Yes. Project information commonly mentions around 10 minutes to Sphinx Airport.\n\nTravel times are approximate and should be checked during the hours you usually travel.",
    "aiSnippet": "Yes. Project information commonly mentions around 10 minutes to Sphinx Airport.",
    "internalLink": {
      "href": "/location",
      "label": "View Airport Access"
    },
    "primaryIntent": "navigational_local",
    "schemaHint": "Place"
  },
  {
    "section": "location",
    "question": "How close is Solana West to Waslet Dahshour?",
    "answer": "Project information commonly mentions around 5 minutes to Waslet Dahshour.\n\nThis makes the location easier to understand for buyers familiar with West Cairo movement.",
    "aiSnippet": "Project information commonly mentions around 5 minutes to Waslet Dahshour.",
    "internalLink": {
      "href": "/location",
      "label": "View Location Highlights"
    },
    "primaryIntent": "navigational_local",
    "schemaHint": "Place"
  },
  {
    "section": "location",
    "question": "Is Solana West near Mall of Arabia?",
    "answer": "Mall of Arabia is commonly mentioned at around 15 minutes from Solana West.\n\nThe mall is a useful West Cairo landmark for retail, dining, and weekend access.",
    "aiSnippet": "Mall of Arabia is commonly mentioned at around 15 minutes from Solana West.",
    "internalLink": {
      "href": "/location",
      "label": "View Lifestyle Access"
    },
    "primaryIntent": "navigational_local",
    "schemaHint": "Place"
  },
  {
    "section": "location",
    "question": "What is the Dabaa Corridor?",
    "answer": "The Dabaa Corridor, also known as Mehwar El Dabaa, is one of the key roads shaping New Zayed and West Cairo growth.\n\nSolana West sits on this corridor, which helps support its location appeal.",
    "aiSnippet": "The Dabaa Corridor, also known as Mehwar El Dabaa, is one of the key roads shaping New Zayed and West Cairo growth.",
    "internalLink": {
      "href": "/location",
      "label": "Explore Dabaa Corridor"
    },
    "primaryIntent": "navigational_local",
    "schemaHint": "Place"
  },
  {
    "section": "location",
    "question": "Is New Zayed good for luxury homes?",
    "answer": "New Zayed is becoming a strong destination for luxury homes because it offers new land, major road access, and large master-planned communities.\n\nSolana West ORA is one of the premium projects in this area.",
    "aiSnippet": "New Zayed is becoming a strong destination for luxury homes because it offers new land, major road access, and large master-planned communities.",
    "internalLink": {
      "href": "/investment-guides",
      "label": "Read New Zayed Guide"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "Place"
  },
  {
    "section": "location",
    "question": "How does Solana West stand out in New Zayed?",
    "answer": "Solana West stands out in New Zayed through its ORA-led master plan, luxury homes, location, and flexible payment plan.\n\nThey are useful for market comparison, but Solana West should be judged on its own ORA master plan, prices, payment plan, and unit mix.",
    "aiSnippet": "Solana West stands out in New Zayed through its ORA-led master plan, luxury homes, location, and flexible payment plan.",
    "internalLink": {
      "href": "/comparison-pages",
      "label": "Compare New Zayed Compounds"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "ora_developers",
    "question": "Who is the developer of Solana West?",
    "answer": "Solana West New Zayed is developed by ORA Developers Egypt, chaired by Naguib Sawiris.\n\nThe project is positioned as a premium ORA New Zayed Project with a large low-density master plan.",
    "aiSnippet": "Solana West New Zayed is developed by ORA Developers Egypt, chaired by Naguib Sawiris.",
    "internalLink": {
      "href": "/about",
      "label": "About ORA Developers Egypt"
    },
    "primaryIntent": "process_authority",
    "schemaHint": "Organization"
  },
  {
    "section": "ora_developers",
    "question": "Is Solana West an ORA project?",
    "answer": "Yes. Solana West ORA is a New Zayed project by ORA Developers Egypt.\n\nBuyers should confirm the latest price sheet, payment plan, and unit availability through the sales team.",
    "aiSnippet": "Yes. Solana West ORA is a New Zayed project by ORA Developers Egypt.",
    "internalLink": {
      "href": "/projects/solana-west",
      "label": "View Solana West ORA Project"
    },
    "primaryIntent": "process_authority",
    "schemaHint": "Organization"
  },
  {
    "section": "ora_developers",
    "question": "Who is Naguib Sawiris in relation to ORA?",
    "answer": "Naguib Sawiris is the chairman associated with ORA Developers Egypt.\n\nHis name adds recognition, but buyers should still rely on the project documents and sales agreement.",
    "aiSnippet": "Naguib Sawiris is the chairman associated with ORA Developers Egypt.",
    "internalLink": {
      "href": "/about",
      "label": "Read Developer Background"
    },
    "primaryIntent": "process_authority",
    "schemaHint": "Organization"
  },
  {
    "section": "ora_developers",
    "question": "Why does developer reputation matter?",
    "answer": "Developer reputation matters because buyers care about planning quality, delivery process, after-sales support, and long-term community management.\n\nFor Solana West, ORA Developers Egypt is a key part of the trust story.",
    "aiSnippet": "Developer reputation matters because buyers care about planning quality, delivery process, after-sales support, and long-term community management.",
    "internalLink": {
      "href": "/about",
      "label": "Developer Trust Details"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "Organization"
  },
  {
    "section": "ora_developers",
    "question": "Are there Villas by ORA Developers in Solana West?",
    "answer": "Yes. Solana West includes standalone villas as part of its residential mix.\n\nBuyers can request villa prices, plot details, and payment plan options from the sales team.",
    "aiSnippet": "Yes. Solana West includes standalone villas as part of its residential mix.",
    "internalLink": {
      "href": "/properties/villas",
      "label": "View Villas by ORA Developers"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "ora_developers",
    "question": "Is this website the official ORA website?",
    "answer": "This website is an independent Solana West information and enquiry platform.\n\nIt helps buyers understand prices, payment plans, location, and unit types, but it does not replace official sales documents.",
    "aiSnippet": "This website is an independent Solana West information and enquiry platform.",
    "internalLink": {
      "href": "/about",
      "label": "Website Information"
    },
    "primaryIntent": "process_authority",
    "schemaHint": "Organization"
  },
  {
    "section": "apartments",
    "question": "Does Solana West offer apartments for sale?",
    "answer": "Yes. Solana West Apartments are part of the project mix in New Zayed.\n\nThey are suitable for buyers seeking a practical entry into a luxury ORA compound with easier maintenance than villas.",
    "aiSnippet": "Yes. Solana West Apartments are part of the project mix in New Zayed.",
    "internalLink": {
      "href": "/properties/apartments",
      "label": "View Apartments for Sale"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "apartments",
    "question": "What are Solana West Apartments best for?",
    "answer": "Solana West Apartments work well for investors, smaller families, and buyers who want compound services with a lower ticket than standalone villas.\n\nView, floor, finishing, and phase should be checked before reserving.",
    "aiSnippet": "Solana West Apartments work well for investors, smaller families, and buyers who want compound services with a lower ticket than standalone villas.",
    "internalLink": {
      "href": "/properties/apartments",
      "label": "Explore Apartments"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "apartments",
    "question": "Are Solana West Apartments fully finished?",
    "answer": "Apartment finishing should be confirmed by current release.\n\nAsk the sales team for finishing details, specification, view, floor, and delivery date before choosing an apartment.",
    "aiSnippet": "Apartment finishing should be confirmed by current release.",
    "internalLink": {
      "href": "/properties/apartments",
      "label": "Apartment Finishing Details"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "apartments",
    "question": "Do apartments have access to compound amenities?",
    "answer": "Yes. Apartments are part of the Solana West master plan and benefit from the wider compound environment, including greenery, security, and shared amenities.",
    "aiSnippet": "Yes. Apartments are part of the Solana West master plan and benefit from the wider compound environment, including greenery, security, and shared amenities.",
    "internalLink": {
      "href": "/projects/solana-west",
      "label": "View Amenities"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "apartments",
    "question": "Are apartments good for investment in New Zayed?",
    "answer": "Apartments can be attractive for buyers looking for a more accessible investment in New Zayed.\n\nThe final decision should consider price, payment plan, delivery date, service charges, and expected rental demand.",
    "aiSnippet": "Apartments can be attractive for buyers looking for a more accessible investment in New Zayed.",
    "internalLink": {
      "href": "/investment-guides",
      "label": "Apartment Investment Guide"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "InvestmentOrDeposit"
  },
  {
    "section": "apartments",
    "question": "What should I ask before buying an apartment?",
    "answer": "Ask for size, floor, view, finishing, delivery date, payment plan, service charges, and available phases.\n\nThis makes it easier to compare apartments for sale in New Zayed.",
    "aiSnippet": "Ask for size, floor, view, finishing, delivery date, payment plan, service charges, and available phases.",
    "internalLink": {
      "href": "/contact",
      "label": "Ask About Apartments"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "townhouses",
    "question": "Does Solana West offer townhouses?",
    "answer": "Yes. Solana West includes townhouses within its New Zayed master plan.\n\nTownhouses are ideal for buyers who want more privacy and space than an apartment without the full cost of a standalone villa.",
    "aiSnippet": "Yes. Solana West includes townhouses within its New Zayed master plan.",
    "internalLink": {
      "href": "/properties/townhouses",
      "label": "View Townhouses"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "townhouses",
    "question": "Are townhouses in New Zayed good for families?",
    "answer": "Townhouses in New Zayed can be a strong family choice because they offer private entrances, more space, and access to a gated compound lifestyle.",
    "aiSnippet": "Townhouses in New Zayed can be a strong family choice because they offer private entrances, more space, and access to a gated compound lifestyle.",
    "internalLink": {
      "href": "/properties/townhouses",
      "label": "Family Townhouses"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "townhouses",
    "question": "How do townhouses compare with twin houses?",
    "answer": "Townhouses usually offer a more efficient family-home layout, while twin houses offer more privacy and a stronger villa feel.\n\nCompare both before choosing.",
    "aiSnippet": "Townhouses usually offer a more efficient family-home layout, while twin houses offer more privacy and a stronger villa feel.",
    "internalLink": {
      "href": "/properties/twin-houses",
      "label": "Compare Twin Houses"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "townhouses",
    "question": "Do townhouses have private outdoor space?",
    "answer": "Townhouses may include private outdoor areas depending on the design and release.\n\nConfirm garden, terrace, and layout details before reserving.",
    "aiSnippet": "Townhouses may include private outdoor areas depending on the design and release.",
    "internalLink": {
      "href": "/properties/townhouses",
      "label": "Townhouse Layout Details"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "townhouses",
    "question": "What affects townhouse prices?",
    "answer": "Townhouse prices can depend on size, phase, location inside the compound, view, finishing, and payment plan.\n\nRequest current pricing before comparing options.",
    "aiSnippet": "Townhouse prices can depend on size, phase, location inside the compound, view, finishing, and payment plan.",
    "internalLink": {
      "href": "/prices",
      "label": "Townhouse Prices"
    },
    "primaryIntent": "transactional_price",
    "schemaHint": "PriceSpecification"
  },
  {
    "section": "townhouses",
    "question": "Who should consider a townhouse?",
    "answer": "Townhouses suit buyers who want a family home, private entrance, and compound lifestyle at a more balanced price than many standalone villas.",
    "aiSnippet": "Townhouses suit buyers who want a family home, private entrance, and compound lifestyle at a more balanced price than many standalone villas.",
    "internalLink": {
      "href": "/properties/townhouses",
      "label": "Explore Townhouses"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "villas",
    "question": "Does Solana West offer standalone villas?",
    "answer": "Yes. Solana West Villas include standalone villas within the ORA New Zayed Project.\n\nThey are designed for buyers who value privacy, land, garden space, and long-term family living.",
    "aiSnippet": "Yes. Solana West Villas include standalone villas within the ORA New Zayed Project.",
    "internalLink": {
      "href": "/properties/villas",
      "label": "View Standalone Villas"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "villas",
    "question": "What are Solana West Villas best for?",
    "answer": "Solana West Villas are best for families and investors who want a premium low-density home in New Zayed.\n\nPlot, view, finishing, and phase have a strong effect on pricing.",
    "aiSnippet": "Solana West Villas are best for families and investors who want a premium low-density home in New Zayed.",
    "internalLink": {
      "href": "/properties/villas",
      "label": "Explore Luxury Villas"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "villas",
    "question": "Are there New Zayed Luxury Villas by ORA Developers?",
    "answer": "Yes. Solana West includes New Zayed Luxury Villas by ORA Developers Egypt.\n\nRequest the latest villa prices, plot sizes, and payment plan before shortlisting.",
    "aiSnippet": "Yes. Solana West includes New Zayed Luxury Villas by ORA Developers Egypt.",
    "internalLink": {
      "href": "/properties/villas",
      "label": "New Zayed Luxury Villas"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "villas",
    "question": "What are twin houses in Solana West?",
    "answer": "Twin houses are paired villa-style homes that offer more privacy than townhouses and a more efficient land profile than standalone villas.",
    "aiSnippet": "Twin houses are paired villa-style homes that offer more privacy than townhouses and a more efficient land profile than standalone villas.",
    "internalLink": {
      "href": "/properties/twin-houses",
      "label": "View Twin Houses"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "villas",
    "question": "Are twin houses good for families?",
    "answer": "Twin houses in New Zayed can be a strong option for families who want a private home feel without moving into the highest villa price band.",
    "aiSnippet": "Twin houses in New Zayed can be a strong option for families who want a private home feel without moving into the highest villa price band.",
    "internalLink": {
      "href": "/properties/twin-houses",
      "label": "Family Twin Houses"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "villas",
    "question": "What should villa buyers confirm?",
    "answer": "Villa buyers should confirm plot size, built-up area, view, garden space, finishing, payment plan, delivery date, and service charges.",
    "aiSnippet": "Villa buyers should confirm plot size, built-up area, view, garden space, finishing, payment plan, delivery date, and service charges.",
    "internalLink": {
      "href": "/contact",
      "label": "Ask About Villas"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "villas",
    "question": "Do villas have open green views?",
    "answer": "Some villas are positioned for open green views, depending on phase and plot.\n\nAsk for the phase map before choosing a villa.",
    "aiSnippet": "Some villas are positioned for open green views, depending on phase and plot.",
    "internalLink": {
      "href": "/master-plan",
      "label": "View Master Plan"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "master_plan",
    "question": "What is the Solana West Master Plan?",
    "answer": "The Solana West Master Plan covers 316 acres in New Zayed.\n\nIt is designed around low density, greenery, walkable routes, villas, townhouses, twin houses, and apartments.",
    "aiSnippet": "The Solana West Master Plan covers 316 acres in New Zayed.",
    "internalLink": {
      "href": "/master-plan",
      "label": "Explore Solana West Master Plan"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "master_plan",
    "question": "Is Solana West low density?",
    "answer": "Yes. Solana West is positioned as a low-density luxury compound in New Zayed.\n\nThe large land area supports open spaces, calmer roads, and more privacy between homes.",
    "aiSnippet": "Yes. Solana West is positioned as a low-density luxury compound in New Zayed.",
    "internalLink": {
      "href": "/master-plan",
      "label": "Low-Density Master Plan"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "master_plan",
    "question": "Is Solana West walkable?",
    "answer": "Solana West is marketed as a walkable community with internal paths and green links connecting homes and amenities.\n\nWalkability should be checked against the latest phase map.",
    "aiSnippet": "Solana West is marketed as a walkable community with internal paths and green links connecting homes and amenities.",
    "internalLink": {
      "href": "/master-plan",
      "label": "Walkable Community"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "master_plan",
    "question": "How large is Solana West?",
    "answer": "Solana West New Zayed is planned across 316 acres.\n\nThis scale helps support a broad mix of apartments, townhouses, twin houses, standalone villas, amenities, and green spaces.",
    "aiSnippet": "Solana West New Zayed is planned across 316 acres.",
    "internalLink": {
      "href": "/master-plan",
      "label": "316-Acre Community"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "master_plan",
    "question": "Why does the master plan matter?",
    "answer": "The master plan affects privacy, views, traffic flow, walking routes, amenity access, and long-term value.\n\nA good unit choice should always be checked against the plan.",
    "aiSnippet": "The master plan affects privacy, views, traffic flow, walking routes, amenity access, and long-term value.",
    "internalLink": {
      "href": "/master-plan",
      "label": "Master Plan Details"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "master_plan",
    "question": "Should I review the phase map before buying?",
    "answer": "Yes. The phase map helps you understand unit position, view, road access, distance to amenities, and delivery timing.\n\nRequest it before making a final choice.",
    "aiSnippet": "Yes. The phase map helps you understand unit position, view, road access, distance to amenities, and delivery timing.",
    "internalLink": {
      "href": "/contact",
      "label": "Request Phase Map"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "FAQPage"
  },
  {
    "section": "amenities",
    "question": "What amenities are available in Solana West?",
    "answer": "Solana West is positioned around a luxury compound lifestyle with greenery, clubhouse areas, pool spaces, walkable routes, and family-friendly amenities.\n\nFinal amenity access depends on phase and delivery timing.",
    "aiSnippet": "Solana West is positioned around a luxury compound lifestyle with greenery, clubhouse areas, pool spaces, walkable routes, and family-friendly amenities.",
    "internalLink": {
      "href": "/projects/solana-west",
      "label": "View Amenities"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "amenities",
    "question": "Does Solana West have a clubhouse?",
    "answer": "Yes. The project includes clubhouse-style social spaces as part of the amenity story.\n\nAsk for the latest amenity plan and delivery timing when reviewing a unit.",
    "aiSnippet": "Yes. The project includes clubhouse-style social spaces as part of the amenity story.",
    "internalLink": {
      "href": "/projects/solana-west",
      "label": "Clubhouse Details"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "amenities",
    "question": "Does Solana West have pools?",
    "answer": "Pool and water amenity areas are part of the published lifestyle positioning for Solana West.\n\nConfirm the exact amenity package and phase timing before buying.",
    "aiSnippet": "Pool and water amenity areas are part of the published lifestyle positioning for Solana West.",
    "internalLink": {
      "href": "/projects/solana-west",
      "label": "Pool Amenities"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "amenities",
    "question": "Is Solana West family-friendly?",
    "answer": "Yes. Solana West is positioned for families who want privacy, green spaces, secure living, and access to amenities inside the compound.",
    "aiSnippet": "Yes. Solana West is positioned for families who want privacy, green spaces, secure living, and access to amenities inside the compound.",
    "internalLink": {
      "href": "/projects/solana-west",
      "label": "Family Lifestyle"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "amenities",
    "question": "Do all units have the same amenity access?",
    "answer": "Amenity access is generally tied to the compound, but timing and proximity can differ by phase and unit location.\n\nAsk for the latest plan before reserving.",
    "aiSnippet": "Amenity access is generally tied to the compound, but timing and proximity can differ by phase and unit location.",
    "internalLink": {
      "href": "/master-plan",
      "label": "Amenity Location"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "amenities",
    "question": "Are amenities included in the price?",
    "answer": "Some amenities are part of the compound experience, while service charges or membership details may apply depending on the final rules.\n\nConfirm costs before reserving.",
    "aiSnippet": "Some amenities are part of the compound experience, while service charges or membership details may apply depending on the final rules.",
    "internalLink": {
      "href": "/contact",
      "label": "Ask About Amenity Costs"
    },
    "primaryIntent": "transactional_finance",
    "schemaHint": "PaymentChargesSpecification"
  },
  {
    "section": "lifestyle",
    "question": "What is life like in Solana West?",
    "answer": "Solana West is designed for calm luxury living in New Zayed, with greenery, privacy, family homes, apartments, and compound amenities.",
    "aiSnippet": "Solana West is designed for calm luxury living in New Zayed, with greenery, privacy, family homes, apartments, and compound amenities.",
    "internalLink": {
      "href": "/projects/solana-west",
      "label": "Lifestyle Overview"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "lifestyle",
    "question": "Is Solana West suitable for wealthy buyers?",
    "answer": "Yes. Solana West speaks to buyers who want a premium ORA address, low-density planning, and flexible payment options in New Zayed.",
    "aiSnippet": "Yes. Solana West speaks to buyers who want a premium ORA address, low-density planning, and flexible payment options in New Zayed.",
    "internalLink": {
      "href": "/about",
      "label": "Premium Buyer Context"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "lifestyle",
    "question": "Is Solana West more for end users or investors?",
    "answer": "It can work for both. End users may value privacy, greenery, and family life, while investors may focus on entry price, payment plan, delivery date, and resale demand.",
    "aiSnippet": "It can work for both. End users may value privacy, greenery, and family life, while investors may focus on entry price, payment plan, delivery date, and resale demand.",
    "internalLink": {
      "href": "/investment-guides",
      "label": "End User vs Investor"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "InvestmentOrDeposit"
  },
  {
    "section": "lifestyle",
    "question": "Is Solana West good for GCC buyers?",
    "answer": "Solana West can appeal to GCC and international buyers who want a New Zayed luxury home with airport access and a long payment plan.\n\nRemote buyers should request clear documents before reserving.",
    "aiSnippet": "Solana West can appeal to GCC and international buyers who want a New Zayed luxury home with airport access and a long payment plan.",
    "internalLink": {
      "href": "/contact",
      "label": "GCC Buyer Enquiry"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "lifestyle",
    "question": "Can Solana West work as a second home?",
    "answer": "Yes. For some buyers, Solana West can work as a second home in West Cairo, especially because of Sphinx Airport access and the gated community setting.",
    "aiSnippet": "Yes. For some buyers, Solana West can work as a second home in West Cairo, especially because of Sphinx Airport access and the gated community setting.",
    "internalLink": {
      "href": "/location",
      "label": "Second Home Location"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "lifestyle",
    "question": "What makes Solana West feel premium?",
    "answer": "The premium feel comes from ORA Developers Egypt, 316 acres of planning, low density, greenery, unit variety, and the New Zayed location.",
    "aiSnippet": "The premium feel comes from ORA Developers Egypt, 316 acres of planning, low density, greenery, unit variety, and the New Zayed location.",
    "internalLink": {
      "href": "/projects/solana-west",
      "label": "Premium Community Details"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "investment",
    "question": "Is Solana West a good investment?",
    "answer": "Solana West may be attractive for long-term buyers because of ORA Developers Egypt, New Zayed growth, low-density planning, and flexible installments.\n\nThis is not financial advice. Always compare price, payment plan, delivery date, and your own risk comfort.",
    "aiSnippet": "Solana West may be attractive for long-term buyers because of ORA Developers Egypt, New Zayed growth, low-density planning, and flexible installments.",
    "internalLink": {
      "href": "/investment-guides",
      "label": "Investment Guides"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "InvestmentOrDeposit"
  },
  {
    "section": "investment",
    "question": "Why are investors watching New Zayed?",
    "answer": "Investors are watching New Zayed because of road access, new land supply, major developers, Sphinx Airport proximity, and growing demand for luxury homes in West Cairo.",
    "aiSnippet": "Investors are watching New Zayed because of road access, new land supply, major developers, Sphinx Airport proximity, and growing demand for luxury homes in West Cairo.",
    "internalLink": {
      "href": "/investment-guides",
      "label": "New Zayed Investment"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "InvestmentOrDeposit"
  },
  {
    "section": "investment",
    "question": "Which unit type is best for investment?",
    "answer": "There is no single best unit type. Apartments may offer a lower entry point, while villas and twin houses may appeal to higher-budget family buyers.\n\nCompare price, payment plan, delivery, and resale depth.",
    "aiSnippet": "There is no single best unit type. Apartments may offer a lower entry point, while villas and twin houses may appeal to higher-budget family buyers.",
    "internalLink": {
      "href": "/prices",
      "label": "Compare Unit Prices"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "InvestmentOrDeposit"
  },
  {
    "section": "investment",
    "question": "Can Solana West generate rental income?",
    "answer": "Rental potential depends on unit type, finishing, delivery timing, service charges, market demand, and tenant profile.\n\nDo not rely on unverified rental promises.",
    "aiSnippet": "Rental potential depends on unit type, finishing, delivery timing, service charges, market demand, and tenant profile.",
    "internalLink": {
      "href": "/investment-guides",
      "label": "Rental Considerations"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "InvestmentOrDeposit"
  },
  {
    "section": "investment",
    "question": "Does ORA developer reputation support investment confidence?",
    "answer": "ORA Developers Egypt can support buyer confidence because developer reputation matters in premium real estate.\n\nStill, the final investment decision should be based on the exact unit, price, payment plan, and documents.",
    "aiSnippet": "ORA Developers Egypt can support buyer confidence because developer reputation matters in premium real estate.",
    "internalLink": {
      "href": "/about",
      "label": "ORA Developer Context"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "Organization"
  },
  {
    "section": "investment",
    "question": "What should investors verify first?",
    "answer": "Investors should verify starting price, total price, down payment, installment schedule, delivery date, phase, service charges, and resale rules.",
    "aiSnippet": "Investors should verify starting price, total price, down payment, installment schedule, delivery date, phase, service charges, and resale rules.",
    "internalLink": {
      "href": "/contact",
      "label": "Request Investor Details"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "InvestmentOrDeposit"
  },
  {
    "section": "investment",
    "question": "Is New Zayed better than Sheikh Zayed for investors?",
    "answer": "New Zayed offers newer supply and growth potential, while Sheikh Zayed is more established.\n\nThe better choice depends on your budget, timeline, and appetite for a developing area.",
    "aiSnippet": "New Zayed offers newer supply and growth potential, while Sheikh Zayed is more established.",
    "internalLink": {
      "href": "/blog/new-zayed-vs-sheikh-zayed-luxury-buyers-2026",
      "label": "New Zayed vs Sheikh Zayed"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "InvestmentOrDeposit"
  },
  {
    "section": "buying_process",
    "question": "How do I reserve a unit in Solana West?",
    "answer": "Start by choosing your preferred unit type and budget range.\n\nThen request current prices, availability, payment plan, reservation steps, and required documents from the sales team.",
    "aiSnippet": "Start by choosing your preferred unit type and budget range.",
    "internalLink": {
      "href": "/contact",
      "label": "Start Reservation Enquiry"
    },
    "primaryIntent": "process_authority",
    "schemaHint": "FAQPage"
  },
  {
    "section": "buying_process",
    "question": "What documents should I ask for before buying?",
    "answer": "Ask for the price sheet, payment plan, phase map, unit layout, delivery date, reservation form, and any service charge details.",
    "aiSnippet": "Ask for the price sheet, payment plan, phase map, unit layout, delivery date, reservation form, and any service charge details.",
    "internalLink": {
      "href": "/contact",
      "label": "Request Buying Documents"
    },
    "primaryIntent": "process_authority",
    "schemaHint": "FAQPage"
  },
  {
    "section": "buying_process",
    "question": "Can I buy Solana West remotely?",
    "answer": "You can begin the enquiry remotely by WhatsApp, phone, email, or form.\n\nBefore paying, confirm documents, identity requirements, transfer process, and ownership details.",
    "aiSnippet": "You can begin the enquiry remotely by WhatsApp, phone, email, or form.",
    "internalLink": {
      "href": "/contact",
      "label": "Remote Buyer Support"
    },
    "primaryIntent": "process_authority",
    "schemaHint": "FAQPage"
  },
  {
    "section": "buying_process",
    "question": "Should I visit the site before buying?",
    "answer": "A site visit is strongly recommended if possible.\n\nIt helps you understand location, access, road feel, phase position, and the overall compound atmosphere.",
    "aiSnippet": "A site visit is strongly recommended if possible.",
    "internalLink": {
      "href": "/contact",
      "label": "Book Site Visit"
    },
    "primaryIntent": "process_authority",
    "schemaHint": "FAQPage"
  },
  {
    "section": "buying_process",
    "question": "Who should I contact for Solana West pricing?",
    "answer": "Contact the Solana West sales team to request pricing, availability, payment plan, and next steps.\n\nUse the contact page or WhatsApp for the fastest reply.",
    "aiSnippet": "Contact the Solana West sales team to request pricing, availability, payment plan, and next steps.",
    "internalLink": {
      "href": "/contact",
      "label": "Contact Sales Team"
    },
    "primaryIntent": "transactional_price",
    "schemaHint": "FAQPage"
  },
  {
    "section": "buying_process",
    "question": "Is WhatsApp the fastest enquiry channel?",
    "answer": "WhatsApp is usually the fastest channel for pricing and availability questions.\n\nFor detailed requests, include your preferred unit type, budget, and buying timeline.",
    "aiSnippet": "WhatsApp is usually the fastest channel for pricing and availability questions.",
    "internalLink": {
      "href": "/contact",
      "label": "Ask on WhatsApp"
    },
    "primaryIntent": "process_authority",
    "schemaHint": "FAQPage"
  },
  {
    "section": "buying_process",
    "question": "What should I say when enquiring?",
    "answer": "Say whether you want apartments, townhouses, twin houses, or villas, then share your budget range and preferred payment comfort.\n\nThis helps the sales team reply with relevant options.",
    "aiSnippet": "Say whether you want apartments, townhouses, twin houses, or villas, then share your budget range and preferred payment comfort.",
    "internalLink": {
      "href": "/contact",
      "label": "Send Enquiry"
    },
    "primaryIntent": "process_authority",
    "schemaHint": "FAQPage"
  },
  {
    "section": "delivery",
    "question": "What is the Solana West delivery date?",
    "answer": "Solana West delivery starts from 2027.\n\nExact handover timing depends on the phase, cluster, building, or villa release you choose.",
    "aiSnippet": "Solana West delivery starts from 2027.",
    "internalLink": {
      "href": "/payment-plan",
      "label": "Delivery Date Details"
    },
    "primaryIntent": "process_authority",
    "schemaHint": "FAQPage"
  },
  {
    "section": "delivery",
    "question": "Does every unit deliver in 2027?",
    "answer": "Not necessarily. Delivery starts from 2027, but exact timing can differ by unit type and phase.\n\nConfirm the delivery date for your selected unit before reserving.",
    "aiSnippet": "Not necessarily. Delivery starts from 2027, but exact timing can differ by unit type and phase.",
    "internalLink": {
      "href": "/contact",
      "label": "Confirm Delivery Date"
    },
    "primaryIntent": "process_authority",
    "schemaHint": "FAQPage"
  },
  {
    "section": "delivery",
    "question": "Why does delivery timing matter for investors?",
    "answer": "Delivery timing affects cash flow, rental planning, resale timing, and family relocation plans.\n\nInvestors should compare delivery date with the payment plan.",
    "aiSnippet": "Delivery timing affects cash flow, rental planning, resale timing, and family relocation plans.",
    "internalLink": {
      "href": "/investment-guides",
      "label": "Delivery and Investment"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "InvestmentOrDeposit"
  },
  {
    "section": "delivery",
    "question": "Can delivery dates change?",
    "answer": "Real estate delivery dates can change based on construction progress and phase planning.\n\nAlways check the latest handover information before making a decision.",
    "aiSnippet": "Real estate delivery dates can change based on construction progress and phase planning.",
    "internalLink": {
      "href": "/contact",
      "label": "Ask About Delivery"
    },
    "primaryIntent": "process_authority",
    "schemaHint": "FAQPage"
  },
  {
    "section": "delivery",
    "question": "Should I compare delivery across unit types?",
    "answer": "Yes. Apartments, townhouses, twin houses, and villas may have different delivery timelines depending on the release.\n\nAsk for unit-specific timing.",
    "aiSnippet": "Yes. Apartments, townhouses, twin houses, and villas may have different delivery timelines depending on the release.",
    "internalLink": {
      "href": "/contact",
      "label": "Compare Delivery Dates"
    },
    "primaryIntent": "process_authority",
    "schemaHint": "FAQPage"
  },
  {
    "section": "delivery",
    "question": "What happens after delivery?",
    "answer": "After delivery, buyers usually review handover, finishing condition, service charges, community rules, and any fit-out needs.\n\nAsk for post-handover details before reserving.",
    "aiSnippet": "After delivery, buyers usually review handover, finishing condition, service charges, community rules, and any fit-out needs.",
    "internalLink": {
      "href": "/contact",
      "label": "Post-Delivery Questions"
    },
    "primaryIntent": "process_authority",
    "schemaHint": "FAQPage"
  },
  {
    "section": "comparisons",
    "question": "How does Solana West compare with other New Zayed compounds?",
    "answer": "Solana West should be compared by developer, location, master plan, density, prices, payment plan, delivery date, and unit mix.\n\nDo not compare by brand name alone.",
    "aiSnippet": "Solana West should be compared by developer, location, master plan, density, prices, payment plan, delivery date, and unit mix.",
    "internalLink": {
      "href": "/comparison-pages",
      "label": "Compare New Zayed Compounds"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "comparisons",
    "question": "Is Solana West a strong choice in New Zayed?",
    "answer": "Solana West can be a strong choice for buyers seeking an ORA New Zayed project with apartments, townhouses, twin houses, standalone villas, and flexible installments.\n\nThe right decision depends on your budget, preferred unit type, payment plan, and timeline.",
    "aiSnippet": "Solana West can be a strong New Zayed choice for buyers seeking an ORA project with luxury homes and flexible installments.",
    "internalLink": {
      "href": "/comparison-pages",
      "label": "Solana West buyer guide"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "comparisons",
    "question": "What should I compare first?",
    "answer": "Start with location, developer, payment plan, starting price, unit type, delivery date, and community plan.\n\nThen compare the exact units available today.",
    "aiSnippet": "Start with location, developer, payment plan, starting price, unit type, delivery date, and community plan.",
    "internalLink": {
      "href": "/comparison-pages",
      "label": "Comparison Checklist"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "comparisons",
    "question": "Are properties for sale in New Zayed all similar?",
    "answer": "No. Properties for sale in New Zayed differ by developer, land size, density, road access, payment plan, and delivery timing.",
    "aiSnippet": "No. Properties for sale in New Zayed differ by developer, land size, density, road access, payment plan, and delivery timing.",
    "internalLink": {
      "href": "/projects",
      "label": "View New Zayed Projects"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "comparisons",
    "question": "Why compare payment plans?",
    "answer": "Payment plans affect affordability as much as the starting price.\n\nCompare down payment, installment length, payment dates, and delivery timing before choosing a compound.",
    "aiSnippet": "Payment plans affect affordability as much as the starting price.",
    "internalLink": {
      "href": "/payment-plan",
      "label": "Compare Payment Plan"
    },
    "primaryIntent": "transactional_finance",
    "schemaHint": "PaymentChargesSpecification"
  },
  {
    "section": "comparisons",
    "question": "Why compare master plans?",
    "answer": "The master plan affects privacy, greenery, traffic, walking routes, views, and long-term community quality.\n\nA strong plan can make a major difference in daily living.",
    "aiSnippet": "The master plan affects privacy, greenery, traffic, walking routes, views, and long-term community quality.",
    "internalLink": {
      "href": "/master-plan",
      "label": "Compare Master Plans"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "comparisons",
    "question": "What is the simplest way to choose?",
    "answer": "Shortlist by budget, unit type, location fit, payment comfort, and developer trust.\n\nThen request prices for real available units instead of comparing general claims.",
    "aiSnippet": "Shortlist by budget, unit type, location fit, payment comfort, and developer trust.",
    "internalLink": {
      "href": "/contact",
      "label": "Request Shortlist Help"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "FAQPage"
  },
  {
    "section": "comparisons",
    "question": "Should I compare apartments or villas first?",
    "answer": "Start with the lifestyle you want and the budget you are comfortable with.\n\nApartments usually offer a lower entry point, while villas focus on privacy, land, and long-term family living.",
    "aiSnippet": "Start with the lifestyle you want and the budget you are comfortable with.",
    "internalLink": {
      "href": "/properties/apartments",
      "label": "Compare Apartments and Villas"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "comparisons",
    "question": "How should I compare Solana West Apartments with other apartments in New Zayed?",
    "answer": "Compare location, developer, view, finishing, delivery date, payment plan, service charges, and the quality of the wider compound.",
    "aiSnippet": "Compare location, developer, view, finishing, delivery date, payment plan, service charges, and the quality of the wider compound.",
    "internalLink": {
      "href": "/properties/apartments",
      "label": "Solana West Apartments"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "comparisons",
    "question": "How should I compare Solana West Villas with other villas in New Zayed?",
    "answer": "Compare plot size, privacy, view, garden space, delivery date, payment plan, and the reputation of the developer.",
    "aiSnippet": "Compare plot size, privacy, view, garden space, delivery date, payment plan, and the reputation of the developer.",
    "internalLink": {
      "href": "/properties/villas",
      "label": "Solana West Villas"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "Accommodation"
  },
  {
    "section": "buying_process",
    "question": "Can the sales team help me choose between unit types?",
    "answer": "Yes. Share your budget, family needs, preferred payment plan, and timeline.\n\nThe sales team can suggest whether apartments, townhouses, twin houses, or standalone villas fit your brief best.",
    "aiSnippet": "Yes. Share your budget, family needs, preferred payment plan, and timeline.",
    "internalLink": {
      "href": "/contact",
      "label": "Contact Sales Team"
    },
    "primaryIntent": "unit_selection",
    "schemaHint": "FAQPage"
  },
  {
    "section": "investment",
    "question": "What makes Solana West different from smaller compounds?",
    "answer": "Solana West has a 316-acre master plan, ORA Developers Egypt behind it, a New Zayed location, and a full mix of apartments, townhouses, twin houses, and villas.",
    "aiSnippet": "Solana West has a 316-acre master plan, ORA Developers Egypt behind it, a New Zayed location, and a full mix of apartments, townhouses, twin houses, and villas.",
    "internalLink": {
      "href": "/master-plan",
      "label": "Explore Master Plan"
    },
    "primaryIntent": "commercial_investigation",
    "schemaHint": "InvestmentOrDeposit"
  },
  {
    "section": "location",
    "question": "Is Solana West suitable for buyers who travel often?",
    "answer": "Solana West can suit frequent travellers because of its New Zayed position and proximity to Sphinx Airport.\n\nBuyers should still test real drive times before reserving.",
    "aiSnippet": "Solana West can suit frequent travellers because of its New Zayed position and proximity to Sphinx Airport.",
    "internalLink": {
      "href": "/location",
      "label": "Sphinx Airport Access"
    },
    "primaryIntent": "navigational_local",
    "schemaHint": "Place"
  }
];

const outPath = path.resolve(__dirname, "../data/faq/solana-west-faq-expanded.items.json");
fs.writeFileSync(outPath, JSON.stringify(items, null, 2) + "\n");
console.log(`Wrote ${items.length} Solana West FAQ items to ${outPath}`);
