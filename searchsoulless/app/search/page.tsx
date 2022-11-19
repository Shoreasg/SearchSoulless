'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';


type FormValues = {
    Chapter: string;
    SoullessID: string;
};
export default function Search() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [soullessData, setSoullessData] = useState<any>();

    const onSubmitData: SubmitHandler<FormValues> = async data => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${data.Chapter}/${data.SoullessID}`)
        setSoullessData(response.data)
    }

    const mapTraits = soullessData?.tokenData.metadata.attributes.map((traits: any, key: number) => {
        if (soullessData.tokenData.metadata.chapter === 1) {
            if (traits.trait_type === "Background") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.backgroundPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Body") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.bodyPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Eyes") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.eyePercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Eyewear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.eyeWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Face Accessories") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.faceAccessoriesPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Hair") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.hairPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Headwear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.headWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Mouth") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.mouthPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Outerwear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.outerWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Jackets") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.jacketsPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Weapons") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.weaponsPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Sidekick") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.sideKickPercentage}%&#41;</p>
                </>)
            }
        }
        else {
            if (traits.trait_type === "Background") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.backgroundPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Body") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.bodyPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Eyes") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.eyePercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Eyewear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.eyeWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Face Accessories") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.faceAccessoriesPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Hair") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.hairPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Headwear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.headWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Mouth") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.mouthPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Outerwear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.outerWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Earrings") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.earringsPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Necklaces") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.necklacesPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Weapons") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.weaponsPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Sidekick") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{soullessData.sideKickPercentage}%&#41;</p>
                </>)
            }
        }


    })

    return (
        <>
            {soullessData ?
                <div className="h-fit w-screen flex items-center justify-center">
                    <div className="bg-white h-fit w-fit p-2">
                        <div className="flex justify-center border-b-2 border-[#4DBBBA] p-2">
                            <Image width={200} height={200} src={soullessData.tokenData.metadata.resources[0].uri} alt={"NFT image"} />
                        </div>
                        <div className=" border-b-2 border-[#4DBBBA] flex flex-col justify-center p-2">
                            <p className="tracking-tight text-center font-bold text-black leading-6">Collection:</p>
                            <p className="text-indigo-700 text-center">Chapter {soullessData.tokenData.metadata.chapter}</p>
                            <p className="tracking-tight text-center font-bold text-black leading-6">Rank:</p>
                            <p className="text-indigo-700 text-center">{soullessData.tokenData.metadata.rank}</p>
                            <p className="tracking-tight text-center font-bold text-black leading-6">Category:</p>
                            <p className="text-indigo-700 text-center">{soullessData.tokenData.metadata.category}</p>
                            <p className="tracking-tight text-center font-bold text-black leading-6">Owner Address:</p>
                            <p className="text-indigo-700 text-center">{soullessData.tokenData.owner}</p>
                            <div className="border-t-2 border-[#4DBBBA] flex flex-col justify-center p-2">
                                <p className="tracking-tight text-center font-bold text-black leading-6">Links:</p>
                                {soullessData.tokenData.metadata.chapter === 1 ?
                                    <Link href={`https://viewblock.io/zilliqa/address/zil13fum43ax8qeprt5s9u6wsmrtw2vsvdrdhmvtrm?txsType=nft&specific=${soullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Viewblock
                                    </Link> : <Link href={`https://viewblock.io/zilliqa/address/zil1q3jmtxnyzzgznt5f972et240svvycfq3y5exf4?txsType=nft&specific=${soullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Viewblock
                                    </Link>}
                                <p className="tracking-tight text-center font-bold text-black leading-6">Marketplaces:</p>
                                {soullessData.tokenData.metadata.chapter === 1 ? <Link href={`https://zilswap.io/arky/collections/zil13fum43ax8qeprt5s9u6wsmrtw2vsvdrdhmvtrm/${soullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                    Arky
                                </Link> :
                                    <Link href={`https://zilswap.io/arky/collections/zil1q3jmtxnyzzgznt5f972et240svvycfq3y5exf4/${soullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Arky
                                    </Link>}
                                {soullessData.tokenData.metadata.chapter === 1 ? <Link href={`https://cathulhu.tools/market/0x8a79BAC7A6383211ae902f34e86C6b729906346D/${soullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                    Cathulu.tools
                                </Link> :
                                    <Link href={`https://cathulhu.tools/market/0x0465b59a64109029Ae892f9595aaAf83184C2411/${soullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Cathulu.tools
                                    </Link>}
                                <Link href={`https://soullesscitadel.com/gallery/chapter-${soullessData.tokenData.metadata.chapter}/${soullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                    Soulless MarketPlace
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center'>
                            {mapTraits}
                        </div>
                        <button className="w-full mt-5 bg-[#3077ff] text-white py-2 rounded-md font-semibold tracking-tight" onClick={handleSubmit(() => setSoullessData(null))} >Back</button>
                    </div>
                </div>
                :
                <div className="h-screen w-screen flex items-center justify-center">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
                            <h1 className="text-center text-lg font-bold">Search for your Soulless</h1>
                            <div className="space-y-4 mt-6">
                                <div className="text-center font-bold">
                                    Select Chapter
                                </div>
                                <div className="w-full flex flex-row justify-center">
                                    <select {...register("Chapter")}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                                <div className="text-center font-bold">
                                    Enter Soulless ID
                                </div>
                                <div className="w-full border">
                                    <input type="text" placeholder="Soulless ID" className="px-4 py-2 bg-gray-50 w-full"
                                        {...register("SoullessID", { required: true, maxLength: 4 })} />
                                </div>
                                {errors.SoullessID && errors.SoullessID.type === "required" && (<span className="text-red-500 text-xs italic p-2">
                                    This field is required
                                </span>)}
                                {errors.SoullessID && errors.SoullessID.type === "maxLength" && (<span className="text-red-500 text-xs italic p-2">
                                    Maximum 4 digits
                                </span>)}
                            </div>
                            <button className="w-full mt-5 bg-[#3077ff] text-white py-2 rounded-md font-semibold tracking-tight" onClick={handleSubmit(onSubmitData)} >Submit</button>
                            <button className="w-full mt-5 bg-[#3077ff] text-white py-2 rounded-md font-semibold tracking-tight" onClick={() => router.push("/")} >Back</button>
                        </div>
                    </form>
                </div>}
        </>

    )

}