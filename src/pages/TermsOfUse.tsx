import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfUse: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <button
          onClick={handleBack}
          className="flex items-center text-primary hover:text-primary-dark transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t('footer.backToTop') === 'Volver arriba' ? 'Volver' : 'Back'}
        </button>

        <h1 className="text-4xl font-bold mb-8">{t('footer.legal.terms')}</h1>
        
        <div className="space-y-6 text-lg leading-relaxed opacity-90">
          <p>
            Bienvenido a Zotidev. Estos Términos de Servicio rigen tu uso de nuestro sitio web y los servicios que ofrecemos. Al acceder a nuestro sitio web, aceptas estar sujeto a estos términos.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Uso del Servicio</h2>
          <p>
            Debes utilizar nuestros servicios solo con fines lícitos y de acuerdo con estos Términos. Te comprometes a no utilizar nuestros servicios de ninguna manera que viole cualquier ley o regulación local, nacional o internacional aplicable.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Propiedad Intelectual</h2>
          <p>
            El sitio web y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de Zotidev y sus licenciantes. Nuestros servicios están protegidos por derechos de autor, marcas comerciales y otras leyes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Enlaces a Otros Sitios Web</h2>
          <p>
            Nuestros servicios pueden contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por Zotidev. No tenemos control ni asumimos responsabilidad por el contenido, las políticas de privacidad o las prácticas de sitios web o servicios de terceros.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitación de Responsabilidad</h2>
          <p>
            En ningún caso Zotidev, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables de ningún daño indirecto, incidental, especial, consecuente o punitivo, incluyendo sin limitación, pérdida de beneficios, datos, uso, buena voluntad, u otras pérdidas intangibles, resultantes de tu acceso o uso de los servicios.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Ley Aplicable</h2>
          <p>
            Estos Términos se regirán e interpretarán de acuerdo con las leyes, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
