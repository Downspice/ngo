import Footer from "@/components/Footer";

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}
  <Footer/> </section>;
}
