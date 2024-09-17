import Footer from "@/components/Footer";

export default function OurInitiativesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="px-48 ">{children}</div>
      <Footer /> 
    </section>
  );
}
