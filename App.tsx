// App Entry Point
import { SoundController } from './components/SoundController';
import { Hero } from './components/Hero';
import { EventDetails } from './components/EventDetails';
import { Countdown } from './components/Countdown';
import { RsvpForm } from './components/RsvpForm';
import { WishesWall } from './components/WishesWall';
import { ReminderLocation } from './components/ReminderLocation';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToDetails = () => {
    const el = document.getElementById('event-details');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#2B2620] text-[#F6F1E8] font-sans relative overflow-x-hidden selection:bg-[#C8A96A]/30 selection:text-[#F6F1E8]">
      {/* Background ambient lighting overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C8A96A]/5 via-transparent to-transparent" />
      </div>

      {/* Persistent Audio player button */}
      <SoundController />

      {/* Main Luxury Container optimized for Mobile-first premium feeling */}
      <main className="relative z-10 max-w-md mx-auto min-h-screen shadow-2xl bg-[#2B2620] border-x border-[#C8A96A]/5">
        <Hero onOpenInvitation={scrollToDetails} />
        <EventDetails />
        <Countdown />
        <RsvpForm />
        <WishesWall />
        <ReminderLocation />
        <Footer />
      </main>
    </div>
  );
}
