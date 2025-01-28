import {Header} from "./components/organisms/Header.tsx";
import {Body} from "./components/organisms/Body.tsx";
import {DataProvider} from "./DataProvider.tsx";

export const Home = () => {

    return (
        <DataProvider>
            <div className='w-full h-[100vh] max-h-[100vh] flex flex-col'>
                <Header/>
                <Body/>
            </div>
        </DataProvider>
    )
}