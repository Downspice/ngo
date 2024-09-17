import Footer from "@/components/Footer";

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="px-12">{children}</div>
      <Footer /> 
    </section>
  );
}
