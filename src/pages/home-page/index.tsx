import HeroSection from "../../components/home/hero-section.tsx";
import DepartmentSection from "../../components/home/department-section.tsx";
import InfraSection from "../../components/home/infra-section.tsx";
import AdministrationSection from "../../components/home/administration-section.tsx";
import AchievementSection from "../../components/home/achievement-section.tsx";
import EventSection from "../../components/home/event-section.tsx";
import FAQ from "../../components/home/faq-section.tsx";


export default function Index (){
    return (
        <>
            <HeroSection />
            <DepartmentSection />
            <InfraSection />
            <AdministrationSection />
            <AchievementSection />
            <EventSection />
            <FAQ />
        </>
    )
}