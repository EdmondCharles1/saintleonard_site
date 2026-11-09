import { EnPreparation } from "@/components/layout/en-preparation";
import { LienBouton } from "@/components/ui/lien-bouton";
import { site } from "@/content/site";
import { lienTelephone, lienWhatsApp } from "@/lib/contact";

/**
 * Coordonnées de l'école. V1 : WhatsApp et téléphone uniquement, aucun courriel
 * tant que les boîtes Google n'existent pas (D-01).
 */
export function Coordonnees({ messageWhatsApp }: { messageWhatsApp: string }) {
  const { whatsapp, telephone, adresse } = site.contact;
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border bg-card p-5">
        <h3 className="heading-4 text-primary-800">Nous écrire ou nous appeler</h3>
        {whatsapp || telephone ? (
          <div className="mt-4 flex flex-wrap gap-3">
            {whatsapp ? (
              <LienBouton href={lienWhatsApp(whatsapp, messageWhatsApp)} variante="succes" externe>
                Écrire sur WhatsApp
              </LienBouton>
            ) : null}
            {telephone ? (
              <LienBouton href={lienTelephone(telephone)} variante="secondaire" externe>
                Appeler le {telephone}
              </LienBouton>
            ) : null}
          </div>
        ) : (
          <div className="mt-4">
            <EnPreparation quoi="numéros WhatsApp et téléphone" />
          </div>
        )}
      </div>
      <div className="rounded-lg border bg-card p-5">
        <h3 className="heading-4 text-primary-800">Adresse</h3>
        {adresse ? (
          <address className="mt-4 not-italic">
            {adresse.map((ligne) => (
              <span key={ligne} className="block">
                {ligne}
              </span>
            ))}
          </address>
        ) : (
          <div className="mt-4">
            <EnPreparation quoi="adresse de l'école" />
          </div>
        )}
      </div>
    </div>
  );
}
