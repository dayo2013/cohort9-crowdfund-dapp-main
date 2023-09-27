import { useEffect, useState } from "react";
import { useConnection } from "../context/connection";
import { Contract, ethers } from "ethers";
import { contractaddr } from "../utils";
import { crowdAbi } from "../Abi/crowd";

const useCampaign = () => {
    const [getcampaign, setgetcampaign] = useState([]);
    const [countcampaign, setcountcampaign] = useState();
    const { isActive, provider } = useConnection();
    const poolcampaign = new Contract(contractaddr, crowdAbi, provider);
    const fetchcampaign = async () => {
        try {
            const campaignfund = await poolcampaign.id();
            return ethers.formatUnits(campaignfund,0);
            
        } catch (error) {
           console.log(error) 
        }
    }
        const Totalcampaign = async (count) => {

            try {
                const d = [];
                for (let index = 1; index <= count; index++) {
                  const result = await poolcampaign.crowd(index);
                  d.push(result)
                }
                return d;
            } catch (error) {
                throw new Error(`Error calling id:, ${error}`);
            }
        }


        const getAll = async () => {
            try {
              await fetchcampaign().then(async (count) => (
                await Totalcampaign(count))).then((res) => {setgetcampaign(res); console.log(res)});
            } catch (error) {
              console.log(error)
            }
          }
        
    useEffect(() => {
        if (!isActive) return;
        getAll()

    }, [isActive, provider])

   return getcampaign;
}

export default useCampaign;