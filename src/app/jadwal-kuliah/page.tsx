import Breadcrumb from "@/components/Common/Breadcrumb";
import Jadwal from "@/components/Jadwal";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jadwal Kuliah | Datsik",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const JadwalKuliah = () => {
  return (
    <>
      <Breadcrumb
        pageName="Jadwal Kuliah"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Jadwal/>
      
    </>
  );
};

export default JadwalKuliah;
