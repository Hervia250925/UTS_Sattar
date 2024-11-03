const Jadwal = () => {
  return (
    <section id="jadwal" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full">
          <h1 className="text-center text-2xl font-bold mb-4">Jadwal Kuliah</h1>
            <table className="table-auto w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Hari</th>
                        <th className="border px-4 py-2">Mata Kuliah</th>
                        <th className="border px-4 py-2">Waktu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Senin</td>
                        <td className="border px-4 py-2">Algoritma dan Pemrograman</td>
                        <td className="border px-4 py-2">08:00 - 10:00</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Selasa</td>
                        <td className="border px-4 py-2">Basis Data</td>
                        <td className="border px-4 py-2">10:00 - 12:00</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Rabu</td>
                        <td className="border px-4 py-2">Jaringan Komputer</td>
                        <td className="border px-4 py-2">08:00 - 10:00</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Kamis</td>
                        <td className="border px-4 py-2">Rekayasa Perangkat Lunak</td>
                        <td className="border px-4 py-2">10:00 - 12:00</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Jumat</td>
                        <td className="border px-4 py-2">Sistem Informasi</td>
                        <td className="border px-4 py-2">08:00 - 10:00</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jadwal;
