import Footer from "@/components/Footer";

export default function OurInitiativesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}<Footer/> </section>;
}
