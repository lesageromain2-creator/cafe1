export default function AuteursPage() {
  return (
    <div className="bg-background">
      <section className="container-page py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="heading-3 text-muted">Auteurs invités</p>
          <h1 className="heading-1">Écrire, échanger, signer</h1>
        </div>
        <div className="max-w-3xl space-y-6">
          <p className="para-md">
            La Page accueille des auteurs confirmés et des voix émergentes pour des soirées signatures, lectures et échanges en petit comité.
          </p>
          <p className="para-md">
            Les rencontres sont annoncées au fil de la saison sur le programme du café. Les auteurs échangent avec les lecteurs autour de leurs livres, de l&apos;écriture et de la vie des textes.
          </p>
        </div>
      </section>
    </div>
  );
}
