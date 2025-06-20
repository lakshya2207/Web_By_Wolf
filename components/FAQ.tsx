"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          FREQUENTLY ASKED QUESTIONS (FAQS)
        </h2>

        <Accordion   defaultValue="item-1" type="single" collapsible className="w-full divide-y divide-gray-200 border-t border-b border-gray-200">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-semibold text-left py-4">
              Lorem ipsum dolor sit amet consectetur?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pb-4">
              Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
              suspendisse convallis. Urna a urna lectus donec felis risus duis
              pellentesque. Pellentesque ultricies ipsum.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold text-left py-4">
              Lorem ipsum dolor sit amet consectetur?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pb-4">
              Lorem ipsum dolor sit amet consectetur. Suspendisse viverra gravida
              nulla, ac bibendum justo laoreet id. Donec aliquet suscipit erat.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="font-semibold text-left py-4">
              Lorem ipsum dolor sit amet consectetur
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pb-4">
              Pellentesque habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas. Suspendisse potenti.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="font-semibold text-left py-4">
              Lorem ipsum dolor sit amet consectetur?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pb-4">
              Etiam imperdiet, risus ac feugiat congue, erat nisi varius eros, eget
              fermentum felis ligula eget velit.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
