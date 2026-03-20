export default function CartePage() {
  return (
    <div className="bg-background">
      <section className="container-page py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="heading-3 text-muted">La carte</p>
          <h1 className="heading-1">Boissons & petite restauration</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          <div className="space-y-4">
            <p className="caption">Cafés & thés</p>
            <ul className="para-md space-y-2">
              <li>Espresso, allongé, cappuccino, latte</li>
              <li>Thés d&apos;origine, infusions de saison</li>
              <li>Chocolat chaud, chai latte</li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="caption">Pâtisseries & salé</p>
            <ul className="para-md space-y-2">
              <li>Gâteaux maison, tartes du jour</li>
              <li>Cookies, biscuits et petites douceurs</li>
              <li>Formules déjeuner légères selon l&apos;ardoise</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
