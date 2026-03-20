"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-background">
      <section className="container-page py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="heading-3 text-muted">Contact</p>
          <h1 className="heading-1">Poussez la porte</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          <div className="space-y-3">
            <p className="para-md">
              La Page — café littéraire<br />7 rue des livres, Lyon
            </p>
            <p className="para-md">Mar–Dim 10h–19h</p>
            <p className="para-md">
              <a href="mailto:contact@cafe-la-page.fr" className="underline">contact@cafe-la-page.fr</a>
            </p>
            <p className="para-md">04 78 00 00 39</p>
          </div>
          <div>
            {sent ? (
              <p className="para-md">Merci pour votre message — nous vous répondrons au plus vite.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="caption block mb-1" htmlFor="name">Nom</label>
                  <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded border border-divider bg-surface px-3 py-2" />
                </div>
                <div>
                  <label className="caption block mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded border border-divider bg-surface px-3 py-2" />
                </div>
                <div>
                  <label className="caption block mb-1" htmlFor="message">Message</label>
                  <textarea id="message" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded border border-divider bg-surface px-3 py-2" />
                </div>
                <button type="submit" className="inline-flex px-4 py-2 bg-ink text-surface font-heading text-sm uppercase tracking-[0.02em] rounded hover:opacity-90">Envoyer</button>
              </form>
            )}
          </div>
        </div>
      </section>
      <section className="container-page pb-20">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="heading-3 text-muted">L’ambiance</p>
          <h2 className="heading-1">Un lieu pour lire, boire et échanger</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl">
          <div className="relative aspect-square rounded-[30px] overflow-hidden bg-surface border border-divider">
            <Image
              src="/images/cafe.jpg"
              alt="Café & torréfaction — La Page"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 300px"
            />
          </div>
          <div className="relative aspect-square rounded-[30px] overflow-hidden bg-surface border border-divider">
            <Image
              src="/images/lieu (1).jpg"
              alt="Pâtisseries & snacking — La Page"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 300px"
            />
          </div>
          <div className="relative aspect-square rounded-[30px] overflow-hidden bg-surface border border-divider">
            <Image
              src="/images/lieu (7).jpg"
              alt="Espace lecture — La Page"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 300px"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
