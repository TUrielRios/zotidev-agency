import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
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

        <h1 className="text-4xl font-bold mb-8">{t('footer.legal.cookies')}</h1>
        
        <div className="space-y-6 text-lg leading-relaxed opacity-90">
          <p>
            Nuestra Política de Cookies explica qué son las cookies, cómo las usamos, cómo los terceros con los que podemos asociarnos pueden usar cookies en el servicio, tus opciones respecto a las cookies y más información sobre las cookies.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños fragmentos de texto enviados a tu navegador web por un sitio web que visitas. Un archivo de cookie se almacena en tu navegador web y permite que el servicio o un tercero te reconozca y haga que tu próxima visita sea más fácil y el servicio te resulte más útil.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Cómo Zotidev usa las cookies</h2>
          <p>
            Cuando utilizas y accedes al servicio, podemos colocar varios archivos de cookies en tu navegador web. Utilizamos cookies para los siguientes propósitos:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Para habilitar ciertas funciones del servicio.</li>
            <li>Para proporcionar análisis.</li>
            <li>Para almacenar tus preferencias (como el idioma o el tema de la interfaz).</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Tipos de cookies que utilizamos</h2>
          <p>
            Utilizamos tanto cookies de sesión como persistentes en el servicio y usamos diferentes tipos de cookies para ejecutar el servicio:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Cookies esenciales:</strong> Podemos utilizar cookies esenciales para autenticar usuarios y prevenir el uso fraudulento de cuentas de usuario.</li>
            <li><strong>Cookies de preferencias:</strong> Podemos utilizar estas cookies para recordar información que cambia la forma en que el servicio se comporta o se ve.</li>
            <li><strong>Cookies de análisis:</strong> Podemos utilizar estas cookies para rastrear información sobre cómo se utiliza el servicio para que podamos realizar mejoras.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. ¿Cuáles son tus opciones respecto a las cookies?</h2>
          <p>
            Si deseas eliminar las cookies o indicar a tu navegador web que elimine o rechace las cookies, visita las páginas de ayuda de tu navegador web. Sin embargo, ten en cuenta que si eliminas las cookies o te niegas a aceptarlas, es posible que no puedas usar todas las funciones que ofrecemos, que no puedas almacenar tus preferencias y que algunas de nuestras páginas no se muestren correctamente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
