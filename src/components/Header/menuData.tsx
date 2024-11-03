import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Profil Mahasiswa",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Profil Dosen",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Mata Kuliah",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Jadwal Kuliah",
    newTab: false,
    path: "/jadwal-kuliah",
  },
];
export default menuData;
