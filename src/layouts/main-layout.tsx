import { Outlet} from "react-router-dom";
import { Header } from  '../components/common/header.tsx'
import Footer from '../components/common/footer.tsx'

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className='felx-1'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}