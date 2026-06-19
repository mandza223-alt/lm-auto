"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [form, setForm] = useState({
    ime: "",
    telefon: "",
    termin: "",
  });

  const [poruka, setPoruka] = useState("");

  const posaljiFormu = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_tig85s6",
        "template_q1xtrcg",
        {
          name: form.ime,
          phone: form.telefon,
          message: `Zakazan termin: ${form.termin}`,
        },
        "tFEHgnunms4W0klrf"
      );

      setPoruka(
        "Uspešno ste zakazali termin! Uskoro ćemo vas kontaktirati na broj telefona koji ste ostavili."
      );

      setForm({
        ime: "",
        telefon: "",
        termin: "",
      });
    } catch (error) {
      console.log("EMAILJS GRESKA:", error);
      setPoruka("Greška prilikom slanja.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 text-black">
      <section className="bg-gradient-to-r from-black via-slate-900 to-blue-900 text-white py-28 px-6 text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-blue-400">
          M&L AUTO
        </h1>

        <p className="text-2xl mb-8 text-gray-300">
          Tehnički pregled • Registracija • Auto servis
        </p>

        <a
          href="#kontakt"
          className="bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700 transition"
        >
          Zakaži termin
        </a>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Naše usluge
        </h2>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
  <h3 className="font-bold text-xl mb-2">Tehnički pregled</h3>
  <p>Kompletan tehnički pregled svih kategorija vozila.</p>

  <div className="mt-4">
    <p className="font-bold text-blue-600">Cena: od 6.000 RSD</p>
    <ul className="text-sm mt-2 space-y-1">
      <li>✔ Pregled vozila</li>
      <li>✔ Kontrola kočnica</li>
      <li>✔ Kontrola svetala</li>
      <li>✔ Izveštaj o stanju vozila</li>
    </ul>
  </div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
  <h3 className="font-bold text-xl mb-2">Registracija vozila</h3>
  <p>Pomoć pri registraciji i kompletnoj dokumentaciji.</p>

  <div className="mt-4">
    <p className="font-bold text-blue-600">Registracija GRATIS</p>
    <ul className="text-sm mt-2 space-y-1">
      <li>✔ Obrada dokumentacije</li>
      <li>✔ Savetovanje</li>
      <li>✔ Odlazak u SUP GRATIS</li>
    </ul>
  </div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
  <h3 className="font-bold text-xl mb-2">Mali servis</h3>
  <p>Redovno održavanje vozila i zamena potrošnih delova.</p>

  <div className="mt-4">
    <p className="font-bold text-blue-600">Cena: od 3.000 RSD</p>
    <ul className="text-sm mt-2 space-y-1">
      <li>✔ Zamena ulja</li>
      <li>✔ Filter ulja</li>
      <li>✔ Filter vazduha</li>
    </ul>
  </div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
  <h3 className="font-bold text-xl mb-2">Veliki servis</h3>
  <p>Profesionalna zamena svih ključnih komponenti.</p>

  <div className="mt-4">
    <p className="font-bold text-blue-600">
      Cena: od 10.000 RSD (zavisi od tipa vozila)
    </p>
    <ul className="text-sm mt-2 space-y-1">
      <li>✔ Kaiš razvoda</li>
      <li>✔ Španeri</li>
      <li>✔ Vodena pumpa</li>
    </ul>
  </div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
  <h3 className="font-bold text-xl mb-2">Dijagnostika</h3>
  <p>Računarska dijagnostika i otkrivanje kvarova.</p>

  <div className="mt-4">
    <p className="font-bold text-blue-600">Cena: od 2.000 RSD</p>
    <ul className="text-sm mt-2 space-y-1">
      <li>✔ Očitavanje grešaka</li>
      <li>✔ Brisanje grešaka</li>
      <li>✔ Izveštaj sistema</li>
    </ul>
  </div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
  <h3 className="font-bold text-xl mb-2">Servisiranje klime</h3>
  <p>Punjenje, dezinfekcija i održavanje klima sistema.</p>

  <div className="mt-4">
    <p className="font-bold text-blue-600">Cena: od 4.000 RSD</p>
    <ul className="text-sm mt-2 space-y-1">
      <li>✔ Punjenje klime</li>
      <li>✔ Dezinfekcija sistema</li>
      <li>✔ Provera ispravnosti</li>
    </ul>
  </div>
</div>

</section>

<section
  id="kontakt"
  className="bg-white py-16 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">
          Zakaži termin
        </h2>

        <form
          onSubmit={posaljiFormu}
          className="max-w-md mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Ime i prezime"
            value={form.ime}
            onChange={(e) =>
              setForm({ ...form, ime: e.target.value })
            }
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="tel"
            placeholder="Telefon"
            value={form.telefon}
            onChange={(e) =>
              setForm({ ...form, telefon: e.target.value })
            }
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="datetime-local"
            value={form.termin}
            onChange={(e) =>
              setForm({ ...form, termin: e.target.value })
            }
            className="border p-3 rounded-lg"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Pošalji zahtev
          </button>

          {poruka && (
            <p className="text-center font-bold mt-4 text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
              {poruka}
            </p>
          )}
        </form>

        <div className="mt-10 space-y-2">
          <p>📍 Dimitrija Tucovića 52, Kikinda</p>
          <p>📞 063 161 4633</p>
          <p>✉️ mandza223@gmail.com</p>
<div className="mt-6">
  <iframe
    src="https://www.google.com/maps?q=Dimitrija+Tucovića+52+Kikinda&output=embed"
    width="100%"
    height="300"
    style={{ border: 0 }}
    loading="lazy"
    className="rounded-xl shadow-lg"
  ></iframe>
</div>
          <div className="mt-4">
            <p className="font-bold">Radno vreme</p>
            <p>Ponedeljak - Petak: 08:00 - 15:30</p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-6">
        <p>© 2025 M&L AUTO | Sva prava zadržana</p>
      </footer>
    </main>
  );
}

