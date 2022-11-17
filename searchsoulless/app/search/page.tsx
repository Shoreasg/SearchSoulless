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
        const response = await axios.get(`https://soullesscitadel.com/gallery/chapter-${data.Chapter}/${data.SoullessID}?_data=routes/gallery/$collection/$itemId`,{headers:{'Access-Control-Allow-Origin': '*'}})
        setSoullessData(response.data)
    }

    const mapTraits = soullessData?.traits.map((traits: any, key: number) => (<><p className="tracking-tight text-center text-black font-bold" key={key}>{traits.attribute.content}:</p><p className="text-indigo-700 text-center"> {traits.value.content} &#40;{traits.probability.map((value: any) => {
        if (soullessData.info.collection === value.collection) {
            return (value.value * 100).toFixed(2)
        }
    })}%&#41;</p></>))

    return (
        <>
            {soullessData ?
                <div className="h-fit w-screen flex items-center justify-center">
                    <div className="bg-white h-fit w-fit p-2">
                        <div className="flex justify-center border-b-2 border-[#4DBBBA] p-2">
                            <Image width={200} height={200} src={soullessData.metadataInfo.resourceUrl} alt={"NFT image"} />
                        </div>
                        <div className=" border-b-2 border-[#4DBBBA] flex flex-col justify-center p-2">
                            <p className="tracking-tight text-center font-bold text-black leading-6">Collection:</p>
                            <p className="text-indigo-700 text-center">{soullessData.collection}</p>
                            <p className="tracking-tight text-center font-bold text-black leading-6">Rank:</p>
                            <p className="text-indigo-700 text-center">{soullessData.metadataInfo.rank}</p>
                            <p className="tracking-tight text-center font-bold text-black leading-6">Category:</p>
                            <p className="text-indigo-700 text-center">{soullessData.metadataInfo.category}</p>
                            {soullessData.info.owner.userInfo.name !== null ? <> <p className="tracking-tight text-center font-bold text-black leading-6">Owner:</p><p className="text-indigo-700 text-center">{soullessData.info.owner.userInfo.name}</p></> : <><p className="tracking-tight text-center font-bold text-black leading-6">Owner:</p><p className="text-indigo-700 text-center">{soullessData.info.owner.ownerAddress}</p></>}
                            <p className="tracking-tight text-center font-bold text-black leading-6">Owner Address:</p>
                            <p className="text-indigo-700 text-center">{soullessData.info.owner.ownerAddress}</p>
                            <div className="border-t-2 border-[#4DBBBA] flex flex-col justify-center p-2">
                                <p className="tracking-tight text-center font-bold text-black leading-6">Links:</p>
                                <Link href={`https://viewblock.io/zilliqa/address/${soullessData.info.owner.ownerAddress}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                    Viewblock
                                </Link>
                                <p className="tracking-tight text-center font-bold text-black leading-6">Marketplaces:</p>
                                {soullessData.collection === "chapter-1" ? <Link href={`https://zilswap.io/arky/collections/zil13fum43ax8qeprt5s9u6wsmrtw2vsvdrdhmvtrm/${soullessData.itemId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                    Arky
                                </Link> :
                                    <Link href={`https://zilswap.io/arky/collections/zil1q3jmtxnyzzgznt5f972et240svvycfq3y5exf4/${soullessData.itemId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Arky
                                    </Link>}
                                {soullessData.collection === "chapter-1" ? <Link href={`https://cathulhu.tools/market/0x8a79BAC7A6383211ae902f34e86C6b729906346D/${soullessData.itemId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                    Cathulu.tools
                                </Link> :
                                    <Link href={`https://cathulhu.tools/market/0x0465b59a64109029Ae892f9595aaAf83184C2411/${soullessData.itemId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
                                        Cathulu.tools
                                    </Link>}
                                <Link href={`https://soullesscitadel.com/gallery/${soullessData.collection}/${soullessData.itemId}`} className="flex flex-col justify-center text-center underline hover:text-blue-500">
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
                <div className="h-screen flex items-center justify-center">
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