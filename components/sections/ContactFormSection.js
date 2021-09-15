import Section from "../layout/Section";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import ContactFormElement from "./elements/ContactFormElement";

function ContactFormSection() {
  return (
    <Section bg={"bg-grey-pinkish2"}>
      <div className="mx-auto max-w-6xl">
        {/* intro text */}
        <h1 className="title-1">Neem contact op</h1>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="flex gap-1 items-center">
            <MailIcon className="h-5 text-charcoal" />
              <a className="hover:underline" href="mailto:info@fotosvanemily.nl">info@fotosvanemily.nl</a>
          </div>
          <div className="flex gap-1 items-center">
            <PhoneIcon className="h-5 text-charcoal" />
            <a className="hover:underline" href="tel:0031652331778">06 52 33 17 78</a>
          </div>
        </div>
        <ContactFormElement />
      </div>
    </Section>
  );
}

export default ContactFormSection;
