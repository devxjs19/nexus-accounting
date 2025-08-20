import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__text-content">
        <h1>Nexus Accounting</h1>

        <h2>
          <span>Expert Accounting Solutions </span> for Small Business
        </h2>

        <p>
          Welcome to <strong>Nexus Accounting</strong>. We go beyond the numbers
          to provide expert accounting and strategic financial solutions for
          your business. Our mission is to handle your financial complexities so
          you can focus on what you do best: growing your company.
        </p>

        <Link href="/about-us">Learn More</Link>
      </div>
    </section>
  );
};

export default HeroSection;
