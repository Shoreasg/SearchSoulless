'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';


type FormValues = {
    firstSoullessChapter: string;
    firstSoullesSoullessID: string;
    secondSoullessChapter: string;
    secondSoullesSoullessID: string;
};
export default function Compare() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [firstSoullessData, setFirstSoullessData] = useState<any>();
    const [secondSoullessData, setSecondSoullessData] = useState<any>();

    const onSubmitData: SubmitHandler<FormValues> = async data => {
        const firstSoullessResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${data.firstSoullessChapter}/${data.firstSoullesSoullessID}`)
        setFirstSoullessData(firstSoullessResponse.data)
        const secondSoullessResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${data.secondSoullessChapter}/${data.secondSoullesSoullessID}`)
        setSecondSoullessData(secondSoullessResponse.data)
    }

    const onHandleBack = () => {
        setFirstSoullessData(null);
        setSecondSoullessData(null)

    }

    const mapFirstSoullessTraits = firstSoullessData?.tokenData.metadata.attributes.map((traits: any, key: number) => {
        if (firstSoullessData.tokenData.metadata.chapter === 1) {
            if (traits.trait_type === "Background") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.backgroundPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Body") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.bodyPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Eyes") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.eyePercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Eyewear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.eyeWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Face Accessories") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.faceAccessoriesPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Hair") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.hairPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Headwear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.headWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Mouth") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.mouthPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Outerwear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.outerWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Jackets") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.jacketsPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Weapons") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.weaponsPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Sidekick") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.sideKickPercentage}%&#41;</p>
                </>)
            }
        }
        else {
            if (traits.trait_type === "Background") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.backgroundPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Body") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.bodyPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Eyes") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.eyePercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Eyewear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.eyeWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Face Accessories") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.faceAccessoriesPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Hair") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.hairPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Headwear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.headWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Mouth") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.mouthPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Outerwear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.outerWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Earrings") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.earringsPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Necklaces") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.necklacesPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Weapons") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.weaponsPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Sidekick") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{firstSoullessData.sideKickPercentage}%&#41;</p>
                </>)
            }
        }


    })

    const mapSecondSoullessTraits = secondSoullessData?.tokenData.metadata.attributes.map((traits: any, key: number) => {
        if (secondSoullessData.tokenData.metadata.chapter === 1) {
            if (traits.trait_type === "Background") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.backgroundPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Body") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.bodyPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Eyes") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.eyePercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Eyewear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.eyeWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Face Accessories") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.faceAccessoriesPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Hair") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.hairPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Headwear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.headWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Mouth") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.mouthPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Outerwear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.outerWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Jackets") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.jacketsPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Weapons") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.weaponsPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Sidekick") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.sideKickPercentage}%&#41;</p>
                </>)
            }
        }
        else {
            if (traits.trait_type === "Background") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.backgroundPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Body") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.bodyPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Eyes") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.eyePercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Eyewear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.eyeWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Face Accessories") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.faceAccessoriesPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Hair") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.hairPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Headwear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.headWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Mouth") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.mouthPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Outerwear") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.outerWearPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Earrings") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.earringsPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Necklaces") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.necklacesPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Weapons") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.weaponsPercentage}%&#41;</p>
                </>)
            }
            else if (traits.trait_type === "Sidekick") {
                return (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.trait_type}:</p><p className="text-indigo-700 text-center"> {traits.value} &#40;{secondSoullessData.sideKickPercentage}%&#41;</p>
                </>)
            }
        }


    })

    return (
        <>
            {firstSoullessData && secondSoullessData ?
                <>
                    <div className="h-fit w-fit md:w-screen flex justify-center">
                        <div className="bg-white h-fit w-fit p-2">
                            <div className="flex justify-center border-b-2 border-[#4DBBBA] p-2">
                                <Image width={200} height={200} src={firstSoullessData.tokenData.metadata.resources[0].uri} alt={"NFT image"} />
                            </div>
                            <div className=" border-b-2 border-[#4DBBBA] flex flex-col justify-center p-2">
                                <p className="tracking-tight text-center font-bold text-black leading-6">Collection:</p>
                                <p className="text-indigo-700 text-center">Chapter {firstSoullessData.tokenData.metadata.chapter}</p>
                                <p className="tracking-tight text-center font-bold text-black leading-6">Rank:</p>
                                <p className="text-indigo-700 text-center">{firstSoullessData.tokenData.metadata.rank}</p>
                                <p className="tracking-tight text-center font-bold text-black leading-6">Category:</p>
                                <p className="text-indigo-700 text-center">{firstSoullessData.tokenData.metadata.category}</p>
                                <p className="tracking-tight text-center font-bold text-black leading-6">Owner Address:</p>
                                <p className="text-indigo-700 text-center">{firstSoullessData.tokenData.owner}</p>
                                <div className="border-t-2 border-[#4DBBBA] flex flex-col justify-center p-2">
                                    <p className="tracking-tight text-center font-bold text-black leading-6">Links:</p>
                                    {firstSoullessData.tokenData.metadata.chapter === 1 ?
                                        <Link href={`https://viewblock.io/zilliqa/address/zil13fum43ax8qeprt5s9u6wsmrtw2vsvdrdhmvtrm?txsType=nft&specific=${firstSoullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                            Viewblock
                                        </Link> : <Link href={`https://viewblock.io/zilliqa/address/zil1q3jmtxnyzzgznt5f972et240svvycfq3y5exf4?txsType=nft&specific=${firstSoullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                            Viewblock
                                        </Link>}
                                    <p className="tracking-tight text-center font-bold text-black leading-6">Marketplaces:</p>
                                    {firstSoullessData.tokenData.metadata.chapter === 1 ? <Link href={`https://zilswap.io/arky/collections/zil13fum43ax8qeprt5s9u6wsmrtw2vsvdrdhmvtrm/${firstSoullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Arky
                                    </Link> :
                                        <Link href={`https://zilswap.io/arky/collections/zil1q3jmtxnyzzgznt5f972et240svvycfq3y5exf4/${firstSoullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                            Arky
                                        </Link>}
                                    {firstSoullessData.tokenData.metadata.chapter === 1 ? <Link href={`https://cathulhu.tools/market/0x8a79BAC7A6383211ae902f34e86C6b729906346D/${firstSoullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Cathulu.tools
                                    </Link> :
                                        <Link href={`https://cathulhu.tools/market/0x0465b59a64109029Ae892f9595aaAf83184C2411/${firstSoullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                            Cathulu.tools
                                        </Link>}
                                    <Link href={`https://soullesscitadel.com/gallery/chapter-${firstSoullessData.tokenData.metadata.chapter}/${firstSoullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Soulless MarketPlace
                                    </Link>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center'>
                                {mapFirstSoullessTraits}
                            </div>
                        </div>
                        <div className="bg-white h-fit w-fit p-2">
                            <div className="flex justify-center border-b-2 border-[#4DBBBA] p-2">
                                <Image width={200} height={200} src={secondSoullessData.tokenData.metadata.resources[0].uri} alt={"NFT image"} />
                            </div>
                            <div className=" border-b-2 border-[#4DBBBA] flex flex-col justify-center p-2">
                                <p className="tracking-tight text-center font-bold text-black leading-6">Collection:</p>
                                <p className="text-indigo-700 text-center">Chapter {secondSoullessData.tokenData.metadata.chapter}</p>
                                <p className="tracking-tight text-center font-bold text-black leading-6">Rank:</p>
                                <p className="text-indigo-700 text-center">{secondSoullessData.tokenData.metadata.rank}</p>
                                <p className="tracking-tight text-center font-bold text-black leading-6">Category:</p>
                                <p className="text-indigo-700 text-center">{secondSoullessData.tokenData.metadata.category}</p>
                                <p className="tracking-tight text-center font-bold text-black leading-6">Owner Address:</p>
                                <p className="text-indigo-700 text-center">{secondSoullessData.tokenData.owner}</p>
                                <div className="border-t-2 border-[#4DBBBA] flex flex-col justify-center p-2">
                                    <p className="tracking-tight text-center font-bold text-black leading-6">Links:</p>
                                    {secondSoullessData.tokenData.metadata.chapter === 1 ?
                                        <Link href={`https://viewblock.io/zilliqa/address/zil13fum43ax8qeprt5s9u6wsmrtw2vsvdrdhmvtrm?txsType=nft&specific=${secondSoullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                            Viewblock
                                        </Link> : <Link href={`https://viewblock.io/zilliqa/address/zil1q3jmtxnyzzgznt5f972et240svvycfq3y5exf4?txsType=nft&specific=${secondSoullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                            Viewblock
                                        </Link>}
                                    <p className="tracking-tight text-center font-bold text-black leading-6">Marketplaces:</p>
                                    {secondSoullessData.tokenData.metadata.chapter === 1 ? <Link href={`https://zilswap.io/arky/collections/zil13fum43ax8qeprt5s9u6wsmrtw2vsvdrdhmvtrm/${secondSoullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Arky
                                    </Link> :
                                        <Link href={`https://zilswap.io/arky/collections/zil1q3jmtxnyzzgznt5f972et240svvycfq3y5exf4/${secondSoullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                            Arky
                                        </Link>}
                                    {secondSoullessData.tokenData.metadata.chapter === 1 ? <Link href={`https://cathulhu.tools/market/0x8a79BAC7A6383211ae902f34e86C6b729906346D/${secondSoullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Cathulu.tools
                                    </Link> :
                                        <Link href={`https://cathulhu.tools/market/0x0465b59a64109029Ae892f9595aaAf83184C2411/${secondSoullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                            Cathulu.tools
                                        </Link>}
                                    <Link href={`https://soullesscitadel.com/gallery/chapter-${secondSoullessData.tokenData.metadata.chapter}/${secondSoullessData.tokenData.tokenId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Soulless MarketPlace
                                    </Link>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center'>
                                {mapSecondSoullessTraits}
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center w-full m-2">
                        <button className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={handleSubmit((onHandleBack))} >Back</button>
                    </div>
                </>
                :
                <div className="h-screen flex items-center justify-center">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
                            <h1 className="text-center text-lg font-bold">Select the 2 Soulless that you would like to compare</h1>
                            <div className="space-y-4 mt-6">
                                <div className="text-center font-bold">
                                    Select first Soulless Chapter
                                </div>
                                <div className="w-full flex flex-row justify-center">
                                    <select {...register("firstSoullessChapter")}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                                <div className="text-center font-bold">
                                    Enter first Soulless ID
                                </div>
                                <div className="w-full border">
                                    <input type="text" placeholder="Soulless ID" className="px-4 py-2 bg-gray-50 w-full"
                                        {...register("firstSoullesSoullessID", { required: true, maxLength: 4 })} />
                                </div>
                                {errors.firstSoullesSoullessID && errors.firstSoullesSoullessID.type === "required" && (<span className="text-red-500 text-xs italic p-2">
                                    This field is required
                                </span>)}
                                {errors.firstSoullesSoullessID && errors.firstSoullesSoullessID.type === "maxLength" && (<span className="text-red-500 text-xs italic p-2">
                                    Maximum 4 digits
                                </span>)}
                            </div>
                            <div className="space-y-4 mt-6">
                                <div className="text-center font-bold">
                                    Select second Soulless Chapter
                                </div>
                                <div className="w-full flex flex-row justify-center">
                                    <select {...register("secondSoullessChapter")}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                                <div className="text-center font-bold">
                                    Enter second Soulless ID
                                </div>
                                <div className="w-full border">
                                    <input type="text" placeholder="Soulless ID" className="px-4 py-2 bg-gray-50 w-full"
                                        {...register("secondSoullesSoullessID", { required: true, maxLength: 4 })} />
                                </div>
                                {errors.secondSoullesSoullessID && errors.secondSoullesSoullessID.type === "required" && (<span className="text-red-500 text-xs italic p-2">
                                    This field is required
                                </span>)}
                                {errors.secondSoullesSoullessID && errors.secondSoullesSoullessID.type === "maxLength" && (<span className="text-red-500 text-xs italic p-2">
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