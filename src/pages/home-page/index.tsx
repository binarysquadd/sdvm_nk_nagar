import HeroSection from "../../components/home/hero-section.tsx";
import DepartmentSection from "../../components/home/department-section.tsx";
import InfraSection from "../../components/home/infra-section.tsx";
import AdministrationSection from "../../components/home/administration-section.tsx";

export default function Index (){
    return (
        <>
            <HeroSection />
            <DepartmentSection />
            <InfraSection />
            <AdministrationSection />
        </>
    )
}