import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="section__hero">
      <h1>Nexus Accounting</h1>

      <h2>Expert Accounting Solutions for Small Business</h2>

      <Link href="/about-us">Learn More</Link>
    </section>
  );
};

export default HeroSection;
