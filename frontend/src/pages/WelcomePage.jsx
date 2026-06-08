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
      </main>
    </div>
  );
}
