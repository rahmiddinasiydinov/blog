import TypingText from "./components/TypingText";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex justify-center pt-32 px-4">
      <TypingText text="Welcome to the Rakhmiddin's Page!" speed={40} />
    </main>
  );
}
