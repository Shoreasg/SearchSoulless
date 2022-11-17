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
        const firstSoullessResponse = await axios.get(`https://soullesscitadel.com/gallery/chapter-${data.firstSoullessChapter}/${data.firstSoullesSoullessID}?_data=routes/gallery/$collection/$itemId`)
        console.log(firstSoullessResponse.data)
        setFirstSoullessData(firstSoullessResponse.data)
        const secondSoullessResponse = await axios.get(`https://soullesscitadel.com/gallery/chapter-${data.secondSoullessChapter}/${data.secondSoullesSoullessID}?_data=routes/gallery/$collection/$itemId`)
        console.log(secondSoullessResponse.data)
        setSecondSoullessData(secondSoullessResponse.data)
    }

    const onHandleBack = () => {
        setFirstSoullessData(null);
        setSecondSoullessData(null)

    }

    const mapFirstSoullessTraits = firstSoullessData?.traits.map((traits: any, key: number) => (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.attribute.content}:</p><p className="text-indigo-700 text-center"> {traits.value.content} &#40;{traits.probability.map((value: any) => {
        if (firstSoullessData.info.collection === value.collection) {
            return (value.value * 100).toFixed(2)
        }
    })}%&#41;</p></>))

    const mapSecondSoullessTraits = secondSoullessData?.traits.map((traits: any, key: number) => (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.attribute.content}:</p><p className="text-indigo-700 text-center"> {traits.value.content} &#40;{traits.probability.map((value: any) => {
        if (secondSoullessData.info.collection === value.collection) {
            return (value.value * 100).toFixed(2)
        }
    })}%&#41;</p></>))

    return (
        <>
            {firstSoullessData && secondSoullessData ?
            <>
                <div className="h-fit w-fit md:w-screen flex justify-center">
                    <div className="bg-white h-fit w-fit p-2">
                        <div className="flex justify-center border-b-2 border-[#4DBBBA] p-2">
                            <Image width={200} height={200} src={firstSoullessData.metadataInfo.resourceUrl} alt={"NFT image"} />
                        </div>
                        <div className=" border-b-2 border-[#4DBBBA] flex flex-col justify-center p-2">
                            <p className="tracking-tight text-center font-bold text-black leading-6">Collection:</p>
                            <p className="text-indigo-700 text-center">{firstSoullessData.collection}</p>
                            <p className="tracking-tight text-center font-bold text-black leading-6">Rank:</p>
                            <p className="text-indigo-700 text-center">{firstSoullessData.metadataInfo.rank}</p>
                            <p className="tracking-tight text-center font-bold text-black leading-6">Category:</p>
                            <p className="text-indigo-700 text-center">{firstSoullessData.metadataInfo.category}</p>
                            {firstSoullessData.info.owner.userInfo.name !== null ? <> <p className="tracking-tight text-center font-bold text-black leading-6">Owner:</p><p className="text-indigo-700 text-center">{firstSoullessData.info.owner.userInfo.name}</p></> : <><p className="tracking-tight text-center font-bold text-black leading-6">Owner:</p><p className="text-indigo-700 text-center">{firstSoullessData.info.owner.ownerAddress}</p></>}
                            <p className="tracking-tight text-center font-bold text-black leading-6">Owner Address:</p>
                            <p className="text-indigo-700 text-center">{firstSoullessData.info.owner.ownerAddress}</p>
                            <div className="border-t-2 border-[#4DBBBA] flex flex-col justify-center p-2">
                                <p className="tracking-tight text-center font-bold text-black leading-6">Links:</p>
                                <Link href={`https://viewblock.io/zilliqa/address/${firstSoullessData.info.owner.ownerAddress}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                    Viewblock
                                </Link>
                                <p className="tracking-tight text-center font-bold text-black leading-6">Marketplaces:</p>
                                {firstSoullessData.collection === "chapter-1" ? <Link href={`https://zilswap.io/arky/collections/zil13fum43ax8qeprt5s9u6wsmrtw2vsvdrdhmvtrm/${firstSoullessData.itemId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                    Arky
                                </Link> :
                                    <Link href={`https://zilswap.io/arky/collections/zil1q3jmtxnyzzgznt5f972et240svvycfq3y5exf4/${firstSoullessData.itemId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Arky
                                    </Link>}
                                {firstSoullessData.collection === "chapter-1" ? <Link href={`https://cathulhu.tools/market/0x8a79BAC7A6383211ae902f34e86C6b729906346D/${firstSoullessData.itemId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                    Cathulu.tools
                                </Link> :
                                    <Link href={`https://cathulhu.tools/market/0x0465b59a64109029Ae892f9595aaAf83184C2411/${firstSoullessData.itemId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Cathulu.tools
                                    </Link>}
                                <Link href={`https://soullesscitadel.com/gallery/${firstSoullessData.collection}/${firstSoullessData.itemId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
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
                            <Image width={200} height={200} src={secondSoullessData.metadataInfo.resourceUrl} alt={"NFT image"} />
                        </div>
                        <div className=" border-b-2 border-[#4DBBBA] flex flex-col justify-center p-2">
                            <p className="tracking-tight text-center font-bold text-black leading-6">Collection:</p>
                            <p className="text-indigo-700 text-center">{secondSoullessData.collection}</p>
                            <p className="tracking-tight text-center font-bold text-black leading-6">Rank:</p>
                            <p className="text-indigo-700 text-center">{secondSoullessData.metadataInfo.rank}</p>
                            <p className="tracking-tight text-center font-bold text-black leading-6">Category:</p>
                            <p className="text-indigo-700 text-center">{secondSoullessData.metadataInfo.category}</p>
                            {secondSoullessData.info.owner.userInfo.name !== null ? <> <p className="tracking-tight text-center font-bold text-black leading-6">Owner:</p><p className="text-indigo-700 text-center">{secondSoullessData.info.owner.userInfo.name}</p></> : <><p className="tracking-tight text-center font-bold text-black leading-6">Owner:</p><p className="text-indigo-700 text-center">{secondSoullessData.info.owner.ownerAddress}</p></>}
                            <p className="tracking-tight text-center font-bold text-black leading-6">Owner Address:</p>
                            <p className="text-indigo-700 text-center">{secondSoullessData.info.owner.ownerAddress}</p>
                            <div className="border-t-2 border-[#4DBBBA] flex flex-col justify-center p-2">
                                <p className="tracking-tight text-center font-bold text-black leading-6">Links:</p>
                                <Link href={`https://viewblock.io/zilliqa/address/${secondSoullessData.info.owner.ownerAddress}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                    Viewblock
                                </Link>
                                <p className="tracking-tight text-center font-bold text-black leading-6">Marketplaces:</p>
                                {secondSoullessData.collection === "chapter-1" ? <Link href={`https://zilswap.io/arky/collections/zil13fum43ax8qeprt5s9u6wsmrtw2vsvdrdhmvtrm/${secondSoullessData.itemId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                    Arky
                                </Link> :
                                    <Link href={`https://zilswap.io/arky/collections/zil1q3jmtxnyzzgznt5f972et240svvycfq3y5exf4/${secondSoullessData.itemId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Arky
                                    </Link>}
                                {secondSoullessData.collection === "chapter-1" ? <Link href={`https://cathulhu.tools/market/0x8a79BAC7A6383211ae902f34e86C6b729906346D/${secondSoullessData.itemId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                    Cathulu.tools
                                </Link> :
                                    <Link href={`https://cathulhu.tools/market/0x0465b59a64109029Ae892f9595aaAf83184C2411/${secondSoullessData.itemId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Cathulu.tools
                                    </Link>}
                                <Link href={`https://soullesscitadel.com/gallery/${secondSoullessData.collection}/${secondSoullessData.itemId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
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
                  <button   className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"onClick={handleSubmit((onHandleBack))} >Back</button>
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