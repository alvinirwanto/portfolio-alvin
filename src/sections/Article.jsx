import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'

export default function Article() {

    const [articles, setArticles] = useState(null)

    async function fetchData() {
        try {
            const response = await axios.get('https://v1.nocodeapi.com/alvinirwanto/medium/wuoouXLPFNSxiVbE')
            const data = response?.data;
            setArticles(data);


        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className='py-[5rem] text-white-primary pb-[15rem]'>
            <div className='flex flex-col xl:flex-row justify-end items-start xl:items-center gap-8 mb-[5rem]'>
                <div className='bg-white-primary w-[25%] h-[2px] z-[20]' />
                <h2 className='text-2xl md:text-3xl xl:text-4xl font-semibold uppercase font-space'>My Articles</h2>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-10'>
                <>
                    {
                        articles?.map((article, i) => (
                            <Link key={i} href={article.link} target='_blank' className={i === 0 ? 'flex flex-col justify-between gap-4 !h-[30rem] md:!h-[35rem] xl:!h-[40rem]' : 'hidden'}>
                                {article.content && (
                                    <>
                                        {(() => {
                                            const parser = new DOMParser();
                                            const doc = parser.parseFromString(article.content, 'text/html');
                                            const firstImg = doc?.querySelector('img')?.getAttribute('src');
                                            return firstImg
                                                ? <div className='relative h-[70%]'>
                                                    <Image className='w-full h-full object-cover absolute bg-clip-content p-4 md:p-6 border-2 border-blue-primary rounded-lg' src={firstImg} height={500} width={500} alt='thumbnail' />
                                                    <div className={`w-full h-full bg-gradient-to-l from-[#61dcfb4b] to-transparent absolute rounded-lg`}></div>
                                                </div>
                                                : null;
                                        })()}
                                    </>
                                )}
                                <div className='flex flex-col gap-4'>
                                    <span className='font-semibold text-xl line-clamp-2'>{article.title}</span>
                                    {article.content && (
                                        <>
                                            {(() => {
                                                const parser = new DOMParser();
                                                const doc = parser.parseFromString(article.content, 'text/html');
                                                const firstParagraph = doc.querySelector('p');
                                                return firstParagraph ? (
                                                    <p className='line-clamp-2 text-sm md:text-lg'>{firstParagraph.textContent}</p>
                                                ) : (
                                                    null
                                                );
                                            })()}
                                        </>
                                    )}
                                    <div className='flex justify-start gap-6'>
                                        {
                                            article?.category?.map((category, i) => (
                                                <div key={i} className='text-blue-primary capitalize text-xs md:text-lg'>{category}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </>
                {/* i === articles.length - 1 || */}
                <div className='xl:ml-10 flex flex-col justify-between gap-6 h-[30rem] md:!h-[40rem]'>
                    {
                        articles?.map((article, i) => (
                            <Link key={i} href={article.link} target='_blank' className={i === 0 ? 'hidden' : 'grid grid-cols-[1fr_1.7fr] md:grid-cols-2 gap-4 !h-[33%]'}>
                                {article.content && (
                                    <>
                                        {(() => {
                                            const parser = new DOMParser();
                                            const doc = parser.parseFromString(article.content, 'text/html');
                                            const firstImg = doc?.querySelector('img')?.getAttribute('src');
                                            return firstImg
                                                ? <div className='relative h-full'>
                                                    <Image className='w-full h-full object-cover absolute bg-clip-content p-2 md:p-4 border-2 border-blue-primary rounded-lg' src={firstImg} height={500} width={500} alt='thumbnail' />
                                                    <div className={`w-full h-full bg-gradient-to-l from-[#61dcfb4b] to-transparent absolute rounded-lg`}></div>
                                                </div>
                                                : null;
                                        })()}
                                    </>
                                )}
                                <div className='flex flex-col justify-between gap-4 py-3'>
                                    <div className='flex flex-col gap-4'>
                                        <span className='font-semibold text-sm md:text-lg line-clamp-2'>{article.title}</span>
                                        {article.content && (
                                            <>
                                                {(() => {
                                                    const parser = new DOMParser();
                                                    const doc = parser.parseFromString(article.content, 'text/html');
                                                    const firstParagraph = doc.querySelector('p');
                                                    return firstParagraph ? (
                                                        <p className='text-xs md:text-base line-clamp-3'>{firstParagraph.textContent}</p>
                                                    ) : (
                                                        null
                                                    );
                                                })()}
                                            </>
                                        )}
                                    </div>
                                    <div className='flex justify-between'>
                                        {
                                            article?.category?.map((category, i) => (
                                                <div key={i} className={`${i >= 3 ? 'hidden': 'text-blue-primary text-xs md:text-sm xl:text-base capitalize'}`}>{category}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>

    )
}