import React from 'react'
import { useState } from 'react'
import { ispApi } from '../../../api'

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}
const kemarin = formatDate(yesterday);

const InputFilterTweet = ({ 
    setFilteredTweet, setSentimenSum, setSentimenDaily, 
    setKataNegatif, setKataPositif, setTanggalAkhirLaporan, 
    setTanggalMulaiLaporan, setKontenAnalisisSentimen, providerName }) => {

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    //const [provider, setProvider] = useState("pt_i")

    const fetchTweets = async ({ startDate, endDate }) => {
        const { data } = await ispApi.fetchTweetData({ provider:providerName, startDate, endDate })
        setFilteredTweet(data.tweets)
        console.log(data.tweets)
    }
    const fetchSentimen = async ({ startDate, endDate }) => {
        const { data } = await ispApi.fetchSentimenData({ provider:providerName, startDate, endDate })
        setSentimenSum(data.sentimen_total)
        setSentimenDaily(data.sentimen_daily)
        console.log(data.sentimen_total)
        console.log(data.sentimen_daily)
    }
    const fetchKata = async ({ startDate, endDate }) => {
        const { data } = await ispApi.fetchKataData({ provider:providerName, startDate, endDate })
        setKataNegatif(data.kata_negatif)
        setKataPositif(data.kata_positif)
        console.log(data.kata_negatif)
        console.log(data.kata_positif)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (startDate.length !== 0 && endDate.length !== 0) {
            fetchTweets({ startDate, endDate });
            fetchSentimen({ startDate, endDate });
            fetchKata({ startDate, endDate });
            setTanggalMulaiLaporan(startDate);
            setTanggalAkhirLaporan(endDate);
            setKontenAnalisisSentimen(true)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className="flex flex-wrap mx-0 mb-2">
                    <div className="w-full md:w-1/3 p-3 mb-1 md:mb-0">
                        <label
                            htmlFor="tanggalmulai"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Tanggal Mulai</label
                        >
                        <input
                            type="date"
                            id="tanggalmulai"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            max={endDate}
                            min=""
                            required
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/3 p-3 mb-1 md:mb-0">
                        <label
                            htmlFor="tanggalakhir"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Tanggal Akhir</label
                        >
                        <input
                            type="date"
                            id="tanggalakhir"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                            min={startDate}
                            max={kemarin}
                            required
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/3 p-3 mb-1 sm:mt-7 ">
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Cari
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default InputFilterTweet