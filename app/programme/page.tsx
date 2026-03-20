export default function ProgrammePage() {
  return (
    <div className="bg-background">
      <section className="container-page py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="heading-3 text-muted">Programme</p>
          <h1 className="heading-1">Vie du café & rendez-vous</h1>
        </div>
        <div className="max-w-3xl space-y-6">
          <p className="para-md">
            À La Page, la semaine est rythmée par les temps forts du café littéraire : créneaux de lecture au calme, clubs de lecture, rencontres d&apos;auteurs et soirées autour d&apos;un thème ou d&apos;une maison d&apos;édition.
          </p>
          <ul className="space-y-4 para-md">
            <li><span className="font-heading uppercase tracking-[0.02em]">Mardis & jeudis</span> — fin de journée consacrée à la lecture silencieuse.</li>
            <li><span className="font-heading uppercase tracking-[0.02em]">Mercredis</span> — club de lecture jeunesse & ados.</li>
            <li><span className="font-heading uppercase tracking-[0.02em]">Vendredis</span> — rencontres d&apos;auteurs et signatures ponctuelles.</li>
            <li><span className="font-heading uppercase tracking-[0.02em]">Week-ends</span> — brunch lecture, ateliers thématiques selon l&apos;agenda.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
