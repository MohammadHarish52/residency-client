import { AchievementBanner } from "@/components/achievement-banner";
import { FooterComponent } from "@/components/footer";
import { LandingPage } from "@/components/landing-page";
import { PastProjects } from "@/components/past-projects";
import { PurchaseDiana } from "@/components/purchase-diana";
import { TasksGrid } from "@/components/tasks-grid";
import { TryDiannCta } from "@/components/try-diann-cta";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <LandingPage />
      <TasksGrid />
      <AchievementBanner />
      <PastProjects />
      <PurchaseDiana />
      <TryDiannCta />
      <FooterComponent />
    </>
  );
}
