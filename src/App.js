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
                {!!newcampaign && newcampaign?.map((campaign, i) => (
                    <div key={i} className="bg-blue-500 text-white">
                        <ul>
                            <li className="mb-4">{campaign.title}</li>
                            <li className="mb-4">{campaign.owner}</li>
                            <li className="mb-4">{campaign.isActive}</li>
                        </ul>
                        </div>
                ))}
                
            </main>
        </div>
    );
}

export default App;
