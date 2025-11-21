import Navbar from '@/components/navbar';
import HeroSection from '@/components/HeroSection';
import LogosCarousel from '@/components/LogosCarousel';

export default function IndexPage() {
  return (
    <>
      <section className="page-container relative min-h-screen flex flex-col items-center justify-start bg-white">
        <div
          className="gradient-container"
          style={{
            alignItems: 'center',
            backgroundColor: '#F0FFFE',
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(69, 243, 255, 0.4) 0%, rgba(69, 243, 255, 0.2) 25%, rgba(69, 243, 255, 0.1) 50%, transparent 70%),
              radial-gradient(circle at 80% 60%, rgba(54, 255, 131, 0.35) 0%, rgba(54, 255, 131, 0.15) 30%, rgba(54, 255, 131, 0.05) 50%, transparent 70%),
              radial-gradient(circle at 50% 80%, rgba(161, 251, 255, 0.3) 0%, rgba(161, 251, 255, 0.1) 40%, transparent 65%)
            `,
            boxSizing: 'border-box',
            color: 'rgb(17, 24, 28)',
            display: 'flex',
            flexDirection: 'column',
            lineHeight: '24px',
          }}
        >
          <Navbar />
          <HeroSection />
        </div>
      </section>

      <LogosCarousel />
    </>
  );
}
