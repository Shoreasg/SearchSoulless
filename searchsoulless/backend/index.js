import axios from "axios";
import express from "express"
import cors from "cors"
import * as dotenv from 'dotenv'
dotenv.config()
const app = express();



app.use(cors({ origin: process.env.FRONTEND_URL, methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE', 'PATCH'], credentials: true }));

const port = process.env.PORT || 5000;

app.get("/search/:SoullessChapter/:SoullessID", async (req, res) => {
    let backGroundPercentage;
    let weaponsPercentage;
    let bodyPercentage;
    let hairPercentage;
    let eyePercentage;
    let headWearPercentage;
    let outerWearPercentage;
    let necklacesPercentage;
    let earringsPercentage;
    let faceAcessoriesPercentage;
    let jacketsPercentage;
    let mouthPercentage;
    let eyeWearPercentage;
    let sideKickPercentage;
    if (req.params.SoullessChapter === "1") {

        try {

            //search for the NFT details
            const getNFTDetails = await axios.get(`${process.env.ZILDEXR_NFT_API}/zil13fum43ax8qeprt5s9u6wsmrtw2vsvdrdhmvtrm/${req.params.SoullessID}`, { headers: { 'X-API-KEY': process.env.ZILDEXR_API_KEY } });
            const getNFTAttributes = await axios.get(`${process.env.ZILDEXR_CONTRACT_API}/zil13fum43ax8qeprt5s9u6wsmrtw2vsvdrdhmvtrm/attributes`, { headers: { 'X-API-KEY': process.env.ZILDEXR_API_KEY } });

            getNFTDetails.data.metadata.attributes.map((trait) => {
                const traitType = String(trait.trait_type);
                const traitTypeValue = String(trait.value);
                const attributesData = getNFTAttributes.data;
                const calculation = ((attributesData[traitType][traitTypeValue] / 5555) * 100).toFixed(2)

                if (traitType === "Background") {
                    backGroundPercentage = calculation
                }
                else if (traitType === "Weapons") {
                    weaponsPercentage = calculation
                }
                else if (traitType === "Body") {
                    bodyPercentage = calculation
                }
                else if (traitType === "Hair") {
                    hairPercentage = calculation
                }
                else if (traitType === "Eyes") {
                    eyePercentage = calculation
                }
                else if (traitType === "Headwear") {
                    headWearPercentage = calculation
                }
                else if (traitType === "Outerwear") {
                    outerWearPercentage = calculation
                }
                else if (traitType === "Necklace") {
                    necklacesPercentage = calculation
                }
                else if (traitType === "Face Accessories") {
                    faceAcessoriesPercentage = calculation
                }
                else if (traitType === "Jackets" || traitType === "Jacket") {
                    jacketsPercentage = calculation
                }
                else if (traitType === "Mouth") {
                    mouthPercentage = calculation
                }
                else if (traitType === "Eyewear") {
                    eyeWearPercentage = calculation
                }
                else if (traitType === "Sidekick") {
                    sideKickPercentage = calculation
                }

            })
            res.json({
                "tokenData": getNFTDetails.data,
                "backgroundPercentage": backGroundPercentage,
                "weaponsPercentage": weaponsPercentage,
                "bodyPercentage": bodyPercentage,
                "hairPercentage": hairPercentage,
                "eyePercentage": eyePercentage,
                "headWearPercentage": headWearPercentage,
                "outerWearPercentage": outerWearPercentage,
                "faceAccessoriesPercentage": faceAcessoriesPercentage,
                "jacketsPercentage": jacketsPercentage,
                "mouthPercentage": mouthPercentage,
                "eyeWearPercentage": eyeWearPercentage,
                "sideKickPercentage": sideKickPercentage,
                "necklacesPercentage": necklacesPercentage
            })
        } catch (error) {
            res.status(400).json({ "error": "Request failed" })
        }

    }
    else if (req.params.SoullessChapter === "2") {
        try {

            const getNFTDetails = await axios.get(`${process.env.ZILDEXR_NFT_API}/zil1q3jmtxnyzzgznt5f972et240svvycfq3y5exf4/${req.params.SoullessID}`, { headers: { 'X-API-KEY': process.env.ZILDEXR_API_KEY } });
            const getNFTAttributes = await axios.get(`${process.env.ZILDEXR_CONTRACT_API}/zil1q3jmtxnyzzgznt5f972et240svvycfq3y5exf4/attributes`, { headers: { 'X-API-KEY': process.env.ZILDEXR_API_KEY } });
            getNFTDetails.data.metadata.attributes.map((trait) => {
                const traitType = String(trait.trait_type);
                const traitTypeValue = String(trait.value);
                const attributesData = getNFTAttributes.data;
                const calculation = ((attributesData[traitType][traitTypeValue] / 5555) * 100).toFixed(2)


                if (traitType === "Background") {
                    backGroundPercentage = calculation
                }
                else if (traitType === "Weapons" || traitType ===  "Weapon") {
                    weaponsPercentage = calculation
                }
                else if (traitType === "Body") {
                    bodyPercentage = calculation
                }
                else if (traitType === "Hair") {
                    hairPercentage = calculation
                }
                else if (traitType === "Eyes") {
                    eyePercentage = calculation
                }
                else if (traitType === "Headwear") {
                    headWearPercentage = calculation
                }
                else if (traitType === "Outerwear") {
                    outerWearPercentage = calculation
                }
                else if (traitType === "Necklaces") {
                    necklacesPercentage = calculation
                }
                else if (traitType === "Earrings") {
                    earringsPercentage = calculation
                }
                else if (traitType === "Face Accessories") {
                    faceAcessoriesPercentage = calculation
                }
                else if (traitType === "Mouth") {
                    mouthPercentage = calculation
                }
                else if (traitType === "Eyewear") {
                    eyeWearPercentage = calculation
                }
                else if (traitType === "Sidekick") {
                    sideKickPercentage = calculation
                }

            })
            res.json({
                "tokenData": getNFTDetails.data,
                "backgroundPercentage": backGroundPercentage,
                "weaponsPercentage": weaponsPercentage,
                "bodyPercentage": bodyPercentage,
                "hairPercentage": hairPercentage,
                "eyePercentage": eyePercentage,
                "headWearPercentage": headWearPercentage,
                "outerWearPercentage": outerWearPercentage,
                "necklacesPercentage": necklacesPercentage,
                "earringsPercentage": earringsPercentage,
                "faceAccessoriesPercentage": faceAcessoriesPercentage,
                "mouthPercentage": mouthPercentage,
                "eyeWearPercentage": eyeWearPercentage,
                "sideKickPercentage": sideKickPercentage
            })

        } catch (error) {
            res.status(400).json({ "error": "Request failed" })
        }
    }

});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});