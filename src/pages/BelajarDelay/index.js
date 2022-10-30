import React, { useEffect } from 'react'
import { Navbar, Button, Table } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { logoMoniqq, imageThroughput, imageDelayBad, imageDelayGood } from '../../assets'
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const BelajarDelay = () => {
    useEffect(() => {
        document.title = "Belajar Delay/Latency - MONIQQ";
    }, []);
    const labels = ['Person1', 'person2', 'person3'];
    const databarmulti = {
        labels,
        datasets: [
            {
                label: 'Maximal',
                data: [18, 23, 25,],
                backgroundColor: 'rgba(53, 90, 232, 0.5)',
            },
            {
                label: 'Minimal',
                data: [15, 12, 12],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Rata-Rata',
                data: [17, 18, 18],
                backgroundColor: 'rgba(53, 162, 200, 0.5)',
            },

        ],

    };
    return (
        <div className='flex flex-col div scroll-smooth  '>
            {/* navbar */}
            <header className="container p-0">
                <Navbar
                    fluid={true}
                    rounded={true}

                >
                    <div>
                        <Link to="/">
                            <img
                                src={logoMoniqq}
                                className="mr-3 h-5 w-24 "
                                alt="Flowbite Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex md:order-2">
                        <Link to="/login">
                            <Button>
                                Login
                            </Button>
                        </Link>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <ul
                            className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                        >
                            <Link to='/'>
                                <li>
                                    <div
                                        className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Home
                                    </div>
                                </li>
                            </Link>
                            <Link to='/belajarqos'>
                                <li>
                                    <div
                                        className="block py-2 pr-4 pl-3 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Belajar
                                    </div>
                                </li>
                            </Link>
                            <Link to='/pengukuran'>
                                <li>
                                    <div
                                        className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Pengukuran
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </Navbar.Collapse>
                </Navbar>

            </header>
            <div className='container mt-12'>
                <h4 className='text-3xl font-bold my-10'>Memahami <i>Delay</i> atau <i>Latency</i></h4>

            </div>
            <div className='container w-full flex flex-wrap justify-around '>
                <div className='w-full md:w-3/4 flex flex-col '>
                    {/* apa itu */}
                    <div className='my-4'>
                        <h5 id='apa-itu-delay-latency' className='text-xl font-bold mb-5'>
                            Apa itu
                            <span className='italic'> Delay</span>
                            ? Apa itu
                            <span className='italic'> Latency</span>
                            ?
                        </h5>
                        <p className='text-base font-regular mb-5 leading-relaxed text-gray-700'>
                            <span className='font-semibold italic'> Delay </span>
                            dan
                            <span className='font-semibold italic'> Latency </span>
                            merujuk pada satu hal yang sama, yaitu
                            <span className='font-semibold'> waktu </span>
                            yang dibutuhkan untuk mengirimkan paket data dari perangkat
                            ( <i>smartphone</i>, laptop, dan <i>personal computer</i>) Anda ke <i>server</i> dan kembali ke perangkat Anda.
                        </p>
                        <p className='text-base font-regular mb-5 leading-relaxed text-gray-700'>
                            <i>Delay</i> dalam jaringan internet dinyatakan dengan satuan milliseconds (ms).
                        </p>
                    </div>
                    {/* illustrasi */}
                    <div className='my-4'>
                        <h5 id='illustrasi-delay' className='text-xl font-bold mb-5'>
                            Illustrasi
                            <span className='italic'> Delay</span>
                        </h5>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Ilustrasi untuk memahami
                            <span className='font-semibold italic'> Delay </span>
                            adalah sebagai berikut.
                        </p>
                        <ul className="list-decimal mx-7 mb-3 text-gray-700">
                            <li className='mb-2'>
                                Anda membuka <i>browser</i> dan mengetik www.google.com.
                            </li>
                            <li className='mb-2'>
                                Perangkat Anda dan <i>server</i> dari www.google.com berinteraksi satu sama lain untuk menyediakan konten yang Anda minta.
                            </li>
                            <li className='mb-2'>
                                Halaman di browser Anda mulai memuat (<i>loading</i>) dan menampilkan konten yang Anda minta.
                            </li>
                        </ul>
                        <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-6 mb-7 leading-relaxed italic rounded">
                            <p className='text-base font-regular leading-relaxed text-gray-700'>
                                Jadi,
                                <span className='font-semibold '> waktu yang diperlukan </span>
                                mulai saat Anda memberikan perintah hingga konten termuat disebut
                                <span className='font-semibold italic'> Delay </span>
                                .
                            </p>
                        </div>
                    </div>
                    {/* nilai delay */}
                    <div className='my-4'>
                        <h5 id='nilai-delay' className='text-xl font-bold mb-5'>Nilai <i>Delay</i></h5>
                        <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-3 mb-4 leading-relaxed italic rounded">
                            <span className='font-semibold '> Semakin kecil </span>
                            nilai Delay, maka
                            <span className='font-semibold '> semakin baik (cepat)</span>
                            .
                        </div>
                        <div className='my-8'>
                            <div>
                                <h6 id='nilai-delay-bagus' className='text-base font-bold mb-4'> <i>Delay</i> Bagus</h6>
                                <img
                                    src={imageDelayGood}
                                    className="h-full w-full "
                                    alt="imageDelayGood"
                                />
                            </div>
                            <div>
                                <h6 id='nilai-delay-buruk' className='text-base font-bold mb-4'> <i>Delay</i> Jelek</h6>
                                <img
                                    src={imageDelayBad}
                                    className="h-full w-full "
                                    alt="imageDelayBad"
                                />
                            </div>
                        </div>
                        <h6 id='nilai-delay-standar' className='text-base font-bold mb-4'>Standar</h6>
                        <p className='text-base font-regular mb-8 leading-relaxed text-gray-700'>
                            Berdasarkan penelitian Mister X et.al standar nilai
                            <span className='italic'> Jitter </span>
                            yang mengacu pada standar TIPHON (<i>Telecommunications and Internet Protocol Harmonization Over Networks </i>) adalah sebagai berikut<span className='text-xs'><sup >[1]</sup></span>.
                        </p>
                        {/* tabel delay */}
                        <div className='flex mt-8 mb-16 justify-center'>
                            <Table hoverable={true}>
                                <Table.Head>
                                    <Table.HeadCell>
                                        Nilai
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Indeks
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Kategori
                                    </Table.HeadCell>

                                </Table.Head>
                                <Table.Body className="divide-y">
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            &#60; 150ms
                                        </Table.Cell>
                                        <Table.Cell>
                                            4
                                        </Table.Cell>
                                        <Table.Cell>
                                            Sangat Bagus
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            150ms &#60; x &le; 300ms
                                        </Table.Cell>
                                        <Table.Cell>
                                            3
                                        </Table.Cell>
                                        <Table.Cell>
                                            Bagus
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            300ms &#60; x &le; 450ms
                                        </Table.Cell>
                                        <Table.Cell>
                                            2
                                        </Table.Cell>
                                        <Table.Cell>
                                            Sedang
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            &#62;450ms
                                        </Table.Cell>
                                        {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            &#60;25%&#62; &ge; &le;
                                        </Table.Cell> */}
                                        <Table.Cell>
                                            1
                                        </Table.Cell>
                                        <Table.Cell>
                                            Buruk
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                    {/* Pengaruh delay */}
                    <div className='my-4'>
                        <h5 id='pengaruh-delay' className='text-xl font-bold mb-5'>Pengaruh <i>Delay</i></h5>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Nilai <i>Delay</i> memiliki pengaruh terhadap seluruh aktivitas Anda di Internet, seperti <i>browsing</i>, <i>streaming</i>, <i>calling</i>, dan <i>gaming</i>.
                        </p>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            <i>Delay</i> akan sangat berpengaruh terhadap aktivitas yang membutuhkan respon cepat, yaitu <i>gaming</i> dan <i>online call</i>.
                        </p>
                        {/* <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        yang butuh sinkron atau langsung langsung sangat terpengaruh. seperti panggilan streaming game
                    </p> */}
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Nilai <i>Delay</i> yang rendah akan membuat mayoritas aktivitas anda di internet berjalan dengan lancar.
                        </p>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Jika nilai <i>Delay</i> tinggi, maka Anda akan merasakan gejala-gejala seperti berikut.
                        </p>
                        <ul className="list-disc mx-7 mb-6 text-gray-700">
                            <li className='mb-2'>
                                Lambat dalam memuat situs <i>web</i>, <i>game</i>, dan atau aplikasi <i>online</i>.
                            </li>
                            <li className='mb-2'>
                                Keterlambatan suara atau video saat melakukan panggilan  <i>online</i>.
                            </li>
                            <li className='mb-2'>
                                Keterlambatan respons dalam game saat menekan tombol (Nge-<i>lag</i>).
                            </li>
                            <li className='mb-2'>
                                Visual atau audio yang patah-patah (<i>stuttering</i>).
                            </li>
                            <li className='mb-2'>
                                <i>Reconnecting</i> atau bahkan terputus dari game.
                            </li>
                            <li className='mb-2'>
                                Lambat dalam memuat  <i>streaming</i> video/audio (<i>buffering</i>).
                            </li>
                        </ul>
                    </div>
                    {/* dafpus */}
                    <div className='my-4'>
                        <h5 id='' className='text-xl font-bold mt-2 mb-5'>Daftar Pustaka</h5>

                        <p className='text-sm font-regular mb-2 leading-relaxed text-gray-700'>
                            [1]  Apriadi, et al. <i>Analisis QoS (Quality of Service) Jaringan Internet Kampus (Studi Kasus : Fakultas Teknik Universitas Mataram)</i>. Perpustakaan Fakultas Teknik: Universitas Mataram (2017).
                            Available: 
                            <a href="https://perpustakaan.ft.unram.ac.id/index.php?p=show_detail&id=7485"
                                target="_blank" rel="noopener noreferrer"
                                className="hover:underline"
                                > https://perpustakaan.ft.unram.ac.id/index.php?p=show_detail&id=7485
                            </a>
                        </p>

                    </div>
                    {/* footer */}
                    <footer
                        className="container mt-8 p-4 bg-white rounded-lg md:px-6 md:py-8 dark:bg-gray-900"
                    >
                        <span
                            className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
                        >© 2022 <a href="localhost:3000" className="hover:underline">MONIQQ</a>. All Rights
                            Reserved.
                        </span>
                    </footer>
                </div>
                <aside className='w-1/4 flex flex-col'>
                    <div className='sticky top-14 px-5'>
                        <div className='px-4 flex-col hidden max-h-[calc(100vh-9rem-15px)] overflow-auto lg:block border-l-2 border-blue-50 '>
                            <div>
                                <h6 className='mb-3 text-gray-900 dark:text-gray-100 font-semibold text-lg'>Daftar Isi</h6>
                                <a href='/belajarqos/delay/#apa-itu-delay-latency'
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Apa itu Delay?
                                </a>
                                <a href='/belajarqos/delay/#apa-itu-delay-latency'
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Apa itu Latency?
                                </a>
                                <a href='/belajarqos/delay/#illustrasi-delay'
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Illustrasi
                                </a>

                                <a href='/belajarqos/delay/#nilai-delay'
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                >Nilai Delay
                                </a>
                                <div>
                                    <a href='/belajarqos/delay/#nilai-delay-bagus'
                                        className=' ml-4 mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Delay Bagus
                                    </a>
                                    <a href='/belajarqos/delay/#nilai-delay-buruk'
                                        className=' ml-4 mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Delay Buruk
                                    </a>
                                    <a href='/belajarqos/delay/#nilai-delay-standar'
                                        className=' ml-4 mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Standar
                                    </a>
                                </div>
                                <a href='/belajarqos/delay/#pengaruh-delay'
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Pengaruh Delay
                                </a>
                            </div>
                            {/* parameter lain */}
                            <div>
                                <h6 className='mt-5 mb-3 text-gray-900 dark:text-gray-100 font-semibold text-base'>Parameter Lain</h6>
                                <Link to='/belajarqos/throughput'>
                                    <div
                                        className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Throughput
                                    </div>
                                </Link>
                                <Link to='/belajarqos/jitter'>
                                    <div
                                        className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Jitter
                                    </div>
                                </Link>
                                <Link to='/belajarqos/packetloss'>
                                    <div
                                        className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Packet Loss
                                    </div>
                                </Link>
                            </div>
                            {/* pengukuran */}
                            <div>
                                <h6 className='mt-5 mb-3 text-gray-900 dark:text-gray-100 font-semibold text-base'>Pengukuran</h6>
                                <Link to='/pengukuran'>
                                    <div
                                        className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Quality of Service
                                    </div>
                                </Link>
                                <Link to='/pengukuran'>
                                    <div
                                        className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                    > Quality of Experience
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </aside>



            </div>

        </div >
    )
}

export default BelajarDelay