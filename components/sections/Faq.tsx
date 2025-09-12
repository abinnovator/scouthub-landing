import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="flex flex-col gap-11 px-36">
      <div className="flex flex-row gap-56">
        <div className="flex flex-col pt-24">
          <h1 className="text-4xl">Frequently Asked Questions</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Do I need to pay to get started?
              </AccordionTrigger>
              <AccordionContent>No. Its completely free.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How many sports are currently Supported?
              </AccordionTrigger>
              <AccordionContent>
                Football and Basketball. Currently full support is only with
                football. Basketball and other sports are coming soon.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I get feedback?</AccordionTrigger>
              <AccordionContent>
                You can click on the generate feedback button. This will pass
                the video to the ai model and analyze it and give you feedback.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <Image
          src="/Programming-rafiki 1.png"
          alt=""
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Faq;
