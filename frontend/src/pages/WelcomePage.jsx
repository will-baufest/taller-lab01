import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './WelcomePage.module.css';

export default function WelcomePage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login', { replace: true });
  }

  return (
    <div className={styles.page}>
      <div className={styles.backgroundOrb} />

      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M2 17l10 5 10-5" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M2 12l10 5 10-5" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <span className={styles.brandName}>FlowOps</span>
        </div>

        <button className={styles.btnLogout} onClick={handleLogout}>
          Cerrar sesión
        </button>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.badge}>Dashboard</div>
          <h1 className={styles.title}>Bienvenido a FlowOps</h1>
          <p className={styles.description}>
            Has iniciado sesión correctamente. Desde aquí puedes gestionar tus flujos de trabajo con precisión quirúrgica.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#111827" strokeWidth="1.5" />
              </svg>
            </div>
            <h2 className={styles.cardTitle}>Sesión activa</h2>
            <p className={styles.cardText}>Tu token de acceso está guardado en la sesión del navegador y expira en 5 minutos.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className={styles.cardTitle}>Acceso seguro</h2>
            <p className={styles.cardText}>Autenticación mediante JWT. Las rutas protegidas requieren sesión válida para ser accedidas.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className={styles.cardTitle}>Alto rendimiento</h2>
            <p className={styles.cardText}>Backend construido con FastAPI y frontend con React + Vite para una experiencia ágil y moderna.</p>
          </div>
        </div>

        <div className={styles.certSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>Certificaciones Microsoft 2026</div>
            <h2 className={styles.sectionTitle}>Nuevas Certificaciones de Microsoft</h2>
            <p className={styles.description}>
              Explora las últimas certificaciones lanzadas por Microsoft en 2026, enfocadas en IA, seguridad en la nube y ciencia de datos.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.certMeta}>
                <span className={styles.certLevel}>Principiante</span>
                <span className={styles.certCode}>AI-901</span>
              </div>
              <div className={styles.cardIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2a7 7 0 0 1 7 7c0 3.5-2 6-5 7v2H10v-2c-3-1-5-3.5-5-7a7 7 0 0 1 7-7z" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M10 21h4" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className={styles.cardTitle}>Azure AI Fundamentals</h2>
              <p className={styles.cardText}>
                Nuevo examen (beta desde abril 2026) que valida conceptos fundamentales de IA y habilidades para implementar soluciones usando Microsoft Azure AI Foundry.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.certMeta}>
                <span className={styles.certLevel}>Intermedio</span>
                <span className={styles.certCode}>SC-500</span>
              </div>
              <div className={styles.cardIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className={styles.cardTitle}>Cloud and AI Security Engineer Associate</h2>
              <p className={styles.cardText}>
                Nueva certificación que reemplaza a AZ-500 (disponible julio 2026). Valida la implementación de controles de seguridad integrales para entornos de nube e IA.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.certMeta}>
                <span className={styles.certLevel}>Intermedio</span>
                <span className={styles.certCode}>DP-100</span>
              </div>
              <div className={styles.cardIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3v18h18" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 16l4-4 4 4 4-6" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className={styles.cardTitle}>Azure Data Scientist Associate</h2>
              <p className={styles.cardText}>
                Certifica habilidades para gestionar la ingesta de datos, entrenamiento y despliegue de modelos de machine learning con Python, Azure Machine Learning y MLflow.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
