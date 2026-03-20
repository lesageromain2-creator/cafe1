export default function EvenementsPage() {
  return (
    <div className="bg-background">
      <section className="container-page py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="heading-3 text-muted">Événements</p>
          <h1 className="heading-1">Clubs de lecture & rencontres</h1>
        </div>
        <div className="max-w-3xl space-y-6">
          <p className="para-md">
            La Page accueille clubs de lecture, signatures et soirées thématiques tout au long de l&apos;année. Une programmation pensée pour donner envie de lire, échanger et découvrir de nouvelles voix.
          </p>
          <div className="space-y-4">
            <div>
              <p className="caption">Club de lecture mensuel</p>
              <p className="para-md">Un livre commun, une rencontre par mois — inscriptions au comptoir du café.</p>
            </div>
            <div>
              <p className="caption">Rencontres d&apos;auteurs</p>
              <p className="para-md">Signatures, discussions informelles et lectures à voix haute, en partenariat avec des maisons d&apos;édition et librairies voisines.</p>
            </div>
            <div>
              <p className="caption">Soirées thématiques</p>
              <p className="para-md">Polar, poésie, littérature étrangère… des focus ponctuels pour explorer un univers en profondeur.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
