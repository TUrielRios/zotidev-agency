import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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

        <h1 className="text-4xl font-bold mb-8">{t('footer.legal.privacy')}</h1>
        
        <div className="space-y-6 text-lg leading-relaxed opacity-90">
          <p>
            En Zotidev, valoramos y respetamos tu privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos tu información personal cuando visitas nuestro sitio web o utilizas nuestros servicios.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Información que recopilamos</h2>
          <p>
            Podemos recopilar información personal que nos proporcionas directamente, como tu nombre, dirección de correo electrónico, número de teléfono y cualquier otra información que decidas compartir con nosotros a través de formularios de contacto o correspondencia directa.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Uso de la información</h2>
          <p>
            Utilizamos la información que recopilamos para:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Proporcionar, operar y mantener nuestros servicios.</li>
            <li>Mejorar, personalizar y expandir nuestro sitio web.</li>
            <li>Comprender y analizar cómo utilizas nuestro sitio web.</li>
            <li>Desarrollar nuevos productos, servicios, características y funcionalidades.</li>
            <li>Comunicarnos contigo para fines de servicio al cliente, actualizaciones y otra información relacionada con el sitio web, y para fines de marketing y promoción.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Seguridad de los datos</h2>
          <p>
            La seguridad de tus datos es importante para nosotros, pero recuerda que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger tu información personal, no podemos garantizar su seguridad absoluta.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Cambios en esta Política de Privacidad</h2>
          <p>
            Podemos actualizar nuestra Política de Privacidad periódicamente. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página. Te recomendamos que revises esta Política de Privacidad periódicamente para detectar cualquier cambio.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Contacto</h2>
          <p>
            Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
