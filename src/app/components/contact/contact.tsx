import { navIds } from "../mobileNav"
import { ContactForm } from "./contactForm"
import { PhoneAndEmailContactInfo } from "./phoneAndEmailContactInfo"

export const Contact = () => {
    return (
        <section className="section-wrapper" id={navIds.contact}>
            <h3 className="section-title">Got a project in mind?</h3>
            <div className="flex flex-col gap-4 lg:gap-8 lg:flex-row w-full">
                <div className="flex flex-col gap-4 lg:text-left lg:justify-center w-full">
                    <h4 className="text-h4 sm:text-h4-sm md:text-h4-md lg:text-h4-lg">
                        I’m actively searching for new opportunities
                    </h4>
                    <p className="text-base sm:text-base-sm md:text-base-md lg:text-base-lg">Maybe you want to build your business website or you’re hiring for web developer roles</p>
                    <PhoneAndEmailContactInfo flexRow={true}/>
                </div>
                <ContactForm />
            </div>
        </section>
    )
}