const kontak = () => {
  return (
    <section id="kontak" className="overflow-hidden py-16 md:py-20 lg:py-15">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
            <table className="table-auto w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Mata Kuliah</th>
                        <th className="border px-4 py-2">Kode</th>
                        <th className="border px-4 py-2">SKS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Algoritma dan Pemrograman</td>
                        <td className="border px-4 py-2">AP101</td>
                        <td className="border px-4 py-2">3</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Basis Data</td>
                        <td className="border px-4 py-2">BD202</td>
                        <td className="border px-4 py-2">3</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Jaringan Komputer</td>
                        <td className="border px-4 py-2">JK303</td>
                        <td className="border px-4 py-2">4</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Rekayasa Perangkat Lunak</td>
                        <td className="border px-4 py-2">RPL404</td>
                        <td className="border px-4 py-2">3</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Sistem Informasi</td>
                        <td className="border px-4 py-2">SI505</td>
                        <td className="border px-4 py-2">3</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </section>
  );
};

export default kontak;