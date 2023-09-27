import CreateCampaign from "./component/CreateCampaign";
import Header from "./component/Header";
import useCampaign from "./hooks/campaign";

function App() {
    const newcampaign = useCampaign();

    return (
        <div className="App">
            <Header />
            <main className="mt-10">
                <CreateCampaign />
            </main>
        </div>
    );
}

export default App;
