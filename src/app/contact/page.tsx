import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Kontak from "@/components/Contact/kontak";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mata Kuliah | | Datsik",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Mata Kuliah"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
    <Kontak/>
    </>
  );
};

export default ContactPage;
